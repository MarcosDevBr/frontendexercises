'use client';

import { useState } from 'react';
import maskify from '@/app/utils/maskify';
import { MaskPageView } from './page.view';

export default function MaskPage() {
  const [input, setInput] = useState('');
  const maskedValue = maskify(input);

  return (
    <MaskPageView
      input={input}
      maskedValue={maskedValue}
      onInputChange={(e) => setInput(e.target.value)}
    />
  );
}