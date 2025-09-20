// pages/UserProfileOverview.js
import React, { useState } from 'react';
import {
    User,
    MapPin,
    Mail,
    Phone,
    Calendar,
    Briefcase,
    Globe,
    Github,
    Linkedin,
    Twitter,
    Edit3,
    Settings,
    Award,
    Activity,
    Users,
    TrendingUp,
    Clock,
    Star,
    CheckCircle,
    AlertCircle,
    MoreHorizontal,
    Plus,
    Eye,
    MessageCircle,
    Share2
} from 'lucide-react';

const UserProfileOverview = () => {
    const [activeTab, setActiveTab] = useState('overview');

    // Mock dummy user data
    const userData = {
        name: "John Anderson",
        role: "Senior Product Manager",
        company: "TechCorp Inc.",
        location: "San Francisco, CA",
        email: "john.anderson@techcorp.com",
        phone: "+1 (555) 123-4567",
        website: "johnanderson.dev",
        joinDate: "March 2022",
        bio: "Experienced product manager with 8+ years in tech, specializing in user experience design and agile development. Passionate about building products that solve real-world problems and drive business growth.",
        skills: ["Product Management", "UX Design", "Agile", "Scrum", "Data Analysis", "JavaScript", "Python", "Figma"],
        social: {
            github: "johnanderson",
            linkedin: "john-anderson-pm",
            twitter: "johnandersonpm"
        }
    };

    const stats = [
        { label: "Projects Completed", value: "32", trend: "+8%", color: "green" },
        { label: "Active Projects", value: "5", trend: "+2", color: "blue" },
        { label: "Team Members", value: "12", trend: "+4", color: "green" },
        { label: "Total Hours", value: "2,480", trend: "+240h", color: "green" }
    ];

    const recentProjects = [
        {
            name: "Mobile App Redesign",
            status: "In Progress",
            progress: 68,
            team: ["JA", "SM", "RK"],
            dueDate: "Jan 15, 2024",
            priority: "High"
        },
        {
            name: "Payment Gateway Integration",
            status: "Completed",
            progress: 100,
            team: ["JA", "LM"],
            dueDate: "Dec 10, 2023",
            priority: "Medium"
        },
        {
            name: "User Analytics Dashboard",
            status: "Planning",
            progress: 25,
            team: ["JA", "DW", "KP"],
            dueDate: "Feb 28, 2024",
            priority: "High"
        }
    ];

    const activities = [
        {
            action: "Approved feature requirements",
            project: "Mobile App Redesign",
            time: "1 hour ago",
            type: "completion"
        },
        {
            action: "Updated user stories",
            project: "User Analytics Dashboard",
            time: "3 hours ago",
            type: "development"
        },
        {
            action: "Conducted stakeholder meeting",
            project: "Payment Gateway Integration",
            time: "1 day ago",
            type: "documentation"
        },
        {
            action: "Reviewed design mockups",
            project: "Mobile App Redesign",
            time: "2 days ago",
            type: "review"
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed':
                return 'bg-green-100 text-green-700';
            case 'In Progress':
                return 'bg-blue-100 text-blue-700';
            case 'Planning':
                return 'bg-yellow-100 text-yellow-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'High':
                return 'text-red-600';
            case 'Medium':
                return 'text-yellow-600';
            case 'Low':
                return 'text-green-600';
            default:
                return 'text-gray-600';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="px-6 py-4">
                    <h1 className="text-xl font-semibold text-gray-900">User Profile</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-6">
                {/* Profile Header */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                    <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-6">
                            {/* Avatar */}
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                JA
                            </div>
                            
                            {/* Basic Info */}
                            <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                    <h2 className="text-2xl font-bold text-gray-900">{userData.name}</h2>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        <CheckCircle className="w-3 h-3 mr-1" />
                                        Active
                                    </span>
                                </div>
                                
                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex items-center">
                                        <Briefcase className="w-4 h-4 mr-2" />
                                        {userData.role} at {userData.company}
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="w-4 h-4 mr-2" />
                                        {userData.location}
                                    </div>
                                    <div className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        Joined {userData.joinDate}
                                    </div>
                                </div>

                                {/* Contact Info */}
                                <div className="flex items-center space-x-4 mt-4">
                                    <a href={`mailto:${userData.email}`} className="text-blue-600 hover:text-blue-800 flex items-center">
                                        <Mail className="w-4 h-4 mr-1" />
                                        Email
                                    </a>
                                    <a href={`tel:${userData.phone}`} className="text-blue-600 hover:text-blue-800 flex items-center">
                                        <Phone className="w-4 h-4 mr-1" />
                                        Call
                                    </a>
                                    <a href={`https://${userData.website}`} className="text-blue-600 hover:text-blue-800 flex items-center">
                                        <Globe className="w-4 h-4 mr-1" />
                                        Website
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-2">
                            <button className="flex items-center px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm">
                                <MessageCircle className="w-4 h-4 mr-2" />
                                Message
                            </button>
                            <button className="flex items-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm">
                                <Edit3 className="w-4 h-4 mr-2" />
                                Edit Profile
                            </button>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="mt-6">
                        <p className="text-gray-700 leading-relaxed">{userData.bio}</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center space-x-4 mt-4">
                        <a href={`https://github.com/${userData.social.github}`} className="text-gray-600 hover:text-gray-900">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href={`https://linkedin.com/in/${userData.social.linkedin}`} className="text-gray-600 hover:text-blue-600">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={`https://twitter.com/${userData.social.twitter}`} className="text-gray-600 hover:text-blue-400">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                                </div>
                                <div className={`flex items-center text-sm ${
                                    stat.color === 'green' ? 'text-green-600' :
                                    stat.color === 'blue' ? 'text-blue-600' :
                                    'text-gray-600'
                                }`}>
                                    {stat.color === 'green' && <TrendingUp className="w-4 h-4 mr-1" />}
                                    {stat.trend}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Projects & Activity */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Recent Projects */}
                        <div className="bg-white rounded-lg border border-gray-200">
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-gray-900">Recent Projects</h3>
                                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                        View All
                                    </button>
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                {recentProjects.map((project, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center space-x-3">
                                                <h4 className="font-medium text-gray-900">{project.name}</h4>
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                                                    {project.status}
                                                </span>
                                            </div>
                                            <span className={`text-xs font-medium ${getPriorityColor(project.priority)}`}>
                                                {project.priority} Priority
                                            </span>
                                        </div>
                                        
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center space-x-2">
                                                {project.team.map((member, idx) => (
                                                    <div key={idx} className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                                                        {member}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex items-center text-sm text-gray-600">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {project.dueDate}
                                            </div>
                                        </div>

                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div 
                                                className="bg-blue-600 h-2 rounded-full" 
                                                style={{ width: `${project.progress}%` }}
                                            ></div>
                                        </div>
                                        <div className="text-right text-xs text-gray-600 mt-1">
                                            {project.progress}% Complete
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-white rounded-lg border border-gray-200">
                            <div className="p-6 border-b border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    {activities.map((activity, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                {activity.type === 'completion' && <CheckCircle className="w-4 h-4 text-green-600" />}
                                                {activity.type === 'development' && <Activity className="w-4 h-4 text-blue-600" />}
                                                {activity.type === 'documentation' && <Edit3 className="w-4 h-4 text-purple-600" />}
                                                {activity.type === 'review' && <Eye className="w-4 h-4 text-orange-600" />}
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm text-gray-900">
                                                    <span className="font-medium">{activity.action}</span> in{' '}
                                                    <span className="font-medium text-blue-600">{activity.project}</span>
                                                </p>
                                                <p className="text-xs text-gray-600 flex items-center mt-1">
                                                    <Clock className="w-3 h-3 mr-1" />
                                                    {activity.time}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Skills & Info */}
                    <div className="space-y-6">
                        {/* Skills */}
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {userData.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                            <div className="space-y-3">
                                <div className="flex items-center text-sm">
                                    <Mail className="w-4 h-4 text-gray-400 mr-3" />
                                    <span className="text-gray-900">{userData.email}</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <Phone className="w-4 h-4 text-gray-400 mr-3" />
                                    <span className="text-gray-900">{userData.phone}</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <Globe className="w-4 h-4 text-gray-400 mr-3" />
                                    <a href={`https://${userData.website}`} className="text-blue-600 hover:text-blue-800">
                                        {userData.website}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                            <div className="space-y-2">
                                <button className="w-full flex items-center px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                                    <Plus className="w-4 h-4 mr-3" />
                                    Create New Project
                                </button>
                                <button className="w-full flex items-center px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                                    <Users className="w-4 h-4 mr-3" />
                                    Invite Team Member
                                </button>
                                <button className="w-full flex items-center px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                                    <Share2 className="w-4 h-4 mr-3" />
                                    Share Profile
                                </button>
                                <button className="w-full flex items-center px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                                    <Settings className="w-4 h-4 mr-3" />
                                    Account Settings
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfileOverview;
