export default function AlumniNetwork() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Alumni Network</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Connect with successful Teen Preneur graduates who have transformed their ideas into 
            thriving businesses and are ready to share their experiences.
          </p>
        </div>
      </section>

      {/* Success Stories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Success Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-32"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Sarah Chen</h3>
              <p className="text-sm text-primary-600 mb-3">Tech Startup • Age 18</p>
              <p className="text-gray-600 mb-4">
                Built an AI-powered study platform that helps students learn more efficiently. 
                Now used by 10,000+ students.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Revenue:</span> $50K+
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 h-32"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Marcus Johnson</h3>
              <p className="text-sm text-primary-600 mb-3">Social Impact • Age 17</p>
              <p className="text-gray-600 mb-4">
                Created a non-profit connecting local restaurants with food banks to reduce waste 
                and fight hunger.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Impact:</span> 100K+ meals donated
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-pink-500 to-orange-500 h-32"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Emma Rodriguez</h3>
              <p className="text-sm text-primary-600 mb-3">E-Commerce • Age 19</p>
              <p className="text-gray-600 mb-4">
                Launched an eco-friendly fashion brand using sustainable materials. Featured in 
                major publications.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Revenue:</span> $100K+
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Benefits */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Network Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Peer Support</h3>
              <p className="text-gray-600">
                Connect with fellow teen entrepreneurs who understand your journey.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Learn from Experience</h3>
              <p className="text-gray-600">
                Get insights from those who have successfully navigated challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Networking</h3>
              <p className="text-gray-600">
                Build valuable connections that can help grow your business.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Opportunities</h3>
              <p className="text-gray-600">
                Access exclusive opportunities and collaborations within the network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Community Features
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white border-l-4 border-purple-600 p-6 shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Monthly Meetups</h3>
            <p className="text-gray-600">
              Join virtual and in-person gatherings to share experiences and build relationships.
            </p>
          </div>
          <div className="bg-white border-l-4 border-purple-600 p-6 shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Alumni Spotlights</h3>
            <p className="text-gray-600">
              Get featured in our newsletter and social media channels to showcase your success.
            </p>
          </div>
          <div className="bg-white border-l-4 border-purple-600 p-6 shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Resource Library</h3>
            <p className="text-gray-600">
              Access exclusive content, templates, and tools shared by successful alumni.
            </p>
          </div>
          <div className="bg-white border-l-4 border-purple-600 p-6 shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Collaboration Hub</h3>
            <p className="text-gray-600">
              Find co-founders, partners, or collaborators within the Teen Preneur community.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Alumni Network</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with successful teen entrepreneurs and become part of our thriving community.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
            Join the Network
          </button>
        </div>
      </section>
    </div>
  );
}
