'use client';
 
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Container from '../layout/ui/Container';
import Button from '../layout/ui/Button';
const Navbar: React.FC = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const pathname = usePathname();
 
  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 10);

    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);
 
  const navItems = [

    { label: 'Home', href: '/' },

    {

      label: 'Products',

      href: '/products',

      dropdown: [

        { label: 'Starling Post', href: '/products/starling-post' },

      ],

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

    },

    {

      label: 'Partners',

      href: '/partners',

      dropdown: [

        { label: 'Overview', href: '/partners' },

      ],

    },

    { label: 'Contact Us', href: '/contact' },

  ];
 
  return (
<nav

      className={`fixed top-0 w-full z-50 transition-all duration-300 ${

        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'

      }`}
>
<Container>
<div className="flex items-center justify-between h-20">

          {/* Logo */}


{/* Logo */}
<Link href="/" className="flex items-center">
  <Image
    src="/images/logo.png"
    alt="Pure Latency Logo"
    width={300}
    height={100}
    priority
    style={{
      objectFit: "contain",
      filter: "brightness(1.1)"
    }}
  />
</Link>
 
          {/* Desktop navigation */}
<div className="hidden lg:flex items-center space-x-8">

            {navItems.map((item) => (
<div

                key={item.label}

                className="relative group"

                onMouseEnter={() => setActiveDropdown(item.label)}

                onMouseLeave={() => setActiveDropdown(null)}
>
<Link

                  href={item.href}

                  className={`inline-flex items-center text-sm font-medium transition-colors hover:text-primary ${

                    pathname === item.href ? 'text-primary' : 'text-gray-700'

                  }`}
>

                  {item.label}

                  {item.dropdown && (
<i className="fas fa-chevron-down ml-1 text-xs" />

                  )}
</Link>
 
                {item.dropdown && activeDropdown === item.label && (
<div

                    className="

                      absolute left-0 top-full

                      w-56 bg-white rounded-lg shadow-lg py-2

                      animate-fade-in

                      group-hover:block

                    "
>

                    {item.dropdown.map((dropItem) => (
<Link

                        key={dropItem.label}

                        href={dropItem.href}

                        className={`block px-4 py-2 text-sm hover:bg-gray-50 hover:text-primary ${

                          pathname === dropItem.href

                            ? 'text-primary bg-gray-50'

                            : 'text-gray-700'

                        }`}
>

                        {dropItem.label}
</Link>

                    ))}
</div>

                )}
</div>

            ))}
</div>
 
          {/* Desktop contact button */}
<Button href="/contact" variant="primary" className="hidden lg:block">

            Contact Us
</Button>
 
          {/* Mobile menu button */}
<button

            className="lg:hidden text-2xl"

            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
>
<i className={`fas fa-${isMobileMenuOpen ? 'times' : 'bars'}`} />
</button>
</div>
 
        {/* Mobile menu */}

        {isMobileMenuOpen && (
<div className="lg:hidden py-4 border-t border-gray-200 animate-slide-up max-h-[80vh] overflow-y-auto">

            {navItems.map((item) => (
<div key={item.label} className="py-2">
<Link

                  href={item.href}

                  className={`block font-medium hover:text-primary ${

                    pathname === item.href ? 'text-primary' : 'text-gray-700'

                  }`}

                  onClick={() => setIsMobileMenuOpen(false)}
>

                  {item.label}
</Link>
 
                {item.dropdown && (
<div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">

                    {item.dropdown.map((dropItem) => (
<Link

                        key={dropItem.label}

                        href={dropItem.href}

                        className={`block text-sm hover:text-primary ${

                          pathname === dropItem.href

                            ? 'text-primary'

                            : 'text-gray-600'

                        }`}

                        onClick={() => setIsMobileMenuOpen(false)}
>

                        {dropItem.label}
</Link>

                    ))}
</div>

                )}
</div>

            ))}
 
            <div className="mt-4 pt-4 border-t border-gray-200">
<Link

                href="/contact"

                className="block w-full text-center bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary-dark transition-colors"

                onClick={() => setIsMobileMenuOpen(false)}
>

                Contact Us
</Link>
</div>
</div>

        )}
</Container>
</nav>

  );

};
 
export default Navbar;

 