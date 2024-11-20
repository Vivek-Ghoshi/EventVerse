import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CreateEvent = () => {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [date,setDate] = useState('');
    const [time,setTime] = useState('');
    const [venue,setVenue] = useState();
    const [ticket,setTicket] = useState('');
    const [category,setCategory] = useState('');
    const [file,setFile] = useState();
 
    const submitHandler = (e)=>{
      e.preventDefault();
      console.log({title,description,date,time,venue,ticket,category,file})
    }

    return (
      <>
      <Header/>
      <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-blue-400">Create New Event</h1>
            <p className="text-gray-400 mt-2">Fill in the details to create a new event</p>
          </div>
  
          {/* Form Container */}
          <div className="bg-gray-800 rounded-lg p-8">
            <form onSubmit={submitHandler} className="space-y-6">
              {/* Event Title */}
              <div>
                <label className="block text-blue-400 mb-2">Event Title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-blue-500"
                  placeholder="Enter event title"
                />
              </div>
  
              {/* Event Description */}
              <div>
                <label className="block text-blue-400 mb-2">Event Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="4"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-blue-500"
                  placeholder="Describe your event"
                ></textarea>
              </div>
  
              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-blue-400 mb-2">Event Date</label>
                  <input
                    value={date}
                    onChange={(e) =>setDate(e.target.value)}
                    type="date"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-blue-400 mb-2">Event Time</label>
                  <input
                    value={time}
                    onChange={(e)=>setTime(e.target.value)}
                    type="time"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
  
              {/* Location */}
              <div>
                <label className="block text-blue-400 mb-2">Location</label>
                <input
                  value={venue}
                  onChange={(e)=>setVenue(e.target.value)}
                  type="text"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-blue-500"
                  placeholder="Enter venue or virtual link"
                />
              </div>
  
              {/* Ticket Limit */}
              <div>
                <label className="block text-blue-400 mb-2">Ticket Limit</label>
                <input
                  value={ticket}
                  onChange={(e)=> setTicket(e.target.value)}
                  type="number"
                  min="1"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-blue-500"
                  placeholder="Enter maximum number of tickets"
                />
              </div>
  
              {/* Event Category */}
              <div>
                <label className="block text-blue-400 mb-2">Event Category</label>
                <select value={category} onChange={(e)=> setCategory(e.target.value)} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-blue-500">
                  <option value="">Select a category</option>
                  <option value="technology">Technology</option>
                  <option value="business">Business</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="education">Education</option>
                </select>
              </div>
  
              {/* Image Upload */}
              <div>
                <label className="block text-blue-400 mb-2">Event Image</label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                  <input
                
                    onChange={(e)=> setFile(e.target.files[0])}
                    type="file"
                    className="hidden"
                    id="event-image"
                    accept="image/*"
                  />
                  <label
                    htmlFor="event-image"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span className="text-gray-400">Click to upload image</span>
                    <span className="text-gray-500 text-sm mt-2">PNG, JPG up to 5MB</span>
                  </label>
                </div>
              </div>
  
              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                >
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
      </>
    );
  };
  
  export default CreateEvent;