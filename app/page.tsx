import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-semibold text-sm">
          🚀 Empowering the Next Generation of Entrepreneurs
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 leading-tight">
          Welcome to <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">Teen Preneur</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Empowering teens to transform ideas into impactful businesses. 
          Your journey from concept to revenue starts here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/incubator"
            className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Start Your Journey →
          </Link>
          <Link
            href="/mentor-hub"
            className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-50 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Become a Mentor
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-gray-900">
          Why Teen Preneur?
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          Join a community designed to help young entrepreneurs succeed
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
              🎯
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Cause-Based</h3>
            <p className="text-gray-600 leading-relaxed">
              Build businesses that create real impact in your community and the world.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
              👥
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Mentorship</h3>
            <p className="text-gray-600 leading-relaxed">
              Learn from experienced entrepreneurs and alumni who have been in your shoes.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
              📈
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Track Growth</h3>
            <p className="text-gray-600 leading-relaxed">
              Monitor your progress from idea to revenue with our tracking tools.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-gray-900">
            Our Platform
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Everything you need to build and grow your startup
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <Link href="/idea-survey" className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform">
                  💡
                </div>
                <h3 className="text-xl font-bold text-primary-600 group-hover:text-primary-700">Idea Survey</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Validate your startup idea with community voting and feedback before building.
              </p>
            </Link>
            <Link href="/mentor-hub" className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-primary-600 group-hover:text-primary-700">Mentor Hub</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Connect with experienced mentors who can guide you through your entrepreneurial journey.
              </p>
            </Link>
            <Link href="/alumni-network" className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform">
                  🌟
                </div>
                <h3 className="text-xl font-bold text-primary-600 group-hover:text-primary-700">Alumni Network</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Learn from successful teen entrepreneurs who have grown their businesses.
              </p>
            </Link>
            <Link href="/incubator" className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform">
                  🚀
                </div>
                <h3 className="text-xl font-bold text-primary-600 group-hover:text-primary-700">Startup Incubator</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Transform your idea into a viable business with our structured program.
              </p>
            </Link>
            <Link href="/revenue-tracking" className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform">
                  📊
                </div>
                <h3 className="text-xl font-bold text-primary-600 group-hover:text-primary-700">Revenue Tracking</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Monitor your business metrics and financial growth over time.
              </p>
            </Link>
            <Link href="/profile" className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform">
                  👤
                </div>
                <h3 className="text-xl font-bold text-primary-600 group-hover:text-primary-700">Profile & Portfolio</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Build your entrepreneurial portfolio for college applications.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-3xl p-12 md:p-16 shadow-2xl max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            Ready to Start Your Entrepreneurial Journey?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of teen entrepreneurs who are already building impactful businesses.
          </p>
          <Link
            href="/incubator"
            className="inline-block bg-white text-primary-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Get Started Today →
          </Link>
        </div>
      </section>
    </div>
  );
}
