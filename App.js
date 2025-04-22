import React, { useState, useEffect } from 'react';
import MoodSelector from './MoodSelector';
import NotesInput from './NotesInput';
import WeatherDisplay from './WeatherDisplay';
import CalendarView from './CalendarView';

const App = () => {
  const [mood, setMood] = useState('');
  const [notes, setNotes] = useState('');
  const [entries, setEntries] = useState([]);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem('entries')) || [];
    setEntries(storedEntries);
  }, []);

  const saveEntry = () => {
    if (!mood) {
      alert('Please select a mood');
      return;
    }
    const date = new Date().toISOString().split('T')[0];
    const entry = { date, mood, notes, weather };
    const updatedEntries = [...entries, entry];
    setEntries(updatedEntries);
    localStorage.setItem('entries', JSON.stringify(updatedEntries));
    setMood('');
    setNotes('');
    alert('Entry saved!');
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Mood Journal</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Log Your Mood</h2>
        <MoodSelector selectedMood={mood} onSelect={setMood} />
        <NotesInput value={notes} onChange={(e) => setNotes(e.target.value)} />
        <button
          onClick={saveEntry}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Save Entry
        </button>
      </div>
      <WeatherDisplay />
      <CalendarView entries={entries} />
    </div>
  );
};
   const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
export default App;