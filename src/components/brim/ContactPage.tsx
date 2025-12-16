import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';
import { Footer } from './Footer';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    query: '',
    number: '',
    email: '',
    productName: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappNumber = '919445887243';
    const message = `
New Enquiry from Website:

Name: ${formData.name}
Phone: ${formData.number}
Email: ${formData.email}
Product: ${formData.productName}

Query:
${formData.query}
    `.trim();

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');

    // Also create mailto link as backup
    const subject = `Enquiry from ${formData.name} - ${formData.productName}`;
    const body = `
Name: ${formData.name}
Phone: ${formData.number}
Email: ${formData.email}
Product: ${formData.productName}

Query:
${formData.query}
    `.trim();

    const mailtoLink = `mailto:brimdisplay@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        query: '',
        number: '',
        email: '',
        productName: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#000100] pt-20">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#B6B6B4] mb-4 text-center">
              Get in Touch
            </h1>
            <p className="text-lg text-[#8A8A8A] mb-12 text-center">
              Fill out the form below and we'll get back to you shortly
            </p>

            <div className="bg-[#292929] rounded-lg p-8 sm:p-12 border border-[#B6B6B4]/20">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-[#B6B6B4] mx-auto mb-4" />
                  <h3 className="text-2xl text-[#F5F5F5] mb-2">
                    Thank You!
                  </h3>
                  <p className="text-[#8A8A8A]">
                    Your enquiry has been sent. We'll contact you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-[#F5F5F5] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#000100] border border-[#B6B6B4]/20 rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#B6B6B4] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="number" className="block text-[#F5F5F5] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="number"
                      name="number"
                      required
                      value={formData.number}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#000100] border border-[#B6B6B4]/20 rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#B6B6B4] transition-colors"
                      placeholder="+91 1234567890"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-[#F5F5F5] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#000100] border border-[#B6B6B4]/20 rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#B6B6B4] transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Product Name */}
                  <div>
                    <label htmlFor="productName" className="block text-[#F5F5F5] mb-2">
                      Product Interest *
                    </label>
                    <select
                      id="productName"
                      name="productName"
                      required
                      value={formData.productName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#000100] border border-[#B6B6B4]/20 rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#B6B6B4] transition-colors"
                    >
                      <option value="">Select a product</option>
                      <option value="Mini LED Clock">Mini LED Clock</option>
                      <option value="Jumbo LED Clock">Jumbo LED Clock</option>
                      <option value="Calendar Clock">Calendar Clock</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  {/* Query */}
                  <div>
                    <label htmlFor="query" className="block text-[#F5F5F5] mb-2">
                      Your Query *
                    </label>
                    <textarea
                      id="query"
                      name="query"
                      required
                      value={formData.query}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-[#000100] border border-[#B6B6B4]/20 rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#B6B6B4] transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#B6B6B4] text-[#000100] rounded-lg hover:bg-[#F5F5F5] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Enquiry
                  </button>

                  <p className="text-sm text-[#8A8A8A] text-center mt-4">
                    Your enquiry will be sent via WhatsApp and email
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
