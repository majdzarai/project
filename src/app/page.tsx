import React from 'react';
import Header from '@/components/header/header';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="text-center py-20 bg-cover bg-center relative" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white">Welcome to Rivez.com</h1>
            <p className="text-lg md:text-2xl text-white mt-4">Your ultimate destination for online learning</p>
            <Link href="/login" className="mt-6 inline-block bg-indigo-600 text-white text-lg font-semibold px-8 py-4 rounded-full hover:bg-indigo-700 transition duration-300">Get Started</Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose Us?</h2>
            <p className="mt-4 text-gray-600">Discover what sets Rivez.com apart:</p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img src="/images/realworld.jpg" alt="Feature 1" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="mt-6 text-xl font-bold">Expert Instructors</h3>
                <p className="mt-4 text-gray-600">Learn from industry experts with real-world experience, ensuring practical knowledge and valuable insights in every course.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img src="/images/images.jpg" alt="Feature 2" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="mt-6 text-xl font-bold">Flexible Learning</h3>
                <p className="mt-4 text-gray-600">Access courses anytime, anywhere, on any device, allowing you to learn at your own pace and convenience.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img src="/images/flexible.jpg" alt="Feature 3" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="mt-6 text-xl font-bold">Community Support</h3>
                <p className="mt-4 text-gray-600">Join a vibrant community of learners where you can engage with peers, share insights, and receive support to enhance your learning journey.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-indigo-600 text-white text-center">
          <h2 className="text-3xl font-bold">Ready to start your learning journey?</h2>
          <p className="mt-4 text-lg">Sign up now and get access to all our courses.</p>
          <Link href="/signup" className="mt-6 inline-block bg-white text-indigo-600 text-lg font-semibold px-8 py-4 rounded-full hover:bg-gray-200 transition duration-300">Sign Up</Link>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
