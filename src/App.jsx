import React, { useState } from 'react';
import styles from './App.module.css';

export default function App() {
  const [digits, setDigits] = useState(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', String(index));
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (dragOverIndex !== index) {
      setDragOverIndex(index);
    }
  };

  const handleDragLeave = (e, index) => {
    if (dragOverIndex === index) {
      setDragOverIndex(null);
    }
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === targetIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    const updatedDigits = [...digits];
    const [movedItem] = updatedDigits.splice(draggedIndex, 1);
    updatedDigits.splice(targetIndex, 0, movedItem);

    setDigits(updatedDigits);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Drag & Drop Digits</h1>
        <p className={styles.subtitle}>Drag the boxes to reorder the digits 0–9.</p>

        <div className={styles.grid}>
          {digits.map((digit, index) => {
            const isDragging = draggedIndex === index;
            const isOver = dragOverIndex === index;

            let boxClasses = styles.digitBox;
            if (isDragging) {
              boxClasses += ` ${styles.dragging}`;
            } else if (isOver) {
              boxClasses += ` ${styles.dropTarget}`;
            }

            return (
              <div
                key={digit}
                className={boxClasses}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragLeave={(e) => handleDragLeave(e, index)}
                onDrop={(e) => handleDrop(e, index)}
                onDragEnd={handleDragEnd}
              >
                {digit}
              </div>
            );
          })}
        </div>

        <p className={styles.tip}>
          Tip: Try reordering to make 0123456789 or reverse it!
        </p>
      </div>
    </div>
  );
}

