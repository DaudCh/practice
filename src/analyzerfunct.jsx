import React, { useState } from 'react';

const Analyzerfunct = () => {
  const [text, setText] = useState('');
  const [analysis, setAnalysis] = useState({
    words: 0,
    spaces: 0,
    paragraphs: 0,
    commas: 0,
    fullStops: 0,
  });



  const analyzeText = () => {
    const wordsArray = text.split(' ').filter(word => word.trim() !== '');
    const words = wordsArray.length;

    const spaces = text.split('').filter(char => char === ' ').length;

    const paragraphs = text.split('\n').filter(paragraph => paragraph.trim() !== '').length;

    const commas = text.split('').filter(char => char === ',').length;

    const fullStops = text.split('').filter(char => char === '.').length;

    setAnalysis({ words, spaces, paragraphs, commas, fullStops });
  };


  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Text Analyzer</h1>
      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        className="w-full h-40 p-2 border border-gray-300 rounded mb-4"
        placeholder="Enter your text here..."
      ></textarea>
      <button
        onClick={analyzeText}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Analyze
      </button>
      <div className="mt-4">
        <p>Words: {analysis.words}</p>
        <p>paces: {analysis.spaces}</p>
        <p>Paragraphs:{analysis.paragraphs}</p>
        <p>Commas: {analysis.commas}</p>
        <p>Full-Stops: {analysis.fullStops}</p>
      </div>
    </div>
  );
};

export default Analyzerfunct;
