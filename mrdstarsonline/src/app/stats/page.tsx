// src/app/stats/page.tsx
'use client';

import { useSearchParams } from 'next/navigation'; // Hook to access query params from the URL

const StatsPage = () => {
  const searchParams = useSearchParams(); // Hook to get URL query parameters
  const nickname = searchParams.get('nickname'); // Get the 'nickname' from query params
  const items = searchParams.get('items')?.split(',') || []; // Get 'items' as a comma-separated string and convert it to an array

  return (
    <div className="container mx-auto p-8 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Stats</h1>

      {nickname ? (
        <>
          <p className="text-xl mb-4">
            <strong>User:</strong> {nickname}
          </p>

          {items.length > 0 ? (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Selected Items:</h2>
              <ul className="list-disc list-inside text-lg">
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-lg">No items selected.</p>
          )}
        </>
      ) : (
        <p className="text-lg">No user found.</p>
      )}
    </div>
  );
};

export default StatsPage;
