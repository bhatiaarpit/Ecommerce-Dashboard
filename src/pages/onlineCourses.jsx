import React, { useState, useMemo } from 'react';
import courses from '../data/courses.js';
import { Search, User, Clock, Star, Play, BookOpen, Users, Award, Grid, List, Plus, Download, MoreVertical } from 'lucide-react';

const OnlineCourses = () => {
  // Consolidated state
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    status: 'all',
    level: 'all',
    instructor: 'all',
    sortBy: 'newest',
    viewMode: 'grid'
  });

  // Memoized options to prevent recalculation
  const { instructors, categories } = useMemo(() => ({
    instructors: [...new Set(courses.map(c => c.instructor))],
    categories: [...new Set(courses.map(c => c.category))]
  }), []);

  const colorClasses = {
    blue: {
      gradient: 'bg-gradient-to-br from-blue-400 to-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700',
      progress: 'bg-blue-500',
      icon: 'bg-blue-500'
    },
    green: {
      gradient: 'bg-gradient-to-br from-green-400 to-green-600',
      button: 'bg-green-600 hover:bg-green-700',
      progress: 'bg-green-500',
      icon: 'bg-green-500'
    },
    purple: {
      gradient: 'bg-gradient-to-br from-purple-400 to-purple-600',
      button: 'bg-purple-600 hover:bg-purple-700',
      progress: 'bg-purple-500',
      icon: 'bg-purple-500'
    },
    red: {
      gradient: 'bg-gradient-to-br from-red-400 to-red-600',
      button: 'bg-red-600 hover:bg-red-700',
      progress: 'bg-red-500',
      icon: 'bg-red-500'
    },
    yellow: {
      gradient: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
      button: 'bg-yellow-600 hover:bg-yellow-700',
      progress: 'bg-yellow-500',
      icon: 'bg-yellow-500'
    },
    indigo: {
      gradient: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
      button: 'bg-indigo-600 hover:bg-indigo-700',
      progress: 'bg-indigo-500',
      icon: 'bg-indigo-500'
    },
    pink: {
      gradient: 'bg-gradient-to-br from-pink-400 to-pink-600',
      button: 'bg-pink-600 hover:bg-pink-700',
      progress: 'bg-pink-500',
      icon: 'bg-pink-500'
    },
    teal: {
      gradient: 'bg-gradient-to-br from-teal-400 to-teal-600',
      button: 'bg-teal-600 hover:bg-teal-700',
      progress: 'bg-teal-500',
      icon: 'bg-teal-500'
    },
    orange: {
      gradient: 'bg-gradient-to-br from-orange-400 to-orange-600',
      button: 'bg-orange-600 hover:bg-orange-700',
      progress: 'bg-orange-500',
      icon: 'bg-orange-500'
    },
    cyan: {
      gradient: 'bg-gradient-to-br from-cyan-400 to-cyan-600',
      button: 'bg-cyan-600 hover:bg-cyan-700',
      progress: 'bg-cyan-500',
      icon: 'bg-cyan-500'
    }
  };

  // Utility functions
  const getStatusColor = (status) => ({
    'Active': 'bg-green-100 text-green-800',
    'Completed': 'bg-blue-100 text-blue-800',
    'Draft': 'bg-yellow-100 text-yellow-800',
    'Archived': 'bg-gray-100 text-gray-800'
  }[status] || 'bg-gray-100 text-gray-800');

  const getLevelColor = (level) => ({
    'Beginner': 'bg-green-100 text-green-800',
    'Intermediate': 'bg-yellow-100 text-yellow-800',
    'Advanced': 'bg-red-100 text-red-800'
  }[level] || 'bg-gray-100 text-gray-800');

  // Get color classes for a course [web:22][web:25]
  const getColorClasses = (color) => {
    return colorClasses[color] || colorClasses.blue; // Default to blue if color not found
  };

  // Optimized filtering and sorting
  const filteredCourses = useMemo(() => {
    const filtered = courses.filter(course => {
      const searchMatch = filters.search === '' || 
        [course.title, course.description, ...course.tags]
          .some(text => text.toLowerCase().includes(filters.search.toLowerCase()));
      
      return searchMatch &&
        (filters.category === 'all' || course.category === filters.category) &&
        (filters.status === 'all' || course.status === filters.status) &&
        (filters.level === 'all' || course.level === filters.level) &&
        (filters.instructor === 'all' || course.instructor === filters.instructor);
    });

    const sortConfig = {
      'newest': (a, b) => new Date(b.startDate) - new Date(a.startDate),
      'oldest': (a, b) => new Date(a.startDate) - new Date(b.startDate),
      'title': (a, b) => a.title.localeCompare(b.title),
      'rating': (a, b) => b.rating - a.rating,
      'enrolled': (a, b) => b.enrolled - a.enrolled,
      'price': (a, b) => a.price - b.price
    };

    return filtered.sort(sortConfig[filters.sortBy] || (() => 0));
  }, [filters]);

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  // Simplified course components with fixed color classes
  const CourseCard = ({ course }) => {
    const colors = getColorClasses(course.color);
    
    return (
      <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-all duration-200 overflow-hidden">
        <div className={`aspect-video ${colors.gradient} relative flex items-center justify-center text-white`}>
          <div className="text-center">
            <BookOpen size={32} className="mx-auto mb-2 opacity-80" />
            <div className="text-sm font-medium opacity-90">{course.category}</div>
          </div>
          {course.progress > 0 && (
            <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-xs font-medium text-gray-700">
              {course.progress}%
            </div>
          )}
          <span className={`absolute bottom-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
            {course.status}
          </span>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 flex-1">{course.title}</h3>
            <MoreVertical size={20} className="text-gray-400 hover:text-gray-600 ml-2 cursor-pointer" />
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
          
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-1">
              <User size={16} className="text-gray-400" />
              <span className="text-sm text-gray-600">{course.instructor}</span>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
              {course.level}
            </span>
          </div>

          {course.rating > 0 && (
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} size={16} className={i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'} />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-900">{course.rating}</span>
              <span className="text-sm text-gray-500">({course.reviews})</span>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Clock size={16} className="text-gray-400" />
              <span>{course.totalHours}h</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users size={16} className="text-gray-400" />
              <span>{course.enrolled}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Play size={16} className="text-gray-400" />
              <span>{course.lessons} lessons</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award size={16} className="text-gray-400" />
              <span>{course.assignments}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mb-4">
            {course.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">{tag}</span>
            ))}
            {course.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">+{course.tags.length - 3}</span>
            )}
          </div>

          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900">
              ${course.price.toLocaleString()}
            </div>
            <button className={`px-4 py-2 ${colors.button} text-white rounded-lg transition-colors`}>
              {course.status === 'Draft' ? 'Preview' : 'View Course'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const CourseRow = ({ course }) => {
    const colors = getColorClasses(course.color);
    
    return (
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-8 rounded ${colors.icon} flex items-center justify-center`}>
              <BookOpen size={16} className="text-white" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">{course.title}</div>
              <div className="text-sm text-gray-500">{course.category}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 text-sm text-gray-900">{course.instructor}</td>
        <td className="px-6 py-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
            {course.status}
          </span>
        </td>
        <td className="px-6 py-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
            {course.level}
          </span>
        </td>
        <td className="px-6 py-4 text-sm text-gray-900">{course.enrolled}</td>
        <td className="px-6 py-4 text-sm text-gray-900">{course.totalHours}h</td>
        <td className="px-6 py-4">
          {course.rating > 0 ? (
            <div className="flex items-center space-x-1">
              <Star size={16} className="text-yellow-400 fill-current" />
              <span className="text-sm text-gray-900">{course.rating}</span>
            </div>
          ) : (
            <span className="text-sm text-gray-500">No ratings</span>
          )}
        </td>
        <td className="px-6 py-4 text-sm font-medium text-gray-900">${course.price.toLocaleString()}</td>
        <td className="px-6 py-4">
          {course.progress > 0 && (
            <div className="flex items-center">
              <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                <div className={`${colors.progress} h-2 rounded-full`} style={{ width: `${course.progress}%` }} />
              </div>
              <span className="text-sm text-gray-600">{course.progress}%</span>
            </div>
          )}
        </td>
        <td className="px-6 py-4 text-right">
          <MoreVertical size={16} className="text-gray-400 hover:text-gray-600 cursor-pointer" />
        </td>
      </tr>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Online Courses</h1>
              <span className="text-sm text-gray-500">{filteredCourses.length} courses</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                <Plus size={16} />
                <span>New Course</span>
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                <Download size={16} />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses, tags..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={filters.search}
                  onChange={(e) => updateFilter('search', e.target.value)}
                />
              </div>
            </div>

            <select
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.category}
              onChange={(e) => updateFilter('category', e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.status}
              onChange={(e) => updateFilter('status', e.target.value)}
            >
              <option value="all">All Status</option>
              {['Active', 'Completed', 'Draft'].map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>

            <select
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.level}
              onChange={(e) => updateFilter('level', e.target.value)}
            >
              <option value="all">All Levels</option>
              {['Beginner', 'Intermediate', 'Advanced'].map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>

            <select
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.sortBy}
              onChange={(e) => updateFilter('sortBy', e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="title">Title A-Z</option>
              <option value="rating">Highest Rated</option>
              <option value="enrolled">Most Enrolled</option>
              <option value="price">Price Low-High</option>
            </select>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateFilter('viewMode', 'grid')}
                className={`p-2 rounded-lg ${filters.viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => updateFilter('viewMode', 'list')}
                className={`p-2 rounded-lg ${filters.viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <List size={20} />
              </button>
            </div>
            <div className="text-sm text-gray-500">
              Showing {filteredCourses.length} of {courses.length} courses
            </div>
          </div>
        </div>

        {/* Courses Display */}
        {filteredCourses.length > 0 ? (
          filters.viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {['Course', 'Instructor', 'Status', 'Level', 'Enrolled', 'Duration', 'Rating', 'Price', 'Progress', ''].map(header => (
                      <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredCourses.map(course => (
                    <CourseRow key={course.id} course={course} />
                  ))}
                </tbody>
              </table>
            </div>
          )
        ) : (
          <div className="text-center py-12">
            <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
            <div className="text-gray-500 text-lg mb-2">No courses found</div>
            <div className="text-gray-400">Try adjusting your filters or search terms</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnlineCourses;
