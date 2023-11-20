import React from 'react';
import MiniPay from '@celo/react-celo/MiniPay';
import { CeloProvider, Account, Signer } from '@celo/react-celo';
import Image from 'next/image';
import Link from 'next/link';

export default function PaymentCenter() {
  const { account, signer } = useAccount();

  const handlePayment = async () => {
    const miniPay = new MiniPay({
      network: 'alfajores',
      provider: account.provider,
      signer,
    });

    const { paymentRequest } = await miniPay.createPaymentRequest({
      amount: 1.00,
      currency: 'CGLD',
      description: 'Payment for healthcare services',
    });

    const payment = await miniPay.pay(paymentRequest);
    console.log('Payment successful:', payment);
  };

  // Dummy data for patient information
  const patient = {
    name: 'Joshua Evans',
    profilePicture: '/ian-dooley-d1UPkiFd04A-unsplash.jpg',
    prescriptionCoupons: [
      { medication: 'Medicine A', discount: '20% off' },
      { medication: 'Medicine B', discount: '15% off' },
    ],
    upcomingAppointments: [
      { doctor: 'Dr. Smith', date: '2023-12-01', time: '10:00 AM' },
      { doctor: 'Dr. Johnson', date: '2023-12-10', time: '02:30 PM' },
    ],
  };

  // Dummy data for expenses
  const expenses = [
    { category: 'Doctor Visits', amount: 150.0 },
    { category: 'Prescriptions', amount: 75.0 },
    { category: 'Lab Tests', amount: 50.0 },
  ];

  // Dummy data for monthly breakdown
  const monthlyBreakdown = [
    { month: 'January', totalExpense: 300.0 },
    { month: 'February', totalExpense: 250.0 },
    { month: 'March', totalExpense: 200.0 },
  ];

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
        <h1 className="text-4xl font-bold">Payment Center</h1>
      </header>

      {/* Main Content */}
      <main className="relative flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          {/* Patient Profile */}
          <section id="patient-profile" className="mb-8">
            <h2 className="text-2xl font-semibold">Patient Profile</h2>
            <div className="flex flex-col items-center mt-4">
              <div className="mb-4">
                <Image src={patient.profilePicture} alt="Patient Image" width={200} height={200} />
              </div>
              <div>
                <p className="text-gray-600">{patient.name}</p>
              </div>
            </div>
          </section>

          {/* Prescription Coupons */}
          <section id="prescription-coupons" className="mb-8">
            <h2 className="text-2xl font-semibold">Prescription Coupons</h2>
            <div className="flex justify-center items-center mt-4">
              <ul className="text-gray-600">
                {patient.prescriptionCoupons.map((coupon, index) => (
                  <li key={index}>
                    {coupon.medication}: {coupon.discount}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Upcoming Appointments */}
          <section id="upcoming-appointments" className="mb-8">
            <h2 className="text-2xl font-semibold">Upcoming Appointments</h2>
            <div className="flex justify-center items-center mt-4">
              <ul className="text-gray-600">
                {patient.upcomingAppointments.map((appointment, index) => (
                  <li key={index}>
                    {appointment.doctor} - {appointment.date} at {appointment.time}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Payment Overview */}
          <section id="payment-overview" className="mb-8">
            <h2 className="text-2xl font-semibold">Payment Overview</h2>
            <div className="mt-4 text-gray-600">
              {/* Monthly Expenses */}
              <div className="flex justify-center space-x-4">
                {expenses.map((expense, index) => (
                  <div key={index} className="w-1/4 bg-gray-200 p-4 rounded">
                    <p className="text-gray-600">{expense.category}</p>
                    <p className="text-2xl font-semibold">${expense.amount.toFixed(2)}</p>
                  </div>
                ))}
              </div>

              {/* Monthly Breakdown */}
              <div className="flex justify-center mt-4">
                {/* Include dummy chart */}
                <div className="w-1/2 bg-gray-200 p-4 rounded">
                  <p className="text-2xl font-semibold mb-4">Monthly Breakdown</p>
                  <ul>
                    {monthlyBreakdown.map((entry, index) => (
                      <li key={index} className="flex justify-between items-center">
                        <span>{entry.month}</span>
                        <span>${entry.totalExpense.toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
