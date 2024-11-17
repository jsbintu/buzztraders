import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Award, Users, BookOpen } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative bg-amber-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Master the Art of Trading
            </h1>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Learn stock and options trading from industry experts. Start your journey to
              financial freedom today.
            </p>
            <Link
              to="/register"
              className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose BuzzTraders?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive trading education with practical insights and hands-on
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
              <TrendingUp className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Strategies</h3>
            <p className="text-gray-600">
              Learn proven trading strategies from experienced professionals.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
              <Award className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Certification</h3>
            <p className="text-gray-600">
              Earn recognized certificates upon course completion.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
              <Users className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">
              Join a supportive community of fellow traders.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
              <BookOpen className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Comprehensive</h3>
            <p className="text-gray-600">
              Access detailed courses from basics to advanced topics.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start your trading journey with our most popular courses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Options Basics',
                description: 'Learn the fundamentals of options trading.',
                level: 'Beginner',
                duration: '4 weeks',
              },
              {
                title: 'Advanced Trading Strategies',
                description: 'Master complex trading strategies and risk management.',
                level: 'Advanced',
                duration: '6 weeks',
              },
              {
                title: 'Technical Analysis',
                description: 'Learn to read charts and identify trading opportunities.',
                level: 'Intermediate',
                duration: '5 weeks',
              },
            ].map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Level: {course.level}</span>
                    <span>Duration: {course.duration}</span>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50">
                  <Link
                    to="/courses"
                    className="block text-center text-amber-600 font-semibold hover:text-amber-700"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;