'use client';

import { useState } from 'react';
import checkIfTheFirstLetterIsUppercase from '@/app/utils/checkFirstLetter';
import { UppercasePageView } from './page.view';

export default function UppercasePage() {
  const [input, setInput] = useState('');
  const isUppercase = checkIfTheFirstLetterIsUppercase(input);

  const examples = [
    { input: 'Brasil', result: true },
    { input: 'mobiauto', result: false },
    { input: 'xXx xXx', result: false },
    { input: 'xDD', result: false },
    { input: 'Deu Certo!', result: true },
  ];

  return (
    <UppercasePageView
      input={input}
      isUppercase={isUppercase}
      examples={examples}
      onInputChange={(e) => setInput(e.target.value)}
    />
  );
}