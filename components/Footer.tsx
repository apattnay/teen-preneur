import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent">Teen Preneur</h3>
            <p className="text-gray-400 leading-relaxed">
              Empowering teens to transform ideas into impactful businesses.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Platform</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/idea-survey" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Idea Survey
                </Link>
              </li>
              <li>
                <Link href="/mentor-hub" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Mentor Hub
                </Link>
              </li>
              <li>
                <Link href="/alumni-network" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Alumni Network
                </Link>
              </li>
              <li>
                <Link href="/incubator" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Incubator
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/revenue-tracking" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Revenue Tracking
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Profile & Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Connect</h4>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Join our community of young entrepreneurs
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors font-semibold">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors font-semibold">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400">
          <p className="text-sm">&copy; {new Date().getFullYear()} Teen Preneur. All rights reserved. Made with 💙 for teen entrepreneurs.</p>
        </div>
      </div>
    </footer>
  );
}
