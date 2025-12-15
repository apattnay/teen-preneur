export default function RevenueTracking() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Revenue Tracking</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Monitor your business growth with powerful analytics and insights. 
            Track revenue, expenses, and key metrics that matter.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Track What Matters
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Revenue Monitoring</h3>
            <p className="text-gray-600">
              Track all your income sources and see your revenue growth over time with 
              detailed charts and reports.
            </p>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Expense Management</h3>
            <p className="text-gray-600">
              Keep track of business expenses, categorize costs, and understand where 
              your money is going.
            </p>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Performance Metrics</h3>
            <p className="text-gray-600">
              Monitor KPIs like customer acquisition cost, lifetime value, and profit margins.
            </p>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Growth Analytics</h3>
            <p className="text-gray-600">
              Visualize your business growth with interactive charts and trend analysis.
            </p>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Goal Setting</h3>
            <p className="text-gray-600">
              Set revenue targets and milestones, then track your progress toward achieving them.
            </p>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Mobile Access</h3>
            <p className="text-gray-600">
              Track your business metrics on the go with our mobile-friendly dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Your Business Dashboard
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg">
                  <h3 className="text-sm font-semibold mb-2 opacity-90">Total Revenue</h3>
                  <p className="text-3xl font-bold">$12,450</p>
                  <p className="text-sm mt-2 opacity-90">↑ 23% from last month</p>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
                  <h3 className="text-sm font-semibold mb-2 opacity-90">Total Expenses</h3>
                  <p className="text-3xl font-bold">$3,280</p>
                  <p className="text-sm mt-2 opacity-90">↓ 12% from last month</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg">
                  <h3 className="text-sm font-semibold mb-2 opacity-90">Net Profit</h3>
                  <p className="text-3xl font-bold">$9,170</p>
                  <p className="text-sm mt-2 opacity-90">↑ 35% from last month</p>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Revenue Over Time</h3>
                <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center text-gray-500">
                  [Interactive Chart Placeholder]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Why Track Your Metrics?
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white border-l-4 border-orange-600 p-6 shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Make Data-Driven Decisions</h3>
            <p className="text-gray-600">
              Use real data to guide your business decisions instead of guessing. Understand 
              what's working and what needs improvement.
            </p>
          </div>
          <div className="bg-white border-l-4 border-orange-600 p-6 shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Impress College Admissions</h3>
            <p className="text-gray-600">
              Document your entrepreneurial journey with concrete metrics that demonstrate 
              your business acumen to universities.
            </p>
          </div>
          <div className="bg-white border-l-4 border-orange-600 p-6 shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Attract Investors</h3>
            <p className="text-gray-600">
              Show potential investors clear evidence of your business traction and growth potential.
            </p>
          </div>
          <div className="bg-white border-l-4 border-orange-600 p-6 shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Learn Financial Management</h3>
            <p className="text-gray-600">
              Develop crucial financial literacy skills by managing your business finances effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            Easy Integration
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Connect your existing tools and platforms to automatically sync your business data.
          </p>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">💳</div>
              <p className="font-semibold text-gray-900">Payment Processors</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">🏦</div>
              <p className="font-semibold text-gray-900">Bank Accounts</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">🛒</div>
              <p className="font-semibold text-gray-900">E-commerce Platforms</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">📧</div>
              <p className="font-semibold text-gray-900">Marketing Tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Tracking Your Success</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get insights into your business performance and make smarter decisions with our 
            revenue tracking tools.
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
            Set Up Your Dashboard
          </button>
        </div>
      </section>
    </div>
  );
}
