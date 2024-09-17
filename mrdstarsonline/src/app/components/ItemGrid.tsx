// src/app/components/ItemGrid.tsx
'use client';

const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
];

const ItemGrid = ({ selectedItems, setSelectedItems }: { selectedItems: any[], setSelectedItems: (items: any[]) => void }) => {
  const handleItemClick = (item: any) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else if (selectedItems.length < 2) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
      {items.map((item) => (
        <div
          key={item.id}
          className={`border-2 p-6 cursor-pointer rounded-lg text-center text-lg font-semibold transition duration-200 ease-in-out transform hover:scale-105 ${selectedItems.includes(item)
              ? 'bg-green-400 border-green-600 text-white'
              : 'bg-yellow-100 border-yellow-300 hover:bg-yellow-200 hover:border-yellow-400 text-black'
            }`}
          onClick={() => handleItemClick(item)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default ItemGrid;