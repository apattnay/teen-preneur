export default function Incubator() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Startup Incubator</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Transform your idea into a thriving business with our structured program 
            designed specifically for teen entrepreneurs.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          From Idea to Revenue
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Ideation</h3>
              <p className="text-sm text-gray-600">Refine and validate your idea</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Planning</h3>
              <p className="text-sm text-gray-600">Create business plan</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Building</h3>
              <p className="text-sm text-gray-600">Develop your product</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Launch</h3>
              <p className="text-sm text-gray-600">Go to market</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-green-600">5</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Growth</h3>
              <p className="text-sm text-gray-600">Scale your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            What You'll Get
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">📖</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Structured Curriculum</h3>
              <p className="text-gray-600">
                Follow our proven 12-week program covering all aspects of building a business, 
                from idea validation to customer acquisition.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">One-on-One Mentorship</h3>
              <p className="text-gray-600">
                Get paired with an experienced mentor who will guide you through every step 
                of your entrepreneurial journey.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Tools & Resources</h3>
              <p className="text-gray-600">
                Access templates, tools, and resources for business planning, marketing, 
                financial management, and more.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Funding Opportunities</h3>
              <p className="text-gray-600">
                Learn how to pitch your business and access potential seed funding opportunities 
                from our partner network.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Workshops & Training</h3>
              <p className="text-gray-600">
                Attend live workshops on topics like marketing, sales, product development, 
                and business operations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Demo Day</h3>
              <p className="text-gray-600">
                Pitch your business to investors, mentors, and the community at our quarterly 
                Demo Day events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          How to Apply
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex">
            <div className="flex-shrink-0 bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Submit Your Application</h3>
              <p className="text-gray-600">
                Tell us about yourself, your idea, and why you want to join Teen Preneur. 
                Include information about the problem you're solving and your vision.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0 bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Initial Review</h3>
              <p className="text-gray-600">
                Our team will review your application and assess the potential of your idea. 
                We look for passion, commitment, and social impact.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0 bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Interview</h3>
              <p className="text-gray-600">
                If selected, you'll have a video interview with our team to discuss your idea 
                in detail and learn more about the program.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0 bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
              4
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Welcome Aboard!</h3>
              <p className="text-gray-600">
                Accepted founders join our next cohort and begin their entrepreneurial journey 
                with Teen Preneur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            Who Can Apply?
          </h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-2xl">✓</span>
                <span>Ages 13-19 years old</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-2xl">✓</span>
                <span>Have a business idea or early-stage startup</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-2xl">✓</span>
                <span>Passionate about creating positive impact</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-2xl">✓</span>
                <span>Committed to completing the 12-week program</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-2xl">✓</span>
                <span>Open to learning and feedback</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Startup?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Applications for our next cohort are now open. Don't miss this opportunity to 
            turn your idea into reality.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition mr-4">
            Apply Now
          </button>
          <button className="bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-800 transition border-2 border-white">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
