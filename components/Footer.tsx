import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Teen Preneur</h3>
            <p className="text-gray-400">
              Empowering teens to transform ideas into impactful businesses.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/idea-survey" className="text-gray-400 hover:text-white transition">
                  Idea Survey
                </Link>
              </li>
              <li>
                <Link href="/mentor-hub" className="text-gray-400 hover:text-white transition">
                  Mentor Hub
                </Link>
              </li>
              <li>
                <Link href="/alumni-network" className="text-gray-400 hover:text-white transition">
                  Alumni Network
                </Link>
              </li>
              <li>
                <Link href="/incubator" className="text-gray-400 hover:text-white transition">
                  Incubator
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/revenue-tracking" className="text-gray-400 hover:text-white transition">
                  Revenue Tracking
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-gray-400 hover:text-white transition">
                  Profile & Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <p className="text-gray-400 mb-2">
              Join our community of young entrepreneurs
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Teen Preneur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
