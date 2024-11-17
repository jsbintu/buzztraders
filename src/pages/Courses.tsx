import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, BarChart } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Options Basics',
    description: 'Learn the fundamentals of options trading, including basic terminology, contract types, and market mechanics.',
    level: 'Beginner',
    duration: '4 weeks',
    chapters: 12,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 2,
    title: 'Technical Analysis Mastery',
    description: 'Master the art of reading charts, identifying patterns, and using technical indicators for better trading decisions.',
    level: 'Intermediate',
    duration: '6 weeks',
    chapters: 15,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 3,
    title: 'Advanced Options Strategies',
    description: 'Explore complex options strategies including spreads, straddles, and advanced risk management techniques.',
    level: 'Advanced',
    duration: '8 weeks',
    chapters: 20,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000',
  },
];

const Courses = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive trading education designed to take you from beginner to expert.
          </p>
        </div>

        {/* Course Filters */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <button className="px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-medium hover:bg-amber-200">
            All Courses
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200">
            Beginner
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200">
            Intermediate
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200">
            Advanced
          </button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                    {course.level}
                  </span>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span className="text-sm">{course.chapters} Chapters</span>
                  </div>
                  <Link
                    to={`/courses/${course.id}`}
                    className="inline-flex items-center text-amber-600 hover:text-amber-700"
                  >
                    View Course
                    <BarChart className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;