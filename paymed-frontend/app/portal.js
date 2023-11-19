import Image from 'next/image';
import Link from 'next/link';

export default function ProfilesPage() {
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
            <Link href="/PayMedPortal">
              <span className="hover:text-gray-300">PayMed Portal</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-blue-500 p-4 text-white text-center">
        <h1 className="text-4xl font-bold">PayMed Portal</h1>
      </header>

      {/* Main Content */}
      <main className="relative flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          {/* Profiles Section */}
          <section className="flex justify-center space-x-8">
            {/* Patient Profile */}
            <div id="patient-profile" className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold">Patient Profile</h2>
              <div className="mt-4">
                <Image src="/stephanie-liverani-Zz5LQe-VSMY-unsplash.jpg" alt="Patient Image" width={200} height={200} />
              </div>
              <div className="mt-2">
                <p className="text-gray-600">Enter here for patient profile.</p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-2">View Profile</button>
              </div>
            </div>

            {/* Clinician Profile */}
            <div id="clinician-profile" className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold">Clinician Profile</h2>
              <div className="mt-4">
                <Image src="/bruno-rodrigues-279xIHymPYY-unsplash.jpg" alt="Clinician Image" width={200} height={200} />
              </div>
              <div className="mt-2">
                <p className="text-gray-600">Enter here for clinician profile.</p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-2">View Profile</button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#00C6F9' }} className="p-4 text-white text-center">
        <p>&copy; 2023 PayMed. All rights reserved.</p>
      </footer>
    </div>
  );
}

