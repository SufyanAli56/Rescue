// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
  
          {/* Top Grid */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
  
            {/* Product */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                RapidRescue
              </h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#features" className="hover:text-white">Emergency Dispatch</a></li>
                <li><a href="#features" className="hover:text-white">Ambulance Tracking</a></li>
                <li><a href="#features" className="hover:text-white">Hospital Integration</a></li>
                <li><a href="#features" className="hover:text-white">Real-time Alerts</a></li>
              </ul>
            </div>
  
            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                <li><a href="/about" className="hover:text-white">About RapidRescue</a></li>
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
                <li><a href="/careers" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
  
            {/* Support */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Support
              </h3>
              <ul className="mt-4 space-y-3">
                <li><a href="/help" className="hover:text-white">Help Center</a></li>
                <li><a href="/contact" className="hover:text-white">Contact Support</a></li>
                <li><a href="/status" className="hover:text-white">System Status</a></li>
                <li><a href="/docs" className="hover:text-white">API Docs</a></li>
              </ul>
            </div>
  
            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
                <li><a href="/security" className="hover:text-white">Security</a></li>
              </ul>
            </div>
  
          </div>
  
          {/* Bottom */}
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
  
            <p className="mb-2 font-semibold text-white">
              RapidRescue 🚑
            </p>
  
            <p>
              Real-time emergency response and ambulance coordination platform.
            </p>
  
            <p className="mt-2 text-gray-400">
              &copy; {new Date().getFullYear()} RapidRescue. All rights reserved.
            </p>
  
          </div>
  
        </div>
      </footer>
    );
  }