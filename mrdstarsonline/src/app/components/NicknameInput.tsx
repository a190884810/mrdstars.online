// src/app/components/NicknameInput.tsx
'use client';

import { useState } from 'react';

const NicknameInput = ({ setNickname }: { setNickname: (nickname: string) => void }) => {
  const [localNickname, setLocalNickname] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localNickname.trim()) {
      setNickname(localNickname);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      <input
        type="text"
        placeholder="Enter your nickname"
        value={localNickname}
        onChange={(e) => setLocalNickname(e.target.value)}
        className="w-full max-w-md border border-gray-300 rounded-md p-3 text-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500"
      />
      <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-500 transition">
        Submit
      </button>
    </form>
  );
};

export default NicknameInput;