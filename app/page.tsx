"use client"

import { useState } from "react"

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "health",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(
      `Thank you ${formData.name}! We'll contact you shortly about ${formData.insuranceType} insurance.`,
    )
    setFormData({ name: "", email: "", phone: "", insuranceType: "health" })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">
              SecureLife Insurance
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#coverage"
                className="text-gray-700 hover:text-indigo-600"
              >
                Coverage
              </a>
              <a
                href="#benefits"
                className="text-gray-700 hover:text-indigo-600"
              >
                Benefits
              </a>
              <a href="#quote" className="text-gray-700 hover:text-indigo-600">
                Get Quote
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Protect What Matters Most
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Comprehensive insurance coverage tailored to your needs. Get peace
            of mind with affordable rates and excellent customer service.
          </p>
          <a
            href="#quote"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>

      {/* Coverage Types */}
      <section id="coverage" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Coverage Options
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">🏥</div>
              <h4 className="text-xl font-semibold mb-3">Health Insurance</h4>
              <p className="text-gray-600">
                Comprehensive medical coverage for you and your family.
                Including preventive care, hospitalization, and prescription
                drugs.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">🚗</div>
              <h4 className="text-xl font-semibold mb-3">Auto Insurance</h4>
              <p className="text-gray-600">
                Full protection for your vehicle with liability, collision, and
                comprehensive coverage options at competitive rates.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">🏠</div>
              <h4 className="text-xl font-semibold mb-3">Home Insurance</h4>
              <p className="text-gray-600">
                Safeguard your home and belongings against theft, damage, and
                natural disasters with customizable coverage.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">💼</div>
              <h4 className="text-xl font-semibold mb-3">Life Insurance</h4>
              <p className="text-gray-600">
                Provide financial security for your loved ones with term life,
                whole life, and universal life insurance options.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">🏢</div>
              <h4 className="text-xl font-semibold mb-3">Business Insurance</h4>
              <p className="text-gray-600">
                Protect your business with liability, property, and workers'
                compensation insurance tailored to your industry.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">✈️</div>
              <h4 className="text-xl font-semibold mb-3">Travel Insurance</h4>
              <p className="text-gray-600">
                Travel with confidence knowing you're covered for trip
                cancellations, medical emergencies, and lost luggage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ✓
              </div>
              <h4 className="font-semibold text-lg mb-2">24/7 Support</h4>
              <p className="text-gray-600">
                Round-the-clock customer service whenever you need us
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                💰
              </div>
              <h4 className="font-semibold text-lg mb-2">Competitive Rates</h4>
              <p className="text-gray-600">
                Best prices in the market with flexible payment options
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ⚡
              </div>
              <h4 className="font-semibold text-lg mb-2">Fast Claims</h4>
              <p className="text-gray-600">
                Quick and hassle-free claims processing
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🏆
              </div>
              <h4 className="font-semibold text-lg mb-2">Trusted Provider</h4>
              <p className="text-gray-600">
                Over 25 years of industry experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Get Your Free Quote
          </h3>
          <p className="text-center text-gray-600 mb-8">
            Fill out the form below and we'll get back to you within 24 hours
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-lg shadow-md"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="(555) 123-4567"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="insuranceType"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Insurance Type
              </label>
              <select
                id="insuranceType"
                name="insuranceType"
                value={formData.insuranceType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="health">Health Insurance</option>
                <option value="auto">Auto Insurance</option>
                <option value="home">Home Insurance</option>
                <option value="life">Life Insurance</option>
                <option value="business">Business Insurance</option>
                <option value="travel">Travel Insurance</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Request Free Quote
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">SecureLife Insurance</h4>
              <p className="text-gray-400">
                Protecting families and businesses since 1999
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#coverage" className="hover:text-white">
                    Coverage Options
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="hover:text-white">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#quote" className="hover:text-white">
                    Get Quote
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact Us</h5>
              <ul className="space-y-2 text-gray-400">
                <li>📞 1-800-SECURE-1</li>
                <li>📧 info@securelife.com</li>
                <li>📍 123 Insurance Ave, Suite 100</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 SecureLife Insurance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
