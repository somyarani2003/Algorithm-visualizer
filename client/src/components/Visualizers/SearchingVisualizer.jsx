import React, { useEffect, useState, useCallback } from "react";

const SearchingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(20);
  const [searchValue, setSearchValue] = useState('');
  const [searching, setSearching] = useState(false);
  const [found, setFound] = useState(null);
  const [algorithm, setAlgorithm] = useState('linear');
  const [showCode, setShowCode] = useState(false);
  const [steps, setSteps] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [comparedIndices, setComparedIndices] = useState([]);

  const algorithmInfo = {
    linear: {
      name: 'Linear Search',
      time: 'O(n)',
      space: 'O(1)',
      code: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}`
    },
    binary: {
      name: 'Binary Search',
      time: 'O(log n)',
      space: 'O(1)',
      code: `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`
    }
  };

  // ✅ useCallback to fix ESLint
  const generateArray = useCallback(() => {
    let newArray = Array.from({ length: arraySize }, () =>
      Math.floor(Math.random() * 500) + 10
    );

    if (algorithm === 'binary') newArray.sort((a, b) => a - b);

    setArray(newArray);
    setFound(null);
    setSteps(0);
    setCurrentIndex(-1);
    setComparedIndices([]);
    setSearchValue('');
  }, [arraySize, algorithm]);

  useEffect(() => {
    generateArray();
  }, [generateArray]);

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const linearSearch = async (target) => {
    let stepCount = 0;
    setComparedIndices([]);

    for (let i = 0; i < array.length; i++) {
      stepCount++;
      setSteps(stepCount);
      setCurrentIndex(i);
      setComparedIndices(prev => [...prev, i]);
      await sleep(500);

      if (array[i] === target) {
        setFound(i);
        setCurrentIndex(-1);
        return;
      }
    }
    setFound(-1);
    setCurrentIndex(-1);
  };

  const binarySearch = async (target) => {
    let left = 0, right = array.length - 1;
    let stepCount = 0;
    setComparedIndices([]);

    while (left <= right) {
      stepCount++;
      setSteps(stepCount);
      const mid = Math.floor((left + right) / 2);

      setCurrentIndex(mid);
      setComparedIndices(prev => [...prev, mid]);
      await sleep(800);

      if (array[mid] === target) {
        setFound(mid);
        setCurrentIndex(-1);
        return;
      }

      if (array[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    setFound(-1);
    setCurrentIndex(-1);
  };

  const startSearch = async () => {
    const target = parseInt(searchValue);
    if (isNaN(target)) return;

    setSearching(true);
    setFound(null);
    setSteps(0);
    setCurrentIndex(-1);
    setComparedIndices([]);

    if (algorithm === 'linear') await linearSearch(target);
    else await binarySearch(target);

    setSearching(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-gray-800 rounded-2xl p-4 sm:p-8 shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-500 mb-6">Searching Visualizer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <select
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
            disabled={searching}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-purple-500"
          >
            <option value="linear">Linear Search</option>
            <option value="binary">Binary Search</option>
          </select>

          <div className="flex flex-col gap-2">
            <label className="text-white text-sm">Array Size: {arraySize}</label>
            <input
              type="range"
              min="10"
              max="50"
              value={arraySize}
              onChange={(e) => setArraySize(Number(e.target.value))}
              disabled={searching}
              className="w-full"
            />
          </div>

          <input
            type="number"
            placeholder="Enter value (10-500)"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            disabled={searching}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <div className="flex gap-2">
            <button
              onClick={generateArray}
              disabled={searching}
              className="flex-1 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-white rounded-lg transition-colors"
            >
              New Array
            </button>
            <button
              onClick={startSearch}
              disabled={searching || !searchValue}
              className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-600 text-white rounded-lg transition-colors"
            >
              {searching ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 mb-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {array.map((value, idx) => (
              <div
                key={idx}
                className={`w-16 h-16 flex items-center justify-center rounded-lg font-bold text-lg transition-all duration-300 ${
                  found === idx
                    ? 'bg-green-500 text-white scale-125 shadow-lg shadow-green-500/50'
                    : currentIndex === idx
                    ? 'bg-yellow-400 text-black scale-110 animate-pulse'
                    : comparedIndices.includes(idx) && found !== idx
                    ? 'bg-red-500 text-white'
                    : 'bg-purple-500 text-white'
                }`}
              >
                {value}
              </div>
            ))}
          </div>
        </div>

        {found !== null && (
          <div className="bg-gray-900 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
              <div>
                <span className="font-bold text-purple-500">Result: </span>
                {found === -1 ? 'Not Found' : `Found at index ${found}`}
              </div>
              <div>
                <span className="font-bold text-purple-500">Steps: </span>
                {steps}
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => setShowCode(!showCode)}
          className="mb-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
        >
          {showCode ? 'Hide' : 'Show'} Code & Complexity
        </button>

        {showCode && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 bg-gray-900 rounded-lg p-4">
              <h3 className="text-purple-500 font-bold mb-2">Code Implementation</h3>
              <pre className="text-gray-300 text-sm overflow-x-auto">
                <code>{algorithmInfo[algorithm].code}</code>
              </pre>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="text-purple-500 font-bold mb-2">Time Complexity</h3>
                <p className="text-gray-300">{algorithmInfo[algorithm].time}</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="text-purple-500 font-bold mb-2">Space Complexity</h3>
                <p className="text-gray-300">{algorithmInfo[algorithm].space}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchingVisualizer;
