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
            <Link href="#patient-profile">
              <span className="hover:text-gray-300">Patient Profile</span>
            </Link>
            <Link href="#clinician-profile">
              <span className="hover:text-gray-300">Clinician Profile</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-blue-500 p-4 text-white text-center">
        <h1 className="text-4xl font-bold">Profiles Page</h1>
      </header>

      {/* Main Content */}
      <main className="relative flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          {/* Patient Profile */}
          <section id="patient-profile" className="mb-8">
            <h2 className="text-2xl font-semibold">Patient Profile</h2>
            <div className="flex justify-center items-center mt-4">
              <div className="mr-4">
                <Image src="/patient-image.jpg" alt="Patient Image" width={200} height={200} />
              </div>
              <div>
                <p className="text-gray-600">Description of the patient profile goes here.</p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-2">View Profile</button>
              </div>
            </div>
          </section>

          {/* Clinician Profile */}
          <section id="clinician-profile" className="mb-8">
            <h2 className="text-2xl font-semibold">Clinician Profile</h2>
            <div className="flex justify-center items-center mt-4">
              <div className="mr-4">
                <Image src="/clinician-image.jpg" alt="Clinician Image" width={200} height={200} />
              </div>
              <div>
                <p className="text-gray-600">Description of the clinician profile goes here.</p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-2">View Profile</button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#00C6F9' }}>
        <p>&copy; 2023 PayMed. All rights reserved.</p>
      </footer>
    </div>
  );
}
