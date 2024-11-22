import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer'
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Api from '../api';

const EventCards = () => {
         
     const [events,setEvents] = useState([]);
     useEffect( ()=>{
       const fetchEvents = async ()=>{
         try {
           const {data} = await Api.get('/host/all-events');
           setEvents(data.events)
          } 
          catch (error) {
            console.log(error.message)
            
          }
        } 
        fetchEvents();
      },[])
  return (
    <>
    <Header/>
    <div className=" bg-gray-900  px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      
    {events.map((event,idx)=>(

          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="text-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <img
                src={'https://i.pinimg.com/enabled_lo_mid/736x/16/49/b8/1649b845c47695dc2041946d41859e87.jpg'}
                alt='some title'
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
              {new Date(event.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-300 mb-2">
              {event.title}
              </h3>
              <p className="text-blue-600 font-medium mb-2">
              {event.time}
              </p>
              <p className="text-gray-400 mb-1">
              {event.description}
              </p>
              <p className="text-blue-600 font-medium mb-2">
               📍{event.venue}
              </p>
              <button
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                View Details
              </button>
            </div>
          </motion.div>
    
    ))}
      
         
        
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center gap-2">
          <button className='px-4 py-2 rounded-md'>
            page no
          </button>
       
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default EventCards;