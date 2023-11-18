import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-blue-700 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Image src="/paymed-logo.png" alt="PayMed Logo" width={120} height={30} />
          </div>
          <div className="flex space-x-4">
            <Link href="#paymed-info">
              <a className="hover:text-gray-300">PayMed</a>
            </Link>
            <Link href="#problem-solution">
              <a className="hover:text-gray-300">Problem & Solution</a>
            </Link>
            <Link href="#blockchain-advantages">
              <a className="hover:text-gray-300">Blockchain Advantages</a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header id="paymed-info" className="bg-blue-500 p-4 text-white text-center">
        <h1 className="text-4xl font-bold">PayMed</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          {/* PayMed Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold">Transforming Healthcare with Blockchain</h2>
            <p className="mt-4 text-gray-600">
              PayMed leverages blockchain technology to revolutionize the healthcare industry,
              providing secure and transparent transactions between patients and healthcare professionals.
            </p>
          </section>

          {/* Problem and Blockchain Solution */}
          <section id="problem-solution" className="mb-8">
            <h2 className="text-2xl font-semibold">The Problem We Solve</h2>
            <p className="mt-4 text-gray-600">
              In traditional healthcare systems, data security and transparency are major challenges.
              PayMed addresses these issues by utilizing blockchain, ensuring secure and immutable records.
            </p>
          </section>

          {/* Blockchain Advantages */}
          <section id="blockchain-advantages" className="mb-8">
            <h2 className="text-2xl font-semibold">Blockchain in Healthcare</h2>
            <p className="mt-4 text-gray-600">
              Blockchain uniquely addresses the shortcomings of traditional healthcare systems by
              providing decentralization, transparency, and enhanced security.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-500 p-4 text-white text-center">
        <p>&copy; 2023 PayMed. All rights reserved.</p>
      </footer>
    </div>
  );
}
