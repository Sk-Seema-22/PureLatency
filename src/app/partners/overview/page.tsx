'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { useState } from 'react';
import styles from './PartnersOverview.module.css'; // adjust path as needed

export default function PartnersOverviewPage() {
  const [activeTab, setActiveTab] = useState('ecosystem');

  const stats = [
    { value: '25+', label: 'Active Partners', icon: '🤝' },
    { value: '50+', label: 'Joint Projects', icon: '🚀' },
    { value: '4', label: 'Strategic Alliances', icon: '⭐' },
    { value: '100%', label: 'Partner Retention', icon: '📈' }
  ];

  const ecosystem = [
    {
      title: 'Cloud Infrastructure',
      desc: 'We partner with leading cloud providers to deliver scalable, reliable infrastructure for our clients.',
      partners: ['AWS', 'Google Cloud', 'Microsoft Azure', 'DigitalOcean'],
      icon: '☁️',
      color: '#0066cc',
      count: '4 partners'
    },
    {
      title: 'Technology Platforms',
      desc: 'Deep integrations with platforms that power modern applications.',
      partners: ['Vercel', 'MongoDB', 'Elastic', 'Datadog', 'Auth0'],
      icon: '⚙️',
      color: '#10B981',
      count: '5 partners'
    },
    {
      title: 'Development Tools',
      desc: 'Tools that help our teams build better software, faster.',
      partners: ['GitHub', 'GitLab', 'Figma', 'Slack', 'Jira'],
      icon: '🛠️',
      color: '#7C3AED',
      count: '5 partners'
    },
    {
      title: 'Implementation Partners',
      desc: 'Global consulting and implementation partners who extend our reach.',
      partners: ['Deloitte', 'Accenture', 'IBM', 'TCS'],
      icon: '🏢',
      color: '#F59E0B',
      count: '4 partners'
    }
  ];

  const theBenefits = [
    {
      title: 'For Our Partners',
      items: [
        'Access to enterprise clients',
        'Joint go-to-market programs',
        'Technical collaboration',
        'Co-innovation opportunities',
        'Dedicated partner support'
      ],
      icon: '🤝',
      color: '#0066cc'
    },
    {
      title: 'For Our Clients',
      items: [
        'Best-in-class technology stack',
        'Seamless integrations',
        'Certified expertise',
        'Vendor-backed support',
        'Future-proof solutions'
      ],
      icon: '👥',
      color: '#10B981'
    }
  ];

  const theApproach = [
    {
      step: '01',
      title: 'Strategic Alignment',
      desc: 'We choose partners who share our values and commitment to quality.',
      icon: '🎯',
      color: '#0066cc'
    },
    {
      step: '02',
      title: 'Technical Integration',
      desc: 'Deep technical collaboration to ensure seamless integration.',
      icon: '⚙️',
      color: '#10B981'
    },
    {
      step: '03',
      title: 'Joint Go-to-Market',
      desc: 'Collaborative marketing and sales initiatives.',
      icon: '📢',
      color: '#7C3AED'
    },
    {
      step: '04',
      title: 'Continuous Evolution',
      desc: 'Regular reviews and adaptation to market needs.',
      icon: '🔄',
      color: '#F59E0B'
    }
  ];

  const theNumbers = [
    {
      category: 'Partner Ecosystem',
      stats: [
        { value: '25+', label: 'Technology Partners' },
        { value: '4', label: 'Strategic Alliances' },
        { value: '15+', label: 'Integration Partners' }
      ]
    },
    {
      category: 'Joint Impact',
      stats: [
        { value: '50+', label: 'Client Projects' },
        { value: '$10M+', label: 'Joint Revenue' },
        { value: '95%', label: 'Renewal Rate' }
      ]
    },
    {
      category: 'Partner Success',
      stats: [
        { value: '100%', label: 'Satisfaction' },
        { value: '4.9/5', label: 'Partner Rating' },
        { value: '24/7', label: 'Support Access' }
      ]
    }
  ];

  const theTestimonials = [
    {
      quote: "PureLatency's partner program is unlike any other. They treat us as true collaborators, not just another vendor in their ecosystem.",
      author: "Sarah Chen",
      role: "Partner Alliance Manager",
      company: "AWS",
      logo: "AWS"
    },
    {
      quote: "The technical depth of the PureLatency team has helped us co-innovate in ways we never expected. True partnership in every sense.",
      author: "Michael Rodriguez",
      role: "VP of Partnerships",
      company: "Vercel",
      logo: "VC"
    },
    {
      quote: "Working with PureLatency has opened doors to enterprise clients we couldn't reach on our own. The ROI has been exceptional.",
      author: "David Kim",
      role: "Head of Strategic Alliances",
      company: "MongoDB",
      logo: "MDB"
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
      color: '#000000',
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
          <Link href="/partners" className={styles.breadcrumbLink}> Partners</Link> / 
          <span className={styles.breadcrumbCurrent}> Overview</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroBadge}>
              🌐 Our Partner Ecosystem
            </div>
            <h1 className={styles.heroTitle}>
              Stronger together<br />
              <span className={styles.heroTitleGradient}>
                with the best in class
              </span>
            </h1>
            <p className={styles.heroText}>
              We believe that great software is built through collaboration. Our partner ecosystem 
              extends our capabilities, deepens our expertise, and ensures our clients always have 
              access to the best technology and talent. Here's how we work with partners and what 
              it means for you.
            </p>
            <div className={styles.buttonGroup}>
              <Link href="/contact" className={styles.buttonPrimary}>
                Become a Partner
              </Link>
              <Link href="#ecosystem" className={styles.buttonSecondary}>
                Explore Ecosystem ↓
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className={styles.heroCard}>
            <div className={styles.heroCardBg1} />
            <div className={styles.heroCardBg2} />
            <div className={styles.heroCardContent}>
              <div className={styles.heroCardIcon}>🤝</div>
              <h3 className={styles.heroCardTitle}>Partner Impact</h3>
              <ul className={styles.heroCardList}>
                {[
                  '25+ technology partners',
                  '50+ successful joint projects',
                  '100% partner retention rate'
                ].map((item, i) => (
                  <li key={i} className={styles.heroCardItem}>
                    <span className={styles.heroCardCheck}>✓</span>
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
          {['ecosystem', 'approach', 'numbers', 'voices'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
            >
              {tab === 'ecosystem' ? 'Ecosystem' : 
               tab === 'approach' ? 'Approach' : 
               tab === 'numbers' ? 'By the Numbers' : 
               'Partner Voices'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'ecosystem' && (
          <section id="ecosystem" style={{ marginBottom: '6rem' }}>
            <h2 className={styles.sectionTitle}>Our Partner Ecosystem</h2>
            <div className={styles.ecosystemGrid}>
              {ecosystem.map(item => (
                <div key={item.title} className={styles.ecosystemCard}>
                  <div className={styles.ecosystemHeader}>
                    <span className={styles.ecosystemIcon}>{item.icon}</span>
                    <h3 className={styles.ecosystemTitle}>{item.title}</h3>
                  </div>
                  <p className={styles.ecosystemDesc}>{item.desc}</p>
                  <div className={styles.ecosystemPartners}>
                    {item.partners.map(partner => (
                      <span
                        key={partner}
                        className={styles.partnerTag}
                        style={{
                          '--color': item.color,
                          '--color30': item.color + '30',
                        } as React.CSSProperties}
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                  <p className={styles.ecosystemCount} style={{ color: item.color }}>
                    {item.count}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'approach' && (
          <>
            {/* Our Approach */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 className={styles.sectionTitle}>Our Partnership Approach</h2>
              <p className={styles.sectionSubtitle}>
                How we build and nurture lasting partnerships
              </p>
              <div className={styles.approachGrid}>
                {theApproach.map((item, index) => (
                  <div key={item.step} className={styles.approachCard}>
                    {index < theApproach.length - 1 && (
                      <div className={styles.approachConnector} />
                    )}
                    <div className={styles.approachIcon}>{item.icon}</div>
                    <div className={styles.approachStep} style={{ color: item.color }}>
                      {item.step}
                    </div>
                    <h3 className={styles.approachTitle}>{item.title}</h3>
                    <p className={styles.approachDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 className={styles.sectionTitle}>Who Benefits</h2>
              <div className={styles.benefitsGrid}>
                {theBenefits.map(benefit => (
                  <div key={benefit.title} className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>{benefit.icon}</div>
                    <h3 className={styles.benefitTitle} style={{ color: benefit.color }}>
                      {benefit.title}
                    </h3>
                    <ul className={styles.benefitList}>
                      {benefit.items.map(item => (
                        <li key={item} className={styles.benefitItem}>
                          <span className={styles.benefitCheck} style={{ color: benefit.color }}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'numbers' && (
          <section style={{ marginBottom: '6rem' }}>
            <h2 className={styles.sectionTitle}>By the Numbers</h2>
            <p className={styles.sectionSubtitle}>
              The measurable impact of our partnerships
            </p>
            <div className={styles.numbersGrid}>
              {theNumbers.map(category => (
                <div key={category.category} className={styles.numbersCard}>
                  <h3 className={styles.numbersCategory}>{category.category}</h3>
                  {category.stats.map(stat => (
                    <div key={stat.label} className={styles.numberStat}>
                      <div className={styles.numberValue}>{stat.value}</div>
                      <div className={styles.numberLabel}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'voices' && (
          <section style={{ marginBottom: '6rem' }}>
            <h2 className={styles.sectionTitle}>Partner Voices</h2>
            <div className={styles.testimonialsGrid}>
              {theTestimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonialCard}>
                  <span className={styles.testimonialQuote}>"</span>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.testimonialLogo}>{testimonial.logo}</div>
                    <div className={styles.testimonialCompany}>{testimonial.company}</div>
                  </div>
                  <p className={styles.testimonialText}>"{testimonial.quote}"</p>
                  <div>
                    <p className={styles.testimonialAuthor}>{testimonial.author}</p>
                    <p className={styles.testimonialRole}>{testimonial.role}</p>
                  </div>
                </div>
              ))}
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

        {/* Back to Partners */}
        <div className={styles.backLinkContainer}>
          <Link href="/partners" className={styles.backLink}>
            ← Back to Partners
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