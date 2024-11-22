import Footer from "../components/Footer";
import Header from "../components/Header";

const AdminDashboard = () => {
    return (
      <>
      <Header/>
      <div className="flex min-h-screen bg-gray-900">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 border-r border-gray-700">
          <div className="p-4">
            <h2 className="text-blue-400 text-xl font-bold">Event Dashboard</h2>
          </div>
          
          <nav className="mt-8">
            <a href="#" className="flex items-center px-6 py-3 text-gray-100 bg-gray-700">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              My Events
            </a>
            
            <a href="#" className="flex items-center px-6 py-3 text-gray-400 hover:bg-gray-700 hover:text-gray-100">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" />
              </svg>
              Bookings
            </a>
            
            <a href="#" className="flex items-center px-6 py-3 text-gray-400 hover:bg-gray-700 hover:text-gray-100">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
              Analytics
            </a>
            
            <a href="#" className="flex items-center px-6 py-3 text-gray-400 hover:bg-gray-700 hover:text-gray-100">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" />
              </svg>
              Settings
            </a>
          </nav>
        </div>
  
        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-8">
            <h1 className="text-2xl font-bold text-blue-400 mb-6">My Events</h1>
  
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-gray-400 mb-2">Total Events</div>
                <div className="text-3xl font-bold text-gray-100">12</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-gray-400 mb-2">Total Bookings</div>
                <div className="text-3xl font-bold text-gray-100">248</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-gray-400 mb-2">Active Events</div>
                <div className="text-3xl font-bold text-gray-100">5</div>
              </div>
            </div>
  
            {/* Events Table */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-700">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Event</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Attendees</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-100">Tech Conference 2024</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-300">Mar 15, 2024</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-300">45/100</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-blue-400 hover:text-blue-500 mr-3">Edit</button>
                      <button className="text-red-400 hover:text-red-500">Delete</button>
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </>
    );
  };
  
  export default AdminDashboard;