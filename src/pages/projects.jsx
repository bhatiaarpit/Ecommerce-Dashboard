import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar, User, DollarSign, Clock, MoreVertical, Plus, Download, Grid, List } from 'lucide-react';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [teamFilter, setTeamFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('newest');

  // Dummy project data
  const projects = [
    {
      id: 1,
      name: "Stellar Analytics Dashboard",
      description: "Advanced analytics platform for business intelligence and data visualization",
      status: "In Progress",
      priority: "High",
      team: "Data Team",
      budget: 75000,
      spent: 45000,
      progress: 68,
      startDate: "2024-03-15",
      endDate: "2024-12-20",
      members: ["John Smith", "Sarah Wilson", "Mike Chen"],
      category: "Analytics",
      color: "blue"
    },
    {
      id: 2,
      name: "Phoenix Mobile App",
      description: "Cross-platform mobile application for customer engagement and service delivery",
      status: "Completed",
      priority: "Medium",
      team: "Mobile Team",
      budget: 120000,
      spent: 118000,
      progress: 100,
      startDate: "2024-01-10",
      endDate: "2024-09-15",
      members: ["Emily Davis", "Robert Johnson", "Lisa Zhang"],
      category: "Mobile",
      color: "green"
    },
    {
      id: 3,
      name: "Quantum Security Suite",
      description: "Enterprise-grade security solution with advanced threat detection and prevention",
      status: "Planning",
      priority: "High",
      team: "Security Team",
      budget: 200000,
      spent: 12000,
      progress: 8,
      startDate: "2024-10-01",
      endDate: "2025-06-30",
      members: ["David Brown", "Jessica Taylor"],
      category: "Security",
      color: "purple"
    },
    {
      id: 4,
      name: "Aurora E-commerce Platform",
      description: "Modern e-commerce solution with integrated payment processing and inventory management",
      status: "In Progress",
      priority: "Medium",
      team: "Web Team",
      budget: 95000,
      spent: 23000,
      progress: 34,
      startDate: "2024-08-01",
      endDate: "2025-02-28",
      members: ["Mark Williams", "Anna Rodriguez", "Tom Anderson", "Kate Morrison"],
      category: "E-commerce",
      color: "orange"
    },
    {
      id: 5,
      name: "Nebula Data Migration",
      description: "Large-scale data migration and system modernization project",
      status: "On Hold",
      priority: "Low",
      team: "Infrastructure Team",
      budget: 60000,
      spent: 8000,
      progress: 15,
      startDate: "2024-05-20",
      endDate: "2024-11-30",
      members: ["Chris Lee", "Amanda White"],
      category: "Infrastructure",
      color: "gray"
    },
    {
      id: 6,
      name: "Cosmos AI Assistant",
      description: "Intelligent AI-powered assistant for customer support and task automation",
      status: "In Progress",
      priority: "High",
      team: "AI Team",
      budget: 150000,
      spent: 87000,
      progress: 72,
      startDate: "2024-02-01",
      endDate: "2024-11-15",
      members: ["Rachel Green", "James Wilson", "Alex Kim"],
      category: "AI/ML",
      color: "indigo"
    },
    {
      id: 7,
      name: "Zenith Reporting Engine",
      description: "Automated reporting system with customizable dashboards and scheduled reports",
      status: "Completed",
      priority: "Medium",
      team: "Backend Team",
      budget: 45000,
      spent: 42000,
      progress: 100,
      startDate: "2024-04-01",
      endDate: "2024-08-30",
      members: ["Paul Martinez", "Nicole Thompson"],
      category: "Backend",
      color: "teal"
    },
    {
      id: 8,
      name: "Orbit Social Network",
      description: "Internal social networking platform for team collaboration and knowledge sharing",
      status: "In Progress",
      priority: "Low",
      team: "Social Team",
      budget: 35000,
      spent: 18000,
      progress: 51,
      startDate: "2024-06-15",
      endDate: "2024-12-31",
      members: ["Sophie Davis", "Ryan Clark"],
      category: "Social",
      color: "pink"
    }
  ];

  const teams = [...new Set(projects.map(p => p.team))];
  const categories = [...new Set(projects.map(p => p.category))];

  const filteredProjects = useMemo(() => {
    let filtered = projects.filter(project => {
      const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
      const matchesPriority = priorityFilter === 'all' || project.priority === priorityFilter;
      const matchesTeam = teamFilter === 'all' || project.team === teamFilter;
      
      return matchesSearch && matchesStatus && matchesPriority && matchesTeam;
    });

    // Sort projects
    switch (sortBy) {
      case 'newest':
        return filtered.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
      case 'oldest':
        return filtered.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
      case 'name':
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      case 'budget':
        return filtered.sort((a, b) => b.budget - a.budget);
      case 'progress':
        return filtered.sort((a, b) => b.progress - a.progress);
      default:
        return filtered;
    }
  }, [searchTerm, statusFilter, priorityFilter, teamFilter, sortBy]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      case 'On Hold': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
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

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-400 hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full bg-${project.color}-500`}></div>
            <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreVertical size={20} />
          </button>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
            {project.priority}
          </span>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Progress</span>
            <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`bg-${project.color}-500 h-2 rounded-full transition-all duration-300`}
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center space-x-2">
            <DollarSign size={16} className="text-gray-400" />
            <div>
              <div className="text-gray-600">Budget</div>
              <div className="font-medium">{formatCurrency(project.budget)}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar size={16} className="text-gray-400" />
            <div>
              <div className="text-gray-600">Due Date</div>
              <div className="font-medium">{new Date(project.endDate).toLocaleDateString()}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">{project.team}</div>
          <div className="flex -space-x-2">
            {project.members.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600"
                title={member}
              >
                {member.split(' ').map(n => n[0]).join('')}
              </div>
            ))}
            {project.members.length > 3 && (
              <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-500">
                +{project.members.length - 3}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectRow = ({ project }) => (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center space-x-3">
          <div className={`w-3 h-3 rounded-full bg-${project.color}-500`}></div>
          <div>
            <div className="text-sm font-medium text-gray-900">{project.name}</div>
            <div className="text-sm text-gray-500">{project.category}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
          {project.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
          {project.priority}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {project.team}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
            <div 
              className={`bg-${project.color}-500 h-2 rounded-full`}
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
          <span className="text-sm text-gray-600">{project.progress}%</span>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {formatCurrency(project.budget)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {new Date(project.endDate).toLocaleDateString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex -space-x-1">
          {project.members.slice(0, 3).map((member, index) => (
            <div
              key={index}
              className="w-6 h-6 rounded-full bg-gray-300 border border-white flex items-center justify-center text-xs font-medium text-gray-600"
              title={member}
            >
              {member.split(' ').map(n => n[0]).join('')}
            </div>
          ))}
          {project.members.length > 3 && (
            <div className="w-6 h-6 rounded-full bg-gray-100 border border-white flex items-center justify-center text-xs font-medium text-gray-500">
              +{project.members.length - 3}
            </div>
          )}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical size={16} />
        </button>
      </td>
    </tr>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-400 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Projects</h1>
              <span className="text-sm text-gray-500 dark:text-gray-300">
                {filteredProjects.length} projects
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                <Plus size={16} />
                <span>New Project</span>
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
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-400 dark:border-gray-800 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Status Filter */}
            <select
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Planning">Planning</option>
              <option value="On Hold">On Hold</option>
            </select>

            {/* Priority Filter */}
            <select
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
            >
              <option value="all">All Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            {/* Team Filter */}
            <select
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={teamFilter}
              onChange={(e) => setTeamFilter(e.target.value)}
            >
              <option value="all">All Teams</option>
              {teams.map(team => (
                <option key={team} value={team}>{team}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="name">Name A-Z</option>
              <option value="budget">Budget High-Low</option>
              <option value="progress">Progress High-Low</option>
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
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>
        </div>

        {/* Projects Display */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-400 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Members</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredProjects.map(project => (
                    <ProjectRow key={project.id} project={project} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-2">No projects found</div>
            <div className="text-gray-400">Try adjusting your filters or search terms</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;