// src/app/components/SubmitButton.tsx
'use client';

const SubmitButton = ({ onSubmit, disabled }: { onSubmit: () => void, disabled: boolean }) => {
  return (
    <button
      onClick={onSubmit}
      disabled={disabled}
      className={`mt-4 px-4 py-2 text-white ${disabled ? 'bg-gray-500' : 'bg-blue-500'}`}
    >
      Submit Selection
    </button>
  );
};

export default SubmitButton;