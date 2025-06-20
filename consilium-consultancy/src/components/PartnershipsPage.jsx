import React, { useState } from 'react';
import { CheckCircle, Users, TrendingUp, Shield, Award, ArrowRight, Star } from 'lucide-react';

const PartnershipsPage = () => {
  const [activeTab, setActiveTab] = useState('strategic');

  const partnerCategories = {
    strategic: {
      title: 'Strategic Partners',
      description: 'Leading financial institutions and technology providers',
      partners: [
        {
          name: 'Goldman Sachs',
          logo: 'GS',
          description: 'Investment banking and securities',
          relationship: 'Preferred Investment Partner',
          since: '2019',
          color: 'bg-blue-500'
        },
        {
          name: 'BlackRock',
          logo: 'BR',
          description: 'Global investment management',
          relationship: 'Asset Management Partner',
          since: '2020',
          color: 'bg-gray-800'
        },
        {
          name: 'Vanguard',
          logo: 'VG',
          description: 'Low-cost investment solutions',
          relationship: 'Fund Provider',
          since: '2018',
          color: 'bg-red-600'
        }
      ]
    },
    technology: {
      title: 'Technology Partners',
      description: 'Cutting-edge fintech and platform providers',
      partners: [
        {
          name: 'Salesforce',
          logo: 'SF',
          description: 'CRM and client management',
          relationship: 'Technology Integration',
          since: '2021',
          color: 'bg-blue-400'
        },
        {
          name: 'Microsoft',
          logo: 'MS',
          description: 'Cloud computing and analytics',
          relationship: 'Cloud Infrastructure',
          since: '2020',
          color: 'bg-green-600'
        },
        {
          name: 'Plaid',
          logo: 'PL',
          description: 'Financial data connectivity',
          relationship: 'Data Integration',
          since: '2022',
          color: 'bg-purple-600'
        }
      ]
    },
    compliance: {
      title: 'Compliance Partners',
      description: 'Regulatory and compliance specialists',
      partners: [
        {
          name: 'Thomson Reuters',
          logo: 'TR',
          description: 'Regulatory intelligence',
          relationship: 'Compliance Solutions',
          since: '2019',
          color: 'bg-orange-500'
        },
        {
          name: 'KPMG',
          logo: 'KP',
          description: 'Audit and advisory services',
          relationship: 'Regulatory Compliance',
          since: '2018',
          color: 'bg-blue-700'
        },
        {
          name: 'Deloitte',
          logo: 'DL',
          description: 'Risk management consulting',
          relationship: 'Risk Advisory',
          since: '2020',
          color: 'bg-green-700'
        }
      ]
    }
  };

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Enhanced Returns',
      description: 'Access to exclusive investment opportunities through our partner network'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Risk Mitigation',
      description: 'Diversified partnerships reduce single-point-of-failure risks'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Network',
      description: 'Combined expertise from industry-leading professionals'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Premium Services',
      description: 'Access to institutional-grade financial products and services'
    }
  ];

  const stats = [
    { number: '25+', label: 'Strategic Partners' },
    { number: '$50B+', label: 'Combined AUM' },
    { number: '15+', label: 'Years Experience' },
    { number: '99.9%', label: 'Uptime Reliability' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Strategic
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Collaborating with industry leaders to deliver unparalleled financial services 
              and investment opportunities to our clients.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Partnership Benefits</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our carefully selected partnerships enhance our service offerings and provide you with access to best-in-class solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="text-cyan-400 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Partners</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our network of trusted partners across different categories.
            </p>
          </div>

          {/* Partner Category Tabs */}
          <div className="flex flex-wrap justify-center mb-8 space-x-1">
            {Object.entries(partnerCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Active Partner Category */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              {partnerCategories[activeTab].title}
            </h3>
            <p className="text-gray-300 mb-8">
              {partnerCategories[activeTab].description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerCategories[activeTab].partners.map((partner, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${partner.color} rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4`}>
                      {partner.logo}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{partner.name}</h4>
                      <p className="text-sm text-gray-400">Since {partner.since}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{partner.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">
                      {partner.relationship}
                    </span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Opportunities */}
      <div className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Are you interested in partnering with Consilium? We're always looking to collaborate 
              with innovative companies that share our commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
                Partnership Inquiry
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                Download Partnership Guide
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance & Security */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Compliance & Security</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              All our partnerships meet the highest standards of regulatory compliance and security.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">SEC Registered</h3>
              <p className="text-gray-300 text-sm">All investment partners are SEC registered and compliant</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Bank-Level Security</h3>
              <p className="text-gray-300 text-sm">256-bit encryption and multi-factor authentication</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Industry Awards</h3>
              <p className="text-gray-300 text-sm">Recognized partnerships with award-winning firms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipsPage;