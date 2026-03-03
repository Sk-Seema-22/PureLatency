'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { useState } from 'react';
import styles from './Beliefs.module.css'; // adjust path as needed

export default function BeliefsPage() {
  const [activeTab, setActiveTab] = useState('purpose');

  const stats = [
    { value: '10', label: 'Core Beliefs', icon: '📜' },
    { value: '100%', label: 'Live by Them', icon: '❤️' },
    { value: '0', label: 'Exceptions Made', icon: '🚫' },
    { value: '∞', label: 'Years to Build', icon: '⏳' }
  ];

  const ourPurpose = [
    {
      title: 'Why We Exist',
      desc: 'To prove that technology companies can be humane, profitable, and joyful — all at once. We exist to build software that matters, with people who care.',
      icon: '🎯',
      color: '#0066cc'
    },
    {
      title: 'What We Seek',
      desc: 'We seek elegant solutions to messy problems. We seek clients who become friends. We seek work that doesn\'t feel like work.',
      icon: '🔍',
      color: '#10B981'
    },
    {
      title: 'Our North Star',
      desc: 'Every decision passes through one filter: "Does this make our team proud?" If not, we don\'t do it. Simple as that.',
      icon: '⭐',
      color: '#7C3AED'
    },
    {
      title: 'The Legacy Question',
      desc: 'When we\'re gone, we want to be remembered not for our code, but for how we made people feel — respected, valued, and seen.',
      icon: '🕊️',
      color: '#F59E0B'
    }
  ];

  const theBeliefs = [
    {
      title: 'Quality Over Speed',
      desc: 'We refuse to ship crap. Ever. Clients rarely ask us to go faster because they know what "fast" costs. We\'d rather explain a delay than apologize for a bug.',
      icon: '⏳',
      color: '#0066cc'
    },
    {
      title: 'Humans First',
      desc: 'Code is temporary. Human connections are permanent. We choose kindness in every interaction — with clients, with each other, with ourselves.',
      icon: '❤️',
      color: '#10B981'
    },
    {
      title: 'Radical Honesty',
      desc: 'We tell clients what they need to hear, not what they want to hear. If we screw up, we own it immediately. No excuses. No spin.',
      icon: '🔦',
      color: '#7C3AED'
    },
    {
      title: 'Boredom is the Enemy',
      desc: 'If we\'re not learning, we\'re dying. We chase interesting problems and run from repetitive work. Curiosity is our fuel.',
      icon: '⚡',
      color: '#F59E0B'
    },
    {
      title: 'Balance is Non-Negotiable',
      desc: 'Burnout helps no one. We protect evenings, weekends, and sanity fiercely. A rested mind solves problems an exhausted one cannot.',
      icon: '🌿',
      color: '#EC4899'
    },
    {
      title: 'No Ego Left Behind',
      desc: 'The best idea wins, regardless of who it came from. We leave titles at the door. Junior devs correct founders. That\'s how we grow.',
      icon: '🚪',
      color: '#6366F1'
    },
    {
      title: 'Build With, Not For',
      desc: 'We don\'t build things for clients. We build things with them. They\'re partners, not purchase orders. Their success is our success.',
      icon: '🤝',
      color: '#14B8A6'
    },
    {
      title: 'Simple > Clever',
      desc: 'Clever code impresses engineers. Simple code ships. We optimize for readability and maintainability over showing off.',
      icon: '🧠',
      color: '#8B5CF6'
    },
    {
      title: 'Joy is a Feature',
      desc: 'If work isn\'t fun sometimes, we\'re doing it wrong. We laugh daily. We celebrate small wins. We take ourselves lightly but our work seriously.',
      icon: '😊',
      color: '#D946EF'
    },
    {
      title: 'Leave It Better',
      desc: 'Every codebase, every relationship, every process — we leave it better than we found it. No exceptions.',
      icon: '🌱',
      color: '#F97316'
    }
  ];

  const theManifesto = [
    {
      chapter: 'On Code',
      lines: [
        'We write code for humans first, computers second.',
        'We refactor ruthlessly. Technical debt is a choice, not a requirement.',
        'We ship when it\'s ready, not when the calendar says.',
        'Comments explain "why," not "what." The code already shows "what."'
      ]
    },
    {
      chapter: 'On Clients',
      lines: [
        'We partner, not vendor. There\'s a difference.',
        'We celebrate their wins like our own.',
        'We tell them when we\'re wrong, immediately.',
        'We choose clients who share our values.'
      ]
    },
    {
      chapter: 'On Each Other',
      lines: [
        'We assume good intent.',
        'We give credit freely, take blame sparingly.',
        'We teach without condescension.',
        'We protect each other\'s time and energy.'
      ]
    },
    {
      chapter: 'On Ourselves',
      lines: [
        'We rest without guilt.',
        'We learn without pressure.',
        'We grow without comparison.',
        'We stay curious.'
      ]
    }
  ];

  const theParadoxes = [
    {
      title: 'We Care Deeply / We Don\'t Care at All',
      desc: 'We care deeply about quality, integrity, and people. We don\'t care about office politics, arbitrary deadlines, or what competitors are doing.',
      icon: '🎭'
    },
    {
      title: 'We\'re Patient / We\'re Impatient',
      desc: 'We\'re patient with learning, growth, and getting things right. We\'re impatient with bureaucracy, inefficiency, and meetings that could be emails.',
      icon: '⏱️'
    },
    {
      title: 'We Plan / We Pivot',
      desc: 'We plan carefully but hold plans loosely. When reality contradicts our assumptions, we change direction without mourning the old path.',
      icon: '🔄'
    }
  ];

  const dailyPractices = [
    {
      title: 'The 5:15 Rule',
      desc: 'If a meeting runs past 5:15 PM, anyone can leave without explanation. Life happens. We trust you.',
      icon: '⏰'
    },
    {
      title: 'No-Blame Postmortems',
      desc: 'When things break, we ask "what broke our process?" not "who broke it?"',
      icon: '🔍'
    },
    {
      title: 'Random Thank Yous',
      desc: 'Every Friday, names are drawn. You write a thank-you to that person. Gets printed. Given. Cherished.',
      icon: '💌'
    },
    {
      title: 'The "Too Much" Rule',
      desc: 'If you\'re overwhelmed, say so. Work gets reprioritized immediately. Your wellbeing matters more.',
      icon: '🛡️'
    }
  ];

  const socialMedia = [
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/purelatency',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg',
      color: '#E4405F'
    },
    { 
      name: 'Facebook', 
      href: 'https://facebook.com/purelatency',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg',
      color: '#1877F2'
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/purelatency',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg',
      color: '#000000'
    }
  ];

  return (
    <>
      <Navbar />

      <main className={styles.container}>
        {/* Social Media */}
        <section className={styles.socialSection}>
          <div className={styles.socialLinks}>
            {socialMedia.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                style={{ color: social.color }}
              >
                <img 
                  src={social.icon} 
                  alt={social.name}
                  className={styles.socialIcon}
                />
                <span className={styles.socialName}>{social.name}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/" className={styles.breadcrumbLink}>Home</Link> / 
          <Link href="/about" className={styles.breadcrumbLink}> About</Link> / 
          <span className={styles.breadcrumbCurrent}> Purpose and Beliefs</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroBadge}>
              📜 Not Just Words on a Wall
            </div>
            <h1 className={styles.heroTitle}>
              What we believe<br />
              <span className={styles.heroTitleGradient}>
                and why it matters
              </span>
            </h1>
            <p className={styles.heroText}>
              Every company has values. Most are forgettable words on a "Culture" page. 
              Ours are different — they're lived, argued about, and occasionally broken 
              (then fixed). Here's what we actually believe.
            </p>
            <div className={styles.buttonGroup}>
              <Link href="#beliefs" className={styles.buttonPrimary}>
                Read Our Beliefs
              </Link>
              <Link href="#manifesto" className={styles.buttonSecondary}>
                The Manifesto ↓
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className={styles.heroCard}>
            <div className={styles.heroCardBg1} />
            <div className={styles.heroCardBg2} />
            <div className={styles.heroCardContent}>
              <div className={styles.heroCardIcon}>⚖️</div>
              <h3 className={styles.heroCardTitle}>Beliefs in Action</h3>
              <ul className={styles.heroCardList}>
                {[
                  'We fired a client once. They deserved it.',
                  'We refunded a project, kept the friendship.',
                  'We say "I don\'t know" daily. It\'s liberating.'
                ].map((item, i) => (
                  <li key={i} className={styles.heroCardItem}>
                    <span className={styles.heroCardCheck}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <section className={styles.statsBanner}>
          {stats.map(stat => (
            <div key={stat.label} className={styles.statItem}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Navigation Tabs */}
        <div className={styles.tabsContainer}>
          {['purpose', 'beliefs', 'manifesto', 'practice'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'purpose' && (
          <section id="purpose" style={{ marginBottom: '6rem' }}>
            <h2 className={styles.sectionTitle}>Why We Exist</h2>
            <div className={styles.purposeGrid}>
              {ourPurpose.map(item => (
                <div key={item.title} className={styles.purposeCard}>
                  <div className={styles.purposeIcon}>{item.icon}</div>
                  <h3 className={styles.purposeTitle}>{item.title}</h3>
                  <p className={styles.purposeDesc}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Paradoxes */}
            <div style={{ marginTop: '3rem' }}>
              <h3 className={styles.sectionTitle} style={{ fontSize: 'clamp(1.5rem, 4vw, 1.8rem)' }}>
                The Paradoxes We Embrace
              </h3>
              <div className={styles.paradoxesGrid}>
                {theParadoxes.map(item => (
                  <div key={item.title} className={styles.paradoxCard}>
                    <div className={styles.paradoxIcon}>{item.icon}</div>
                    <h4 className={styles.paradoxTitle}>{item.title}</h4>
                    <p className={styles.paradoxDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'beliefs' && (
          <section id="beliefs" style={{ marginBottom: '6rem' }}>
            <h2 className={styles.sectionTitle}>The 10 Things We Actually Believe</h2>
            <p className={styles.sectionSubtitle}>
              Not aspirational. Not performative. Just how we operate.
            </p>
            <div className={styles.beliefsGrid}>
              {theBeliefs.map((belief, index) => (
                <div
                  key={belief.title}
                  className={styles.beliefCard}
                  style={{ borderLeftColor: belief.color }}
                >
                  <div className={styles.beliefHeader}>
                    <span className={styles.beliefIcon}>{belief.icon}</span>
                    <span 
                      className={styles.beliefNumber}
                      style={{ background: `${belief.color}10`, color: belief.color }}
                    >
                      #{index + 1}
                    </span>
                  </div>
                  <h3 className={styles.beliefTitle}>{belief.title}</h3>
                  <p className={styles.beliefDesc}>{belief.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'manifesto' && (
          <section id="manifesto" style={{ marginBottom: '6rem' }}>
            <h2 className={styles.sectionTitle}>The PureLatency Manifesto</h2>
            <p className={styles.sectionSubtitle}>
              Short. Unfiltered. Actually followed.
            </p>
            <div className={styles.manifestoGrid}>
              {theManifesto.map(chapter => (
                <div key={chapter.chapter} className={styles.manifestoChapter}>
                  <h3 className={styles.manifestoTitle}>{chapter.chapter}</h3>
                  <ul className={styles.manifestoList}>
                    {chapter.lines.map(line => (
                      <li key={line} className={styles.manifestoItem}>
                        <span className={styles.manifestoBullet}>•</span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'practice' && (
          <section style={{ marginBottom: '6rem' }}>
            <h2 className={styles.sectionTitle}>Beliefs in Practice</h2>
            <p className={styles.sectionSubtitle}>
              How abstract ideas become daily habits
            </p>
            
            {/* Daily Practices */}
            <div className={styles.practicesGrid}>
              {dailyPractices.map(practice => (
                <div key={practice.title} className={styles.practiceCard}>
                  <div className={styles.practiceIcon}>{practice.icon}</div>
                  <h3 className={styles.practiceTitle}>{practice.title}</h3>
                  <p className={styles.practiceDesc}>{practice.desc}</p>
                </div>
              ))}
            </div>

            {/* Real Stories */}
            <div style={{ 
              padding: 'clamp(1.5rem, 5vw, 3rem)',
              background: '#fafafa',
              borderRadius: '20px',
              border: '1px solid #e6e6e9'
            }}>
              <h3 className={styles.sectionTitle} style={{ fontSize: 'clamp(1.3rem, 4vw, 1.5rem)' }}>
                When Beliefs Became Real
              </h3>
              <div className={styles.storiesGrid}>
                <div className={styles.storyItem}>
                  <span className={styles.storyQuote}>"</span>
                  <p className={styles.storyText}>
                    "We told a client their project wasn't ready to launch, even though they wanted to. They thanked us later. We'd do it again."
                  </p>
                  <div className={styles.storyAttribution}>— On Quality Over Speed</div>
                </div>
                <div className={styles.storyItem}>
                  <span className={styles.storyQuote}>"</span>
                  <p className={styles.storyText}>
                    "A junior dev caught a mistake I made. We celebrated it. Ego left, learning happened."
                  </p>
                  <div className={styles.storyAttribution}>— On No Ego</div>
                </div>
                <div className={styles.storyItem}>
                  <span className={styles.storyQuote}>"</span>
                  <p className={styles.storyText}>
                    "We refunded $20k because we under-delivered. The client cried. We kept the friendship."
                  </p>
                  <div className={styles.storyAttribution}>— On Radical Honesty</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Contact Us</h2>
            <p className={styles.ctaText}>Be always in front line, get in touch today.</p>
            <Link href="/contact" className={styles.ctaButton}>
              Contact Us
            </Link>
          </div>
        </section>

        {/* Back to About */}
        <div className={styles.backLinkContainer}>
          <Link href="/about" className={styles.backLink}>
            ← Back to About
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerGrid}>
            <div>
              <div className={styles.footerLogo}>Pure Latency</div>
              <p className={styles.footerText}>
                Building exceptional software that makes a difference.
              </p>
            </div>
            <div>
              <h4 className={styles.footerHeading}>Company</h4>
              <ul className={styles.footerList}>
                <li className={styles.footerListItem}>
                  <Link href="/about" className={styles.footerLink}>About</Link>
                </li>
                <li className={styles.footerListItem}>
                  <Link href="/careers" className={styles.footerLink}>Careers</Link>
                </li>
                <li className={styles.footerListItem}>
                  <Link href="/blog" className={styles.footerLink}>Blog</Link>
                </li>
                <li className={styles.footerListItem}>
                  <Link href="/contact" className={styles.footerLink}>Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={styles.footerHeading}>Legal</h4>
              <ul className={styles.footerList}>
                <li className={styles.footerListItem}>
                  <Link href="/privacy" className={styles.footerLink}>Privacy</Link>
                </li>
                <li className={styles.footerListItem}>
                  <Link href="/terms" className={styles.footerLink}>Terms</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={styles.footerHeading}>Connect</h4>
              <ul className={styles.footerList}>
                {socialMedia.map(social => (
                  <li key={social.name} className={styles.footerListItem}>
                    <a 
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.footerSocialLink}
                      style={{ color: '#aaa' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = social.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#aaa';
                      }}
                    >
                      <img 
                        src={social.icon} 
                        alt={social.name}
                        className={styles.footerSocialIcon}
                      />
                      <span>{social.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            © 2026 PureLatency. All rights reserved. Crafted with precision in San Francisco.
          </div>
        </div>
      </footer>
    </>
  );
}