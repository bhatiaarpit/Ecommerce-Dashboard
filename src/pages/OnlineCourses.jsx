import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar, User, Clock, Star, Play, BookOpen, Users, Award, ChevronDown, Grid, List, Plus, Download, MoreVertical } from 'lucide-react';
const OnlineCourses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [levelFilter, setLevelFilter] = useState('all');
  const [instructorFilter, setInstructorFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('newest');

  // Dummy courses data
  const courses = [
    {
      id: 1,
      title: "Advanced React Development",
      description: "Master modern React patterns, hooks, and state management with real-world projects",
      instructor: "Sarah Chen",
      category: "Web Development",
      level: "Advanced",
      status: "Active",
      enrolled: 342,
      duration: "8 weeks",
      totalHours: 24,
      rating: 4.8,
      reviews: 189,
      price: 149,
      thumbnail: "react-course",
      startDate: "2024-09-01",
      endDate: "2024-10-26",
      progress: 65,
      lessons: 32,
      assignments: 8,
      certificates: true,
      tags: ["React", "JavaScript", "Frontend", "Hooks"],
      color: "blue"
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      description: "Complete introduction to data science with Python, statistics, and machine learning basics",
      instructor: "Dr. Michael Rodriguez",
      category: "Data Science",
      level: "Beginner",
      status: "Active",
      enrolled: 567,
      duration: "12 weeks",
      totalHours: 40,
      rating: 4.9,
      reviews: 423,
      price: 199,
      thumbnail: "data-science-course",
      startDate: "2024-08-15",
      endDate: "2024-11-07",
      progress: 78,
      lessons: 48,
      assignments: 12,
      certificates: true,
      tags: ["Python", "Statistics", "Machine Learning", "Data Analysis"],
      color: "green"
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      description: "Complete guide to user interface and user experience design with industry tools",
      instructor: "Emma Watson",
      category: "Design",
      level: "Intermediate",
      status: "Completed",
      enrolled: 298,
      duration: "6 weeks",
      totalHours: 18,
      rating: 4.7,
      reviews: 156,
      price: 129,
      thumbnail: "ux-design-course",
      startDate: "2024-07-01",
      endDate: "2024-08-12",
      progress: 100,
      lessons: 24,
      assignments: 6,
      certificates: true,
      tags: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      color: "purple"
    },
    {
      id: 4,
      title: "Cloud Computing with AWS",
      description: "Learn Amazon Web Services from basics to advanced cloud architecture patterns",
      instructor: "James Thompson",
      category: "Cloud Computing",
      level: "Intermediate",
      status: "Active",
      enrolled: 445,
      duration: "10 weeks",
      totalHours: 35,
      rating: 4.6,
      reviews: 267,
      price: 179,
      thumbnail: "aws-course",
      startDate: "2024-09-10",
      endDate: "2024-11-19",
      progress: 42,
      lessons: 40,
      assignments: 10,
      certificates: true,
      tags: ["AWS", "Cloud", "DevOps", "Infrastructure"],
      color: "orange"
    },
    {
      id: 5,
      title: "Mobile App Development with Flutter",
      description: "Build cross-platform mobile applications using Google's Flutter framework",
      instructor: "Lisa Park",
      category: "Mobile Development",
      level: "Beginner",
      status: "Draft",
      enrolled: 0,
      duration: "8 weeks",
      totalHours: 28,
      rating: 0,
      reviews: 0,
      price: 159,
      thumbnail: "flutter-course",
      startDate: "2024-10-15",
      endDate: "2024-12-10",
      progress: 0,
      lessons: 36,
      assignments: 9,
      certificates: true,
      tags: ["Flutter", "Dart", "Mobile", "Cross-platform"],
      color: "indigo"
    },
    {
      id: 6,
      title: "Cybersecurity Essentials",
      description: "Comprehensive introduction to cybersecurity principles and practices",
      instructor: "Robert Kim",
      category: "Security",
      level: "Beginner",
      status: "Active",
      enrolled: 234,
      duration: "6 weeks",
      totalHours: 20,
      rating: 4.5,
      reviews: 98,
      price: 139,
      thumbnail: "cybersecurity-course",
      startDate: "2024-08-20",
      endDate: "2024-10-01",
      progress: 88,
      lessons: 28,
      assignments: 7,
      certificates: true,
      tags: ["Security", "Network", "Encryption", "Risk Management"],
      color: "red"
    },
    {
      id: 7,
      title: "Digital Marketing Strategy",
      description: "Master digital marketing channels and create effective marketing campaigns",
      instructor: "Anna Martinez",
      category: "Marketing",
      level: "Intermediate",
      status: "Active",
      enrolled: 389,
      duration: "7 weeks",
      totalHours: 22,
      rating: 4.8,
      reviews: 201,
      price: 119,
      thumbnail: "marketing-course",
      startDate: "2024-09-05",
      endDate: "2024-10-24",
      progress: 55,
      lessons: 30,
      assignments: 8,
      certificates: true,
      tags: ["SEO", "Social Media", "Analytics", "Content Marketing"],
      color: "pink"
    },
    {
      id: 8,
      title: "Machine Learning Algorithms",
      description: "Deep dive into machine learning algorithms and their practical applications",
      instructor: "Dr. David Wilson",
      category: "Artificial Intelligence",
      level: "Advanced",
      status: "Completed",
      enrolled: 156,
      duration: "14 weeks",
      totalHours: 50,
      rating: 4.9,
      reviews: 89,
      price: 249,
      thumbnail: "ml-course",
      startDate: "2024-06-01",
      endDate: "2024-09-07",
      progress: 100,
      lessons: 56,
      assignments: 15,
      certificates: true,
      tags: ["Machine Learning", "Algorithms", "Python", "Neural Networks"],
      color: "teal"
    },
    {
      id: 9,
      title: "Project Management Professional",
      description: "Comprehensive project management course with PMP certification preparation",
      instructor: "Michelle Davis",
      category: "Business",
      level: "Intermediate",
      status: "Active",
      enrolled: 278,
      duration: "9 weeks",
      totalHours: 30,
      rating: 4.7,
      reviews: 145,
      price: 189,
      thumbnail: "pmp-course",
      startDate: "2024-08-25",
      endDate: "2024-10-27",
      progress: 33,
      lessons: 38,
      assignments: 10,
      certificates: true,
      tags: ["Project Management", "PMP", "Agile", "Leadership"],
      color: "yellow"
    }
  ];

  const instructors = [...new Set(courses.map(c => c.instructor))];
  const categories = [...new Set(courses.map(c => c.category))];

  const filteredCourses = useMemo(() => {
    let filtered = courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = categoryFilter === 'all' || course.category === categoryFilter;
      const matchesStatus = statusFilter === 'all' || course.status === statusFilter;
      const matchesLevel = levelFilter === 'all' || course.level === levelFilter;
      const matchesInstructor = instructorFilter === 'all' || course.instructor === instructorFilter;
      
      return matchesSearch && matchesCategory && matchesStatus && matchesLevel && matchesInstructor;
    });

    // Sort courses
    switch (sortBy) {
      case 'newest':
        return filtered.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
      case 'oldest':
        return filtered.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
      case 'title':
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'enrolled':
        return filtered.sort((a, b) => b.enrolled - a.enrolled);
      case 'price':
        return filtered.sort((a, b) => a.price - b.price);
      default:
        return filtered;
    }
  }, [searchTerm, categoryFilter, statusFilter, levelFilter, instructorFilter, sortBy]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Completed': return 'bg-blue-100 text-blue-800';
      case 'Draft': return 'bg-yellow-100 text-yellow-800';
      case 'Archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const CourseCard = ({ course }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-400 hover:shadow-md transition-all duration-200 overflow-hidden">
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative">
        <div className={`absolute inset-0 bg-gradient-to-br from-${course.color}-400 to-${course.color}-600 opacity-80`}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <BookOpen size={32} className="mx-auto mb-2 opacity-80" />
            <div className="text-sm font-medium opacity-90">{course.category}</div>
          </div>
        </div>
        {course.status === 'Active' && course.progress > 0 && (
          <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-xs font-medium text-gray-700">
            {course.progress}% complete
          </div>
        )}
        <div className="absolute bottom-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
            {course.status}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 flex-1">{course.title}</h3>
          <button className="text-gray-400 hover:text-gray-600 ml-2">
            <MoreVertical size={20} />
          </button>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
        
        <div className="flex items-center justify-between mb-4">
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
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  className={`${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-900">{course.rating}</span>
            <span className="text-sm text-gray-500">({course.reviews} reviews)</span>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center space-x-2">
            <Clock size={16} className="text-gray-400" />
            <span className="text-gray-600">{course.totalHours}h total</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users size={16} className="text-gray-400" />
            <span className="text-gray-600">{course.enrolled} enrolled</span>
          </div>
          <div className="flex items-center space-x-2">
            <Play size={16} className="text-gray-400" />
            <span className="text-gray-600">{course.lessons} lessons</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award size={16} className="text-gray-400" />
            <span className="text-gray-600">{course.assignments} assignments</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {course.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
              {tag}
            </span>
          ))}
          {course.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
              +{course.tags.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            {formatCurrency(course.price)}
          </div>
          <button className={`px-4 py-2 bg-${course.color}-600 text-white rounded-lg hover:bg-${course.color}-700 transition-colors`}>
            {course.status === 'Draft' ? 'Preview' : 'View Course'}
          </button>
        </div>
      </div>
    </div>
  );

  const CourseRow = ({ course }) => (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-8 rounded bg-${course.color}-500 flex items-center justify-center`}>
            <BookOpen size={16} className="text-white" />
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900">{course.title}</div>
            <div className="text-sm text-gray-500">{course.category}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {course.instructor}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
          {course.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
          {course.level}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {course.enrolled}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {course.totalHours}h
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {course.rating > 0 ? (
          <div className="flex items-center space-x-1">
            <Star size={16} className="text-yellow-400 fill-current" />
            <span className="text-sm text-gray-900">{course.rating}</span>
          </div>
        ) : (
          <span className="text-sm text-gray-500">No ratings</span>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {formatCurrency(course.price)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {course.progress > 0 && (
          <div className="flex items-center">
            <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
              <div 
                className={`bg-${course.color}-500 h-2 rounded-full`}
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-600">{course.progress}%</span>
          </div>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical size={16} />
        </button>
      </td>
    </tr>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Online Courses</h1>
              <span className="text-sm text-gray-500">
                {filteredCourses.length} courses
              </span>
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
        <div className="bg-white rounded-lg shadow-sm border border-gray-400 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses, tags..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter */}
            <select
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
              <option value="Draft">Draft</option>
            </select>

            {/* Level Filter */}
            <select
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
            >
              <option value="all">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            {/* Sort */}
            <select
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="title">Title A-Z</option>
              <option value="rating">Highest Rated</option>
              <option value="enrolled">Most Enrolled</option>
              <option value="price">Price Low-High</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
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
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-400 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enrolled</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredCourses.map(course => (
                    <CourseRow key={course.id} course={course} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {filteredCourses.length === 0 && (
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