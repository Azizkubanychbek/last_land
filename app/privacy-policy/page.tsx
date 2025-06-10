"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PrivacyPolicyPage() {
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate content sections on scroll
    const sections = contentRef.current?.querySelectorAll('.policy-section');
    if (sections) {
      sections.forEach((section, index) => {
        gsap.fromTo(
          section,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top bottom-=100",
              toggleActions: "play none none none"
            },
            delay: index * 0.1
          }
        );
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-cyberpunk-black text-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back button */}
          <button
            onClick={() => router.back()}
            className="inline-flex items-center space-x-2 text-cyberpunk-cyan hover:text-white transition-colors duration-200 mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Privacy <span className="text-cyberpunk-cyan">Policy</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Learn how ArmaDEX protects your privacy and handles your data in our decentralized ecosystem.
            </p>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-12 text-gray-300 leading-relaxed">

            {/* Section 1 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">1. Introduction</h2>
              <p>
                This Privacy Policy describes how ArmaDEX collects, uses, stores, and protects user information when using the ArmaDEX decentralized exchange and related services. ArmaDEX strives to ensure maximum transparency regarding data processing while adhering to the principles of decentralization and privacy that underlie our platform.
              </p>
            </section>

            {/* Section 2 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">2.1. User-Provided Information</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Cryptocurrency Wallet Addresses:</strong> Connecting a cryptocurrency wallet is required to interact with the ArmaDEX protocol.</li>
                <li><strong>KYC/AML Information (Optional):</strong> When using compliance zones, users may voluntarily provide verification information through third-party KYC/AML service providers.</li>
                <li><strong>Delegation Data:</strong> When delegating ARMA to validators or participating in DAO governance.</li>
              </ul>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">2.2. Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Blockchain Data:</strong> All transactions executed through ArmaDEX are recorded on the public blockchain, including wallet addresses, transaction amounts, and smart contract metadata.</li>
                <li><strong>Technical Data:</strong> Browser, IP address, and device information may be collected to ensure security and improve user experience.</li>
                <li><strong>Usage Data:</strong> Interface interaction statistics, including visited pages and performed actions.</li>
              </ul>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">2.3. Stealth Liquidity Layer (SLL) Data</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Encrypted Orders:</strong> When using the Stealth Liquidity Layer, order details (direction, quantity, price) are hashed using cryptographic methods and remain publicly invisible until execution.</li>
                <li><strong>SNARK Proofs:</strong> Cryptographic proofs confirming transaction validity without revealing their contents.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">3. How We Use Information</h2>
              <p className="mb-4">ArmaDEX uses collected information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Protocol Operation:</strong> Processing transactions, executing orders, managing liquidity, and ensuring consensus mechanism functionality.</li>
                <li><strong>Security:</strong> Protection against fraud, market manipulation, and other malicious activities.</li>
                <li><strong>Regulatory Compliance:</strong> In optional KYC/AML compliance zones for users seeking access to regulated markets.</li>
                <li><strong>Service Improvement:</strong> Analyzing platform usage to optimize user experience and performance.</li>
                <li><strong>Communication:</strong> Sending notifications about order status, liquidations, and other important events.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">4. Data Protection in Stealth Liquidity Layer</h2>
              <p className="mb-4">ArmaDEX places special emphasis on privacy protection within the Stealth Liquidity Layer (SLL):</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Hidden Trading Intentions:</strong> Order details are concealed until execution, protecting against front-running and MEV.</li>
                <li><strong>Cryptographic Protection:</strong> Using Poseidon-2 hash functions, Groth16 proofs, and Intel SGX DCAP technology to ensure confidentiality.</li>
                <li><strong>Verifiability:</strong> Despite confidentiality, all transactions remain cryptographically verifiable on the blockchain.</li>
                <li><strong>Liquidation Opacity:</strong> Protecting user positions from "liquidation hunting" by hiding liquidation prices.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">5. Information Storage and Protection</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Decentralized Storage:</strong> Most data is stored in decentralized form on the ArmaDEX blockchain.</li>
                <li><strong>Encryption:</strong> All sensitive data is encrypted using modern cryptographic methods.</li>
                <li><strong>SGX Enclave Security:</strong> The Stealth Liquidity Layer uses Intel SGX protected enclaves with regular rotation to prevent compromise.</li>
                <li><strong>Limited Access:</strong> Access to protocol administrative functions is controlled by multi-signature systems and DAO governance.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">6. Information Sharing with Third Parties</h2>
              <p className="mb-4">ArmaDEX may share information with the following categories of third parties:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Network Validators:</strong> For transaction processing and consensus maintenance.</li>
                <li><strong>KYC/AML Providers (with user consent only):</strong> For verification in optional compliance zones.</li>
                <li><strong>Auditors:</strong> For protocol security and correctness verification.</li>
                <li><strong>Regulators:</strong> In cases provided by law and only within optional compliance zones.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">7. User Rights</h2>
              <p className="mb-4">ArmaDEX users have the following rights regarding their data:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Right to Access:</strong> Users can request a copy of their personal data stored in the system.</li>
                <li><strong>Right to Deletion:</strong> For data not recorded on the blockchain, users can request deletion.</li>
                <li><strong>Right to Opt-out of KYC:</strong> Users can refuse to use KYC/AML compliance zones and use only fully decentralized functions.</li>
                <li><strong>Right to Privacy:</strong> Using the Stealth Liquidity Layer to protect trading operation confidentiality.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">8. Use of Cookies and Similar Technologies</h2>
              <p className="mb-4">The ArmaDEX web interface may use cookies and similar technologies for:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Saving user preferences</li>
                <li>Analyzing platform usage</li>
                <li>Ensuring security</li>
                <li>Improving user experience</li>
              </ul>
              <p>Users can configure their browsers to reject cookies, but this may limit interface functionality.</p>
            </section>

            {/* Section 9 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">9. International Data Transfer</h2>
              <p>
                Since ArmaDEX is a decentralized protocol, data may be processed by validators worldwide. We take measures to ensure adequate data protection regardless of their geographical location.
              </p>
            </section>

            {/* Section 10 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">10. Privacy Policy Changes</h2>
              <p className="mb-4">ArmaDEX may update this privacy policy. Significant changes will be:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Published on the official website</li>
                <li>Submitted for DAO voting</li>
                <li>Communicated to users through available communication channels</li>
              </ul>
            </section>

            {/* Section 11 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">11. DAO Governance and Privacy</h2>
              <p className="mb-4">The ArmaDEX DAO plays a key role in privacy policy governance:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Voting on substantial policy changes</li>
                <li>Overseeing privacy principle compliance</li>
                <li>Reviewing proposals for data protection improvements</li>
              </ul>
            </section>

            {/* Section 12 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">12. Contact Information</h2>
              <p className="mb-4">For questions related to this privacy policy, users can:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Create a proposal in the ArmaDEX DAO</li>
                <li>Contact the team through official communication channels</li>
                <li>Reach out to the community via Discord or other official channels</li>
              </ul>
            </section>

            {/* Section 13 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">13. Final Provisions</h2>
              <p className="mb-4">
                This privacy policy reflects the balance between blockchain transparency and user privacy protection that ArmaDEX strives to maintain. By using our platform, users agree to the terms of this policy.
              </p>
              <p className="text-cyberpunk-cyan font-semibold">
                Last Updated: June 2025
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}