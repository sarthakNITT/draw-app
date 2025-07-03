"use client";

import { useState, useEffect } from 'react';
import { 
  PenTool, 
  Star, 
  ArrowRight,
  Menu,
  X,
  Github,
  Twitter,
  Mail,
  Heart,
  Sparkles,
  MousePointer2,
  Layers,
  Undo2
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import ButtonComponent from '@repo/ui/button'
import { features } from "@repo/common-frontend/src/landingPageUtils"

export default function LandingScreen() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <section id='Home'>
        <nav id='Home' className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200' : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <PenTool className="w-5 h-5 text-white" />
                </div>
                <a href='#Home' className="text-xl font-bold text-gray-900">DrawFlow</a>
              </div>
            
              {/* <div className='flex gap-6'>
                <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">Features</a>
                <a href="#Demo" className="text-gray-700 hover:text-purple-600 transition-colors">Demo</a>
                <a href="#About" className="text-gray-700 hover:text-purple-600 transition-colors">About Us</a>
              </div> */}
              {/* <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors">Testimonials</a>
              <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors">Pricing</a> */}
              <div className='flex flex-row gap-2 items-center'>
                <ButtonComponent size='small' title='Get Started' variant='primary' />
                <ButtonComponent runFunction={()=>router.push("/signin")} size='small' title='Sign In' variant='secondary' />
              </div>

              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-4 py-2 space-y-2">
                <a href="#features" className="block py-2 text-gray-700 hover:text-purple-600">Features</a>
                <a href="#testimonials" className="block py-2 text-gray-700 hover:text-purple-600">Testimonials</a>
                <a href="#pricing" className="block py-2 text-gray-700 hover:text-purple-600">Pricing</a>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>
      </section>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              Now with AI-powered drawing assistance
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">Visual ideas made</span>
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                beautifully simple
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Create stunning diagrams, wireframes, and sketches with our intuitive drawing platform. 
              Collaborate in real-time, export anywhere, and bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ButtonComponent title='Start Drawing Free' size='large' secIcon={<ArrowRight className="w-5 h-5 ml-2" />} variant='primary' />
              <ButtonComponent title='Watch Demo' size='large' variant='secondary' />
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-gray-500">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="text-sm">4.9/5 from 2,000+ users</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-red-400 mr-1" />
                <span className="text-sm">Loved by 50k+ creators</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to create
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools designed for modern creators. From simple sketches to complex diagrams, 
              we've got you covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id='Demo' className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See it in action
            </h2>
            <p className="text-xl text-gray-600">
              Watch how easy it is to create beautiful diagrams in seconds
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-12 text-center">
              <div className="flex justify-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center">
                  <MousePointer2 className="w-8 h-8 text-white" />
                </div>
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
                  <Undo2 className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Demo</h3>
              <p className="text-gray-600 mb-6">
                Experience the power of our drawing tools with this interactive demo
              </p>
              <ButtonComponent title='Launch Demo' variant='primary' size='medium' />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id='About' className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to start creating?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already using DrawFlow to bring their ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonComponent title='Start Free Trial' size='large' variant='tertiary' />
            <ButtonComponent title='Contact Sales' size='large' variant='Quaternary' />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <PenTool className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">DrawFlow</span>
              </div>
              <p className="text-gray-400 mb-4">
                The visual collaboration platform that brings ideas to life.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DrawFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}