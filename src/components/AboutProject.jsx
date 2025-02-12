const AboutProject = () => {
  return (
    <div className="max-w-2xl mx-auto mt-7 p-4 sm:p-8 bg-[#041E23] text-white rounded-2xl border border-[#197686] text-sm sm:text-base">
      {/* Title */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center">
        Event Ticket Booking UI – Open Source Practice Project 🎟️
      </h1>

      {/* Overview Section */}
      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-300 leading-relaxed">
          This is a beginner-friendly yet practical Event Ticket Booking UI designed for developers to clone, explore, and build upon. The design focuses on a seamless, login-free ticket reservation flow, allowing users to book event tickets quickly and efficiently.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          The project consists of a three-step ticket booking flow, and developers can extend it further by integrating payment solutions, user authentication (optional), and ticket validation systems.
        </p>
      </section>

      {/* Flow & Features Section */}
      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Flow & Features</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">1️⃣ Ticket Selection</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed">
              <li>Users can browse available tickets (Free & Paid).</li>
              <li>Ticket options are displayed in a list or card view.</li>
              <li>For Free Tickets → Clicking "Get Free Ticket" proceeds to attendee details.</li>
              <li>For Paid Tickets → Clicking "Purchase Ticket" would ideally open a payment modal.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">2️⃣ Attendee Details Form</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed">
              <li>Users input their Name, Email, and optional Phone Number.</li>
              <li>Profile picture upload option with preview functionality.</li>
              <li>Ticket summary is visible to ensure users review their details before submission.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">3️⃣ Payment or Success Page</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed">
              <li>If the ticket is free, the user is taken directly to the Ticket Confirmation Page.</li>
              <li>If the ticket is paid, developers can integrate Stripe, Paystack, or Flutterwave to process payments before showing the confirmation page.</li>
              <li>Upon successful booking, users should receive:
                <ul className="list-circle list-inside ml-6">
                  <li>A visual ticket preview with a unique QR Code.</li>
                  <li>An option to download the ticket as PDF or save it to their device.</li>
                  <li>An email confirmation containing ticket details.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">What You'll Learn 🧑‍💻</h2>
        <ul className="list-disc list-inside text-gray-300 leading-relaxed">
          <li>File handling & validation (profile picture uploads).</li>
          <li>Dynamic UI updates based on ticket selection.</li>
          <li>Persisting bookings using local state or a backend.</li>
          <li>Integrating payment gateways for ticket purchases.</li>
          <li>Generating & validating QR Codes for event check-in (Advanced).</li>
        </ul>
      </section>

      {/* Call to Action */}
      <p className="text-4xl sm:text-6xl text-center my-10 font-light">💛 Enjoy</p>

      {/* Buttons */}
      <div className="text-xs sm:text-sm text-center flex flex-col-reverse sm:flex-row justify-center gap-4 mt-6 sm:mt-10 border-2 border-[#0E464F] rounded-2xl p-4">
        <a
          href="https://www.figma.com/community/file/1470800949188681164/event-ticket-booking-ui-open-source-practice-project"
          className="cursor-pointer w-full sm:w-[40%] bg-transparent border-[1px] border-[#24A0B5] hover:text-white py-3 rounded-lg hover:bg-[#197686] text-[#24A0B5]"
        >
          Design File
        </a>
        <a
          href="https://github.com/Ayomide0123/hng12__Stage2"
          className="cursor-pointer w-full sm:w-[40%] bg-[#197686] border-[1px] border-[#24A0B5] text-white py-3 rounded-lg hover:bg-transparent hover:text-[#197686]"
        >
          Github Code
        </a>
      </div>
    </div>
  );
};

export default AboutProject;
