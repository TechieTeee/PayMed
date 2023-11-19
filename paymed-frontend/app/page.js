import Image from
 
'next/image';
import Link from
 
'next/link';

export
 
default
 
function
 
Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <nav style={{ backgroundColor: '#00C6F9' }}>
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Image src="/PayMed Logo.png" alt="PayMed Logo" width={120} height={30} />
          </div>
          <div className="flex space-x-4">
            <Link href="#paymed-info">
              <span className="hover:text-gray-300">PayMed</span>
            </Link>
            <Link href="#problem-solution">
              <span className="hover:text-gray-300">Problem & Solution</span>
            </Link>
            <Link href="#blockchain-advantages">
              <span className="hover:text-gray-300">PayMed Advantages</span>
            </Link>
            <Link href="/portal">
              <span className="hover:text-gray-300">PayMed Portal</span>
            </Link>
            <Link href="/login">
  <button style={{ backgroundColor: '#0056b3', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
    Sign In
  </button>
</Link>


          </div>
        </div>
      </nav>

      {/* Header */}
      <header id="paymed-info" className="bg-blue-500 p-4 text-white text-center">
        <h1 className="text-4xl font-bold">PayMed</h1>
      </header>

      {/* Main Content */}
      <main className="relative flex min-h-screen flex-col items-center justify-between p-24">
        {/* Hero section with image */}
        <div className="hero text-center">
          <Image
            src="/pexels-gustavo-fring-5622280.jpg"
            alt="Hero Image"
            width={1200}
            height={800}
          />
        </div>

        {/* PayMed Background: Problem */}
        <section className="mb-8">
          <h2 className="text-2xl text-center font-semibold">Healthcare Payments Need a Revolution</h2>
          <h3 className="text-2xl text-center font-semibold text-blue-500">Problem</h3>
          <p className="mt-4 text-gray-600">
            Amidst the shadows of a staggering $923 billion medical debt in the United States, compounded by a quarter of Americans facing similar financial burdens, additional challenges like in-network requirements, variable copays, and deductibles intensify the struggle for patients to access preferred healthcare professionals at reasonable prices. This predicament is even more pronounced in developing nations with fragile healthcare infrastructure. According to the World Health Organization, 57% of individuals from low to middle income countries don't seek necessary medical care because of financial barriers.
          </p>
          <p className="mt-4 text-gray-600">
            PayMed is rewriting the story for medical payments as a catalyst for a healthcare payments revolution. Committed to transforming the landscape, PayMed redefines how we manage and pay for healthcare services. By eliminating the middleman and streamlining the process, PayMed aims to reduce overhead in processing medical payments, offering a beacon of financial relief in the complex realm of healthcare expenses.
          </p>
        </section>

        {/* PayMed Solution */}
        <section id="problem-solution" className="mb-8">
          <h2 className="text-2xl text-center font-semibold">How We're Solving It</h2>
          <h3 className="text-2xl text-center font-semibold text-blue-500">The Solution</h3>
          <p className="mt-4 text-gray-600">
            PayMed boldly emerges as an innovative solution, harnessing the revolutionary force of blockchain to redefine the healthcare landscape. At its core, PayMed is devoted to dismantling barriers, enabling secure transactions between patients and healthcare professionals, empowering individuals to master their medical finances in a landscape overshadowed by financial strain.
          </p>
          <p className="mt-4 text-gray-600">
            By leveraging the unassailable nature of blockchain's immutable ledger, PayMed establishes a foolproof system for healthcare payments. This not only ensures clarity in medical expenses but also fosters trust, countering the pervasive issues of fraud and manipulation. Furthermore, PayMed introduces a novel payment model with micropayments, reducing overhead costs and putting patient data control at the forefront to curb fraud and abuse.
          </p>
          <p className="mt-4 text-gray-600">
            Taking a quantum leap, PayMed's decentralized platform streamlines claim processing, easing administrative burdens for healthcare providers. This heightened efficiency translates into reduced costs for both patients and professionals, offering tangible relief from the financial strain associated with medical expenses.
          </p>
          <p className="mt-4 text-gray-600">
            In the face of the escalating medical debt challenge, PayMed stands as a testament to blockchain's transformative potential. By providing a secure and transparent healthcare transaction platform, PayMed empowers individuals to make informed decisions about their health and finances, paving the way for a more equitable and accessible healthcare system.
          </p>
        </section>

        {/* Blockchain Advantages */}
        <section id="blockchain-advantages" className="mb-8">
          <h2 className="text-2xl text-center font-semibold">The PayMed Difference</h2>
          <h3 className="text-2xl text-center font-semibold text-blue-500">What Makes Us Different?</h3>
          <p className="mt-4 text-gray-600">
            Harnessing blockchain, PayMed rectifies traditional healthcare flaws, fostering a secure, transparent, and efficient landscape.
          </p>
          <p className="mt-4 text-gray-600">
            <strong>Decentralization:</strong> Traditional systems centralize patient data, prone to breaches. Blockchain's decentralized nature enhances security, making tampering difficult.
          </p>
          <p className="mt-4 text-gray-600">
            <strong>Transparency:</strong> Traditional systems lack transparency; blockchain's ledger offers a clear transaction record, building trust, reducing errors, and fraud risks.
          </p>
          <p className="mt-4 text-gray-600">
            <strong>Enhanced Security:</strong> Outdated security measures in traditional systems are vulnerable. Blockchain's cryptographic features thwart hacking, ensuring data integrity.
          </p>
          <p className="mt-4 text-gray-600">
            <strong>Efficiency:</strong> Traditional systems face administrative inefficiencies. Blockchain automates tasks, expediting claim processing, reducing costs, and improving patient care.
          </p>
          <p className="mt-4 text-gray-600">
            <strong>Empowerment:</strong> Blockchain grants secure access to patient data, empowering informed healthcare decisions and safeguarding privacy.
          </p>
          <p className="mt-4 text-center text-blue-500 text-xl">
            <strong>PayMed's Advantages</strong>
          </p>
          <ul className="list-disc pl-8 inline-block">
            <li><strong>Reduce Administrative Costs:</strong> Automate and streamline tasks, saving time and money.</li>
            <li><strong>Enhance Transparency:</strong> Provide a tamper-proof transaction record, identifying fraud.</li>
            <li><strong>Facilitate Cross-Border Payments:</strong> Simplify international transactions for medical care.</li>
            <li><strong>Enable New Payment Models:</strong> Introduce innovative models like micropayments for affordability.</li>
            <li><strong>Empower Patients:</strong> Give control over healthcare data, ensuring responsible use.</li>
            <li><strong>Reduce Fraud:</strong> Blockchain's transparency curbs counterfeit drugs and abuse.</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#00C6F9' }}>
        <p>&copy; 2023 PayMed. All rights reserved.</p>
      </footer>
    </div>
  );
}
