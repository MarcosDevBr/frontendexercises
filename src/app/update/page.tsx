'use client';

import { useState } from 'react';
import updateData from '@/app/utils/updateData';
import { UpdatePageView } from './page.view';
import { IExample } from './page.model';

export default function UpdatePage() {
  const [currentObject, setCurrentObject] = useState('{\n  "name": "Marcos",\n  "country": "Brasil",\n  "age": 22\n}');
  const [newData, setNewData] = useState('{\n  "country": "Japão",\n  "age": 33\n}');
  const [result, setResult] = useState('');

  const handleUpdate = () => {
    try {
      const current = JSON.parse(currentObject);
      const update = JSON.parse(newData);
      const result = updateData(current, update);
      setResult(JSON.stringify(result, null, 2));
    } catch {
      setResult('Invalid JSON input');
    }
  };

  const examples: IExample[] = [
    {
      current: { name: "Marcos", country: "Brasil", age: 22 },
      update: { country: "Japão", age: 33 },
      result: { name: 'Marcos', country: 'Japão', age: 33 }
    },
    {
      current: { name: "Marcos", country: "Brasil", age: 22 },
      update: { price: 89.9, amount: 15, description: "camiseta 100% algodão" },
      result: { name: "Marcos", country: "Brasil", age: 22 }
    }
  ];

  return (
    <UpdatePageView
      currentObject={currentObject}
      newData={newData}
      result={result}
      examples={examples}
      onCurrentObjectChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCurrentObject(e.target.value)}
      onNewDataChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewData(e.target.value)}
      onUpdate={handleUpdate}
    />
  );
}