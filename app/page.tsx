import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
          Welcome to <span className="text-primary-600">Teen Preneur</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Empowering teens to transform ideas into impactful businesses. 
          Your journey from concept to revenue starts here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/incubator"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition"
          >
            Start Your Journey
          </Link>
          <Link
            href="/mentor-hub"
            className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-50 transition"
          >
            Become a Mentor
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Why Teen Preneur?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Cause-Based</h3>
            <p className="text-gray-600">
              Build businesses that create real impact in your community and the world.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Mentorship</h3>
            <p className="text-gray-600">
              Learn from experienced entrepreneurs and alumni who have been in your shoes.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Track Growth</h3>
            <p className="text-gray-600">
              Monitor your progress from idea to revenue with our tracking tools.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Platform
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/mentor-hub" className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3 text-primary-600">Mentor Hub</h3>
              <p className="text-gray-600">
                Connect with experienced mentors who can guide you through your entrepreneurial journey.
              </p>
            </Link>
            <Link href="/alumni-network" className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3 text-primary-600">Alumni Network</h3>
              <p className="text-gray-600">
                Learn from successful teen entrepreneurs who have grown their businesses.
              </p>
            </Link>
            <Link href="/incubator" className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3 text-primary-600">Startup Incubator</h3>
              <p className="text-gray-600">
                Transform your idea into a viable business with our structured program.
              </p>
            </Link>
            <Link href="/revenue-tracking" className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3 text-primary-600">Revenue Tracking</h3>
              <p className="text-gray-600">
                Monitor your business metrics and financial growth over time.
              </p>
            </Link>
            <Link href="/profile" className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3 text-primary-600">Profile & Portfolio</h3>
              <p className="text-gray-600">
                Build your entrepreneurial portfolio for college applications.
              </p>
            </Link>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3 text-primary-600">Ages 13-19</h3>
              <p className="text-gray-600">
                Designed specifically for teenage entrepreneurs ready to make an impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Ready to Start Your Entrepreneurial Journey?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join hundreds of teen entrepreneurs who are already building impactful businesses.
        </p>
        <Link
          href="/incubator"
          className="inline-block bg-primary-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition"
        >
          Get Started Today
        </Link>
      </section>
    </div>
  );
}
