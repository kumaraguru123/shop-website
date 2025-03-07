import React from 'react';
import { Link } from 'react-scroll';
import { Mail, Phone, Printer, BookCopy, Bookmark, Package2, Award, Clock, BadgeCheck, MapPin, Apple as WhatsApp } from 'lucide-react';
import Navbar from './components/Navbar';
import Section from './components/Section';

function App() {
  const whatsappNumber = "8110030904";
  const emailAddress = "krishnaxerox07@gmail.com";
  const location = "N Block, Sri krishna arts and science college, Coimbatore";

  const services = [
    { icon: <Printer size={24} />, name: "Printing", description: "High-quality digital and offset printing services" },
    { icon: <BookCopy size={24} />, name: "Xerox", description: "Fast and clear copying services" },
    { icon: <Bookmark size={24} />, name: "Binding", description: "Professional binding solutions" },
    { icon: <Package2 size={24} />, name: "Project Works", description: "Complete project printing and binding" }
  ];

  const features = [
    { icon: <Award size={24} />, title: "Premium Quality", description: "Industry-leading print quality" },
    { icon: <Clock size={24} />, title: "Fast Turnaround", description: "Quick delivery on all orders" },
    { icon: <BadgeCheck size={24} />, title: "Guaranteed Service", description: "100% satisfaction guaranteed" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80"
            alt="Xerox Shop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Krishna Xerox</h1>
          <p className="text-xl md:text-2xl mb-8">Your Premier Printing Partner</p>
          <div className="flex gap-4 justify-center">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full transition-colors"
            >
              <WhatsApp size={20} />
              WhatsApp
            </a>
            <a
              href={`mailto:${emailAddress}`}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full transition-colors"
            >
              <Mail size={20} />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <Section id="about" title="About Us" className="bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-6">
            Krishna Xerox is your go-to destination for high-quality printing, delivering precision and excellence in every project. Our advanced facility combines the latest technology with expert craftsmanship to produce outstanding results. With a strong focus on quality, efficiency, and customer satisfaction, we ensure your printing needs are met with perfection.
            We take pride in our commitment to quality, efficiency, and customer satisfaction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-500 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" title="Our Services">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact Us" className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-green-500 transition-colors p-4 rounded-lg hover:bg-gray-50"
                >
                  <WhatsApp size={24} />
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div>{whatsappNumber}</div>
                  </div>
                </a>
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex items-center gap-3 text-gray-600 hover:text-blue-500 transition-colors p-4 rounded-lg hover:bg-gray-50"
                >
                  <Mail size={24} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div>{emailAddress}</div>
                  </div>
                </a>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-gray-600 p-4 rounded-lg hover:bg-gray-50">
                  <Phone size={24} />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div>{whatsappNumber}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600 p-4 rounded-lg hover:bg-gray-50">
                  <MapPin size={24} />
                  <div>
                    <div className="font-semibold">Location</div>
                    <div>{location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default App;