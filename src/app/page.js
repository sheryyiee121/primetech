"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Laptop data with real laptop images from Unsplash
const laptops = [
  // HP EliteBooks
  {
    id: 1,
    name: "HP EliteBook 840 G3",
    category: "Business",
    specs: "Intel Core i5-6300U, 8GB DDR4, 256GB SSD, 14\" FHD",
    price: 299,
    gen: "6th Gen",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "HP EliteBook 840 G5",
    category: "Business",
    specs: "Intel Core i5-8350U, 16GB DDR4, 512GB SSD, 14\" FHD",
    price: 449,
    gen: "8th Gen",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "HP EliteBook 840 G6",
    category: "Business",
    specs: "Intel Core i5-8365U, 16GB DDR4, 512GB SSD, 14\" FHD",
    price: 549,
    gen: "8th Gen",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "HP EliteBook 840 G7",
    category: "Business",
    specs: "Intel Core i5-10310U, 16GB DDR4, 512GB SSD, 14\" FHD",
    price: 649,
    gen: "10th Gen",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop",
  },
  // Dell Laptops
  {
    id: 5,
    name: "Dell Latitude 5480",
    category: "Business",
    specs: "Intel Core i5-6300U, 8GB DDR4, 256GB SSD, 14\" HD",
    price: 279,
    gen: "6th Gen",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Dell Latitude 5490",
    category: "Business",
    specs: "Intel Core i5-8350U, 16GB DDR4, 256GB SSD, 14\" FHD",
    price: 399,
    gen: "8th Gen",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    name: "Dell Latitude 5500",
    category: "Business",
    specs: "Intel Core i5-8365U, 16GB DDR4, 512GB SSD, 15.6\" FHD",
    price: 499,
    gen: "8th Gen",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Dell Latitude 5510",
    category: "Business",
    specs: "Intel Core i5-10310U, 16GB DDR4, 512GB SSD, 15.6\" FHD",
    price: 599,
    gen: "10th Gen",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop",
  },
  // Lenovo ThinkPads
  {
    id: 9,
    name: "Lenovo ThinkPad T460",
    category: "Business",
    specs: "Intel Core i5-6300U, 8GB DDR4, 256GB SSD, 14\" FHD",
    price: 289,
    gen: "6th Gen",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
  },
  {
    id: 10,
    name: "Lenovo ThinkPad T480",
    category: "Business",
    specs: "Intel Core i5-8350U, 16GB DDR4, 512GB SSD, 14\" FHD",
    price: 449,
    gen: "8th Gen",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
  },
  {
    id: 11,
    name: "Lenovo ThinkPad T490",
    category: "Business",
    specs: "Intel Core i5-8365U, 16GB DDR4, 512GB SSD, 14\" FHD",
    price: 549,
    gen: "8th Gen",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
  },
  {
    id: 12,
    name: "Lenovo ThinkPad T14",
    category: "Business",
    specs: "Intel Core i5-10310U, 16GB DDR4, 512GB SSD, 14\" FHD",
    price: 649,
    gen: "10th Gen",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop",
  },
  // Gaming Laptops
  {
    id: 13,
    name: "ASUS ROG Strix G16",
    category: "Gaming",
    specs: "RTX 4070, i7-13650HX, 16GB DDR5, 1TB SSD",
    price: 1499,
    gen: "13th Gen",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
  },
  {
    id: 14,
    name: "MSI Katana 15",
    category: "Gaming",
    specs: "RTX 4060, i7-12650H, 16GB DDR5, 512GB SSD",
    price: 1199,
    gen: "12th Gen",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop",
  },
  {
    id: 15,
    name: "Acer Nitro 5",
    category: "Gaming",
    specs: "RTX 3060, i5-11400H, 16GB DDR4, 512GB SSD",
    price: 899,
    gen: "11th Gen",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop",
  },
  // Workstations
  {
    id: 16,
    name: "Dell Precision 5540",
    category: "Workstation",
    specs: "Quadro T2000, i7-9850H, 32GB DDR4, 1TB SSD",
    price: 1299,
    gen: "9th Gen",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
  },
  {
    id: 17,
    name: "HP ZBook 15 G6",
    category: "Workstation",
    specs: "Quadro T1000, i7-9750H, 32GB DDR4, 512GB SSD",
    price: 1199,
    gen: "9th Gen",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
  },
  {
    id: 18,
    name: "Lenovo ThinkPad P53",
    category: "Workstation",
    specs: "Quadro RTX 3000, i7-9850H, 32GB DDR4, 1TB SSD",
    price: 1399,
    gen: "9th Gen",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
  },
];

