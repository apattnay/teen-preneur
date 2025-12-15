export default function MentorHub() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Mentor Hub</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Connect with experienced entrepreneurs and industry experts who are passionate about 
            helping the next generation of business leaders succeed.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Why Get a Mentor?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Expert Guidance</h3>
            <p className="text-gray-600">
              Learn from those who have successfully built and scaled businesses.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Focused Support</h3>
            <p className="text-gray-600">
              Get personalized advice tailored to your specific business challenges.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Accelerate Growth</h3>
            <p className="text-gray-600">
              Avoid common pitfalls and fast-track your entrepreneurial journey.
            </p>
          </div>
        </div>
      </section>

      {/* Mentor Categories */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Find Your Mentor
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-primary-600">Technology</h3>
              <p className="text-gray-600 mb-4">
                Software development, AI, and tech startups
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Web & Mobile Apps</li>
                <li>• SaaS Products</li>
                <li>• Tech Innovation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-primary-600">Social Impact</h3>
              <p className="text-gray-600 mb-4">
                Non-profits and cause-based ventures
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Community Projects</li>
                <li>• Environmental Causes</li>
                <li>• Social Enterprises</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-primary-600">E-Commerce</h3>
              <p className="text-gray-600 mb-4">
                Online stores and digital marketplaces
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Product Development</li>
                <li>• Marketing & Sales</li>
                <li>• Supply Chain</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-primary-600">Creative & Media</h3>
              <p className="text-gray-600 mb-4">
                Content creation and creative businesses
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Content Strategy</li>
                <li>• Brand Building</li>
                <li>• Digital Marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          How It Works
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Complete Your Profile</h3>
                <p className="text-gray-600">
                  Share your interests, goals, and the type of business you want to build.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Get Matched</h3>
                <p className="text-gray-600">
                  We'll connect you with mentors who have experience in your area of interest.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Schedule Sessions</h3>
                <p className="text-gray-600">
                  Book regular mentoring sessions and get personalized guidance for your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Mentor?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Teen Preneur today and get connected with experienced mentors who can help you succeed.
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
            Apply for Mentorship
          </button>
        </div>
      </section>
    </div>
  );
}
