"use client";

import { useState } from "react";

interface Idea {
  id: number;
  title: string;
  description: string;
  category: string;
  author: string;
  votes: number;
  interestMeter: number;
  hasPocScreenshot?: boolean;
  hasMvpScreenshot?: boolean;
  potentialTraction: string;
  submittedDate: string;
}

// Interest meter increases by this amount per vote
const INTEREST_METER_INCREMENT = 2;

// Sample data - In production, this would come from a database
const sampleIdeas: Idea[] = [
  {
    id: 1,
    title: "EcoTrack - Carbon Footprint Tracker",
    description: "A mobile app that helps individuals track and reduce their daily carbon footprint through gamification and community challenges.",
    category: "Environmental",
    author: "Sarah M., Age 17",
    votes: 234,
    interestMeter: 78,
    hasPocScreenshot: true,
    hasMvpScreenshot: true,
    potentialTraction: "500+ beta signups, 85% engagement rate",
    submittedDate: "2025-01-10"
  },
  {
    id: 2,
    title: "StudyBuddy AI",
    description: "AI-powered study companion that creates personalized study plans and practice questions based on your learning style.",
    category: "Education",
    author: "Alex K., Age 16",
    votes: 189,
    interestMeter: 65,
    hasPocScreenshot: true,
    potentialTraction: "300+ interested students from 5 schools",
    submittedDate: "2025-01-08"
  },
  {
    id: 3,
    title: "LocalHero - Community Service Platform",
    description: "Connect teens with local volunteer opportunities and track their community service hours for college applications.",
    category: "Social Impact",
    author: "Jordan P., Age 18",
    votes: 156,
    interestMeter: 52,
    hasMvpScreenshot: true,
    potentialTraction: "3 local organizations interested in partnership",
    submittedDate: "2025-01-05"
  }
];

export default function IdeaSurvey() {
  const [ideas, setIdeas] = useState<Idea[]>(sampleIdeas);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("votes");
  const [showSubmitForm, setShowSubmitForm] = useState(false);

  const categories = ["All", "Technology", "Environmental", "Education", "Social Impact", "E-Commerce", "Health & Wellness"];

  const handleVote = (ideaId: number) => {
    setIdeas(ideas.map(idea => 
      idea.id === ideaId 
        ? { ...idea, votes: idea.votes + 1, interestMeter: Math.min(100, idea.interestMeter + INTEREST_METER_INCREMENT) }
        : idea
    ));
  };

  const filteredIdeas = ideas
    .filter(idea => selectedCategory === "All" || idea.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === "votes") return b.votes - a.votes;
      if (sortBy === "interest") return b.interestMeter - a.interestMeter;
      return new Date(b.submittedDate).getTime() - new Date(a.submittedDate).getTime();
    });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Idea Survey & Validation</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Share your startup idea, get community feedback, and validate your concept before building. 
            Vote on ideas you'd love to see come to life!
          </p>
          <button 
            onClick={() => setShowSubmitForm(true)}
            className="bg-white text-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Submit Your Idea
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          How Idea Validation Works
        </h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Submit Idea</h3>
            <p className="text-sm text-gray-600">Share your startup concept with the community</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📸</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Add POC/MVP</h3>
            <p className="text-sm text-gray-600">Upload screenshots or demos if available</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🗳️</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Get Votes</h3>
            <p className="text-sm text-gray-600">Community votes show interest level</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Track Traction</h3>
            <p className="text-sm text-gray-600">See interest meter and potential</p>
          </div>
        </div>
      </section>

      {/* Filters and Sorting */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <label className="text-gray-700 font-semibold">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
              >
                <option value="votes">Most Votes</option>
                <option value="interest">Highest Interest</option>
                <option value="recent">Most Recent</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Ideas List */}
      <section className="container mx-auto px-4 py-16">
        <div className="space-y-6 max-w-5xl mx-auto">
          {filteredIdeas.map(idea => (
            <div key={idea.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{idea.title}</h3>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
                        {idea.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{idea.description}</p>
                    <p className="text-sm text-gray-500">By {idea.author}</p>
                  </div>
                </div>

                {/* Interest Meter */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700">Interest Meter</span>
                    <span className="text-sm font-bold text-purple-600">{idea.interestMeter}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${idea.interestMeter}%` }}
                    ></div>
                  </div>
                </div>

                {/* POC/MVP Status */}
                <div className="flex gap-4 mb-4">
                  {idea.hasPocScreenshot && (
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-2xl">📱</span>
                      <span className="text-gray-700 font-semibold">POC Available</span>
                    </div>
                  )}
                  {idea.hasMvpScreenshot && (
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-2xl">✅</span>
                      <span className="text-gray-700 font-semibold">MVP Built</span>
                    </div>
                  )}
                </div>

                {/* Potential Traction */}
                {idea.potentialTraction && (
                  <div className="bg-green-50 border-l-4 border-green-500 p-3 mb-4">
                    <p className="text-sm text-green-800">
                      <span className="font-semibold">Traction: </span>
                      {idea.potentialTraction}
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex justify-between items-center pt-4 border-t">
                  <button
                    onClick={() => handleVote(idea.id)}
                    className="flex items-center gap-2 bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
                  >
                    <span>👍</span>
                    <span>Vote</span>
                    <span className="bg-purple-700 px-2 py-1 rounded">
                      {idea.votes}
                    </span>
                  </button>
                  <div className="flex gap-3">
                    <button className="text-gray-600 hover:text-purple-600 font-semibold">
                      View Details
                    </button>
                    <button className="text-gray-600 hover:text-purple-600 font-semibold">
                      Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Submit Form Modal */}
      {showSubmitForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Submit Your Idea</h2>
                <button 
                  onClick={() => setShowSubmitForm(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Idea Title *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Give your idea a catchy name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category *
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option>Select a category</option>
                    {categories.filter(c => c !== "All").map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Describe your idea, the problem it solves, and who it helps"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    POC Screenshot (Optional)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">Upload a screenshot of your proof of concept</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    MVP Screenshot (Optional)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">Upload a screenshot of your MVP if you've built one</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Traction (Optional)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., 100+ signups, 5 beta testers, partnership interest"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowSubmitForm(false)}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
                  >
                    Submit Idea
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Why Validate Section */}
      <section className="bg-purple-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Validate Your Idea?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Reduce Risk</h3>
              <p className="text-gray-600">
                Validate demand before investing time and resources into building.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Get Feedback</h3>
              <p className="text-gray-600">
                Receive constructive feedback from peers and mentors to improve your idea.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Find Support</h3>
              <p className="text-gray-600">
                Connect with others interested in your idea who could become users or collaborators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Validate Your Idea?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of teen entrepreneurs who are testing their ideas and building with confidence.
          </p>
          <button 
            onClick={() => setShowSubmitForm(true)}
            className="bg-white text-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Submit Your Idea Now
          </button>
        </div>
      </section>
    </div>
  );
}
