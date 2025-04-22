import React from 'react';

const MoodSelector = ({ selectedMood, onSelect }) => {
  const moods = [
    { value: 'happy', icon: '😊' },
    { value: 'sad', icon: '😢' },
    { value: 'angry', icon: '😠' },
    { value: 'calm', icon: '😌' },
    { value: 'excited', icon: '🤩' },
  ];

  return (
    <div className="flex space-x-4">
      {moods.map((mood) => (
        <button
          key={mood.value}
          onClick={() => onSelect(mood.value)}
          className={`p-4 border-2 rounded-lg ${
            selectedMood === mood.value ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
          }`}
        >
          {mood.icon}
        </button>
      ))}
    </div>
  );
};

export default MoodSelector;