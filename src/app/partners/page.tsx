'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Partners.module.css'; // adjust path as needed
import Footer from '@/components/layout/Footer';

export default function PartnersPage() {
  const [activeTab, setActiveTab] = useState('all');

  const stats = [
    { value: '25+', label: 'Active Partners', icon: '🤝' },
    { value: '50+', label: 'Joint Projects', icon: '🚀' },
    { value: '100%', label: 'Partner Satisfaction', icon: '⭐' },
    { value: '24/7', label: 'Partner Support', icon: '🌙' }
  ];

  const partnerCategories = [
    {
      name: 'Cloud Infrastructure',
      icon: '☁️',
      color: '#0066cc',
      partners: [
        { name: 'AWS', logo: 'AWS', description: 'Premier cloud provider for scalable infrastructure', tier: 'Premier', since: '2026' },
        { name: 'Google Cloud', logo: 'GCP', description: 'Advanced cloud and AI/ML capabilities', tier: 'Advanced', since: '2026' },
        { name: 'Microsoft Azure', logo: 'AZ', description: 'Enterprise cloud solutions', tier: 'Gold', since: '2026' },
        { name: 'DigitalOcean', logo: 'DO', description: 'Developer-friendly cloud platform', tier: 'Partner', since: '2026' }
      ]
    },
    {
      name: 'Technology Platforms',
      icon: '⚙️',
      color: '#10B981',
      partners: [
        { name: 'Vercel', logo: 'VC', description: 'Frontend deployment and hosting', tier: 'Premier', since: '2026' },
        { name: 'MongoDB', logo: 'MDB', description: 'Modern database solutions', tier: 'Premier', since: '2026' },
        { name: 'Elastic', logo: 'EL', description: 'Search and analytics engine', tier: 'Gold', since: '2026' },
        { name: 'Datadog', logo: 'DD', description: 'Cloud monitoring and security', tier: 'Premier', since: '2026' },
        { name: 'Auth0', logo: 'A0', description: 'Identity and access management', tier: 'Gold', since: '2026' }
      ]
    },
    {
      name: 'Development Tools',
      icon: '🛠️',
      color: '#7C3AED',
      partners: [
        { name: 'GitHub', logo: 'GH', description: 'Code hosting and collaboration', tier: 'Premier', since: '2026' },
        { name: 'GitLab', logo: 'GL', description: 'DevOps platform', tier: 'Gold', since: '2026' },
        { name: 'Figma', logo: 'FG', description: 'Design collaboration', tier: 'Premier', since: '2026' },
        { name: 'Slack', logo: 'SL', description: 'Team communication', tier: 'Gold', since: '2026' },
        { name: 'Jira', logo: 'JR', description: 'Project management', tier: 'Partner', since: '2026' }
      ]
    },
    {
      name: 'Implementation Partners',
      icon: '🏢',
      color: '#F59E0B',
      partners: [
        { name: 'Deloitte', logo: 'DL', description: 'Global consulting and implementation', tier: 'Strategic', since: '2026' },
        { name: 'Accenture', logo: 'AC', description: 'Technology and transformation', tier: 'Strategic', since: '2026' },
        { name: 'IBM', logo: 'IBM', description: 'Enterprise solutions', tier: 'Premier', since: '2026' },
        { name: 'TCS', logo: 'TCS', description: 'Global IT services', tier: 'Gold', since: '2026' }
      ]
    }
  ];

  const allPartners = partnerCategories.flatMap(cat => cat.partners);

  const benefits = [
    {
      title: 'Access to Enterprise Clients',
      desc: 'Connect with Fortune 500 companies and high-growth startups through our network',
      icon: '🏢',
      stats: '50+ enterprise introductions in 2026'
    },
    {
      title: 'Joint Go-to-Market',
      desc: 'Collaborative marketing campaigns, events, and sales initiatives',
      icon: '📢',
      stats: '15 joint campaigns launched'
    },
    {
      title: 'Technical Collaboration',
      desc: 'Work alongside our engineering team on innovative solutions',
      icon: '⚙️',
      stats: '20+ co-developed features'
    },
    {
      title: 'Co-innovation Opportunities',
      desc: 'Build next-generation products together with shared IP',
      icon: '💡',
      stats: '3 joint products in development'
    },
    {
      title: 'Dedicated Partner Manager',
      desc: 'Single point of contact for all your needs',
      icon: '🤝',
      stats: '24/7 availability'
    },
    {
      title: 'Training & Enablement',
      desc: 'Comprehensive technical and sales training for your team',
      icon: '📚',
      stats: '500+ hours of training'
    }
  ];

  const testimonials = [
    {
      quote: "PureLatency has been an exceptional partner. Their technical depth and collaborative approach have helped us deliver better solutions to our mutual clients.",
      author: "Sarah Chen",
      role: "Partner Alliance Manager",
      company: "AWS",
      logo: "AWS"
    },
    {
      quote: "The team at PureLatency doesn't just implement our platform — they extend it. We've co-created features that benefit our entire ecosystem.",
      author: "Michael Rodriguez",
      role: "VP of Partnerships",
      company: "Vercel",
      logo: "VC"
    },
    {
      quote: "Working with PureLatency has opened doors to enterprise clients we couldn't reach on our own. True partnership in every sense.",
      author: "David Kim",
      role: "Head of Strategic Alliances",
      company: "MongoDB",
      logo: "MDB"
    }
  ];

  const partnerTiers = [
    {
      tier: 'Strategic',
      color: '#0066cc',
      benefits: ['Executive sponsorship', 'Joint roadmap planning', 'Co-marketing funds', 'Quarterly business reviews']
    },
    {
      tier: 'Premier',
      color: '#10B981',
      benefits: ['Dedicated partner manager', 'Technical account support', 'Joint go-to-market', 'Partner portal access']
    },
    {
      tier: 'Gold',
      color: '#7C3AED',
      benefits: ['Partner enablement', 'Sales training', 'Marketing support', 'Community access']
    },
    {
      tier: 'Partner',
      color: '#F59E0B',
      benefits: ['Basic support', 'Partner directory listing', 'Newsletter inclusion', 'Event invitations']
    }
  ];

  const successStories = [
    {
      title: 'Enterprise Cloud Migration',
      partner: 'AWS',
      description: 'Together with AWS, we helped a Fortune 500 manufacturer migrate 200+ applications to the cloud in 6 months.',
      result: '40% cost reduction, 99.99% uptime',
      icon: '☁️'
    },
    {
      title: 'Real-time Analytics Platform',
      partner: 'MongoDB & Datadog',
      description: 'Collaborated to build a real-time analytics platform processing 10M+ events daily.',
      result: '50% faster insights, 3x data growth',
      icon: '📊'
    },
    {
      title: 'Global Design System',
      partner: 'Figma & Vercel',
      description: 'Co-created a design system now used by 50+ product teams across both companies.',
      result: '70% faster design-to-development',
      icon: '🎨'
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

  // Helper to get tier color
  const getTierColor = (tier: string) => {
    switch(tier) {
      case 'Strategic': return '#0066cc';
      case 'Premier': return '#10B981';
      case 'Gold': return '#7C3AED';
      default: return '#F59E0B';
    }
  };

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
          <span className={styles.breadcrumbCurrent}> Partners</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroBadge}>
              🤝 Built on Partnerships
            </div>
            <h1 className={styles.heroTitle}>
              Stronger together<br />
              <span className={styles.heroTitleGradient}>
                with the best in tech
              </span>
            </h1>
            <p className={styles.heroText}>
              We don't believe in going it alone. Our partners are extensions of our team — 
              technology leaders who share our commitment to quality and innovation. Together, 
              we deliver solutions that are greater than the sum of their parts.
            </p>
            <div className={styles.buttonGroup}>
              <Link href="/contact" className={styles.buttonPrimary}>
                Become a Partner
              </Link>
              <Link href="#partners" className={styles.buttonSecondary}>
                Meet Our Partners ↓
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className={styles.heroCard}>
            <div className={styles.heroCardBg1} />
            <div className={styles.heroCardBg2} />
            <div className={styles.heroCardContent}>
              <div className={styles.heroCardIcon}>🌐</div>
              <h3 className={styles.heroCardTitle}>Partner Ecosystem</h3>
              <ul className={styles.heroCardList}>
                {[
                  '25+ active technology partners',
                  '4 strategic alliances',
                  '50+ successful joint projects'
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
          {['all', 'by-category', 'benefits', 'success'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
            >
              {tab === 'all' ? 'All Partners' : 
               tab === 'by-category' ? 'By Category' : 
               tab === 'benefits' ? 'Benefits' : 
               'Success Stories'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'all' && (
          <section id="partners" style={{ marginBottom: '6rem' }}>
            <h2 className={styles.sectionTitle}>Our Partner Ecosystem</h2>
            <p className={styles.sectionSubtitle}>
              Technology leaders we're proud to work with
            </p>
            <div className={styles.allPartnersGrid}>
              {allPartners.map((partner, index) => (
                <div key={partner.name} className={styles.partnerCard}>
                  <div 
                    className={styles.partnerTier}
                    style={{ background: getTierColor(partner.tier) }}
                  >
                    {partner.tier}
                  </div>
                  <div className={styles.partnerLogo}>
                    {partner.logo}
                  </div>
                  <h3 className={styles.partnerName}>{partner.name}</h3>
                  <p className={styles.partnerDesc}>{partner.description}</p>
                  <p className={styles.partnerSince}>Partner since {partner.since}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'by-category' && (
          <section style={{ marginBottom: '6rem' }}>
            <h2 className={styles.sectionTitle}>Partners by Category</h2>
            {partnerCategories.map(category => (
              <div key={category.name} className={styles.categorySection}>
                <div className={styles.categoryHeader}>
                  <span className={styles.categoryIcon}>{category.icon}</span>
                  <h3 className={styles.categoryTitle}>{category.name}</h3>
                </div>
                <div className={styles.categoryPartnersGrid}>
                  {category.partners.map(partner => (
                    <div key={partner.name} className={styles.categoryPartnerItem}>
                      <div 
                        className={styles.categoryPartnerLogo}
                        style={{ background: `linear-gradient(135deg, ${category.color} 0%, ${category.color}CC 100%)` }}
                      >
                        {partner.logo}
                      </div>
                      <div className={styles.categoryPartnerInfo}>
                        <h4 className={styles.categoryPartnerName}>{partner.name}</h4>
                        <p className={styles.categoryPartnerMeta}>
                          {partner.tier} · Since {partner.since}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}

        {activeTab === 'benefits' && (
          <>
            {/* Partner Benefits */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 className={styles.sectionTitle}>Why Partner With Us</h2>
              <p className={styles.sectionSubtitle}>
                More than a vendor — a true partnership
              </p>
              <div className={styles.benefitsGrid}>
                {benefits.map(benefit => (
                  <div key={benefit.title} className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>{benefit.icon}</div>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                    <p className={styles.benefitDesc}>{benefit.desc}</p>
                    <p className={styles.benefitStats}>{benefit.stats}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Partner Tiers */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 className={styles.sectionTitle}>Partnership Tiers</h2>
              <div className={styles.tiersGrid}>
                {partnerTiers.map(tier => (
                  <div 
                    key={tier.tier} 
                    className={styles.tierCard}
                    style={{ borderTopColor: tier.color }}
                  >
                    <h3 className={styles.tierTitle} style={{ color: tier.color }}>
                      {tier.tier}
                    </h3>
                    <ul className={styles.tierBenefits}>
                      {tier.benefits.map(benefit => (
                        <li key={benefit} className={styles.tierBenefit}>
                          <span className={styles.tierBenefitCheck} style={{ color: tier.color }}>✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'success' && (
          <>
            {/* Testimonials */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 className={styles.sectionTitle}>What Our Partners Say</h2>
              <div className={styles.testimonialsGrid}>
                {testimonials.map((testimonial, index) => (
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

            {/* Success Stories */}
            <section style={{ marginBottom: '6rem' }}>
              <h2 className={styles.sectionTitle}>Success Stories</h2>
              <div className={styles.successGrid}>
                {successStories.map((story, index) => (
                  <div key={index} className={styles.successCard}>
                    <div className={styles.successIcon}>{story.icon}</div>
                    <h3 className={styles.successTitle}>{story.title}</h3>
                    <p className={styles.successPartner}>with {story.partner}</p>
                    <p className={styles.successDesc}>{story.description}</p>
                    <p className={styles.successResult}>{story.result}</p>
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

        {/* Back to Home */}
        <div className={styles.backHome}>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
    
      <Footer/>
    </>
  );
}