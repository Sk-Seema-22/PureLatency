'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    organisation: '',
    email: '',
    designation: '',
    enquiryType: 'Sales related enquiry',
    country: 'Singapore',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted');
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '1px solid rgba(255,255,255,0.4)',
    borderRadius: '8px',
    background: 'transparent',
    color: '#fff',
    fontSize: '0.95rem'
  };

  const labelStyle = {
    color: '#fff',
    fontSize: '0.9rem',
    marginBottom: '6px',
    display: 'block'
  };

  const linkStyle = {
    color: '#e6e6e6',
    textDecoration: 'none',
    fontSize: '0.95rem',
    opacity: 0.9
  };

  return (
    <>
      <Navbar />

      {/* Gradient Background Section */}
      <main
        style={{
          padding: '120px 20px 80px',
          background: `
            radial-gradient(circle at 20% 20%, rgba(255, 0, 128, 0.35), transparent 45%),
            radial-gradient(circle at 80% 0%, rgba(140, 0, 255, 0.45), transparent 50%),
            linear-gradient(180deg, #1c2b6b 0%, #1a1f4a 100%)
          `,
          minHeight: '100vh'
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto', color: '#fff' }}>
          
          {/* Social Links */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '24px', marginBottom: '40px' }}>
            {['LinkedIn','Instagram','Twitter','GitHub'].map(item => (
              <a key={item} href="#" style={{ color:'#fff', opacity:0.85, textDecoration:'none' }}>
                {item}
              </a>
            ))}
          </div>

          {/* Heading */}
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 600 }}>
            Contact us
          </h1>

          <p style={{ opacity: 0.9, maxWidth: '700px', marginBottom: '60px', lineHeight: 1.6 }}>
            We endeavour to respond to your email as soon as possible. When sending in an enquiry,
            please fill your contact details and indicate the request purpose for our follow-up.
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'30px', marginBottom:'30px' }}>
              <div>
                <label style={labelStyle}>Full name</label>
                <input name="fullName" value={formData.fullName} onChange={handleChange} style={inputStyle}/>
              </div>
              <div>
                <label style={labelStyle}>Email address</label>
                <input name="email" value={formData.email} onChange={handleChange} style={inputStyle}/>
              </div>
            </div>

            {/* Row 2 */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'30px', marginBottom:'30px' }}>
              <div>
                <label style={labelStyle}>Organisation</label>
                <input name="organisation" value={formData.organisation} onChange={handleChange} style={inputStyle}/>
              </div>
              <div>
                <label style={labelStyle}>Designation</label>
                <input name="designation" value={formData.designation} onChange={handleChange} style={inputStyle}/>
              </div>
            </div>

            {/* Row 3 */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'30px', marginBottom:'30px' }}>
              <div>
                <label style={labelStyle}>Sales related enquiry</label>
                <select name="enquiryType" value={formData.enquiryType} onChange={handleChange} style={inputStyle}>
                  <option>Sales related enquiry</option>
                  <option>Technical support</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Country</label>
                <select name="country" value={formData.country} onChange={handleChange} style={inputStyle}>
                  <option>Singapore</option>
                  <option>India</option>
                  <option>USA</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div style={{ marginBottom:'40px' }}>
              <label style={labelStyle}>Tell us more about your enquiry</label>
              <textarea
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={{...inputStyle, resize:'vertical'}}
              />
            </div>

            <button
              style={{
                border:'2px solid white',
                padding:'14px 60px',
                background:'transparent',
                color:'#fff',
                borderRadius:'60px 60px 0 60px',
                cursor:'pointer'
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </main>

      {/* ENTERPRISE FOOTER */}
      <footer
        style={{
          background: '#0b0b0f',
          color: '#ccc',
          padding: '80px 20px 40px'
        }}
      >
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '60px',
              marginBottom: '60px'
            }}
          >
            {/* Services */}
            <div>
              <h4 style={{ color: '#18bfff', marginBottom: '20px' }}>Services</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="#" style={linkStyle}>Applications</Link>
                <Link href="#" style={linkStyle}>Cloud</Link>
                <Link href="#" style={linkStyle}>Cyber</Link>
                <Link href="#" style={linkStyle}>Data</Link>
                <Link href="#" style={linkStyle}>Digital</Link>
                <Link href="#" style={linkStyle}>Engineering</Link>
                <Link href="#" style={linkStyle}>Infrastructure</Link>
                <Link href="#" style={linkStyle}>Platforms</Link>
              </div>
            </div>

            {/* Industries */}
            <div>
              <h4 style={{ color: '#18bfff', marginBottom: '20px' }}>Industries</h4>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                <Link href="#" style={linkStyle}>Enterprise</Link>
                <Link href="#" style={linkStyle}>Gov+</Link>
                <Link href="#" style={linkStyle}>Telco+</Link>
              </div>
            </div>

            {/* Knowledge */}
            <div>
              <h4 style={{ color: '#18bfff', marginBottom: '20px' }}>Knowledge centre</h4>
              <Link href="#" style={linkStyle}>Overview</Link>
            </div>

            {/* Partners */}
            <div>
              <h4 style={{ color: '#18bfff', marginBottom: '20px' }}>Partners</h4>
              <Link href="#" style={linkStyle}>Our partner network</Link>
            </div>

            {/* About */}
            <div>
              <h4 style={{ color: '#18bfff', marginBottom: '20px' }}>About Us</h4>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                <Link href="#" style={linkStyle}>Purpose and beliefs</Link>
                <Link href="#" style={linkStyle}>Leadership</Link>
                <Link href="#" style={linkStyle}>Regional presence</Link>
                <Link href="#" style={linkStyle}>Newsroom</Link>
                <Link href="#" style={linkStyle}>Code of conduct</Link>
                <Link href="#" style={linkStyle}>Milestones</Link>
                <Link href="#" style={linkStyle}>Distinguished engineers</Link>
                <Link href="#" style={linkStyle}>Sustainability</Link>
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: '1px solid #222',
              paddingTop: '20px',
              textAlign: 'center',
              color: '#777'
            }}
          >
            © 2026 PureLatency. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}