// Reviews data
const reviews = [
  {
    id: 1,
    name: "Ahmed Khan",
    rating: 5,
    text: "Excellent service! Got my HP EliteBook at the best price. The team was very helpful in choosing the right specs for my needs.",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Sarah Malik",
    rating: 5,
    text: "Traded in my old laptop and got a great deal on a new ThinkPad. Very professional and transparent process.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Ali Raza",
    rating: 4,
    text: "Good variety of business laptops. The exchange program is fair and straightforward. Will definitely come back.",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Fatima Noor",
    rating: 5,
    text: "Best laptop store in town! They helped me find the perfect Dell Latitude for my office work. Fast delivery too.",
    date: "1 week ago",
  },
  {
    id: 5,
    name: "Usman Ali",
    rating: 5,
    text: "Bought a gaming laptop for my son. Great prices and excellent after-sales support. Highly recommended!",
    date: "5 days ago",
  },
  {
    id: 6,
    name: "Ayesha Tariq",
    rating: 4,
    text: "Very satisfied with my purchase. The ThinkPad T480 works perfectly for programming. Good customer service.",
    date: "2 weeks ago",
  },
];

// Star rating component
function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-amber-500" : "text-slate-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// WhatsApp number
const WHATSAPP_NUMBER = "923087203248";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ["All", "Business", "Gaming", "Workstation"];

  const filteredLaptops =
    activeCategory === "All"
      ? laptops
      : laptops.filter((laptop) => laptop.category === activeCategory);

  // WhatsApp link generator
  const getWhatsAppLink = (message) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/WhatsApp Image 2026-01-15 at 9.20.58 AM.jpeg"
                alt="PrimeTec Logo"
                width={44}
                height={44}
                className="object-contain rounded"
              />
              <span className="text-lg font-semibold tracking-tight">
                Prime<span className="text-sky-600">Tec</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-sm text-slate-600 hover:text-sky-600 transition-colors">
                Products
              </a>
              <a href="#exchange" className="text-sm text-slate-600 hover:text-sky-600 transition-colors">
                Exchange
              </a>
              <a href="#reviews" className="text-sm text-slate-600 hover:text-sky-600 transition-colors">
                Reviews
              </a>
              <Link
                href="/contact"
                className="text-sm px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 animate-fadeIn">
              <div className="flex flex-col gap-4">
                <a href="#products" className="text-sm text-slate-600 hover:text-sky-600" onClick={() => setMobileMenuOpen(false)}>
                  Products
                </a>
                <a href="#exchange" className="text-sm text-slate-600 hover:text-sky-600" onClick={() => setMobileMenuOpen(false)}>
                  Exchange
                </a>
                <a href="#reviews" className="text-sm text-slate-600 hover:text-sky-600" onClick={() => setMobileMenuOpen(false)}>
                  Reviews
                </a>
                <Link href="/contact" className="text-sm text-slate-600 hover:text-sky-600" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
              <p className="text-sm text-sky-600 font-medium mb-3 tracking-wide uppercase">
                Gaming & Business Laptops
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-slate-900">
                Premium Laptops for
                <span className="text-sky-600"> Professionals</span>
              </h1>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Buy new or exchange your old laptop. We offer HP EliteBooks, Dell Latitudes, Lenovo ThinkPads, and gaming laptops at competitive prices.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="#products"
                  className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium rounded transition-all hover:shadow-lg"
                >
                  Browse Laptops
                </a>
                <a
                  href={getWhatsAppLink("Hi! I'm interested in your laptop exchange program.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white text-sm font-medium rounded transition-all flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className={`relative ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
              <div className="aspect-square max-w-md mx-auto bg-white rounded-2xl border border-slate-200 shadow-lg flex items-center justify-center overflow-hidden animate-float">
                <Image
                  src="/WhatsApp Image 2026-01-15 at 9.20.58 AM.jpeg"
                  alt="PrimeTec Logo"
                  width={320}
                  height={320}
                  className="object-contain p-4"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fadeInUp">
              <p className="text-3xl font-bold text-sky-600">500+</p>
              <p className="text-sm text-slate-500 mt-1">Laptops Sold</p>
            </div>
            <div className="animate-fadeInUp animation-delay-100">
              <p className="text-3xl font-bold text-sky-600">200+</p>
              <p className="text-sm text-slate-500 mt-1">Exchanges</p>
            </div>
            <div className="animate-fadeInUp animation-delay-200">
              <p className="text-3xl font-bold text-sky-600">4.9</p>
              <p className="text-sm text-slate-500 mt-1">Rating</p>
            </div>
            <div className="animate-fadeInUp animation-delay-300">
              <p className="text-3xl font-bold text-sky-600">24h</p>
              <p className="text-sm text-slate-500 mt-1">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-2 text-slate-900">Our Laptops</h2>
            <p className="text-slate-500">HP EliteBooks, Dell Latitudes, ThinkPads & Gaming Laptops</p>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 mb-8 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 text-sm rounded-full transition-all ${activeCategory === category
                  ? "bg-sky-600 text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-sky-300 hover:text-sky-600"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Laptop Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLaptops.map((laptop, index) => (
              <div
                key={laptop.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden card-hover animate-fadeInUp"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-video bg-slate-100 relative overflow-hidden">
                  <Image
                    src={laptop.image}
                    alt={laptop.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="text-xs px-2 py-1 bg-sky-600 text-white rounded-full">
                      {laptop.gen}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-2">
                    <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                      {laptop.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-slate-900">{laptop.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{laptop.specs}</p>
                  <a
                    href={getWhatsAppLink(`Hi! I'm interested in ${laptop.name} - ${laptop.specs}. Please share the price.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 text-sm bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exchange Section */}
      <section id="exchange" className="py-20 px-4 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Exchange Your Laptop</h2>
              <p className="text-slate-600 mb-6">
                Trade in your old laptop and get the best value towards a new machine. Our process is simple and transparent.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center text-sm font-bold text-sky-600">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-slate-900">Submit Details</h4>
                    <p className="text-sm text-slate-500">Tell us about your laptop model, specs, and condition</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center text-sm font-bold text-sky-600">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-slate-900">Get Valuation</h4>
                    <p className="text-sm text-slate-500">Receive a fair quote within 24 hours</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center text-sm font-bold text-sky-600">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-slate-900">Complete Exchange</h4>
                    <p className="text-sm text-slate-500">Apply the value towards your new purchase</p>
                  </div>
                </div>
              </div>
              <a
                href={getWhatsAppLink("Hi! I want to exchange my old laptop. Please guide me through the process.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-all hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Start Exchange on WhatsApp
              </a>
            </div>
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 animate-slideInRight">
              <h3 className="text-lg font-semibold mb-6 text-slate-900">Quick Quote</h3>
              <QuickQuoteForm whatsappNumber={WHATSAPP_NUMBER} />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-2 text-slate-900">Customer Reviews</h2>
            <p className="text-slate-500">What our customers say about us</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="bg-white border border-slate-200 rounded-xl p-6 card-hover animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-medium text-slate-900">{review.name}</h4>
                    <p className="text-xs text-slate-400">{review.date}</p>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-sky-600">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Ready to upgrade?</h2>
          <p className="text-sky-100 mb-8">
            Contact us today for personalized recommendations and the best deals on laptops.
          </p>
          <a
            href={getWhatsAppLink("Hi! I want to know more about your laptop deals.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white hover:bg-slate-50 text-sky-600 text-sm font-medium rounded-lg transition-all hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image
                  src="/WhatsApp Image 2026-01-15 at 9.20.58 AM.jpeg"
                  alt="PrimeTec Logo"
                  width={36}
                  height={36}
                  className="object-contain rounded"
                />
                <span className="text-lg font-semibold tracking-tight text-slate-900">
                  Prime<span className="text-sky-600">Tec</span>
                </span>
              </Link>
              <p className="text-sm text-slate-500 max-w-sm">
                Your trusted destination for business laptops, gaming rigs, and workstations. Buy new or exchange your old laptop with us.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-slate-900">Quick Links</h4>
              <div className="space-y-2 text-sm text-slate-500">
                <a href="#products" className="block hover:text-sky-600">Products</a>
                <a href="#exchange" className="block hover:text-sky-600">Exchange</a>
                <a href="#reviews" className="block hover:text-sky-600">Reviews</a>
                <Link href="/contact" className="block hover:text-sky-600">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-slate-900">Contact</h4>
              <div className="space-y-2 text-sm text-slate-500">
                <a
                  href={getWhatsAppLink("Hi!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-600"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  +92 308 7203248
                </a>
                <p>Dubai Plaza, Rawalpindi</p>
                <p>Open 24 Hours</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 text-sm text-slate-400 text-center">
            2026 PrimeTec Laptop Solutions. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={getWhatsAppLink("Hi! I'm visiting your website and have a question.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50 animate-pulse-slow"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </div>
  );
}

// Quick Quote Form Component
function QuickQuoteForm({ whatsappNumber }) {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    condition: "",
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*Exchange Request*
    
Name: ${formData.name}
Phone: ${formData.phone}
Brand: ${formData.brand}
Model: ${formData.model}
Condition: ${formData.condition}

I want to exchange my laptop. Please contact me.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-slate-600 mb-1">Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
          className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm text-slate-600 mb-1">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="+92 300 1234567"
          className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm text-slate-600 mb-1">Laptop Brand</label>
        <select
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          required
          className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
        >
          <option value="">Select brand</option>
          <option value="HP">HP</option>
          <option value="Dell">Dell</option>
          <option value="Lenovo">Lenovo</option>
          <option value="ASUS">ASUS</option>
          <option value="Acer">Acer</option>
          <option value="MSI">MSI</option>
          <option value="Apple">Apple</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm text-slate-600 mb-1">Model Name</label>
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleChange}
          required
          placeholder="e.g., EliteBook 840 G5"
          className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm text-slate-600 mb-1">Condition</label>
        <select
          name="condition"
          value={formData.condition}
          onChange={handleChange}
          required
          className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
        >
          <option value="">Select condition</option>
          <option value="Excellent">Excellent - Like new</option>
          <option value="Good">Good - Minor wear</option>
          <option value="Fair">Fair - Visible wear</option>
          <option value="Poor">Poor - Needs repair</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
        Send to WhatsApp
      </button>
    </form>
  );
}
