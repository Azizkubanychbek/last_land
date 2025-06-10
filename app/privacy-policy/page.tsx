"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
              <p className="mb-4">
                This Privacy Policy ("Policy") for ArmaDEX ("Company", "we", "our", or "us") describes the basis on which we may process personal data we may collect from users of the Company's website, app.armadex.io, including any of its subdomains ("Website"), in accordance with applicable law. For purposes of applicable data protection laws, the Company is the controller. For the purposes of this Policy, "you" and "your" refers to you as the user of the Website.
              </p>
              <p className="mb-4">
                ArmaDEX is committed to protecting your privacy while providing a decentralized trading experience. This Policy explains how we collect, use, store, and protect information when you use our decentralized exchange platform and related services. We have designed our platform with privacy as a fundamental principle, particularly through innovations like our Stealth Liquidity Layer (SLL) which provides institutional-grade privacy for trading operations while maintaining cryptographic verifiability.
              </p>
              <p className="mb-4">
                The ArmaDEX protocol operates on a decentralized blockchain infrastructure powered by the ArmaBFT consensus mechanism, which fundamentally changes how user data is handled compared to traditional centralized exchanges. This Policy aims to provide transparency about these differences and explain the unique privacy considerations in a decentralized environment.
              </p>
              <p>
                Read this Policy carefully so that you understand your rights in relation to your personal data and how we might collect, use, and process it. If you do not agree to this Policy, do not use, access, connect to or interact with the Website, or otherwise provide your information to us.
              </p>
            </section>

            {/* Section 2 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">2. Personal Data We Collect About You, Why We Process It, and the Legal Basis for Processing</h2>
              
              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">2.1. Information You Provide to Us</h3>
              <p className="mb-4">When you access, use, connect to, or interact with the Website, we may collect certain categories of information about you, including personal data, from a variety of sources:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Wallet Information:</strong> Any digital-asset, smart-contract, or protocol address ("Wallet") information when you connect your Wallet to the Website. This includes public blockchain addresses, transaction signatures, and token balances necessary for interacting with the ArmaDEX protocol. We do not collect or have access to your private keys, seed phrases, or other wallet credentials.</li>
                <li><strong>KYC/AML Information (optional):</strong> If you choose to use compliance zones, you may voluntarily provide information for verification through third-party KYC/AML service providers. This may include government-issued identification documents, proof of address, source of funds documentation, and other information required by applicable regulations. This information is processed only with your explicit consent and only for the purpose of enabling access to regulated trading features. Users who prefer not to provide KYC information can still access the core decentralized features of ArmaDEX.</li>
                <li><strong>Delegation Data:</strong> Information related to ARMA token delegation to validators or participation in DAO governance, including delegation amounts, validator preferences, voting history, and governance proposal interactions. This information is necessary for the proper functioning of the staking and governance mechanisms of the ArmaDEX protocol.</li>
                <li><strong>User Preferences:</strong> Settings and configurations you choose for your trading interface, including display preferences, notification settings, and customized trading parameters. These preferences may be stored locally in your browser or associated with your wallet address on the blockchain to provide a consistent experience across sessions.</li>
                <li><strong>Communication Data:</strong> Information you provide when contacting support, participating in community forums, or interacting with official ArmaDEX communication channels. This may include email addresses, usernames, message content, and related metadata.</li>
              </ul>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">2.2. Information We Collect Automatically</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Blockchain Data:</strong> All transactions performed through ArmaDEX are recorded on the public blockchain, including wallet addresses, transaction amounts, and smart contract metadata. This information is inherently public due to the transparent nature of blockchain technology, with the exception of data protected by the Stealth Liquidity Layer as described in section 2.3.</li>
                <li><strong>Technical Data:</strong> When you visit certain pages on our Website, our servers save each access in a log file. The following data may be collected: The date and time of access, the country from which the website is accessed, any API endpoints being accessed, user agent details, the operating system of your computer and the browser you are using (provider, version, and language), the transmission protocol used (e.g., HTTP/1.1), screen resolution and device type, referring websites or sources, session duration and page navigation patterns, network performance metrics.</li>
                <li><strong>Usage Data:</strong> Statistics about your interaction with the interface, including pages visited and features used, trading pairs viewed, order types selected, time spent on different sections of the platform, feature engagement metrics, error encounters and system performance data, notification interactions, widget and tool usage patterns.</li>
              </ul>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">2.3. Stealth Liquidity Layer (SLL) Data</h3>
              <p className="mb-4">The Stealth Liquidity Layer represents a significant privacy innovation in the ArmaDEX ecosystem. When using SLL, the following data handling occurs:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Encrypted Orders:</strong> When using the Stealth Liquidity Layer, order details (direction, quantity, price) are hashed using cryptographic methods and are not publicly visible until execution. Specifically: Order parameters are combined with a 128-bit salt value, the combined data is processed through the Poseidon-2 hash function, only the resulting commitment hash is published on-chain before execution, original order details remain encrypted until the trade is executed, after execution, order details become visible for transparency and settlement purposes.</li>
                <li><strong>SNARK Proofs:</strong> Cryptographic proofs verifying transaction validity without revealing their contents, including verification that margin requirements are met without revealing the actual margin amount, verification that the sum of buy orders equals the sum of sell orders at the clearing price, verification that revealed orders match their previously committed hashes, attestation data from Intel SGX enclaves used in the batch matching process.</li>
                <li><strong>Batch Auction Data:</strong> Information related to the periodic batch auctions conducted within the SLL, including timing of auction cycles (typically 1 second cadence), aggregate trading volumes (without revealing individual orders), clearing prices determined by the SGX enclave, cryptographic attestations of the auction execution integrity.</li>
                <li><strong>Liquidation Protection:</strong> Data related to the protection of user positions from liquidation hunting: obfuscated liquidation thresholds, delayed publication of liquidation events (T+Δ), cryptographic proofs that positions maintain required collateralization.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">ArmaDEX uses the collected information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Protocol Operation:</strong> Processing transactions, executing orders, managing liquidity, and ensuring the operation of the consensus mechanism. This includes facilitating the matching of buy and sell orders, calculating and applying trading fees, managing perpetual futures funding rates, executing liquidations when positions fall below maintenance margin requirements, distributing staking rewards to validators and delegators, processing governance votes and implementing approved proposals, maintaining the integrity of the order book and trade history.</li>
                <li><strong>Security:</strong> Protection against fraud, market manipulation, and other malicious activities, including monitoring for suspicious trading patterns that may indicate market manipulation, identifying and preventing potential smart contract exploits, detecting and mitigating denial-of-service attacks, implementing circuit breakers during extreme market volatility, verifying the integrity of oracle price feeds, protecting against front-running and MEV extraction, securing the validator network against Sybil attacks.</li>
                <li><strong>Regulatory Compliance:</strong> In optional KYC/AML compliance zones for users wishing to access regulated markets, including verifying user identity in accordance with applicable regulations, screening against sanctions and politically exposed persons lists, monitoring for suspicious transaction patterns, generating required regulatory reports, maintaining compliance records as required by law, implementing geofencing for restricted jurisdictions, providing necessary information to regulatory authorities when legally required.</li>
                <li><strong>Service Improvement:</strong> Analyzing platform usage to optimize user experience and performance, including identifying user interface friction points, optimizing smart contract gas efficiency, improving order routing and execution algorithms, enhancing liquidity pool mechanisms, refining risk management systems, developing new trading features based on user behavior, optimizing network parameters for validator performance, testing and implementing protocol upgrades.</li>
                <li><strong>Communication:</strong> Sending notifications about order status, liquidations, and other important events, including order execution confirmations, margin call warnings, liquidation notices, governance proposal alerts, protocol upgrade announcements, security incident notifications, staking reward distributions, market volatility alerts, system maintenance notifications.</li>
              </ul>
              <p>
                In our legitimate interests to provide effective services to you, we may also use this data to create aggregated, anonymized, or de-identified data. This derived data may be used for market analysis and trend identification, protocol performance optimization, economic modeling and fee structure refinement, research and development of new features, educational content creation, community insights and reporting, ecosystem growth metrics, comparative analysis with other DeFi protocols.
              </p>
            </section>

            {/* Section 4 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">4. Data Protection in the Stealth Liquidity Layer</h2>
              <p className="mb-4">ArmaDEX places special emphasis on privacy protection within the Stealth Liquidity Layer (SLL), which represents a significant innovation in balancing trading privacy with blockchain transparency:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Hidden Trading Intent:</strong> Order details are concealed until execution, protecting against front-running and MEV. This mechanism works through commit-reveal schemes where only hashed order commitments are initially published, delayed disclosure of executed trades to prevent information leakage, batch auction mechanisms that aggregate multiple orders into single clearing events, elimination of the transparent mempool that typically exposes pending transactions, reduction of slippage through the formula E[SlippageSLL] = kDQ (eliminating the quadratic MEV term present in traditional exchanges).</li>
                <li><strong>Cryptographic Protection:</strong> Using Poseidon-2 hash functions, Groth16 proofs, and Intel SGX DCAP technology to ensure privacy, including Poseidon-2 hash function with width 5 for efficient on-chain verification, Groth16 zero-knowledge proofs with approximately 900k constraints and ≲45ms verification time, Intel SGX DCAP remote attestation for secure enclave verification, multi-layer encryption protocols for data in transit and at rest, threshold signature schemes for distributed key management, secure multi-party computation for certain critical operations, time-locked encryption for delayed information disclosure.</li>
                <li><strong>Verifiability:</strong> Despite privacy, all transactions remain cryptographically verifiable on the blockchain through zero-knowledge proofs that validate transaction legitimacy without revealing details, public verification circuits that anyone can use to confirm system integrity, transparency of the verification mechanisms themselves, auditability of aggregate trading statistics, cryptographic guarantees that all trades follow protocol rules, open-source verification tools accessible to all users, regular third-party audits of the cryptographic implementation.</li>
                <li><strong>Liquidation Opacity:</strong> Protecting user positions from "liquidation hunting" by concealing liquidation prices through obfuscation of exact liquidation thresholds, proof systems that verify margin adequacy without revealing specific values, delayed publication of liquidation events, batching of liquidations to prevent targeting of individual positions, circuit design that leaks only boolean flags (sufficient/insufficient margin) rather than actual values, cryptographic guarantees that liquidations only occur when mathematically necessary, protection against oracle manipulation that might trigger unnecessary liquidations.</li>
                <li><strong>MEV Protection:</strong> Specific mechanisms to prevent Maximal Extractable Value exploitation: sealed-bid auctions that prevent gas-priority games, batch processing that eliminates ordering advantages, cryptographic commitments that hide trading intentions until execution, sequencer designs that prevent reordering within batches, fair price discovery mechanisms that resist manipulation, elimination of time advantages through synchronized batch processing, protection against sandwich attacks and other MEV strategies.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">5. Storage and Protection of Information</h2>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Decentralized Storage:</strong> Most data is stored in a decentralized form on the ArmaDEX blockchain, which means transaction data is replicated across all full nodes in the network, no single entity controls access to or can modify historical data, blockchain immutability provides tamper-evident record keeping, data availability is maintained through distributed consensus, redundancy across the validator network ensures high availability, cryptographic verification enables trustless data integrity checks, public verifiability allows independent audit of all on-chain data, censorship resistance through decentralized network architecture.</li>
                <li><strong>Encryption:</strong> All sensitive data is encrypted using modern cryptographic methods, including end-to-end encryption for communications, AES-256 encryption for data at rest, elliptic curve cryptography for secure key exchange, zero-knowledge proofs for privacy-preserving verification, threshold encryption for distributed access control, forward secrecy protocols to protect against future key compromises, hardware security module integration for critical key management, regular cryptographic library updates and security patches.</li>
                <li><strong>SGX Enclave Security:</strong> For the Stealth Liquidity Layer, secure Intel SGX enclaves are used with regular rotation to prevent compromise, featuring isolated execution environments resistant to operating system level attacks, remote attestation to verify enclave integrity, memory encryption to protect data in use, regular microcode and security updates, rotation schedules to limit the impact of potential vulnerabilities, multi-party computation for critical operations, defense-in-depth approach with multiple security layers, rigorous security auditing and penetration testing, anomaly detection systems to identify potential compromise attempts.</li>
                <li><strong>Limited Access:</strong> Access to protocol administrative functions is controlled by multi-signature systems and DAO governance, including time-locked execution for critical parameter changes, multi-signature requirements for emergency interventions, role-based access control for protocol maintenance, transparent governance processes for protocol upgrades, quorum requirements for significant changes, on-chain voting for parameter adjustments, publicly verifiable access logs, gradual authority transition to fully decentralized governance.</li>
                <li><strong>Security Auditing:</strong> Comprehensive security measures to protect the platform: regular third-party security audits of smart contracts, formal verification of critical protocol components, bug bounty programs to incentivize responsible disclosure, continuous monitoring for unusual activity, incident response procedures for potential security events, regular penetration testing of infrastructure, code review processes for all protocol changes, security-focused development practices and training.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">6. Sharing Information with Third Parties</h2>
              <p className="mb-4">ArmaDEX may share information with the following categories of third parties:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Network Validators:</strong> For processing transactions and maintaining consensus, including transaction data necessary for block validation, consensus messages for network coordination, staking and delegation information, validator performance metrics, slashing evidence for protocol rule violations, block proposals and attestations, network health and synchronization data, checkpoint signatures and finality gadget information.</li>
                <li><strong>KYC/AML Providers (only with user consent):</strong> For verification in optional compliance zones, including identity verification documents, proof of address information, source of funds documentation, risk scoring and screening results, ongoing monitoring data for regulatory compliance, transaction pattern analysis for suspicious activity detection, reporting information required by applicable regulations, audit trails of verification processes.</li>
                <li><strong>Auditors:</strong> For verifying protocol security and operational correctness, including smart contract code and deployment parameters, protocol governance decisions and implementations, treasury management and fund allocation records, security incident reports and remediation actions, cryptographic implementation details, system architecture documentation, performance and scalability metrics, compliance with industry standards and best practices.</li>
                <li><strong>Regulators:</strong> In cases required by law, and only within optional compliance zones, including legally mandated reports and disclosures, information required by valid legal process, compliance documentation for regulated activities, market surveillance data for manipulation detection, statistical information for regulatory oversight, user verification records where legally required, transaction data subject to mandatory reporting, information necessary to prevent financial crime.</li>
                <li><strong>Service Providers:</strong> Technical and operational support partners, including infrastructure and hosting providers, development and maintenance contractors, security monitoring services, analytics and performance optimization tools, customer support systems, communication platforms, legal and compliance advisors, business intelligence and data analysis services.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">7. Third-Party Wallet Connections and Disclaimer</h2>
              <p className="mb-4">
                Certain features of the Website may require you to connect a compatible third-party digital Wallet. By using such Wallet, you agree that your access to, use of, connection to, and/or interactions with such third-party Wallet are governed solely by the terms and conditions of such third-party Wallet, and we are not responsible for the practices of such third parties. We encourage you to read the privacy policies and other statements of such third parties.
              </p>
              <p className="mb-4">When connecting a wallet to ArmaDEX:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>We never receive or store your private keys, seed phrases, or other wallet credentials</li>
                <li>Your wallet provider may collect additional information according to their own privacy policies</li>
                <li>Different wallet providers offer varying levels of privacy and security features</li>
                <li>Some wallets may track your interactions with dApps, including ArmaDEX</li>
                <li>Certain wallets may offer enhanced privacy features like stealth addresses or zero-knowledge proofs</li>
                <li>Hardware wallets generally provide stronger security guarantees than software wallets</li>
                <li>Multi-signature wallets may involve different privacy considerations due to their collaborative nature</li>
                <li>Some wallets may offer transaction simulation features that interact with our platform</li>
                <li>Wallet extensions may have access to website data beyond what is strictly necessary for blockchain interactions</li>
              </ul>
              <p>We recommend using wallets with strong security features, regular security audits, and privacy-preserving options when interacting with ArmaDEX.</p>
            </section>

            {/* Section 8 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">8. Your Rights</h2>
              <p className="mb-4">Users of ArmaDEX have the following rights regarding their data:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Right to Access:</strong> Users can request a copy of their personal data stored in the system. This includes any off-chain data associated with your wallet address, records of your interactions with optional KYC/AML services, user preferences and settings stored by the platform, communication records with support services, account-specific analytics and usage statistics, IP addresses and session data associated with your activity, marketing preferences and subscription status, any other personal information not publicly recorded on the blockchain.</li>
                <li><strong>Right to Deletion:</strong> For data not recorded on the blockchain, users can request deletion, including browser cookies and local storage data, user preferences stored in centralized databases, KYC/AML information (subject to regulatory retention requirements), support ticket history and communications, email addresses and contact information, usage analytics tied to your specific identity, marketing preferences and communication opt-ins, IP address logs and session data. Please note that blockchain data is immutable by design, and we cannot delete information that has been recorded on the ArmaDEX blockchain or other public blockchains.</li>
                <li><strong>Right to Opt Out of KYC:</strong> Users can choose not to use KYC/AML compliance zones and use only fully decentralized features, which means access to core trading functionality without identity verification, ability to use all permissionless features of the protocol, no requirement to submit personal identification documents, trading with privacy-preserving features like the Stealth Liquidity Layer, participation in decentralized governance through the DAO, staking and delegation without identity verification, access to public liquidity pools and trading pairs, use of non-regulated financial products and services.</li>
                <li><strong>Right to Privacy:</strong> Use of the Stealth Liquidity Layer to protect trading operation privacy, including concealment of trading intentions until execution, protection against front-running and MEV extraction, hidden liquidation thresholds to prevent targeting, cryptographically secured order information, privacy-preserving batch auctions, verifiable but private transaction execution, protection from market surveillance and order analysis, reduced information leakage during trading activities.</li>
                <li><strong>Right to Data Portability:</strong> Where technically feasible, users can request their data in a structured, commonly used, and machine-readable format, including trading history and portfolio data, user preference settings, delegation and staking records, governance participation history, KYC/AML information (where applicable), communication records and support interactions, account analytics and usage statistics, any other personal data not inherently tied to the blockchain.</li>
                <li><strong>Right to Object:</strong> Users can object to certain types of processing, including marketing communications and promotional materials, analytics and profiling activities, optional feature recommendations, non-essential data collection, sharing with certain categories of third parties, processing based on legitimate interests where your rights override these interests, use of your data for research and development purposes, automated decision-making processes affecting your trading experience.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">9. Cookies and Similar Technologies</h2>
              <p className="mb-4">The ArmaDEX web interface may use cookies and similar technologies for:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Essential Functionality:</strong> Wallet connection management, session maintenance, security features and fraud prevention, user authentication status, language preferences, display settings and customizations, critical error tracking, load balancing and system performance.</li>
                <li><strong>Performance and Analytics:</strong> Understanding user navigation patterns, identifying interface usability issues, measuring feature adoption and engagement, analyzing system performance metrics, tracking error rates and technical problems, optimizing page load times and responsiveness, evaluating user interface improvements, gathering anonymous usage statistics.</li>
                <li><strong>Preference Saving:</strong> Trading pair favorites, chart configuration and time frames, dark/light mode preferences, notification settings, widget arrangements and dashboard layouts, order form defaults, display currency preferences, custom watchlists and monitoring configurations.</li>
                <li><strong>Enhanced Features:</strong> Saved trading strategies, persistent chart drawings and analysis, trading history and portfolio tracking, personalized market insights, custom alert configurations, saved order templates, interface customizations, feature discovery and onboarding progress.</li>
              </ul>
              <p className="mb-4">Users can configure their browsers to reject cookies, although this may limit interface functionality. Specifically:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Essential cookies cannot be disabled without significantly impairing core functionality</li>
                <li>Performance cookies can be disabled while maintaining basic functionality</li>
                <li>Preference cookies can be disabled, requiring manual reconfiguration on each visit</li>
                <li>Feature enhancement cookies can be disabled with minimal impact on core trading capabilities</li>
              </ul>
              <p>We do not use third-party advertising cookies or tracking pixels for marketing purposes.</p>
            </section>

            {/* Section 10 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">10. International Data Transfers</h2>
              <p className="mb-4">
                As ArmaDEX is a decentralized protocol, data may be processed by validators worldwide. We take measures to ensure adequate data protection regardless of geographic location, including:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Implementation of standard contractual clauses where applicable</li>
                <li>Encryption of data in transit and at rest</li>
                <li>Anonymization and pseudonymization where appropriate</li>
                <li>Compliance with cross-border data transfer regulations</li>
                <li>Validator selection processes that consider data protection standards</li>
                <li>Geographic distribution of critical infrastructure</li>
                <li>Redundancy across multiple jurisdictions</li>
                <li>Compliance with regional data protection frameworks</li>
              </ul>
              <p>
                For users in regions with specific data protection regulations (such as GDPR in the European Union or CCPA in California), we implement additional safeguards to ensure compliance with local requirements while maintaining the decentralized nature of the protocol.
              </p>
            </section>

            {/* Section 11 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">11. Changes to This Privacy Policy</h2>
              <p className="mb-4">ArmaDEX may update this privacy policy. Substantial changes will be:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Published on the official website at least 30 days before implementation</li>
                <li>Submitted for DAO voting when changes affect core protocol functionality</li>
                <li>Communicated to users through available communication channels, including email notifications (for users who have provided contact information), website announcements and banners, in-app notifications, social media and community channels, validator network communications, developer documentation updates, community forum discussions, official blog posts and explanatory materials</li>
              </ul>
              <p className="mb-4">Changes will include clear explanations of:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>What specific provisions are being modified</li>
                <li>The reasons for the changes</li>
                <li>How the changes might affect user privacy</li>
                <li>Any new rights or responsibilities for users</li>
                <li>Implementation timelines and transition periods</li>
                <li>Options for users who do not agree with the changes</li>
              </ul>
            </section>

            {/* Section 12 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">12. DAO Governance and Privacy</h2>
              <p className="mb-4">The ArmaDEX DAO plays a key role in privacy policy governance:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Voting on Substantial Policy Changes:</strong> Major privacy policy updates require DAO approval, quorum requirements ensure broad community participation, voting power is proportional to ARMA token holdings, proposals include detailed explanations and justifications, discussion periods allow for community feedback, technical implementations are subject to security review, implementation timelines are determined by governance, emergency procedures exist for critical privacy issues.</li>
                <li><strong>Oversight of Privacy Principle Compliance:</strong> Regular privacy audits commissioned by the DAO, transparency reports on data handling practices, community-elected privacy guardians or committees, whistleblower mechanisms for reporting violations, accountability frameworks for protocol developers, performance metrics for privacy-enhancing technologies, regular reviews of emerging privacy threats and mitigations, coordination with external privacy advocacy organizations.</li>
                <li><strong>Consideration of Proposals for Improving Data Protection:</strong> Community members can submit privacy enhancement proposals, technical innovations undergo security and privacy review, funding allocation for privacy-focused research and development, collaboration with academic researchers on privacy technologies, integration of emerging privacy standards and best practices, experimentation with new cryptographic techniques, user feedback mechanisms for privacy feature requests, competitive analysis of privacy features in the broader ecosystem.</li>
                <li><strong>Balance Between Transparency and Privacy:</strong> Governance decisions on what data should be public vs. private, calibration of privacy-preserving mechanisms, determination of default privacy settings, evaluation of trade-offs between usability and privacy, assessment of regulatory compliance requirements, consideration of different user privacy preferences, development of privacy education and awareness materials, establishment of privacy principles and values.</li>
              </ul>
            </section>

            {/* Section 13 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">13. Contact Information</h2>
              <p className="mb-4">For questions related to this privacy policy, users can:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Create a Proposal in the ArmaDEX DAO:</strong> Submit formal governance proposals for policy changes, participate in community discussions about privacy topics, vote on privacy-related initiatives using ARMA tokens, contribute to privacy enhancement research and development, suggest improvements to existing privacy mechanisms, report privacy concerns through governance channels, collaborate on privacy-focused protocol upgrades, engage with the community on privacy best practices.</li>
                <li><strong>Contact the Team Through Official Communication Channels:</strong> Email: privacy@armadex.io, Support ticket system: support.armadex.io, Official Twitter/X: @ArmaDEX_Official, Telegram: t.me/ArmaDEX_Community, LinkedIn: linkedin.com/company/armadex, GitHub: github.com/ArmaDEX, Medium: medium.com/armadex, Official website contact form: armadex.io/contact.</li>
                <li><strong>Reach Out to the Community:</strong> Discord server: discord.gg/armadex, Community forum: forum.armadex.io, Reddit: reddit.com/r/ArmaDEX, Community calls and town halls, Local meetup groups and events, Developer workshops and hackathons, Validator communication channels, Community-led education initiatives.</li>
              </ul>
              <p className="mb-6">
                For data subject access requests or specific privacy concerns, please email privacy@armadex.io with the subject line "Privacy Request" and include your wallet address for verification purposes.
              </p>
            </section>

            {/* Section 14 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">14. Final Provisions</h2>
              <p className="mb-4">
                This privacy policy reflects the balance between blockchain transparency and user privacy protection that ArmaDEX strives to maintain. By using our platform, users agree to the terms of this policy.
              </p>
              <p className="mb-4">
                The policy shall be governed by and construed in accordance with the laws of the Cayman Islands, without regard to its conflict of law principles. Any disputes arising under this policy shall be resolved through the dispute resolution mechanisms specified in our Terms of Service.
              </p>
              <p className="mb-4">
                If any provision of this policy is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that this policy will otherwise remain in full force and effect and enforceable.
              </p>
              <p className="mb-6">
                Our failure to enforce any right or provision of this policy will not be considered a waiver of those rights. The waiver of any such right or provision will be effective only if in writing and signed by a duly authorized representative of ArmaDEX.
              </p>
              <p className="text-cyberpunk-cyan font-semibold">
                *Last updated: June 10, 2025*
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}