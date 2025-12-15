export default function Profile() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Profile & Portfolio</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Build a compelling entrepreneurial portfolio that showcases your journey, 
            achievements, and impact to colleges and future opportunities.
          </p>
        </div>
      </section>

      {/* Portfolio Benefits */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Why Build Your Portfolio?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">College Admissions</h3>
            <p className="text-gray-600">
              Stand out in college applications with documented entrepreneurial achievements 
              and real-world business experience.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">💼</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Professional Network</h3>
            <p className="text-gray-600">
              Share your portfolio with mentors, investors, and potential partners to 
              build valuable connections.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Document Success</h3>
            <p className="text-gray-600">
              Keep a comprehensive record of your entrepreneurial journey, milestones, 
              and lessons learned.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Components */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            What's in Your Portfolio?
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">Personal Story</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Your background and what drives you
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Your entrepreneurial mission
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Future goals and aspirations
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">Business Ventures</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Detailed project descriptions
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Problem solved and impact created
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Revenue and growth metrics
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">Skills & Expertise</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Technical and business skills
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Certifications and training
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Tools and technologies used
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">Impact & Recognition</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Social and community impact
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Awards and recognition
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Media mentions and press
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">Testimonials</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Mentor recommendations
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Customer reviews
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Partner endorsements
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">Media Gallery</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Project photos and videos
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Event presentations
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Product demonstrations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Sample Portfolio Preview
        </h2>
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
          {/* Portfolio Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white p-8">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl">
                👤
              </div>
              <div>
                <h3 className="text-3xl font-bold">Alex Johnson</h3>
                <p className="text-lg opacity-90">Teen Entrepreneur | Age 17</p>
                <p className="text-sm opacity-75 mt-2">
                  Building sustainable solutions for environmental challenges
                </p>
              </div>
            </div>
          </div>

          {/* Portfolio Content */}
          <div className="p-8">
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4 text-gray-900">Featured Projects</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-600 pl-4">
                  <h5 className="font-bold text-gray-900">EcoTrack App</h5>
                  <p className="text-sm text-gray-600 mb-2">
                    Mobile app helping users reduce carbon footprint
                  </p>
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <span>5,000+ downloads</span>
                    <span>•</span>
                    <span>$8K revenue</span>
                  </div>
                </div>
                <div className="border-l-4 border-indigo-600 pl-4">
                  <h5 className="font-bold text-gray-900">Green Schools Initiative</h5>
                  <p className="text-sm text-gray-600 mb-2">
                    Non-profit helping schools implement sustainability programs
                  </p>
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <span>15 schools impacted</span>
                    <span>•</span>
                    <span>500+ students reached</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4 text-gray-900">Skills</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                  Product Development
                </span>
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                  Marketing
                </span>
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                  Public Speaking
                </span>
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                  Financial Planning
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-gray-900">Recognition</h4>
              <ul className="space-y-2 text-gray-600">
                <li>🏆 Teen Entrepreneur of the Year 2024</li>
                <li>📰 Featured in Local Business Journal</li>
                <li>💚 Environmental Impact Award Winner</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Tips */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Portfolio Building Tips
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-2 text-gray-900">Be Authentic</h3>
              <p className="text-gray-600">
                Tell your genuine story. Colleges and mentors want to see the real you, 
                including challenges faced and lessons learned.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-2 text-gray-900">Show Impact</h3>
              <p className="text-gray-600">
                Quantify your achievements with metrics. Numbers help demonstrate the 
                scale and significance of your work.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-2 text-gray-900">Keep It Updated</h3>
              <p className="text-gray-600">
                Regularly add new projects, achievements, and skills to show continuous 
                growth and development.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-2 text-gray-900">Make It Visual</h3>
              <p className="text-gray-600">
                Include photos, videos, and infographics to make your portfolio engaging 
                and memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Building Your Portfolio</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Create a compelling portfolio that showcases your entrepreneurial journey 
            and opens doors to future opportunities.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
            Create Your Profile
          </button>
        </div>
      </section>
    </div>
  );
}
