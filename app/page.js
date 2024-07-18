import React from 'react';
import Header from '@/app/component/header/header';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 py-15">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
            <img src="/images/home.png" alt="Hero Image" className="w-full md:max-w-lg h-auto rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold mb-4">Bienvenue sur notre plateforme Rivez.com</h3>
              <p className="text-gray-600 mb-4">
                Découvrez une large gamme de cours et de ressources conçus pour vous aider à atteindre vos objectifs apprentissage. Rejoignez notre communauté et commencez votre parcours dès aujourdhui !
              </p>
              <Link href="/signup" className="inline-block bg-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300">
                Commencer
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
