'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { useState } from 'react';
import styles from './Milestones.module.css'; // adjust path as needed

export default function MilestonesPage() {
  const [activeTab, setActiveTab] = useState('achieved');

  const stats = [
    { value: '12', label: 'Major Milestones', icon: '🏆' },
    { value: '100%', label: 'Team Celebrated', icon: '🎉' },
    { value: '0', label: 'Regrets', icon: '😌' },
    { value: '∞', label: 'More to Come', icon: '🚀' }
  ];

  const achievedMilestones = [
    {
      date: 'January 15, 2026',
      title: 'The First Commit',
      desc: 'Alex wrote the first line of code for what would become our internal tooling. The repo was called "test-please-ignore." We kept the name for luck.',
      icon: '💻',
      color: '#0066cc',
      impact: 'Birth of our engineering culture',
      people: 'Alex, Jamie'
    },
    {
      date: 'February 3, 2026',
      title: 'First Client Meeting',
      desc: 'Met a founder in a coffee shop. We had no portfolio. They had no budget. We both took a chance. Three years later, they\'re still a client.',
      icon: '☕',
      color: '#10B981',
      impact: 'First revenue, first friend',
      people: 'Sam, Casey'
    },
    {
      date: 'March 22, 2026',
      title: 'Incorporation Day',
      desc: 'Officially became PureLatency Inc. Celebrated with pizza in an empty apartment. The LLC papers are still framed in our office.',
      icon: '📄',
      color: '#7C3AED',
      impact: 'We became real',
      people: 'All founders'
    },
    {
      date: 'April 10, 2026',
      title: 'First Hire',
      desc: 'Hired our first employee — a designer who applied because she loved our "vibe." She still runs our design team.',
      icon: '🎨',
      color: '#F59E0B',
      impact: 'From founders to team',
      people: 'Priya'
    },
    {
      date: 'May 18, 2026',
      title: 'First Office',
      desc: 'Moved out of apartments into a real space with a real door that locks. The landlord still hasn\'t fixed the leaky faucet. It\'s become a feature.',
      icon: '🏢',
      color: '#EC4899',
      impact: 'Place to call our own',
      people: 'Entire team'
    },
    {
      date: 'June 5, 2026',
      title: 'First Profit Share',
      desc: 'Distributed our first profit share. Nobody expected it. Everyone cried a little. We do it every quarter now.',
      icon: '💰',
      color: '#6366F1',
      impact: 'Shared success',
      people: 'Finance team'
    },
    {
      date: 'July 22, 2026',
      title: 'First Conference Talk',
      desc: 'Jamie spoke at a major tech conference. Our logo on the big screen. We watched from the back row, holding hands, terrified and proud.',
      icon: '🎤',
      color: '#14B8A6',
      impact: 'Industry recognition',
      people: 'Jamie'
    },
    {
      date: 'August 14, 2026',
      title: 'Launched Starling Post',
      desc: 'Our first product launch. The site crashed three times. We didn\'t sleep for 48 hours. Best week of our lives.',
      icon: '🚀',
      color: '#8B5CF6',
      impact: 'From services to products',
      people: 'Product team'
    },
    {
      date: 'September 8, 2026',
      title: 'First 100 Users',
      desc: 'Starling Post hit 100 users. We sent each one a handwritten thank-you note. Some replied with photos of the notes on their fridges.',
      icon: '👥',
      color: '#D946EF',
      impact: 'Product validation',
      people: 'Sofia'
    },
    {
      date: 'October 1, 2026',
      title: 'First Company Retreat',
      desc: 'Rented a cabin in Tahoe. Built a campfire. Stayed up too late. Came back with 47 new inside jokes and zero regrets.',
      icon: '🏕️',
      color: '#F97316',
      impact: 'Team bonds deepened',
      people: 'Everyone'
    },
    {
      date: 'November 12, 2026',
      title: 'First Industry Award',
      desc: 'Won "Best Emerging Tech Company" at a local awards show. Sam\'s acceptance speech went viral (internally). We still quote it.',
      icon: '🏆',
      color: '#0066cc',
      impact: 'External validation',
      people: 'Sam'
    },
    {
      date: 'December 20, 2026',
      title: 'First Holiday Party',
      desc: 'Threw a holiday party for team and families. Seeing partners meet, kids play, and our team relaxed — we knew we\'d built something special.',
      icon: '🎄',
      color: '#10B981',
      impact: 'Family became community',
      people: 'Everyone + families'
    }
  ];

  const theUpcoming = [
    {
      quarter: 'Q1 2027',
      title: 'London Office Opening',
      desc: 'Expanding to Europe with our first London office. Already have five people ready to relocate.',
      icon: '🇬🇧',
      color: '#0066cc',
      status: 'On Track',
      eta: 'March 2027'
    },
    {
      quarter: 'Q1 2027',
      title: 'Nexus Flow Beta',
      desc: 'Private beta of our workflow automation platform. 200 companies on the waitlist already.',
      icon: '⚡',
      color: '#10B981',
      status: 'On Track',
      eta: 'February 2027'
    },
    {
      quarter: 'Q2 2027',
      title: 'Team 50',
      desc: 'Hitting 50 team members. Planning a massive celebration when we do.',
      icon: '👥',
      color: '#7C3AED',
      status: 'Hiring',
      eta: 'April 2027'
    },
    {
      quarter: 'Q2 2027',
      title: 'First Sustainability Report',
      desc: 'Publishing our first environmental impact report. We care about more than just code.',
      icon: '🌍',
      color: '#F59E0B',
      status: 'In Progress',
      eta: 'May 2027'
    },
    {
      quarter: 'Q3 2027',
      title: 'Aether AI Launch',
      desc: 'Public launch of our AI analytics platform. This one\'s going to be big.',
      icon: '🤖',
      color: '#EC4899',
      status: 'In Development',
      eta: 'August 2027'
    },
    {
      quarter: 'Q3 2027',
      title: 'First Acquisition',
      desc: 'We\'re looking to acquire a small tool that our team already loves. Can\'t say more yet.',
      icon: '🤝',
      color: '#6366F1',
      status: 'Exploring',
      eta: 'September 2027'
    },
    {
      quarter: 'Q4 2027',
      title: 'Asia Expansion',
      desc: 'Opening our Singapore office. The team there is already formed, just need a space.',
      icon: '🌏',
      color: '#14B8A6',
      status: 'Planning',
      eta: 'November 2027'
    },
    {
      quarter: 'Q4 2027',
      title: '10,000 Users',
      desc: 'Hitting 10,000 users across all products. We\'ll send 10,000 donuts. Somehow.',
      icon: '🍩',
      color: '#8B5CF6',
      status: 'Ambitions',
      eta: 'December 2027'
    }
  ];

  const theStories = [
    {
      milestone: 'The First Commit',
      story: 'Alex wrote that first line at 2am, alone, questioning life choices. The code was terrible. It didn\'t matter. It was the start.',
      emotion: '😅',
      author: 'Alex'
    },
    {
      milestone: 'First Client Meeting',
      story: 'I wore a hoodie. They wore a hoodie. We bonded over terrible coffee and mutual imposter syndrome. Best meeting ever.',
      emotion: '☕',
      author: 'Sam'
    },
    {
      milestone: 'Incorporation Day',
      story: 'We filed the paperwork at 11pm. Casey made margaritas with mix from a gas station. We toasted to nothing and everything.',
      emotion: '🍹',
      author: 'Casey'
    },
    {
      milestone: 'First Hire',
      story: 'Priya walked in, looked around, and said "this place feels right." She was our first and best decision.',
      emotion: '❤️',
      author: 'Jordan'
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
          <span className={styles.breadcrumbCurrent}> Milestones</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroBadge}>
              📅 The Journey So Far
            </div>
            <h1 className={styles.heroTitle}>
              Every milestone<br />
              <span className={styles.heroTitleGradient}>
                has a story behind it
              </span>
            </h1>
            <p className={styles.heroText}>
              We believe in celebrating the journey, not just the destination. Every line of code, 
              every client, every late-night breakthrough — they all matter. Here are the moments 
              that shaped us, the ones we're proud of, and the ones still to come.
            </p>
            <div className={styles.buttonGroup}>
              <Link href="#achieved" className={styles.buttonPrimary}>
                See Our Journey
              </Link>
              <Link href="#upcoming" className={styles.buttonSecondary}>
                What's Next ↓
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className={styles.heroCard}>
            <div className={styles.heroCardBg1} />
            <div className={styles.heroCardBg2} />
            <div className={styles.heroCardContent}>
              <div className={styles.heroCardIcon}>🎯</div>
              <h3 className={styles.heroCardTitle}>By the Numbers</h3>
              <ul className={styles.heroCardList}>
                {[
                  '12 major milestones achieved',
                  '8 upcoming in 2027',
                  'Countless memories made'
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
          {['achieved', 'upcoming', 'stories'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
            >
              {tab === 'achieved' ? 'Achieved' : tab === 'upcoming' ? 'Upcoming' : 'Stories'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'achieved' && (
          <section id="achieved" style={{ marginBottom: '6rem' }}>
            <h2 className={styles.sectionTitle}>Milestones We've Reached</h2>
            <p className={styles.sectionSubtitle}>
              Each one a memory, each one a reason to celebrate
            </p>
            <div className={styles.achievedGrid}>
              {achievedMilestones.map((milestone, index) => (
                <div key={milestone.title} className={styles.milestoneCard}>
                  <div 
                    className={styles.milestoneNumber}
                    style={{ backgroundColor: milestone.color }}
                  >
                    #{index + 1}
                  </div>
                  <div className={styles.milestoneIcon}>{milestone.icon}</div>
                  <div className={styles.milestoneDate} style={{ color: milestone.color }}>
                    {milestone.date}
                  </div>
                  <h3 className={styles.milestoneTitle}>{milestone.title}</h3>
                  <p className={styles.milestoneDesc}>{milestone.desc}</p>
                  <div className={styles.milestoneFooter}>
                    <span className={styles.milestoneImpact}>🎯 {milestone.impact}</span>
                    <span className={styles.milestonePeople}>👥 {milestone.people}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'upcoming' && (
          <section id="upcoming" style={{ marginBottom: '6rem' }}>
            <h2 className={styles.sectionTitle}>What's Next</h2>
            <p className={styles.sectionSubtitle}>
              The journey continues. Here's what we're building toward.
            </p>
            <div className={styles.upcomingGrid}>
              {theUpcoming.map((item, index) => (
                <div key={item.title} className={styles.upcomingCard}>
                  {index < theUpcoming.length - 4 && <div className={styles.upcomingConnector} />}
                  <div className={styles.upcomingIcon}>{item.icon}</div>
                  <div className={styles.upcomingQuarter} style={{ color: item.color }}>
                    {item.quarter}
                  </div>
                  <h3 className={styles.upcomingTitle}>{item.title}</h3>
                  <p className={styles.upcomingDesc}>{item.desc}</p>
                  <div className={styles.upcomingFooter}>
                    <span 
                      className={styles.upcomingStatus}
                      style={{ 
                        backgroundColor: `${item.color}20`, 
                        color: item.color 
                      }}
                    >
                      {item.status}
                    </span>
                    <span className={styles.upcomingEta}>{item.eta}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'stories' && (
          <section style={{ marginBottom: '6rem' }}>
            <h2 className={styles.sectionTitle}>Behind the Milestones</h2>
            <p className={styles.sectionSubtitle}>
              The real stories our team remembers
            </p>
            <div className={styles.storiesGrid}>
              {theStories.map(story => (
                <div key={story.milestone} className={styles.storyCard}>
                  <span className={styles.storyEmotion}>{story.emotion}</span>
                  <div className={styles.storyTag}>{story.milestone}</div>
                  <p className={styles.storyText}>"{story.story}"</p>
                  <div className={styles.storyAuthor}>— {story.author}</div>
                </div>
              ))}
            </div>

            {/* Timeline Preview */}
            <div className={styles.timelineSection}>
              <h3 className={styles.timelineTitle}>Our Journey Visualized</h3>
              <div className={styles.timeline}>
                {achievedMilestones.slice(0, 6).map((milestone, i) => (
                  <div key={i} className={styles.timelineItem}>
                    <div className={styles.timelineDate} style={{ color: milestone.color }}>
                      {milestone.date}
                    </div>
                    <div className={styles.timelineDot} style={{ backgroundColor: milestone.color }}>
                      {i < 5 && <div className={styles.timelineLine} />}
                    </div>
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineContentTitle}>{milestone.title}</div>
                      <p className={styles.timelineContentImpact}>{milestone.impact}</p>
                    </div>
                  </div>
                ))}
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