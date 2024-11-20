import Footer from "../components/Footer";
import Header from "../components/Header";

const EventDetails = () => {
    return (
      <>
      <Header/>
      <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-blue-400 mb-2">Tech Conference 2024</h1>
            <div className="flex items-center text-gray-400">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zm0 16a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <span>March 15, 2024 • 9:00 AM - 5:00 PM</span>
            </div>
          </div>
  
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Image and Description */}
            <div className="lg:col-span-2">
              <div className="rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://i.pinimg.com/736x/dc/78/c0/dc78c041054c403eda889854ef93e966.jpg" 
                  alt="Event Cover" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-semibold text-blue-400 mb-4">About the Event</h2>
                <p className="text-gray-300 leading-relaxed">
                  Join us for an exciting day of technology insights, networking, and innovation...
                </p>
              </div>
  
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-blue-400 mb-4">Location</h2>
                <div className="text-gray-300">
                  <p>Tech Convention Center</p>
                  <p>123 Innovation Street</p>
                  <p>San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
  
            {/* Right Column - Booking Form */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-lg p-6 sticky top-6">
                <h2 className="text-2xl font-semibold text-blue-400 mb-4">Book Tickets</h2>
                <div className="mb-4">
                  <p className="text-gray-400 mb-2">Available Tickets: 150</p>
                  <div className="flex items-center space-x-4 mb-4">
                    <label className="text-gray-300">Quantity:</label>
                    <select className="bg-gray-700 text-gray-100 rounded-md px-3 py-2 w-24">
                      {[1,2,3,4,5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200">
                    Book Now
                  </button>
                </div>
                <div className="text-sm text-gray-400">
                  <p>* Tickets are non-refundable</p>
                  <p>* Please arrive 15 minutes before the event</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </>
    );
  };
  
  export default EventDetails;