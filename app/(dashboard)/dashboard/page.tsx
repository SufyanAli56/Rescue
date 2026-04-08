"use client";

import { useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [activeEmergencies] = useState(3);
  const [nearbyVolunteers] = useState(12);
  const [responseTime] = useState("2.5 min");

  // Dummy data
  const recentAlerts = [
    {
      id: 1,
      type: "Medical Emergency",
      location: "Gulberg, Lahore",
      time: "5 mins ago",
      status: "active",
      distance: "1.2 km",
      icon: "🚑"
    },
    {
      id: 2,
      type: "Car Accident",
      location: "DHA Phase 5",
      time: "12 mins ago",
      status: "responding",
      distance: "3.5 km",
      icon: "🚗"
    },
    {
      id: 3,
      type: "Fire Emergency",
      location: "Model Town",
      time: "25 mins ago",
      status: "resolved",
      distance: "5.8 km",
      icon: "🔥"
    }
  ];

  const nearbyVolunteersList = [
    { id: 1, name: "Ali Khan", distance: "0.8 km", status: "available", avatar: "👨‍⚕️" },
    { id: 2, name: "Sara Ahmed", distance: "1.2 km", status: "available", avatar: "👩‍⚕️" },
    { id: 3, name: "Hassan Raza", distance: "1.5 km", status: "busy", avatar: "👨‍🚒" },
    { id: 4, name: "Fatima Ali", distance: "2.1 km", status: "available", avatar: "👩‍⚕️" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome back, <span className="text-red-400">Hero</span> 👋
          </h1>
          <p className="text-gray-400">Here's what's happening in your emergency network</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Active Emergencies */}
          <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 backdrop-blur-xl rounded-2xl border border-red-500/20 p-6 hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🚨</span>
              </div>
              <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-full">
                LIVE
              </span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{activeEmergencies}</h3>
            <p className="text-gray-400 text-sm">Active Emergencies</p>
          </div>

          {/* Nearby Volunteers */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-6 hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{nearbyVolunteers}</h3>
            <p className="text-gray-400 text-sm">Nearby Volunteers</p>
          </div>

          {/* Avg Response Time */}
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-xl rounded-2xl border border-green-500/20 p-6 hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{responseTime}</h3>
            <p className="text-gray-400 text-sm">Avg Response Time</p>
          </div>

          {/* Emergency Button */}
          <Link
            href="/alert"
            className="bg-gradient-to-br from-red-600 to-red-700 backdrop-blur-xl rounded-2xl border border-red-500/50 p-6 hover:scale-105 transition-all shadow-2xl shadow-red-500/30 flex flex-col items-center justify-center group cursor-pointer"
          >
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <span className="text-4xl">🆘</span>
            </div>
            <h3 className="text-xl font-bold text-white">Send Alert</h3>
            <p className="text-red-100 text-sm">Emergency Help</p>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Recent Alerts - Takes 2 columns */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Recent Alerts</h2>
              <Link href="/history" className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors">
                View All →
              </Link>
            </div>

            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{alert.icon}</span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-white font-semibold">{alert.type}</h3>
                        <span className={`
                          px-3 py-1 rounded-full text-xs font-bold flex-shrink-0
                          ${alert.status === 'active' ? 'bg-red-500/20 text-red-400' : ''}
                          ${alert.status === 'responding' ? 'bg-yellow-500/20 text-yellow-400' : ''}
                          ${alert.status === 'resolved' ? 'bg-green-500/20 text-green-400' : ''}
                        `}>
                          {alert.status.toUpperCase()}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          📍 {alert.location}
                        </span>
                        <span className="flex items-center gap-1">
                          📏 {alert.distance}
                        </span>
                        <span className="flex items-center gap-1">
                          🕐 {alert.time}
                        </span>
                      </div>
                    </div>

                    {alert.status === 'active' && (
                      <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors flex-shrink-0">
                        Respond
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {recentAlerts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <p className="text-gray-400">No active emergencies</p>
              </div>
            )}
          </div>

          {/* Sidebar - Takes 1 column */}
          <div className="space-y-6">
            
            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
              <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
              
              <div className="space-y-3">
                <Link
                  href="/alert"
                  className="flex items-center gap-3 p-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-xl transition-all group"
                >
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🚨</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium text-sm">Send Alert</p>
                    <p className="text-gray-400 text-xs">Emergency help</p>
                  </div>
                  <svg className="w-5 h-5 text-red-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                <Link
                  href="/map"
                  className="flex items-center gap-3 p-3 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 rounded-xl transition-all group"
                >
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🗺️</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium text-sm">View Map</p>
                    <p className="text-gray-400 text-xs">Live emergencies</p>
                  </div>
                  <svg className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                <Link
                  href="/history"
                  className="flex items-center gap-3 p-3 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 rounded-xl transition-all group"
                >
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📋</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium text-sm">History</p>
                    <p className="text-gray-400 text-xs">Past alerts</p>
                  </div>
                  <svg className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Nearby Volunteers */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
              <h2 className="text-xl font-bold text-white mb-4">Nearby Volunteers</h2>
              
              <div className="space-y-3">
                {nearbyVolunteersList.map((volunteer) => (
                  <div
                    key={volunteer.id}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center text-xl">
                      {volunteer.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-sm truncate">{volunteer.name}</p>
                      <p className="text-gray-400 text-xs">{volunteer.distance} away</p>
                    </div>
                    <div className={`
                      w-2 h-2 rounded-full flex-shrink-0
                      ${volunteer.status === 'available' ? 'bg-green-500' : 'bg-gray-500'}
                    `}></div>
                  </div>
                ))}
              </div>

              <Link
                href="/volunteers"
                className="mt-4 block text-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                View All Volunteers →
              </Link>
            </div>

            {/* Status Card */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-2xl border border-green-500/20 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <h3 className="text-white font-semibold">System Status</h3>
              </div>
              <p className="text-green-400 text-sm">All systems operational</p>
              <p className="text-gray-400 text-xs mt-1">Last updated: Just now</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
