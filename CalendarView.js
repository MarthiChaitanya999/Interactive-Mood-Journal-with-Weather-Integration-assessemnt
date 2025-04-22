import React from 'react';

const CalendarView = ({ entries }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Past Entries</h2>
      {entries.length === 0 ? (
        <p>No entries yet.</p>
      ) : (
        entries.map((entry, index) => (
          <div key={index} className="p-4 mb-4 border border-gray-300 rounded-lg">
            <p>Date: {entry.date}</p>
            <p>Mood: {entry.mood}</p>
            <p>Notes: {entry.notes}</p>
            <p>Weather: {entry.weather?.main.temp}°C, {entry.weather?.weather[0]?.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CalendarView;