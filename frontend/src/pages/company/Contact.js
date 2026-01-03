import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Navigation } from 'lucide-react';

const ContactContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Hero = styled.section`
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #ffffff 0%, #fb923c 50%, #f97316 100%);
  color: #333;
  margin: 0 -20px 60px;
  border-radius: 0 0 20px 20px;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ContactInfo = styled.div`
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
`;

const ContactForm = styled.form`
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 12px;
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const MapSection = styled.section`
  background: #f8fafc;
  padding: 80px 40px;
  margin: 80px -20px;
  text-align: center;
  border-radius: 20px;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [userMarker, setUserMarker] = useState(null);

  // Company location (Vadodara, Gujarat)
  const companyLocation = { lat: 22.3072, lng: 73.1812 };

  useEffect(() => {
    // Using embedded iframe - no API loading needed
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const getCurrentLocation = () => {
    setIsGettingLocation(true);
    setLocationError(null);
    
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by this browser.');
      setIsGettingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy
        };
        
        setUserLocation(location);
        setIsGettingLocation(false);
      },
      (error) => {
        let errorMessage = 'Unable to retrieve your location.';
        switch(error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Location access denied by user.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information unavailable.';
            break;
          case error.TIMEOUT:
            errorMessage = 'Location request timed out.';
            break;
        }
        setLocationError(errorMessage);
        setIsGettingLocation(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 30000
      }
    );
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: "hello@initx.online\nsupport@initx.online"
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      details: "+91-98765-43210\n+91-98765-43211"
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      details: "123 Tech Street\nVadodara, Gujarat 390001"
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM\nSat - Sun: 10:00 AM - 4:00 PM"
    }
  ];

  return (
    <ContactContainer>
      <Hero>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '3rem', marginBottom: '20px' }}
        >
          Contact Us
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: '1.2rem', opacity: 0.9 }}
        >
          Get in touch with our team. We're here to help you succeed.
        </motion.p>
      </Hero>

      <ContactGrid>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ContactInfo>
            <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#333' }}>Get In Touch</h2>
            <p style={{ color: '#666', marginBottom: '40px', lineHeight: '1.6' }}>
              Have a question or want to work together? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
            
            {contactInfo.map((info, index) => (
              <InfoItem key={index}>
                <IconWrapper>{info.icon}</IconWrapper>
                <div>
                  <h4 style={{ color: '#333', marginBottom: '5px' }}>{info.title}</h4>
                  <p style={{ color: '#666', whiteSpace: 'pre-line' }}>{info.details}</p>
                </div>
              </InfoItem>
            ))}
          </ContactInfo>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ContactForm onSubmit={handleSubmit}>
            <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#333' }}>Send Message</h2>
            
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
              style={{ 
                width: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '10px' 
              }}
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </ContactForm>
        </motion.div>
      </ContactGrid>

      <MapSection>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>Find Us</h2>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
          Visit our office in the heart of Vadodara, Gujarat
        </p>
        
        <div style={{
          width: '100%',
          height: '400px',
          borderRadius: '15px',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58911.766!2d73.1812!3d22.3072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf31e4b2b5b7%3A0x2b2b2b2b2b2b2b2b!2sVadodara%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1640995200000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          
          <button
            onClick={getCurrentLocation}
            disabled={isGettingLocation}
            style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              background: 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: isGettingLocation ? 'not-allowed' : 'pointer',
              fontSize: '0.9rem',
              fontWeight: '500',
              opacity: isGettingLocation ? 0.7 : 1,
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
              zIndex: 10
            }}
          >
            <Navigation size={16} />
            {isGettingLocation ? 'Getting...' : 'My Location'}
          </button>
          
          {userLocation && (
            <div style={{
              position: 'absolute',
              bottom: '15px',
              left: '15px',
              right: '15px',
              background: 'rgba(251, 146, 60, 0.95)',
              color: 'white',
              padding: '15px',
              borderRadius: '10px',
              fontSize: '0.9rem',
              zIndex: 10,
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>📍 Your Current Location:</div>
              <div>Lat: {userLocation.lat.toFixed(6)}, Lng: {userLocation.lng.toFixed(6)}</div>
              {userLocation.accuracy && (
                <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>Accuracy: ±{Math.round(userLocation.accuracy)}m</div>
              )}
              {userLocation.address && (
                <div style={{ marginTop: '8px', fontSize: '0.85rem' }}>{userLocation.address}</div>
              )}
              {userLocation.city && userLocation.country && (
                <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>{userLocation.city}, {userLocation.country}</div>
              )}
            </div>
          )}
          
          {locationError && (
            <div style={{ 
              position: 'absolute',
              bottom: '15px',
              left: '15px',
              right: '15px',
              padding: '12px',
              background: 'rgba(239, 68, 68, 0.9)',
              borderRadius: '8px',
              color: 'white',
              fontSize: '0.9rem',
              zIndex: 10
            }}>
              {locationError}
            </div>
          )}
        </div>
      </MapSection>
    </ContactContainer>
  );
};

export default Contact;