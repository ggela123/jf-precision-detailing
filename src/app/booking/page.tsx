export default function BookingPage() {
  return (
    <main className="pt-20 px-6 md:px-16">
      <h1 className="text-4xl font-bold mb-6 text-center">Book an Appointment</h1>
      <p className="text-center mb-8 text-gray-600 dark:text-gray-300">
        Select a time that works best for you.
      </p>
      {/* Example: Calendly embed */}
      <div className="flex justify-center">
        <iframe
          src="https://calendly.com/your-link"
          width="100%"
          height="600"
          className="border rounded-lg shadow-lg"
        ></iframe>
      </div>
    </main>
  )
}
