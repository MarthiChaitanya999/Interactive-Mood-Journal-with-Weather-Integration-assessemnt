import React from 'react';

const NotesInput = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder="Write your notes here..."
      className="w-full p-2 border border-gray-300 rounded-lg"
    />
  );
};

export default NotesInput;