'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { useState } from 'react';
import styles from './Overview.module.css'; // adjust path as needed

export default function OverviewPage() {
  const [activeTab, setActiveTab] = useState('essence');

  const stats = [
    { value: '7', label: 'Time Zones Covered', icon: '🌐' },
    { value: '87%', label: 'Client Return Rate', icon: '🔄' },
    { value: '12+', label: 'Industry Awards', icon: '🏆' },
    { value: '0', label: 'Missed Deadlines', icon: '⏱️' }
  ];

  const coreEssence = [
    {
      title: 'Why "Latency"?',
      desc: 'We believe in taking the time to do things right. In a world of instant everything, we choose precision, intention, and quality over speed.',
      icon: '⏳',
      color: '#0066cc'
    },
    {
      title: 'Our DNA',
      desc: 'Engineers, designers, and strategists who left corporate giants to build something better. We value craft over scale, and relationships over transactions.',
      icon: '🧬',
      color: '#10B981'
    },
    {
      title: 'The Pure Difference',
      desc: 'No bureaucracy. No sales pitches. Just honest conversations about technology and real problem-solving with people who actually write code.',
      icon: '✨',
      color: '#7C3AED'
    },
    {
      title: 'Our Promise',
      desc: 'We never stop caring about your project after launch. We build lasting partnerships, not just products.',
      icon: '🤝',
      color: '#F59E0B'
    }
  ];

  const originStory = [
    {
      year: 'Late 2025',
      title: 'The Coffee Shop Meeting',
      desc: 'Five friends, frustrated with corporate tech culture, sketched the idea of PureLatency on a napkin at a café in San Francisco.',
      icon: '☕',
      color: '#0066cc'
    },
    {
      year: 'Jan 2026',
      title: 'First Office',
      desc: 'Rented a small space with a leaky ceiling but great natural light. The leak became our "feature" — a reminder that perfection takes time.',
      icon: '🏢',
      color: '#10B981'
    },
    {
      year: 'Feb 2026',
      title: 'First Client',
      desc: "A startup that couldn't afford enterprise rates but needed enterprise thinking. We've been partners ever since.",
      icon: '🤲',
      color: '#7C3AED'
    },
    {
      year: 'Mar 2026',
      title: 'The Name Stuck',
      desc: 'Originally a placeholder name, "PureLatency" became our identity — a constant reminder of our philosophy.',
      icon: '🏷️',
      color: '#F59E0B'
    }
  ];

  const theFounders = [
    {
      name: 'Alex Rivera',
      role: 'The Builder',
      bio: "Alex codes every day. He believes leaders should still write software. When not coding, he's restoring a 1967 Mustang.",
      trait: '🔧',
      color: '#0066cc'
    },
    {
      name: 'Jamie Chen',
      role: 'The Architect',
      bio: 'Jamie dreams in distributed systems. She once debugged a production issue at 35,000 feet. Her code is poetry.',
      trait: '🏗️',
      color: '#10B981'
    },
    {
      name: 'Sam Taylor',
      role: 'The Designer',
      bio: 'Sam makes complex things feel simple. He insists that every pixel has purpose. Outside work, he builds furniture by hand.',
      trait: '🎨',
      color: '#7C3AED'
    },
    {
      name: 'Jordan Lee',
      role: 'The Strategist',
      bio: 'Jordan translates business needs into technical reality. She speaks fluent "CEO" and "engineer" with equal ease.',
      trait: '🧠',
      color: '#F59E0B'
    },
    {
      name: 'Casey Morgan',
      role: 'The Operator',
      bio: 'Casey ensures everything runs smoothly. He believes process should enable creativity, not stifle it. Coffee connoisseur.',
      trait: '⚙️',
      color: '#EC4899'
    }
  ];

  const workPhilosophy = [
    {
      title: 'No Heroes',
      desc: "We don't want rock stars or ninjas. We want reliable teammates who show up, communicate, and care about the outcome.",
      icon: '👥',
      stat: '100%',
      statDesc: 'team players'
    },
    {
      title: 'Quiet Office',
      desc: 'We value deep work over constant meetings. Headphones are encouraged. Interruptions are minimized.',
      icon: '🔇',
      stat: '4hrs',
      statDesc: 'deep work daily'
    },
    {
      title: 'Radical Candor',
      desc: 'We tell you what you need to hear, not what you want to hear. Respectfully, honestly, directly.',
      icon: '💬',
      stat: '100%',
      statDesc: 'honest feedback'
    },
    {
      title: 'Sustainable Pace',
      desc: "We don't do crunch time. Burnout doesn't help anyone. Great work comes from rested minds.",
      icon: '🌿',
      stat: '40hrs',
      statDesc: 'max work week'
    }
  ];

  const theSpace = [
    {
      location: 'San Francisco',
      vibe: 'Creative chaos meets calm',
      feature: 'A wall of vintage tech (think old Macs and a working Commodore 64)',
      icon: '🌉',
      color: '#0066cc'
    },
    {
      location: 'Singapore',
      vibe: 'Tropical efficiency',
      feature: 'Rooftop garden where we brainstorm under the stars',
      icon: '🏝️',
      color: '#10B981'
    },
    {
      location: 'London',
      vibe: 'Warm pub energy indoors',
      feature: 'A proper tea bar and a corner dedicated to British computing history',
      icon: '🇬🇧',
      color: '#7C3AED'
    }
  ];

  const theUnexpected = [
    {
      title: 'We Have a Dog',
      desc: 'Meet Pixel, our office corgi. He attends every design review and has strong opinions about typography.',
      icon: '🐕',
      detail: 'Chief Morale Officer'
    },
    {
      title: 'Annual Build Week',
      desc: 'Once a year, we build anything we want. Some of our best products started as side projects.',
      icon: '🔨',
      detail: '10 products born'
    },
    {
      title: 'The Latency Library',
      desc: 'A curated collection of books we actually read. Borrow any time, no due dates.',
      icon: '📚',
      detail: '500+ books'
    },
    {
      title: 'Music Obsessed',
      desc: 'Every office has a vinyl player. Current rotation: jazz, classic rock, and whatever the team brings.',
      icon: '🎵',
      detail: '12 turntables'
    }
  ];

  const clientVoices = [
    {
      quote: "They turned down our money once because they didn't think we were ready. That's integrity.",
      author: "Maya Patel",
      company: "SeedStage VC",
      role: "Founder"
    },
    {
      quote: "Alex once spent three hours on a call with my junior dev, just teaching. No billing. Just kindness.",
      author: "David Chen",
      company: "HealthTech Solutions",
      role: "CTO"
    },
    {
      quote: "They care about our success more than their profit. That's rare.",
      author: "Sarah Williams",
      company: "EcoStart",
      role: "CEO"
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
          <span className={styles.breadcrumbCurrent}> Overview</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroBadge}>
              💫 Not Your Average Tech Company
            </div>
            <h1 className={styles.heroTitle}>
              We're different<br />
              <span className={styles.heroTitleGradient}>
                on purpose
              </span>
            </h1>
            <p className={styles.heroText}>
              PureLatency wasn't started to get rich. It was started to build things differently. 
              No bureaucracy. No egos. Just really good people solving really hard problems, 
              at a pace that makes sense.
            </p>
            <div className={styles.buttonGroup}>
              <Link href="/contact" className={styles.buttonPrimary}>
                Come Say Hello
              </Link>
              <Link href="#essence" className={styles.buttonSecondary}>
                Understand Our Vibe ↓
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className={styles.heroCard}>
            <div className={styles.heroCardBg1} />
            <div className={styles.heroCardBg2} />
            <div className={styles.heroCardContent}>
              <div className={styles.heroCardIcon}>🎲</div>
              <h3 className={styles.heroCardTitle}>The Un-Slide Deck</h3>
              <ul className={styles.heroCardList}>
                {[
                  "We code. We don't just manage.",
                  'No salespeople. Just engineers.',
                  'Honest timelines. No BS.'
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
          {['essence', 'origin', 'philosophy', 'vibes'].map(tab => (
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
        {activeTab === 'essence' && (
          <section id="essence" style={{ marginBottom: '6rem' }}>
            <h2 className={styles.sectionTitle}>The Essence of PureLatency</h2>
            <div className={styles.essenceGrid}>
              {coreEssence.map(item => (
                <div key={item.title} className={styles.essenceCard}>
                  <div className={styles.essenceIcon}>{item.icon}</div>
                  <h3 className={styles.essenceTitle}>{item.title}</h3>
                  <p className={styles.essenceDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'origin' && (
          <>
            {/* Origin Story */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 className={styles.sectionTitle}>How We Started</h2>
              <p className={styles.sectionSubtitle}>
                It began with a napkin, a leaky ceiling, and five friends who believed work could be better
              </p>
              <div className={styles.originGrid}>
                {originStory.map((item, index) => (
                  <div key={item.title} className={styles.originCard}>
                    {index < originStory.length - 1 && <div className={styles.originConnector} />}
                    <div className={styles.originIcon}>{item.icon}</div>
                    <div className={styles.originYear} style={{ color: item.color }}>
                      {item.year}
                    </div>
                    <h3 className={styles.originTitle}>{item.title}</h3>
                    <p className={styles.originDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* The Founders */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 className={styles.sectionTitle}>The Five Who Stayed</h2>
              <p className={styles.sectionSubtitle}>
                We could have taken easier paths. We chose this one.
              </p>
              <div className={styles.foundersGrid}>
                {theFounders.map(founder => (
                  <div key={founder.name} className={styles.founderCard}>
                    <div className={styles.founderHeader}>
                      <span className={styles.founderTrait}>{founder.trait}</span>
                      <span className={styles.founderRole} style={{ color: founder.color }}>
                        {founder.role}
                      </span>
                    </div>
                    <h3 className={styles.founderName}>{founder.name}</h3>
                    <p className={styles.founderBio}>{founder.bio}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'philosophy' && (
          <>
            {/* Work Philosophy */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 className={styles.sectionTitle}>How We Actually Work</h2>
              <p className={styles.sectionSubtitle}>
                No mission statements. Just how we show up every day.
              </p>
              <div className={styles.philosophyGrid}>
                {workPhilosophy.map(item => (
                  <div key={item.title} className={styles.philosophyCard}>
                    <div className={styles.philosophyIcon}>{item.icon}</div>
                    <h3 className={styles.philosophyTitle}>{item.title}</h3>
                    <p className={styles.philosophyDesc}>{item.desc}</p>
                    <div>
                      <div className={styles.philosophyStat}>{item.stat}</div>
                      <div className={styles.philosophyStatDesc}>{item.statDesc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Client Voices */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 className={styles.sectionTitle}>What People Say (When We're Not in the Room)</h2>
              <div className={styles.voicesGrid}>
                {clientVoices.map((voice, index) => (
                  <div key={index} className={styles.voiceCard}>
                    <span className={styles.voiceQuoteMark}>"</span>
                    <p className={styles.voiceText}>{voice.quote}</p>
                    <div>
                      <div className={styles.voiceAuthor}>{voice.author}</div>
                      <p className={styles.voiceMeta}>
                        {voice.role}, {voice.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'vibes' && (
          <>
            {/* The Space */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 className={styles.sectionTitle}>Where We Create</h2>
              <p className={styles.sectionSubtitle}>
                Our offices reflect who we are — a little weird, a lot functional
              </p>
              <div className={styles.spaceGrid}>
                {theSpace.map(place => (
                  <div key={place.location} className={styles.spaceCard}>
                    <div className={styles.spaceIcon}>{place.icon}</div>
                    <h3 className={styles.spaceLocation}>{place.location}</h3>
                    <p className={styles.spaceVibe} style={{ color: place.color }}>
                      {place.vibe}
                    </p>
                    <p className={styles.spaceFeature}>✨ {place.feature}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* The Unexpected */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 className={styles.sectionTitle}>Things You Didn't Expect</h2>
              <div className={styles.unexpectedGrid}>
                {theUnexpected.map(item => (
                  <div key={item.title} className={styles.unexpectedCard}>
                    <div className={styles.unexpectedIcon}>{item.icon}</div>
                    <h3 className={styles.unexpectedTitle}>{item.title}</h3>
                    <p className={styles.unexpectedDesc}>{item.desc}</p>
                    <p className={styles.unexpectedDetail}>{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
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