'use client';

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import styles from './Products.module.css'; // adjust path as needed

export default function ProductsPage() {
  const products = [
    {
      id: 'starling-post',
      title: 'Starling Post',
      tagline: 'Intelligent team communication',
      desc: 'A modern communication platform that combines real-time messaging, AI assistance, and task management to help teams work smarter.',
      icon: '🚀',
      color: '#7C3AED',
      metrics: ['50k+ users', '4.9 rating', '99.9% uptime'],
      status: 'Live',
      launchDate: 'Feb 2026',
    },
    {
      id: 'nexus-flow',
      title: 'Nexus Flow',
      tagline: 'Enterprise workflow automation',
      desc: 'Automate complex business processes with an intuitive visual workflow builder and seamless integrations.',
      icon: '⚡',
      color: '#10B981',
      metrics: ['10x faster', '40% cost reduction', 'Enterprise-ready'],
      status: 'Coming Soon',
      launchDate: 'Q3 2026',
    },
    {
      id: 'aether-ai',
      title: 'Aether AI',
      tagline: 'AI-powered analytics',
      desc: 'Transform your data into actionable insights with advanced machine learning models and intuitive dashboards.',
      icon: '🤖',
      color: '#F59E0B',
      metrics: ['99.7% accuracy', 'Real-time', 'Custom models'],
      status: 'Coming Soon',
      launchDate: 'Q4 2026',
    },
  ];

  const stats = [
    { value: '3', label: 'Products Launched', icon: '🚀' },
    { value: '50k+', label: 'Active Users', icon: '👥' },
    { value: '99.9%', label: 'Uptime SLA', icon: '📊' },
    { value: '4.9', label: 'Avg Rating', icon: '⭐' },
  ];

  const features = [
    {
      title: 'Real-time Collaboration',
      desc: 'Work together seamlessly with instant messaging, file sharing, and live updates.',
      icon: '⚡',
      color: '#0066cc',
    },
    {
      title: 'AI-Powered Insights',
      desc: 'Get intelligent recommendations, automated summaries, and predictive analytics.',
      icon: '🤖',
      color: '#7C3AED',
    },
    {
      title: 'Enterprise Security',
      desc: 'Bank-level encryption, SSO, and compliance with industry standards.',
      icon: '🔒',
      color: '#10B981',
    },
    {
      title: 'Seamless Integration',
      desc: 'Connect with your favorite tools through our extensive API and integrations.',
      icon: '🔗',
      color: '#F59E0B',
    },
  ];

  const roadmap = [
    {
      quarter: 'Q1 2026',
      items: ['Starling Post Launch', 'Initial User Testing', 'Feedback Integration'],
      status: 'Completed',
      color: '#10B981',
    },
    {
      quarter: 'Q2 2026',
      items: ['Mobile App Release', 'Enterprise Features', 'API v2'],
      status: 'In Progress',
      color: '#F59E0B',
    },
    {
      quarter: 'Q3 2026',
      items: ['Nexus Flow Beta', 'AI Model Training', 'Partner Integrations'],
      status: 'Planned',
      color: '#6366F1',
    },
    {
      quarter: 'Q4 2026',
      items: ['Aether AI Preview', 'Global Expansion', 'Enterprise Rollout'],
      status: 'Planned',
      color: '#7C3AED',
    },
  ];

  const technologies = [
    'React',
    'Next.js 14',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Python',
    'Go',
    'GraphQL',
    'AWS',
    'Kubernetes',
    'Docker',
    'Terraform',
    'TensorFlow',
    'PyTorch',
    'OpenAI',
    'LangChain',
    'PostgreSQL',
    'Redis',
    'MongoDB',
    'Elasticsearch',
  ];

  const testimonials = [
    {
      quote:
        'Starling Post has transformed how our remote team communicates. The AI assistant alone saves us hours each week.',
      author: 'Sarah Chen',
      role: 'Product Lead, InnovateTech',
      product: 'Starling Post',
    },
    {
      quote:
        "The workflow automation capabilities are incredible. We've reduced manual work by 60% since implementing Nexus Flow.",
      author: 'Michael Rodriguez',
      role: 'CTO, FinScale',
      product: 'Nexus Flow',
    },
  ];

  const socialMedia = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/purelatency',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg',
      color: '#E4405F',
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/purelatency',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg',
      color: '#1877F2',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/purelatency',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg',
      color: '#000000',
    },
  ];

  return (
    <>
      <Navbar />

      <main className={styles.container}>
        {/* Social Media Section */}
        <section
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '30px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {socialMedia.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  style={{
                    width: '28px',
                    height: '28px',
                  }}
                />
                <span
                  style={{
                    color: social.color,
                    fontWeight: 500,
                    fontSize: '0.95rem',
                  }}
                >
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Breadcrumb */}
        <div
          style={{
            color: '#86868b',
            marginBottom: '2rem',
            fontSize: '0.9rem',
          }}
        >
          <Link href="/" style={{ color: '#86868b', textDecoration: 'none' }}>
            Home
          </Link>{' '}
          /<span style={{ color: '#1d1d1f' }}> Products</span>
        </div>

        {/* Hero Section */}
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroBadge}>✨ Products Built for Impact</div>
            <h1 className={styles.heroTitle}>
              Software that
              <br />
              <span className={styles.heroTitleGradient}>solves real problems</span>
            </h1>
            <p className={styles.heroText}>
              Every PureLatency product is crafted with intention—built to address specific challenges that teams face
              every day. From communication to automation, we build tools that make work better.
            </p>
            <div className={styles.buttonGroup}>
              <Link href="#products" className={styles.buttonPrimary}>
                Explore Products ↓
              </Link>
              <Link href="/contact" className={styles.buttonSecondary}>
                Request Early Access
              </Link>
            </div>
          </div>

          {/* Right Stats Card */}
          <div className={styles.statsCard}>
            <div className={styles.statsCardBg1} />
            <div className={styles.statsCardBg2} />
            <div className={styles.statsCardContent}>
              <div className={styles.statsCardIcon}>📊</div>
              <h3 className={styles.statsCardTitle}>By the Numbers</h3>
              <ul className={styles.statsCardList}>
                {['3 products and counting', '50,000+ active users', '99.9% average uptime'].map((item, i) => (
                  <li key={i} className={styles.statsCardItem}>
                    <span className={styles.statsCardCheck}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <section className={styles.statsBanner}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Products Grid */}
        <section id="products" style={{ marginBottom: '5rem' }}>
          <h2 className={styles.sectionTitle}>Our Products</h2>
          <p className={styles.sectionSubtitle}>
            Purpose-built tools designed to solve specific challenges and improve how you work
          </p>
          <div className={styles.productsGrid}>
            {products.map((product) => (
              <Link
                key={product.id}
                href={product.status === 'Live' ? `/products/${product.id}` : '#'}
                className={styles.productCard}
                style={{
                  borderColor: '1px solid #e6e6e9', // default, overridden on hover
                  opacity: product.status === 'Coming Soon' ? 0.8 : 1,
                }}
              >
                <div className={styles.productIcon}>{product.icon}</div>
                <div className={styles.productHeader}>
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <span
                    className={`${styles.productStatus} ${
                      product.status === 'Live' ? styles.live : ''
                    }`}
                  >
                    {product.status}
                  </span>
                </div>
                <p className={styles.productTagline}>{product.tagline}</p>
                <p className={styles.productDesc}>{product.desc}</p>
                <div className={styles.productMetrics}>
                  {product.metrics.map((metric) => (
                    <span key={metric} className={styles.productMetric}>
                      {metric}
                    </span>
                  ))}
                </div>
                <div className={styles.productFooter}>
                  <span className={styles.productDate}>{product.launchDate}</span>
                  {product.status === 'Live' && (
                    <span className={styles.productLink}>Learn more →</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Features */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 className={styles.sectionTitle}>Features Across Our Products</h2>
          <p className={styles.sectionSubtitle}>
            Consistent quality and thoughtful design in everything we build
          </p>
          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <div key={feature.title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 className={styles.sectionTitle}>Product Roadmap</h2>
          <p className={styles.sectionSubtitle}>What&apos;s coming next from PureLatency</p>
          <div className={styles.roadmapGrid}>
            {roadmap.map((quarter) => (
              <div key={quarter.quarter} className={styles.roadmapCard}>
                <div className={styles.roadmapHeader}>
                  <h3 className={styles.roadmapQuarter}>{quarter.quarter}</h3>
                  <span
                    className={styles.roadmapStatus}
                    style={{ background: `${quarter.color}20`, color: quarter.color }}
                  >
                    {quarter.status}
                  </span>
                </div>
                <ul className={styles.roadmapList}>
                  {quarter.items.map((item) => (
                    <li key={item} className={styles.roadmapItem}>
                      <span className={styles.roadmapArrow}>→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 className={styles.sectionTitle}>Built With</h2>
          <p className={styles.sectionSubtitle}>Modern technologies powering our products</p>
          <div className={styles.techStack}>
            {technologies.map((tech) => (
              <span key={tech} className={styles.techItem}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 className={styles.sectionTitle}>What Our Users Say</h2>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <span className={styles.testimonialQuote}>"</span>
                <p className={styles.testimonialText}>{testimonial.quote}</p>
                <div>
                  <strong className={styles.testimonialAuthor}>{testimonial.author}</strong>
                  <p className={styles.testimonialMeta}>
                    {testimonial.role} · {testimonial.product}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contactSection}>
          <div className={styles.contactCard}>
            <h2 className={styles.contactTitle}>Contact Us</h2>
            <p className={styles.contactText}>
              Be always in front line, get in touch today.
            </p>
            <Link href="/contact" className={styles.contactButton}>
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
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerGrid}>
            <div>
              <div className={styles.footerLogo}>Pure Latency</div>
              <p className={styles.footerText}>
                Building software that solves real problems and makes work better.
              </p>
            </div>
            <div>
              <h4 className={styles.footerHeading}>Products</h4>
              <ul className={styles.footerList}>
                {products.map((product) => (
                  <li key={product.id} className={styles.footerListItem}>
                    <Link href={`/products/${product.id}`} className={styles.footerLink}>
                      {product.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={styles.footerHeading}>Company</h4>
              <ul className={styles.footerList}>
                {['About', 'Careers', 'Blog', 'Contact'].map((item) => (
                  <li key={item} className={styles.footerListItem}>
                    <Link href={`/${item.toLowerCase()}`} className={styles.footerLink}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={styles.footerHeading}>Connect</h4>
              <ul className={styles.footerList}>
                {socialMedia.map((social) => (
                  <li key={social.name} className={styles.footerListItem}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.footerSocialLink}
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