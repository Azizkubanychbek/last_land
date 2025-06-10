import { Logo } from '@/components/ui/logo';

export function Footer() {
  return (
    <footer className="bg-cyberpunk-darker py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid-bg opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-1 md:col-span-1">
  <Logo />
  <p className="mt-4 text-gray-400 max-w-xs">
    The next-generation decentralized exchange with advanced features, deep liquidity, and ironclad security.
  </p>
  <div className="flex space-x-4 mt-6">
    {/* Discord */}
    <a href="https://discord.gg/AdR3DmMA" className="text-gray-400 hover:text-cyberpunk-cyan transition-colors" aria-label="Discord">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.07.07 0 00-.073.035c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.486 0 12.04 12.04 0 00-.617-1.25.07.07 0 00-.072-.035c-1.67.27-3.288.762-4.884 1.515a.065.065 0 00-.03.027C.533 9.045-.32 13.579.099 18.057a.082.082 0 00.031.055 19.978 19.978 0 006.073 3.078.07.07 0 00.076-.027c.469-.646.885-1.33 1.245-2.05a.07.07 0 00-.038-.093 12.95 12.95 0 01-1.852-.902.07.07 0 01-.007-.117c.124-.093.248-.186.367-.281a.07.07 0 01.071-.01c3.927 1.793 8.18 1.793 12.061 0a.07.07 0 01.072.009c.12.095.243.188.368.282a.07.07 0 01-.006.117c-.595.356-1.215.67-1.853.902a.07.07 0 00-.037.094c.36.72.776 1.404 1.245 2.05a.07.07 0 00.075.028 19.888 19.888 0 006.074-3.078.082.082 0 00.031-.054c.5-5.177-.838-9.673-3.548-13.662a.06.06 0 00-.03-.028zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.093 2.157 2.419 0 1.333-.955 2.418-2.157 2.418zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.093 2.157 2.419 0 1.333-.948 2.418-2.157 2.418z" />
      </svg>
    </a>

    {/* Twitter */}
    <a href="https://x.com/ArmaDex_io" className="text-gray-400 hover:text-cyberpunk-cyan transition-colors" aria-label="Twitter">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    </a>

    {/* GitHub */}
    <a href="https://t.me/armadexofficial" className="text-gray-400 hover:text-cyberpunk-cyan transition-colors" aria-label="GitHub">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
      </svg>
    </a>

    {/* Telegram */}
    <a href="https://t.me/armadexofficial" className="text-gray-400 hover:text-cyberpunk-cyan transition-colors" aria-label="Telegram">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9.36 16.54l-.38 4.47c.55 0 .79-.24 1.08-.53l2.59-2.47 5.37 3.92c.98.54 1.67.25 1.91-.91l3.45-16.16c.31-1.44-.52-2.02-1.47-1.67L1.52 10.46c-1.4.55-1.38 1.34-.24 1.7l4.87 1.52 11.3-7.1c.53-.33 1.01-.15.61.21" />
      </svg>
    </a>
  </div>
</div>
          
          <div className="col-span-1">
            <h3 className="text-white font-display text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-cyberpunk-cyan transition-colors">Exchange</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyberpunk-cyan transition-colors">Liquidity</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyberpunk-cyan transition-colors">Farming</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyberpunk-cyan transition-colors">Staking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyberpunk-cyan transition-colors">Bridge</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-display text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-cyberpunk-cyan transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyberpunk-cyan transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyberpunk-cyan transition-colors">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyberpunk-cyan transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyberpunk-cyan transition-colors">Status</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-display text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-cyberpunk-cyan transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyberpunk-cyan transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyberpunk-cyan transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyberpunk-cyan transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyberpunk-cyan transition-colors">Contact</a></li>
            </ul>
          </div>  
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ArmaDEX. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-gray-400 hover:text-cyberpunk-cyan transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-cyberpunk-cyan transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-cyberpunk-cyan transition-colors text-sm">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}