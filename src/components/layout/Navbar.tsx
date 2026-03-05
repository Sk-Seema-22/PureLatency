'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  const isActive = (href: string) => pathname === href;
  const isParentActive = (item: (typeof navItems)[number]) => {
    if (pathname === item.href) return true;
    if (item.dropdown) {
      return item.dropdown.some((drop) => pathname === drop.href);
    }
    return false;
  };

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Products',
      href: '/products',
      dropdown: [{ label: 'Starling Post', href: '/products/starling-post' }],
    },
    {
      label: 'Services',
      href: '/services',
      dropdown: [
        { label: 'Overview', href: '/services' },
        { label: 'Applications', href: '/services/applications' },
        { label: 'Web Development', href: '/services/web-development' },
        { label: 'Data and AI', href: '/services/data-ai' },
        { label: 'Cloud and DevOps', href: '/services/cloud-devops' },
        { label: 'Infrastructure', href: '/services/infrastructure' },
        { label: 'Quantum Compute', href: '/services/quantum-compute' },
        { label: 'Fiber Optics', href: '/services/fiber-optics' },
      ],
    },
    {
      label: 'Industries',
      href: '/industries',
      dropdown: [
        { label: 'Enterprise', href: '/industries/enterprise' },
        { label: 'Government', href: '/industries/government' },
        { label: 'Telco and Space', href: '/industries/telco-space' },
      ],
    },
    {
      label: 'About Us',
      href: '/about',
      dropdown: [
        { label: 'Overview', href: '/about' },
        { label: 'Purpose and Beliefs', href: '/about/beliefs' },
        { label: 'Milestones', href: '/about/milestones' },
      ],
    }
  ];

  const socialMedia = [
    { name: 'Instagram', href: 'https://instagram.com/purelatency', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg' },
    { name: 'Facebook', href: 'https://facebook.com/purelatency', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg' },
    { name: 'Twitter',
      href: 'https://twitter.com/purelatency',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg',
      color: '#000000'
    }
  ];

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 50,
    transition: 'all 0.3s',
    background: isScrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(8px)' : 'none',
    boxShadow: isScrolled ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 2rem',
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '80px',
  };

  const desktopNavStyle: React.CSSProperties = {
    display: !mounted || isMobile ? 'none' : 'flex',
    alignItems: 'center',
    gap: '2rem',
  };

  const navLinkStyle = (active: boolean): React.CSSProperties => ({
    fontSize: '0.875rem',
    fontWeight: 500,
    color: active ? '#0066cc' : '#374151',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem',
  });

  const dropdownStyle: React.CSSProperties = {
    position: 'absolute',
    left: 0,
    top: '100%',
    width: '224px',
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    padding: '0.5rem 0',
    zIndex: 50,
  };

  const dropdownItemStyle = (active: boolean): React.CSSProperties => ({
    display: 'block',
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    color: active ? '#0066cc' : '#374151',
    textDecoration: 'none',
    background: active ? '#f9fafb' : 'transparent',
  });

  const mobileMenuButtonStyle: React.CSSProperties = {
    display: !mounted || isMobile ? 'block' : 'none',
    fontSize: '1.5rem',
    padding: '0.5rem',
    borderRadius: '8px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    color: '#374151',
  };

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.2)',
    backdropFilter: 'blur(4px)',
    zIndex: 40,
  };

  const mobileMenuPanelStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '300px',
    height: '100%',
    background: 'white',
    boxShadow:
      '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
    zIndex: 60,
    isolation: 'isolate',
    overflowY: 'auto',
    animation: 'slideIn 0.3s ease-out forwards',
    pointerEvents: 'auto',
  };

  const mobileHeaderStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem',
    borderBottom: '1px solid #e6e6e9',
  };

  const mobileNavStyle: React.CSSProperties = {
    padding: '1.5rem',
  };

  const mobileNavItemStyle: React.CSSProperties = {
    borderBottom: '1px solid #e6e6e9',
    paddingBottom: '1rem',
    marginBottom: '1rem',
  };

  const mobileNavLinkStyle = (active: boolean): React.CSSProperties => ({
    display: 'block',
    fontWeight: 500,
    fontSize: '1.125rem',
    color: active ? '#0066cc' : '#1d1d1f',
    textDecoration: 'none',
    marginBottom: '0.5rem',
  });

  const mobileDropdownItemStyle = (active: boolean): React.CSSProperties => ({
    display: 'block',
    paddingLeft: '1rem',
    fontSize: '0.875rem',
    color: active ? '#0066cc' : '#86868b',
    textDecoration: 'none',
    marginBottom: '0.5rem',
  });

  /* ✅ Desktop Contact Button */
  const desktopContactButtonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#0066cc',
    color: '#ffffff',
    padding: '10px 22px',
    borderRadius: '999px',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '0.9rem',
    letterSpacing: '0.3px',
  };

  /* ✅ Mobile Contact Button */
  const mobileContactButtonStyle: React.CSSProperties = {
    display: 'block',
    background: '#0066cc',
    color: '#ffffff',
    padding: '8px 18px',
    borderRadius: '999px',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '0.875rem',
    textAlign: 'center',
  };

  const mobileSocialStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginTop: '2rem',
    padding: '0 1.5rem',
  };

  const mobileSocialImgStyle: React.CSSProperties = {
    width: '24px',
    height: '24px',
    filter: 'brightness(0.8)',
    transition: 'filter 0.2s',
  };

  return (
    <>
      <nav style={navStyle} aria-label="Main navigation">
        <div style={containerStyle}>
          <div style={headerStyle}>
            
            <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src="/images/logo.png"
                alt="Pure Latency Logo"
                width={80}
                height={32}
                priority
                style={{
                  objectFit: 'contain',
                  width: 'auto',
                  height: mounted && isMobile ? '28px' : '40px',
                }}
              />
            </Link>

            <div style={desktopNavStyle}>
              {navItems.map((item) => (
                <div
                  key={item.label}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href={item.href} style={navLinkStyle(isParentActive(item))}>
                    {item.label}
                  </Link>

                  {item.dropdown && activeDropdown === item.label && (
                    <div style={dropdownStyle}>
                      {item.dropdown.map((drop) => (
                        <Link
                          key={drop.label}
                          href={drop.href}
                          style={dropdownItemStyle(isActive(drop.href))}
                        >
                          {drop.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ✅ Desktop Contact Button */}
            <Link href="/contact" style={desktopContactButtonStyle}>
              Contact Us
            </Link>

            <button
              style={mobileMenuButtonStyle}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;