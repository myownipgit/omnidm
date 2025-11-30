'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage')
    if (savedLang) {
      setLanguage(savedLang)
      if (savedLang === 'km') {
        document.body.classList.add('lang-km')
      }
    }

    // Create particles
    createParticles()

    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          target.style.opacity = '1'
          target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    document.querySelectorAll('.feature-card, .pricing-card, .platform-logo').forEach(card => {
      const element = card as HTMLElement
      element.style.opacity = '0'
      element.style.transform = 'translateY(30px)'
      element.style.transition = 'all 0.6s ease'
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const createParticles = () => {
    const particlesContainer = document.getElementById('particles')
    if (!particlesContainer) return

    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.animationDelay = Math.random() * 8 + 's'
      particle.style.animationDuration = (Math.random() * 5 + 5) + 's'
      particlesContainer.appendChild(particle)
    }
  }

  const switchLanguage = (lang: string) => {
    setLanguage(lang)

    if (lang === 'km') {
      document.body.classList.add('lang-km')
    } else {
      document.body.classList.remove('lang-km')
    }

    localStorage.setItem('preferredLanguage', lang)
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const target = document.querySelector(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* Language Toggle */}
      <div className="language-toggle">
        <button
          className={`lang-btn ${language === 'en' ? 'active' : ''}`}
          onClick={() => switchLanguage('en')}
        >
          English
        </button>
        <button
          className={`lang-btn ${language === 'km' ? 'active' : ''}`}
          onClick={() => switchLanguage('km')}
        >
          ខ្មែរ
        </button>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="particles" id="particles"></div>

        <div className="content">
          <div className="logo">
            <svg viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg">
              {/* Icon - Network/Connection Symbol */}
              <circle cx="50" cy="60" r="45" fill="none" stroke="#00ffff" strokeWidth="4"/>
              <circle cx="35" cy="40" r="6" fill="#0066ff"/>
              <circle cx="65" cy="40" r="6" fill="#00ffff"/>
              <circle cx="35" cy="80" r="6" fill="#0066ff"/>
              <circle cx="65" cy="80" r="6" fill="#00ffff"/>
              <circle cx="50" cy="60" r="6" fill="#0066ff"/>
              <line x1="35" y1="40" x2="50" y2="60" stroke="#0066ff" strokeWidth="3"/>
              <line x1="65" y1="40" x2="50" y2="60" stroke="#00ffff" strokeWidth="3"/>
              <line x1="35" y1="80" x2="50" y2="60" stroke="#0066ff" strokeWidth="3"/>
              <line x1="65" y1="80" x2="50" y2="60" stroke="#00ffff" strokeWidth="3"/>

              {/* Text */}
              <text x="110" y="75" fontFamily="DejaVu Sans, Arial, sans-serif" fontSize="60" fontWeight="bold" fill="#ffffff">
                omni
                <tspan fill="#0066ff">DM</tspan>
                <tspan fill="#ffffff">.ai</tspan>
              </text>
            </svg>
          </div>
          <h1 data-lang="en">AI-Powered Chat Automation<br />for Cambodia</h1>
          <h1 data-lang="km">ការធ្វើស្វ័យប្រវត្តិកម្មជជែកដោយ AI<br />សម្រាប់កម្ពុជា</h1>

          <p className="tagline" data-lang="en">Automate customer conversations across all platforms with integrated Cambodian payments</p>
          <p className="tagline" data-lang="km">ធ្វើស្វ័យប្រវត្តិកម្មការសន្ទនាអតិថិជននៅលើវេទិកាទាំងអស់ជាមួយការទូទាត់របស់កម្ពុជា</p>

          <a href="#pricing" className="cta-button" data-lang="en" onClick={(e) => scrollToSection(e, '#pricing')}>Start Free 14-Day Trial</a>
          <a href="#pricing" className="cta-button" data-lang="km" onClick={(e) => scrollToSection(e, '#pricing')}>ចាប់ផ្តើមសាកល្បងឥតគិតថ្លៃ ១៤ ថ្ងៃ</a>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="platforms-section">
        <h2 className="section-title" data-lang="en">Connected Platforms</h2>
        <h2 className="section-title" data-lang="km">វេទិកាដែលបានភ្ជាប់</h2>

        <p className="section-subtitle" data-lang="en">Automate conversations across all major messaging platforms</p>
        <p className="section-subtitle" data-lang="km">ធ្វើស្វ័យប្រវត្តិកម្មការសន្ទនានៅលើវេទិកាផ្ញើសារធំៗទាំងអស់</p>

        <div className="platforms-grid">
          <div className="platform-logo">
            <svg viewBox="0 0 24 24" fill="#0066ff">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <div className="platform-name" data-lang="en">Facebook</div>
            <div className="platform-name" data-lang="km">ហ្វេសប៊ុក</div>
          </div>

          <div className="platform-logo">
            <svg viewBox="0 0 24 24" fill="#00ffff">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <div className="platform-name" data-lang="en">Instagram</div>
            <div className="platform-name" data-lang="km">អ៊ីនស្តាក្រាម</div>
          </div>

          <div className="platform-logo">
            <svg viewBox="0 0 24 24" fill="#0066ff">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <div className="platform-name" data-lang="en">WhatsApp</div>
            <div className="platform-name" data-lang="km">វ៉ាត់អាប</div>
          </div>

          <div className="platform-logo">
            <svg viewBox="0 0 24 24" fill="#00ffff">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <div className="platform-name" data-lang="en">Telegram</div>
            <div className="platform-name" data-lang="km">តេលេក្រាម</div>
          </div>

          <div className="platform-logo">
            <svg viewBox="0 0 24 24" fill="#0066ff">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
            <div className="platform-name" data-lang="en">TikTok</div>
            <div className="platform-name" data-lang="km">ធីកតុក</div>
          </div>

          <div className="platform-logo">
            <svg viewBox="0 0 24 24" fill="#00ffff">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
              <path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/>
            </svg>
            <div className="platform-name" data-lang="en">SMS</div>
            <div className="platform-name" data-lang="km">សារ SMS</div>
          </div>
        </div>

        <h3 className="section-title" style={{fontSize: '2rem', marginTop: '4rem'}} data-lang="en">Integrated Payment Solutions</h3>
        <h3 className="section-title" style={{fontSize: '2rem', marginTop: '4rem'}} data-lang="km">ដំណោះស្រាយទូទាត់រួមបញ្ចូលគ្នា</h3>

        <div className="payment-logos">
          <div className="payment-logo">
            <h3 style={{color: '#00ffff'}}>ABA PayWay</h3>
          </div>
          <div className="payment-logo">
            <h3 style={{color: '#0066ff'}}>KHQR</h3>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="feature-card">
          <div className="feature-icon">🤖</div>
          <h3 data-lang="en">Smart AI Responses</h3>
          <h3 data-lang="km">ការឆ្លើយតបដោយ AI ឆ្លាតវៃ</h3>
          <p data-lang="en">AI-powered chatbots that understand context, answer customer questions 24/7, and learn from every conversation.</p>
          <p data-lang="km">ចាតបូតដែលដំណើរការដោយ AI យល់ពីបរិបទ ឆ្លើយសំណួរអតិថិជន ២៤/៧ និងរៀនពីការសន្ទនារាល់ប្រការ។</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">💳</div>
          <h3 data-lang="en">Seamless Payments</h3>
          <h3 data-lang="km">ការទូទាត់រលូន</h3>
          <p data-lang="en">Accept payments directly in chat via ABA PayWay and KHQR. No app switching required for your customers.</p>
          <p data-lang="km">ទទួលយកការទូទាត់ដោយផ្ទាល់នៅក្នុងជជែកតាមរយៈ ABA PayWay និង KHQR។ មិនចាំបាច់ប្តូរកម្មវិធីសម្រាប់អតិថិជនរបស់អ្នកទេ។</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3 data-lang="en">Analytics Dashboard</h3>
          <h3 data-lang="km">ផ្ទាំងវិភាគទិន្នន័យ</h3>
          <p data-lang="en">Track engagement, conversion rates, and revenue. Make data-driven decisions with comprehensive insights.</p>
          <p data-lang="km">តាមដានការចូលរួម អត្រាបំប្លែង និងប្រាក់ចំណូល។ ធ្វើការសម្រេចចិត្តដោយផ្អែកលើទិន្នន័យជាមួយការយល់ដឹងទូលំទូលាយ។</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3 data-lang="en">Lightning Fast</h3>
          <h3 data-lang="km">លឿនដូចរន្ទះ</h3>
          <p data-lang="en">Instant responses across all platforms. Your customers never wait, increasing satisfaction and conversions.</p>
          <p data-lang="km">ការឆ្លើយតបភ្លាមៗនៅលើវេទិកាទាំងអស់។ អតិថិជនរបស់អ្នកមិនរង់ចាំទេ បង្កើនការពេញចិត្តនិងការបំប្លែង។</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🛡️</div>
          <h3 data-lang="en">Data Sovereignty</h3>
          <h3 data-lang="km">អធិបតេយ្យភាពទិន្នន័យ</h3>
          <p data-lang="en">Your data stays in Cambodia. Full control and ownership of all customer data and conversation history.</p>
          <p data-lang="km">ទិន្នន័យរបស់អ្នកនៅក្នុងប្រទេសកម្ពុជា។ ការគ្រប់គ្រង និងកម្មសិទ្ធិពេញលេញលើទិន្នន័យអតិថិជន និងប្រវត្តិការសន្ទនាទាំងអស់។</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">👑</div>
          <h3 data-lang="en">100% Asset Ownership</h3>
          <h3 data-lang="km">កម្មសិទ្ធិទ្រព្យសកម្ម ១០០%</h3>
          <p data-lang="en">You own everything - the bot, the data, the conversations. No vendor lock-in, complete independence.</p>
          <p data-lang="km">អ្នកជាម្ចាស់អ្វីគ្រប់យ៉ាង - បូត ទិន្នន័យ ការសន្ទនា។ គ្មានការចាក់សោរផ្គត់ផ្គង់ ឯករាជ្យភាពពេញលេញ។</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <h2 className="section-title" data-lang="en">Choose Your Plan</h2>
        <h2 className="section-title" data-lang="km">ជ្រើសរើសគម្រោងរបស់អ្នក</h2>

        <p className="section-subtitle" data-lang="en">Start with 14 days free trial - No credit card required</p>
        <p className="section-subtitle" data-lang="km">ចាប់ផ្តើមជាមួយការសាកល្បងឥតគិតថ្លៃ ១៤ថ្ងៃ - មិនត្រូវការកាតឥណទានទេ</p>

        <div className="pricing-grid">
          {/* Free Plan */}
          <div className="pricing-card">
            <h3 className="pricing-title" data-lang="en">Free Starter</h3>
            <h3 className="pricing-title" data-lang="km">ចាប់ផ្តើមឥតគិតថ្លៃ</h3>
            <div className="pricing-price">$0</div>
            <div className="pricing-period" data-lang="en">forever</div>
            <div className="pricing-period" data-lang="km">រហូត</div>
            <ul className="pricing-features" data-lang="en">
              <li>Messenger only</li>
              <li>100 conversations/month</li>
              <li>Basic AI responses</li>
              <li>Community support</li>
              <li>Perfect for testing</li>
            </ul>
            <ul className="pricing-features" data-lang="km">
              <li>តែ Messenger ប៉ុណ្ណោះ</li>
              <li>ការសន្ទនា ១០០/ខែ</li>
              <li>ការឆ្លើយតប AI មូលដ្ឋាន</li>
              <li>ការគាំទ្រសហគមន៍</li>
              <li>ល្អសម្រាប់សាកល្បង</li>
            </ul>
            <a href="#" className="cta-button" data-lang="en">Start Free</a>
            <a href="#" className="cta-button" data-lang="km">ចាប់ផ្តើមឥតគិតថ្លៃ</a>
          </div>

          {/* SME Starter */}
          <div className="pricing-card">
            <h3 className="pricing-title" data-lang="en">SME Starter</h3>
            <h3 className="pricing-title" data-lang="km">អ្នកចាប់ផ្តើម SME</h3>
            <div className="pricing-price">$499</div>
            <div className="pricing-period" data-lang="en">per month</div>
            <div className="pricing-period" data-lang="km">ក្នុងមួយខែ</div>
            <ul className="pricing-features" data-lang="en">
              <li>2 connected platforms</li>
              <li>1,000 conversations/month</li>
              <li>Basic AI responses</li>
              <li>ABA PayWay integration</li>
              <li>Email support</li>
              <li>14-day free trial</li>
            </ul>
            <ul className="pricing-features" data-lang="km">
              <li>វេទិកាភ្ជាប់ ២</li>
              <li>ការសន្ទនា ១,០០០/ខែ</li>
              <li>ការឆ្លើយតប AI មូលដ្ឋាន</li>
              <li>ការរួមបញ្ចូល ABA PayWay</li>
              <li>ការគាំទ្រតាមអ៊ីមែល</li>
              <li>សាកល្បងឥតគិតថ្លៃ ១៤ថ្ងៃ</li>
            </ul>
            <a href="#" className="cta-button" data-lang="en">Get Started</a>
            <a href="#" className="cta-button" data-lang="km">ចាប់ផ្តើម</a>
          </div>

          {/* Growth Automation */}
          <div className="pricing-card featured">
            <div className="pricing-badge" data-lang="en">MOST POPULAR</div>
            <div className="pricing-badge" data-lang="km">ពេញនិយមបំផុត</div>
            <h3 className="pricing-title" data-lang="en">Growth Automation</h3>
            <h3 className="pricing-title" data-lang="km">ស្វ័យប្រវត្តិកម្មកំណើន</h3>
            <div className="pricing-price">$999</div>
            <div className="pricing-period" data-lang="en">per month</div>
            <div className="pricing-period" data-lang="km">ក្នុងមួយខែ</div>
            <ul className="pricing-features" data-lang="en">
              <li>4 connected platforms</li>
              <li>5,000 conversations/month</li>
              <li>Advanced AI with learning</li>
              <li>ABA PayWay + KHQR</li>
              <li>Priority support</li>
              <li>Analytics dashboard</li>
              <li>Custom workflows</li>
              <li>14-day free trial</li>
            </ul>
            <ul className="pricing-features" data-lang="km">
              <li>វេទិកាភ្ជាប់ ៤</li>
              <li>ការសន្ទនា ៥,០០០/ខែ</li>
              <li>AI កម្រិតខ្ពស់ជាមួយការរៀនសូត្រ</li>
              <li>ABA PayWay + KHQR</li>
              <li>ការគាំទ្រអាទិភាព</li>
              <li>ផ្ទាំងវិភាគទិន្នន័យ</li>
              <li>លំហូរការងារផ្ទាល់ខ្លួន</li>
              <li>សាកល្បងឥតគិតថ្លៃ ១៤ថ្ងៃ</li>
            </ul>
            <a href="#" className="cta-button" data-lang="en">Start Free Trial</a>
            <a href="#" className="cta-button" data-lang="km">ចាប់ផ្តើមសាកល្បងឥតគិតថ្លៃ</a>
          </div>

          {/* E-commerce Accelerator */}
          <div className="pricing-card">
            <h3 className="pricing-title" data-lang="en">E-commerce Accelerator</h3>
            <h3 className="pricing-title" data-lang="km">អេឡិចត្រូនិកតំណើរឡើងលឿន</h3>
            <div className="pricing-price">$1,999</div>
            <div className="pricing-period" data-lang="en">+ 2% revenue share</div>
            <div className="pricing-period" data-lang="km">+ ចែករំលែកចំណូល ២%</div>
            <ul className="pricing-features" data-lang="en">
              <li>All platforms (6+)</li>
              <li>Unlimited conversations</li>
              <li>Advanced AI + custom training</li>
              <li>Full payment integration</li>
              <li>Dedicated account manager</li>
              <li>Advanced analytics</li>
              <li>Custom API access</li>
              <li>White-label option</li>
              <li>14-day free trial</li>
            </ul>
            <ul className="pricing-features" data-lang="km">
              <li>វេទិកាទាំងអស់ (៦+)</li>
              <li>ការសន្ទនាគ្មានកំណត់</li>
              <li>AI កម្រិតខ្ពស់ + ការបណ្តុះបណ្តាលផ្ទាល់ខ្លួន</li>
              <li>ការរួមបញ្ចូលការទូទាត់ពេញលេញ</li>
              <li>អ្នកគ្រប់គ្រងគណនីឯកទេស</li>
              <li>ការវិភាគកម្រិតខ្ពស់</li>
              <li>ការចូលប្រើ API ផ្ទាល់ខ្លួន</li>
              <li>ជម្រើសស្លាកសម្រាប់អាជីវកម្ម</li>
              <li>សាកល្បងឥតគិតថ្លៃ ១៤ថ្ងៃ</li>
            </ul>
            <a href="#" className="cta-button" data-lang="en">Contact Sales</a>
            <a href="#" className="cta-button" data-lang="km">ទាក់ទងផ្នែកលក់</a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <h2 style={{fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 'bold', fontFamily: 'DejaVu Sans, sans-serif'}} data-lang="en">Proven Results</h2>
        <h2 style={{fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 'bold', fontFamily: 'DejaVu Sans, sans-serif'}} data-lang="km">លទ្ធផលដែលបានបញ្ជាក់</h2>
        <div className="stats-grid">
          <div className="stat">
            <div className="stat-number">85%</div>
            <div className="stat-label" data-lang="en">Cost Reduction</div>
            <div className="stat-label" data-lang="km">កាត់បន្ថយថ្លៃដើម</div>
          </div>
          <div className="stat">
            <div className="stat-number">24/7</div>
            <div className="stat-label" data-lang="en">Availability</div>
            <div className="stat-label" data-lang="km">ភាពអាចប្រើប្រាស់បាន</div>
          </div>
          <div className="stat">
            <div className="stat-number">3x</div>
            <div className="stat-label" data-lang="en">Conversion Rate</div>
            <div className="stat-label" data-lang="km">អត្រាបំប្លែង</div>
          </div>
          <div className="stat">
            <div className="stat-number">&lt; 2s</div>
            <div className="stat-label" data-lang="en">Response Time</div>
            <div className="stat-label" data-lang="km">ពេលវេលាឆ្លើយតប</div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <h2 className="section-title" data-lang="en">Why Choose OmniDM</h2>
        <h2 className="section-title" data-lang="km">ហេតុអ្វីជ្រើសរើស OmniDM</h2>

        <div className="trust-badges" data-lang="en">
          <div className="trust-badge">
            <h4>🇰🇭 Cambodia First</h4>
            <p>Built specifically for Cambodian businesses with local payment integration and data sovereignty.</p>
          </div>
          <div className="trust-badge">
            <h4>💯 100% Ownership</h4>
            <p>You own all assets - the bot, data, and conversations. Export anytime, no lock-in.</p>
          </div>
          <div className="trust-badge">
            <h4>🚀 Proven ROI</h4>
            <p>Average 3x increase in conversions and 85% reduction in customer service costs.</p>
          </div>
        </div>

        <div className="trust-badges" data-lang="km">
          <div className="trust-badge">
            <h4>🇰🇭 កម្ពុជាជាដំបូង</h4>
            <p>បង្កើតឡើងជាពិសេសសម្រាប់អាជីវកម្មកម្ពុជាជាមួយការរួមបញ្ចូលការទូទាត់មូលដ្ឋាននិងអធិបតេយ្យភាពទិន្នន័យ។</p>
          </div>
          <div className="trust-badge">
            <h4>💯 កម្មសិទ្ធិ ១០០%</h4>
            <p>អ្នកជាម្ចាស់ទ្រព្យសកម្មទាំងអស់ - បូត ទិន្នន័យ និងការសន្ទនា។ នាំចេញគ្រប់ពេល គ្មានការចាក់សោរ។</p>
          </div>
          <div className="trust-badge">
            <h4>🚀 ROI ដែលបានបញ្ជាក់</h4>
            <p>មធ្យមបង្កើនការបំប្លែង ៣ដង និងកាត់បន្ថយថ្លៃដើមសេវាអតិថិជន ៨៥%។</p>
          </div>
        </div>

        <div style={{marginTop: '3rem'}}>
          <a href="#pricing" className="cta-button" data-lang="en" onClick={(e) => scrollToSection(e, '#pricing')}>Start Your Free 14-Day Trial</a>
          <a href="#pricing" className="cta-button" data-lang="km" onClick={(e) => scrollToSection(e, '#pricing')}>ចាប់ផ្តើមសាកល្បងឥតគិតថ្លៃ ១៤ថ្ងៃរបស់អ្នក</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text" data-lang="en">© 2025 OmniDM • Powered by Theme Factory • Tech Innovation Theme • Built for Cambodia 🇰🇭</p>
        <p className="footer-text" data-lang="km">© ២០២៥ OmniDM • ដំណើរការដោយ Theme Factory • ប្រធានបទ Tech Innovation • បង្កើតឡើងសម្រាប់កម្ពុជា 🇰🇭</p>
      </footer>
    </>
  )
}
