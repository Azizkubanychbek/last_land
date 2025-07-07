"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function TermsOfServicePage() {
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
              Terms of <span className="text-cyberpunk-cyan">Service</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Please read these terms carefully as they govern your use of the ArmaDEX interface and protocol.
            </p>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-12 text-gray-300 leading-relaxed">

            {/* Section 1 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">1. Introduction</h2>
              <p className="mb-4">
                These Terms of Service ("Terms") explain the terms and conditions by which you may access and use this website-hosted user interface ("Interface"), available at app.armadex.io. The Interface is made available by ArmaDEX ("Company", "we", "us" or "our"). The Interface provides access to the ArmaDEX Protocol, a decentralized exchange protocol built on a proprietary Layer-1 blockchain featuring the ArmaBFT consensus mechanism and innovative trading solutions like the Stealth Liquidity Layer (SLL).
              </p>
              <p>
                You must read these Terms carefully as they govern your use of the Interface. By accessing and using the Interface, you expressly represent and acknowledge that you have read, understood, and agreed to be bound by these Terms. If you do not agree, you are not authorized to access or use the Interface. Your use of the Interface signifies your continuous acceptance of these Terms and any future modifications.
              </p>
            </section>

            {/* Section 2 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">2. The Interface</h2>
              
              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">2.1 Decentralized Protocol</h3>
              <p className="mb-6">
                The Interface facilitates interaction with ArmaDEX, a decentralized, permissionless, and community-driven blockchain protocol ("ArmaDEX Protocol"). The Company does not own, control, or operate the ArmaDEX Protocol, nor can it modify or interfere with its functionality, security, or availability. The ArmaDEX Protocol operates autonomously based on its underlying code and the consensus of its network validators. The Interface is not the exclusive means of accessing the ArmaDEX Protocol; alternative interfaces or direct smart contract interaction may be possible.
              </p>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">2.2 Transaction Execution</h3>
              <p className="mb-6">
                All transactions conducted on the ArmaDEX Protocol are executed by a decentralized set of validators through the ArmaBFT consensus layer. The Company is solely a provider of the Interface, has no involvement in the execution of transactions, and expressly disclaims any liability for losses or damages arising from or related to any interaction with, or actions taken on, the ArmaDEX Protocol through the Interface. Transaction finality, speed, and cost are determined by the ArmaDEX Protocol itself, not the Interface.
              </p>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">2.3 Non-Custodial Wallet Requirement</h3>
              <p className="mb-6">
                To use the Interface, you must use a non-custodial wallet (e.g., MetaMask, Ledger, Trezor), which allows you to access public blockchains and interact with them. You are solely responsible for the security and management of your non-custodial wallet, including your private keys and seed phrases. You should consult the terms of service provided by your wallet provider to understand your rights and responsibilities as they relate to your self-custodial wallet. The Company has no custody or control over the contents of your wallet and has no ability to retrieve or transfer its contents. When you connect your wallet to the Interface, you agree to be bound by these Terms. All transactions initiated through the Interface require your explicit authorization via your connected wallet.
              </p>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">2.4 Risk Acknowledgment</h3>
              <p className="mb-6">
                By using the Interface, you acknowledge and agree that all use of the Interface, and any interaction with the ArmaDEX Protocol through the Interface, is entirely at your own risk. You understand that blockchain technology and digital assets are novel, experimental, and highly volatile. You are solely responsible for conducting your own due diligence and understanding the risks involved before engaging in any transactions.
              </p>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">2.5 Restricted Persons</h3>
              <p className="mb-6">
                The Interface is not available to "Restricted Persons." For the purposes of these Terms, Restricted Persons include persons or entities who reside in, are located in, are incorporated in, or have a registered office in jurisdictions subject to applicable economic and trade sanctions or export control laws and regulations (collectively, "Restricted Territories"); and citizens of Restricted Territories, regardless of their location. Examples of Restricted Territories may include, but are not limited to, those designated by the U.S. Department of Treasury's Office of Foreign Assets Control (OFAC). Restricted Persons are strictly prohibited from accessing or using the Interface described herein. Attempting to circumvent these restrictions (e.g., by using a VPN) is a violation of these Terms.
              </p>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">2.6 Legal Compliance</h3>
              <p>
                You are solely responsible for determining whether your access to and use of the Interface complies with applicable laws and regulations in your jurisdiction, including, but not limited to, laws governing financial services, securities, commodities, taxation, and anti-money laundering. By using the Interface, you expressly represent and warrant that your activities are lawful under such applicable laws. The Company makes no representation or warranty that the Interface or the ArmaDEX Protocol complies with the laws of any specific jurisdiction.
              </p>
            </section>

            {/* Section 3 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">3. Stealth Liquidity Layer (SLL)</h2>
              
              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">3.1 Privacy-Preserving Execution</h3>
              <p className="mb-6">
                The ArmaDEX Protocol includes a Stealth Liquidity Layer (SLL) that provides privacy-preserving execution for trading. When using SLL, your order details (direction, quantity, price) are hashed with a salt value and are not publicly visible until execution. This is designed to protect users from front-running, MEV (Maximal Extractable Value) exploitation, and other forms of market manipulation that rely on observing pending orders.
              </p>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">3.2 Cryptographic Verification</h3>
              <p className="mb-4">All SLL transactions are cryptographically verified through zk-SNARK proofs (Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge) to ensure that they comply with protocol rules without revealing sensitive information. This includes verification that:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Margin requirements are met before order submission (without revealing actual margin levels).</li>
                <li>Buy and sell quantities match at the clearing price within a batch auction.</li>
                <li>Revealed orders correspond to their previously committed cryptographic hashes.</li>
              </ul>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">3.3 SGX Enclave Processing</h3>
              <p>
                SLL utilizes Intel SGX (Software Guard Extensions) secure enclaves for batch matching and price determination. These enclaves provide a trusted execution environment designed to protect code and data from disclosure or modification, even from privileged software. While the Company implements industry-standard security measures, you acknowledge the inherent risks associated with such technology and agree that the Company is not liable for any security breaches or failures of the SGX technology, including potential side-channel attacks or vulnerabilities in the SGX architecture itself.
              </p>
            </section>

            {/* Section 4 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">4. No Warranties</h2>
              
              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">4.1 "As Is" Basis</h3>
              <p className="mb-6">
                The Interface is provided on an "as is" and "as available" basis without warranties of any kind, either express, implied, statutory, or otherwise, including, but not limited to, warranties of merchantability, title, fitness for a particular purpose, non-infringement, accuracy, completeness, reliability, security, or timeliness. To the fullest extent permitted by law, the Company makes no representations or warranties that access to the Interface will be continuous, uninterrupted, or error-free, that any defects will be corrected, or that the Interface or any interaction through the Interface with the ArmaDEX Protocol will meet your expectations or requirements. The Company does not guarantee the accuracy of any information displayed on the Interface, including prices, charts, or account balances, which may be subject to delays or errors.
              </p>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">4.2 Risk Acknowledgment</h3>
              <p className="mb-4">You expressly understand and agree that you are solely responsible for evaluating and accepting the risks involved in using the Interface, as well as the risks associated with digital assets and decentralized systems generally, including, but not limited to:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Volatility:</strong> The inherent volatility of digital assets, which may result in sudden and substantial losses in value. Prices can fluctuate dramatically and unpredictably.</li>
                <li><strong>Security Risks:</strong> The risks of using digital assets due to both features of such assets and the potential unauthorized acts of third-parties, including hacking, phishing, fraud, or cyberattacks targeting your wallet, the Interface, or the underlying blockchain protocol.</li>
                <li><strong>Accessibility:</strong> The possibility of limited access to your assets or delays, disruptions, or errors when using the Interface due to network congestion, software bugs, or other technical issues.</li>
                <li><strong>Loss of Assets:</strong> The potential loss of tokens or other assets due to network failures, errors in any code or algorithm (including smart contracts), or factors beyond the Company's control.</li>
                <li><strong>Smart Contract Risks:</strong> The risk of vulnerabilities or bugs in the smart contracts of the ArmaDEX Protocol, which could lead to loss of funds or other unintended consequences.</li>
              </ul>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">4.3 No Recourse</h3>
              <p className="mb-4">You agree that you will have no recourse against anyone else for any losses due to your use of the Interface. Such losses may include, but are not limited to, those arising from or relating to:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Information Errors:</strong> Incorrect information, including any displayed token values, transaction details, or market data.</li>
                <li><strong>Network Failures:</strong> Failures of blockchain networks, including forks, congestion, malicious attacks (e.g., 51% attacks), or transaction censorship.</li>
                <li><strong>Wallet Issues:</strong> Corrupted cryptocurrency wallet files, wallet incompatibilities, or user error in managing wallet security.</li>
                <li><strong>Unauthorized Access:</strong> Unauthorized access to wallets or accounts, including losses caused by compromised private keys, malware, or social engineering.</li>
                <li><strong>Software Errors:</strong> Errors or inaccuracies in the Interface or its underlying software, including bugs that may affect transaction processing or data display.</li>
                <li><strong>Third-Party Failures:</strong> Failures of, or actions by, third-party systems, services, or applications you rely on to use the Interface or interact with the ArmaDEX Protocol (e.g., internet service providers, oracle services, wallet providers).</li>
                <li><strong>Market Risks:</strong> Slippage (difference between expected and executed price), market inefficiencies, or illiquidity when executing trades.</li>
                <li><strong>Protocol Malfunctions:</strong> Any malfunction or failure of the ArmaDEX Protocol or its decentralized set of validators, including consensus failures or bugs in the protocol logic.</li>
                <li><strong>Regulatory Uncertainty:</strong> Regulatory actions or legal uncertainties affecting the availability or use of the ArmaDEX Protocol or related assets in your jurisdiction or globally.</li>
              </ul>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">4.4 Trading Risks</h3>
              <p className="mb-4">By using the Interface, you acknowledge and accept full responsibility for all of the risks involved in accessing and using the Interface or interacting with the ArmaDEX Protocol, including, without limitation:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Bridge & Oracle Risks:</strong> Failures or inaccuracies in cross-chain bridges, oracles (price feeds), or liquidity pools, which can lead to incorrect pricing or loss of assets.</li>
                <li><strong>Code Vulnerabilities:</strong> Code vulnerabilities, including potential hacks or exploits in the Interface, smart contracts, or underlying blockchain infrastructure.</li>
                <li><strong>Perpetual Futures Risks:</strong> Significant slippage or other market risks arising from perpetual futures trading, including funding rate fluctuations and auto-deleveraging events.</li>
                <li><strong>Leverage Risks:</strong> The risks of trading with leverage, which may lead to immediate and significant losses, including the liquidation of your positions if margin requirements are not met. Leverage magnifies both potential profits and potential losses.</li>
                <li><strong>Legal & Regulatory Issues:</strong> Potential regulatory or legal issues affecting blockchain transactions or their enforceability, including changes in laws or regulations that may impact your ability to use the Interface or hold digital assets.</li>
              </ul>

              <p className="mb-6">
                These Terms are not intended to, and do not, create or impose any fiduciary duties on the Company. To the fullest extent permitted by law, you acknowledge and agree that the Company owes no fiduciary duties or liabilities to you or any other party based on your use of the Interface. To the extent that any such duties or liabilities may exist at law or in equity, you hereby irrevocably disclaim, waive, and eliminate such duties and liabilities.
              </p>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">4.5 Digital Asset Control</h3>
              <p>
                By using the Interface, you represent and warrant that all digital assets you use are legally obtained and under your sole control. You are solely responsible for securing your private keys, wallet credentials, and other sensitive information related to your interaction with the Interface or, through it, the ArmaDEX Protocol. The Company shall have no liability for any loss, damage, or unauthorized access resulting from your failure to secure such credentials. You agree that the only duties and obligations the Company owes you are those set out expressly in these Terms.
              </p>
            </section>

            {/* Section 5 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">5. Prohibited Activity</h2>
              
              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">5.1 Prohibited Activities</h3>
              <p className="mb-4">You agree not to engage in, or attempt to engage in, any of the following categories of prohibited activity in relation to your access and use of the Interface:</p>
              
              <h4 className="text-lg font-semibold text-white mb-2">5.1.1 Intellectual Property Infringement</h4>
              <p className="mb-4">Activity that infringes or violates any copyright, trademark, service mark, patent, right of publicity, right of privacy, or other proprietary or intellectual property rights under applicable law. This includes unauthorized use of the ArmaDEX name, logo, or other brand elements.</p>

              <h4 className="text-lg font-semibold text-white mb-2">5.1.2 Cyberattack</h4>
              <p className="mb-4">Activity that seeks to interfere with or compromise the integrity, security, or proper functioning of any computer, server, network, personal device, or other information technology system, including, but not limited to, the deployment of viruses, worms, Trojan horses, denial of service attacks, or attempting to gain unauthorized access to the Interface or underlying systems.</p>

              <h4 className="text-lg font-semibold text-white mb-2">5.1.3 Fraud and Misrepresentation</h4>
              <p className="mb-4">Activity that seeks to defraud us or any other person or entity, including, but not limited to, providing any false, inaccurate, or misleading information in order to unlawfully obtain the property of another. This includes phishing, impersonation, or creating fake websites or applications that mimic ArmaDEX.</p>

              <h4 className="text-lg font-semibold text-white mb-2">5.1.4 Market Manipulation</h4>
              <p className="mb-4">Activity that violates any applicable law, rule, or regulation concerning the integrity of trading markets, including, but not limited to, the manipulative trading activities commonly known as "pump and dump," "rug pulls," wash trading, spoofing, or front-running (outside of intended SLL protections).</p>

              <h4 className="text-lg font-semibold text-white mb-2">5.1.5 Securities and Derivatives Violations</h4>
              <p className="mb-4">Activity that violates any applicable law, rule, or regulation concerning the trading of securities or derivatives, including engaging in transactions that constitute unlawful securities offerings or trading in unregistered derivatives where registration is required.</p>

              <h4 className="text-lg font-semibold text-white mb-2">5.1.6 Restricted Jurisdictions</h4>
              <p className="mb-4">Using the Interface while located in, or a citizen or resident of, any jurisdiction where the use of the Interface would be illegal or otherwise violate any applicable law. This includes using VPNs or other methods to circumvent geographic restrictions.</p>

              <h4 className="text-lg font-semibold text-white mb-2">5.1.7 Other Unlawful Conduct</h4>
              <p className="mb-4">Activity that violates any applicable law, rule, or regulation of any jurisdiction in which you reside or are located, including but not limited to, laws related to money laundering, terrorist financing, or other financial crimes.</p>

              <h4 className="text-lg font-semibold text-white mb-2">5.1.8 Interference with Protocol</h4>
              <p>Attempting to interfere with the normal operation of the ArmaDEX Protocol, including exploiting bugs, submitting malicious transactions, or attempting to disrupt the consensus mechanism.</p>
            </section>

            {/* Section 6 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">6. DAO Governance</h2>
              
              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">6.1 Decentralized Governance</h3>
              <p className="mb-6">
                The ArmaDEX Protocol is governed by a Decentralized Autonomous Organization (DAO) through the ARMA token. Token holders can vote on proposals affecting protocol parameters (e.g., fee structures, SLL auction cadence), upgrades, treasury allocation, and other governance matters. The DAO aims to ensure community-driven development and management of the protocol.
              </p>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">6.2 Proposal Submission</h3>
              <p className="mb-6">
                To submit a proposal to the DAO, you must hold a minimum amount of ARMA tokens as specified in the governance parameters and may be required to post a proposal bond. Proposals must follow the established format, clearly outline the proposed changes and rationale, and meet quorum requirements to be considered valid for voting.
              </p>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">6.3 Voting Rights</h3>
              <p className="mb-6">
                ARMA token holders have voting rights proportional to their token holdings. Delegation of voting power to other addresses is supported through non-custodial signature-based systems, allowing users to participate in governance even if they cannot vote directly.
              </p>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">6.4 Implementation of Decisions</h3>
              <p>
                Decisions approved by the DAO through proper governance processes will be implemented according to the specified timeline and mechanism, often through on-chain execution of smart contracts or updates by core developers authorized by the DAO. The Company does not control or guarantee the implementation of DAO decisions but may contribute to the development and execution of approved proposals as a community member.
              </p>
            </section>

            {/* Section 7 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">7. Validators and Staking</h2>
              
              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">7.1 Validator Selection</h3>
              <p className="mb-6">
                Validators on the ArmaDEX Protocol are selected based on their "Effective Stake" (self-stake + delegated stake). A capped number of top validators (e.g., 100) are active per epoch and are responsible for producing blocks, validating transactions, and participating in the ArmaBFT consensus.
              </p>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">7.2 Delegation</h3>
              <p className="mb-6">
                Users can delegate ARMA tokens to trusted validators without locking their wallets directly with the validator. Delegation is non-custodial and revocable at any time, subject to the unbonding period defined by the protocol. Delegators share in the rewards earned by their chosen validator, proportional to their delegated stake, minus any commission charged by the validator.
              </p>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">7.3 Rewards and Slashing</h3>
              <p className="mb-6">
                Validators and delegators receive rewards based on their participation in consensus and securing the network. Rewards are typically distributed per epoch. Validators may be subject to slashing penalties for malicious behavior (e.g., double-signing) or extended downtime, which may result in a loss of a portion of their staked ARMA and proportionally affect delegator rewards.
              </p>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">7.4 Unbonding Period</h3>
              <p>
                When undelegating ARMA tokens or when a validator exits the active set, users must wait through an unbonding period before tokens become transferable. During this period, tokens do not earn rewards but may still be subject to slashing for past offenses. The unbonding period is a security measure to prevent rapid destabilization of the network.
              </p>
            </section>

            {/* Section 8 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">8. Limitation of Liability</h2>
              
              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">8.1 Limitation of Liability</h3>
              <p className="mb-4">To the maximum extent permitted by law, in no event shall the Company, its affiliates, or any of their respective officers, directors, employees, or agents be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever, including, but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses (even if the Company has been advised of the possibility of such damages), resulting from:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>The use of or the inability to use the Interface;</li>
                <li>The cost of procurement of substitute goods and services resulting from any goods, data, information, or services purchased or obtained or messages received or transactions entered into through or from the Interface;</li>
                <li>Unauthorized access to or alteration of your transmissions or data;</li>
                <li>Statements or conduct of any third party on the Interface;</li>
                <li>Any failure, error, or bug in the ArmaDEX Protocol or its smart contracts;</li>
                <li>Any other matter relating to the Interface or the ArmaDEX Protocol.</li>
              </ul>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">8.2 Cap on Liability</h3>
              <p>
                Notwithstanding anything to the contrary contained herein, the Company's liability to you for any damages arising from or related to these Terms (for any cause whatsoever and regardless of the form of the action), will at all times be limited to a maximum of one hundred United States Dollars ($100 USD).
              </p>
            </section>

            {/* Section 9 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">9. Indemnification</h2>
              <p className="mb-4">You agree to defend, indemnify, and hold harmless the Company, its affiliates, and their respective officers, directors, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including, but not limited to, attorney's fees) arising from:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Your use of and access to the Interface;</li>
                <li>Your violation of any term of these Terms;</li>
                <li>Your violation of any third-party right, including, without limitation, any copyright, property, or privacy right;</li>
                <li>Any claim that your use of the Interface caused damage to a third party;</li>
                <li>Your violation of any applicable laws, rules, or regulations.</li>
              </ul>
              <p>This defense and indemnification obligation will survive these Terms and your use of the Interface.</p>
            </section>

            {/* Section 10 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">10. Governing Law and Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">10.1 Governing Law</h3>
              <p className="mb-6">
                These Terms and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of the Cayman Islands, without regard to its conflict of law principles.
              </p>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">10.2 Arbitration</h3>
              <p className="mb-6">
                Any dispute, controversy, or claim arising out of or relating to these Terms, or the breach, termination, or invalidity thereof, shall be settled by arbitration in accordance with the Rules of Arbitration of the International Chamber of Commerce (ICC) by one or more arbitrators appointed in accordance with the said Rules. The seat of arbitration shall be Singapore. The language of the arbitration shall be English. The arbitral award shall be final and binding upon the parties.
              </p>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">10.3 Class Action Waiver</h3>
              <p className="mb-4">You agree that any arbitration or proceeding shall be limited to the dispute between us and you individually. To the full extent permitted by law:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>No arbitration or proceeding shall be joined with any other;</li>
                <li>There is no right or authority for any dispute to be arbitrated or resolved on a class action-basis or to utilize class action procedures; and</li>
                <li>There is no right or authority for any dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.</li>
              </ul>
            </section>

            {/* Section 11 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">11. Changes to These Terms</h2>
              <p className="mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect, which may be provided via the Interface, our official website, or other communication channels. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use our Interface after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Interface.
              </p>
            </section>

            {/* Section 12 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">12. Miscellaneous</h2>
              
              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">12.1 Entire Agreement</h3>
              <p className="mb-6">
                These Terms, together with our Privacy Policy (incorporated herein by reference), constitute the entire agreement between you and the Company regarding the use of the Interface and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding such subject matter.
              </p>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">12.2 Privacy Policy</h3>
              <p className="mb-6">
                You agree to the collection, use, storage, and disclosure of your data in accordance with our Privacy Policy, which is available on our website and incorporated by reference into these Terms.
              </p>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">12.3 Severability</h3>
              <p className="mb-6">
                If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole, and such provision shall be deleted without affecting the remaining provisions herein.
              </p>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">12.4 Waiver</h3>
              <p className="mb-6">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights or any other rights. The waiver of any such right or provision will be effective only if in writing and signed by a duly authorized representative of the Company. Except as expressly set forth in these Terms, the exercise by either party of any of its remedies under these Terms will be without prejudice to its other remedies under these Terms or otherwise.
              </p>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">12.5 Assignment</h3>
              <p className="mb-6">
                These Terms are not assignable, transferable, or sublicensable by you except with the Company's prior written consent. The Company may assign, transfer, or delegate any of its rights and obligations hereunder without consent.
              </p>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">12.6 No Agency</h3>
              <p className="mb-6">
                No agency, partnership, joint venture, or employment is created as a result of these Terms, and you do not have any authority of any kind to bind the Company in any respect whatsoever.
              </p>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">12.7 Notices</h3>
              <p className="mb-6">
                All notices under these Terms will be in writing and will be deemed to have been duly given when received, if personally delivered; when receipt is electronically confirmed, if transmitted by email; and upon receipt, if sent by certified or registered mail, return receipt requested, postage prepaid. Notices to the Company should be sent to the contact information provided on our official website.
              </p>

              <h3 className="text-xl font-semibold text-cyberpunk-cyan mb-3">12.8 Force Majeure</h3>
              <p>
                The Company shall not be liable for any delay or failure to perform resulting from causes outside its reasonable control, including, but not limited to, acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes or shortages of transportation facilities, fuel, energy, labor or materials, or failures of public or private telecommunications networks.
              </p>
            </section>

            {/* Section 13 */}
            <section className="policy-section">
              <h2 className="text-2xl font-display font-bold text-white mb-4">13. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us through the official communication channels provided on our website (app.armadex.io or armadex.io) or by creating a proposal in the ArmaDEX DAO for community discussion.
              </p>
              <p className="text-cyberpunk-cyan font-semibold">
                Last updated: June 10, 2025
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}