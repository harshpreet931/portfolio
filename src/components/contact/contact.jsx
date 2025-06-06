import React from 'react';
import SEOMetaTags from '../SEOMetaTags';

const Contact = () => {
  // Contact information for structured data
  const contactInfo = {
    name: "Harshpreet Singh",
    email: "harshpreet393.be22@chitkara.edu.in",
    telephone: "+91-XXX-XXX-XXXX", // You can add actual number
    url: "https://harshpreetsingh.vercel.app",
    address: {
      addressLocality: "Punjab",
      addressCountry: "IN"
    },
    availabilityHours: "Mon-Fri 9:00-18:00 IST",
    responseTime: "24 hours"
  };

  const socialLinks = [
    {
      platform: "GitHub",
      url: "https://github.com/harshpreet931",
      icon: "fab fa-github",
      handle: "@harshpreet931",
      description: "View my open source projects and code repositories"
    },
    {
      platform: "LinkedIn", 
      url: "https://www.linkedin.com/in/harshpreet931/",
      icon: "fab fa-linkedin",
      handle: "harshpreet931",
      description: "Connect with me professionally on LinkedIn"
    },
    {
      platform: "Medium",
      url: "https://medium.com/@harshpreet0402", 
      icon: "fab fa-medium",
      handle: "@harshpreet0402",
      description: "Read my technical articles and blog posts"
    },
    {
      platform: "Email",
      url: "mailto:harshpreet393.be22@chitkara.edu.in",
      icon: "fas fa-envelope", 
      handle: "harshpreet393.be22@chitkara.edu.in",
      description: "Send me an email for business inquiries"
    }
  ];

  // Generate LocalBusiness structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Harshpreet Singh - Full Stack Developer",
    "description": "Professional full stack developer offering web development, mobile app development, and software consulting services.",
    "url": "https://harshpreetsingh.vercel.app/contact",
    "telephone": contactInfo.telephone,
    "email": contactInfo.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": contactInfo.address.addressLocality,
      "addressCountry": contactInfo.address.addressCountry
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "serviceType": "Web Development",
    "areaServed": "Worldwide",
    "founder": {
      "@type": "Person",
      "name": "Harshpreet Singh",
      "jobTitle": "Full Stack Developer",
      "email": contactInfo.email,
      "sameAs": socialLinks.slice(0, 3).map(link => link.url)
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": contactInfo.telephone,
      "contactType": "Business",
      "email": contactInfo.email,
      "availableLanguage": ["English", "Hindi", "Punjabi"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development",
          "description": "Custom web application development using modern technologies"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development",
          "description": "Cross-platform mobile application development"
        }
      }
    ]
  };

  return (
    <>
      <SEOMetaTags 
        title="Contact Harshpreet Singh | Full Stack Developer - Hire Me"
        description="Contact Harshpreet Singh for web development projects, mobile apps, and software consulting. Available for freelance work and full-time opportunities. Quick 24-hour response time."
        keywords="contact Harshpreet Singh, hire full stack developer, web development services, mobile app developer, freelance developer Punjab India, software consultant contact"
        image="/contact-og.png"
        url="https://harshpreetsingh.vercel.app/contact"
        type="profile"
        structuredData={structuredData}
        author="Harshpreet Singh"
        robots="index, follow, max-image-preview:large"
        locale="en_IN"
        siteName="Harshpreet Singh Portfolio"
      />

      {/* Contact Page Schema */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      <article className="flex items-center max-w-sm p-4" itemScope itemType="https://schema.org/ContactPage">
        <div className="w-full">
          <header>
            <h1 
              className="text-4xl font-extrabold mb-8 text-center font-SpaceMono text-white"
              itemProp="headline"
            >
              Contact Me 📞
            </h1>
            <div className="text-center mb-6">
              <p 
                className="text-gray-300 text-lg mb-2"
                itemProp="description"
              >
                Let's collaborate on your next project! 🚀
              </p>
              <div className="text-sm text-gray-400" itemProp="about">
                <p>⚡ Quick response within {contactInfo.responseTime}</p>
                <p>🌍 Available worldwide for remote work</p>
                <p>💼 Open to freelance & full-time opportunities</p>
              </div>
            </div>
          </header>

          <section 
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl"
            itemScope 
            itemType="https://schema.org/ContactPoint"
          >
            <h2 className="text-xl font-bold text-white mb-6 text-center">
              🔗 Connect With Me
            </h2>
            
            {/* Contact Methods */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {socialLinks.map((link, index) => (
                <ContactCard 
                  key={index}
                  href={link.url}
                  icon={link.icon}
                  platform={link.platform}
                  handle={link.handle}
                  description={link.description}
                />
              ))}
            </div>

            {/* Quick Contact Info */}
            <div 
              className="text-center border-t border-white border-opacity-20 pt-6"
              itemScope 
              itemType="https://schema.org/Person"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                📍 Contact Information
              </h3>
              <div className="space-y-2 text-gray-300">
                <p itemProp="email">
                  <span className="font-medium">📧 Email:</span> {contactInfo.email}
                </p>
                <p itemProp="addressLocality">
                  <span className="font-medium">📍 Location:</span> {contactInfo.address.addressLocality}, India
                </p>
                <p>
                  <span className="font-medium">🕐 Availability:</span> {contactInfo.availabilityHours}
                </p>
                <p>
                  <span className="font-medium">💬 Languages:</span> English, Hindi, Punjabi
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-6">
              <a 
                href={`mailto:${contactInfo.email}?subject=Project Inquiry&body=Hi Harshpreet, I'd like to discuss a project opportunity with you.`}
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg"
                itemProp="url"
                aria-label="Send email to Harshpreet Singh"
              >
                💌 Send Project Inquiry
              </a>
            </div>
          </section>

          {/* FAQ Section for SEO */}
          <section 
            className="mt-8 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm rounded-xl p-6"
            itemScope 
            itemType="https://schema.org/FAQPage"
          >
            <h2 className="text-xl font-bold text-white mb-4 text-center">
              ❓ Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div itemScope itemType="https://schema.org/Question">
                <h3 className="font-semibold text-blue-300" itemProp="name">
                  What is your typical response time?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-gray-300 text-sm" itemProp="text">
                    I typically respond to emails and messages within 24 hours during business days.
                  </p>
                </div>
              </div>
              
              <div itemScope itemType="https://schema.org/Question">
                <h3 className="font-semibold text-blue-300" itemProp="name">
                  Do you work with international clients?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-gray-300 text-sm" itemProp="text">
                    Yes! I work with clients worldwide and am comfortable with different time zones and remote collaboration.
                  </p>
                </div>
              </div>

              <div itemScope itemType="https://schema.org/Question">
                <h3 className="font-semibold text-blue-300" itemProp="name">
                  What types of projects do you take on?
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-gray-300 text-sm" itemProp="text">
                    I specialize in web applications, mobile apps, and full-stack development projects using modern technologies like React, Node.js, and cloud platforms.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

const ContactCard = ({ href, icon, platform, handle, description }) => (
  <a
    href={href}
    className="group block p-4 bg-white bg-opacity-5 rounded-lg hover:bg-opacity-10 transition-all duration-300 hover:scale-105 transform"
    aria-label={`${platform} - ${description}`}
    target="_blank"
    rel="noopener noreferrer"
    itemScope
    itemType="https://schema.org/ContactPoint"
  >
    <div className="text-center">
      <div className="text-3xl mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
        <i className={icon} itemProp="contactType"></i>
      </div>
      <h4 className="font-semibold text-white text-sm mb-1" itemProp="name">
        {platform}
      </h4>
      <p className="text-xs text-gray-400 mb-2" itemProp="identifier">
        {handle}
      </p>
      <p className="text-xs text-gray-500 hidden group-hover:block transition-all duration-300" itemProp="description">
        {description}
      </p>
    </div>
  </a>
);

export default Contact;
