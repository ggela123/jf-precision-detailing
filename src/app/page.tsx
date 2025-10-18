"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-between px-6 md:px-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="w-full md:w-1/2 space-y-8 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white"
          >
            Experience Your Car&apos;s
            <span className="block text-blue-600 dark:text-blue-400">
              Ultimate Shine
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
          >
            At{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              J&F Precision Detailing
            </span>
            , we believe every car deserves to shine. From quick refreshes to
            full details, our friendly team takes pride in making your vehicle
            look its best while offering reliable, professional service you can
            count on.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#packages"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center"
            >
              Learn More
            </a>
            <a
              href="/booking"
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors font-semibold text-center"
            >
              Book Now
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="hidden md:block w-1/2 relative"
        >
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/about front.png"
              alt="Professional Car Detailing"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </motion.div>
      </section>

      {/* Packages Section */}
      <section
        id="packages"
        className="py-20 px-6 md:px-16 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Detailing Packages
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive detailing packages designed to meet
              every need and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Silver Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">Ag</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Silver
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Essential Care Package
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                  Exterior Services:
                </h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Pre-Soak, Tire and Wheel Detail</li>
                  <li>• Bug Removal, Gas Cap Cleanse</li>
                  <li>• Foam Bath, Scratch-less Hand Wash</li>
                  <li>• Door Jambs, Tire Shine</li>
                </ul>

                <h4 className="font-semibold text-lg text-gray-900 dark:text-white mt-6">
                  Interior Services:
                </h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Full Vacuum, Windows Cleaned</li>
                  <li>• Clean/Disinfect Interior Components</li>
                  <li>• UV Protection, Leather Conditioning</li>
                  <li>• Fragrance (Optional)</li>
                </ul>
              </div>

              <button
                className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
                suppressHydrationWarning
              >
                Select Silver
              </button>
            </motion.div>

            {/* Gold Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 p-8 rounded-2xl shadow-lg border-2 border-yellow-400 relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>

              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-yellow-900">Au</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Gold
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Complete Detailing Package
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                  Everything in Silver, Plus:
                </h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Enhanced Pre-Soak Treatment</li>
                  <li>• Premium Wheel & Tire Detail</li>
                  <li>• Clay Bar Treatment</li>
                  <li>• Paint Protection Application</li>
                  <li>• Deep Interior Conditioning</li>
                  <li>• Premium Fragrance Selection</li>
                </ul>
              </div>

              <button
                className="w-full bg-yellow-500 text-yellow-900 py-3 rounded-lg hover:bg-yellow-600 transition-colors font-semibold"
                suppressHydrationWarning
              >
                Select Gold
              </button>
            </motion.div>

            {/* Platinum Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl shadow-lg border border-slate-300 dark:border-slate-600"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-slate-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">Pt</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Platinum
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Ultimate Luxury Experience
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                  Everything in Gold, Plus:
                </h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Paint Decontamination Process</li>
                  <li>• Clay Bar Treatment</li>
                  <li>• Wax Application for Long-lasting Shine</li>
                  <li>• Premium Interior Deep Clean</li>
                  <li>• Leather Treatment & Protection</li>
                  <li>• Shampoo Carpeted Mats</li>
                  <li>• Air Fragrance Enhancement</li>
                </ul>
              </div>

              <button
                className="w-full bg-slate-600 text-white py-3 rounded-lg hover:bg-slate-700 transition-colors font-semibold"
                suppressHydrationWarning
              >
                Select Platinum
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Explore What We Offer
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=400&h=400&fit=crop&crop=center"
                  alt="Exterior Detailing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Exterior Detailing
                  </h3>
                  <p className="text-gray-200">
                    Professional paint care, protection, and shine enhancement
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                <Image
                  src="/Interior design.png"
                  alt="Interior Detailing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Interior Detailing
                  </h3>
                  <p className="text-gray-200">
                    Complete interior cleaning, conditioning, and protection
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?w=400&h=400&fit=crop&crop=center"
                  alt="Protection Services"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Protection Services
                  </h3>
                  <p className="text-gray-200">
                    Advanced protection solutions to keep your car looking new
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            About J&F Precision Detailing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            We are passionate detailers who care about cars as much as their
            owners. With years of experience and a commitment to excellence,
            we&apos;ve built trust in our community for delivering premium
            detailing services at fair prices. Every vehicle receives our full
            attention and meticulous care, ensuring results that exceed
            expectations.
          </motion.p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Ready to give your car the care it deserves? Contact us today!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400">
                        📞
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Phone
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        (555) 123-4567
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400">
                        ✉️
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Email
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        info@jfprecisiondetailing.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400">
                        📍
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Service Area
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Mobile service to your location
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  suppressHydrationWarning
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  suppressHydrationWarning
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                suppressHydrationWarning
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                suppressHydrationWarning
              />
              <select
                className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                suppressHydrationWarning
              >
                <option>Select Package</option>
                <option>Silver Package</option>
                <option>Gold Package</option>
                <option>Platinum Package</option>
              </select>
              <textarea
                placeholder="Additional Details or Questions"
                rows={4}
                className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                suppressHydrationWarning
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                suppressHydrationWarning
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </main>
  );
}
