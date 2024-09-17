// src/app/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use Next.js router to navigate
import NicknameInput from './components/NicknameInput';
import ItemGrid from './components/ItemGrid';
import SubmitButton from './components/SubmitButton';

export default function Home() {
  const [nickname, setNickname] = useState('');
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const router = useRouter(); // Hook to programmatically navigate

  const handleSubmit = () => {
    console.log(`Nickname: ${nickname}, Selected Items: ${selectedItems.map(i => i.name)}`);
    router.push(`/stats?nickname=${nickname}&items=${selectedItems.map(i => i.name).join(',')}`);
  };

  return (
    <div className="container mx-auto p-4">
      {!nickname ? (
        <NicknameInput setNickname={setNickname} />
      ) : (
        <>
          <h2 className="text-xl mb-4">Hello, {nickname}! Select up to 2 items:</h2>
          <ItemGrid selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
          <SubmitButton onSubmit={handleSubmit} disabled={selectedItems.length === 0} />
        </>
      )}
    </div>
  );
}