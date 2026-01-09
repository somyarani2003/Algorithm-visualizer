import React, { useEffect, useState } from "react";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(50);
  const [speed, setSpeed] = useState(50);
  const [sorting, setSorting] = useState(false);
  const [algorithm, setAlgorithm] = useState('bubble');
  const [showCode, setShowCode] = useState(false);
  const [colorArray, setColorArray] = useState([]);

  const algorithmInfo = {
    bubble: {
      name: 'Bubble Sort',
      time: 'O(n²)',
      space: 'O(1)',
      code: `function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`
    },
    selection: {
      name: 'Selection Sort',
      time: 'O(n²)',
      space: 'O(1)',
      code: `function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}`
    },
    insertion: {
      name: 'Insertion Sort',
      time: 'O(n²)',
      space: 'O(1)',
      code: `function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i], j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}`
    },
    merge: {
      name: 'Merge Sort',
      time: 'O(n log n)',
      space: 'O(n)',
      code: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}`
    },
    quick: {
      name: 'Quick Sort',
      time: 'O(n log n)',
      space: 'O(log n)',
      code: `function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
}`
    }
  };

  useEffect(() => {
    generateArray();
  }, [arraySize]);

  const generateArray = () => {
    const newArray = Array.from({ length: arraySize }, () => 
      Math.floor(Math.random() * 400) + 20
    );
    setArray(newArray);
    setColorArray(new Array(arraySize).fill('bg-cyan-500'));
  };

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const bubbleSort = async () => {
    const arr = [...array];
    const colors = [...colorArray];
    
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        colors[j] = 'bg-yellow-500';
        colors[j + 1] = 'bg-yellow-500';
        setColorArray([...colors]);
        await sleep(101 - speed);
        
        if (arr[j] > arr[j + 1]) {
          colors[j] = 'bg-red-500';
          colors[j + 1] = 'bg-red-500';
          setColorArray([...colors]);
          
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await sleep(101 - speed);
        }
        
        colors[j] = 'bg-cyan-500';
        colors[j + 1] = 'bg-cyan-500';
        setColorArray([...colors]);
      }
      colors[arr.length - 1 - i] = 'bg-green-500';
      setColorArray([...colors]);
    }
    colors[0] = 'bg-green-500';
    setColorArray([...colors]);
  };

  const selectionSort = async () => {
    const arr = [...array];
    const colors = [...colorArray];
    
    for (let i = 0; i < arr.length - 1; i++) {
      let minIdx = i;
      colors[i] = 'bg-yellow-500';
      setColorArray([...colors]);
      
      for (let j = i + 1; j < arr.length; j++) {
        colors[j] = 'bg-red-500';
        setColorArray([...colors]);
        await sleep(101 - speed);
        
        if (arr[j] < arr[minIdx]) {
          if (minIdx !== i) {
            colors[minIdx] = 'bg-cyan-500';
          }
          minIdx = j;
          colors[minIdx] = 'bg-purple-500';
        } else {
          colors[j] = 'bg-cyan-500';
        }
        setColorArray([...colors]);
      }
      
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      setArray([...arr]);
      
      colors[minIdx] = 'bg-cyan-500';
      colors[i] = 'bg-green-500';
      setColorArray([...colors]);
      await sleep(101 - speed);
    }
    colors[arr.length - 1] = 'bg-green-500';
    setColorArray([...colors]);
  };

  const insertionSort = async () => {
    const arr = [...array];
    const colors = [...colorArray];
    
    colors[0] = 'bg-green-500';
    setColorArray([...colors]);
    
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      
      colors[i] = 'bg-yellow-500';
      setColorArray([...colors]);
      await sleep(101 - speed);
      
      while (j >= 0 && arr[j] > key) {
        colors[j] = 'bg-red-500';
        setColorArray([...colors]);
        
        arr[j + 1] = arr[j];
        setArray([...arr]);
        await sleep(101 - speed);
        
        colors[j] = 'bg-green-500';
        j--;
      }
      
      arr[j + 1] = key;
      setArray([...arr]);
      colors[i] = 'bg-green-500';
      setColorArray([...colors]);
    }
  };

  const mergeSort = async () => {
    const arr = [...array];
    const colors = [...colorArray];
    
    const merge = async (arr, left, mid, right) => {
      const leftArr = arr.slice(left, mid + 1);
      const rightArr = arr.slice(mid + 1, right + 1);
      
      let i = 0, j = 0, k = left;
      
      for (let idx = left; idx <= right; idx++) {
        colors[idx] = 'bg-yellow-500';
      }
      setColorArray([...colors]);
      await sleep(101 - speed);
      
      while (i < leftArr.length && j < rightArr.length) {
        colors[k] = 'bg-red-500';
        setColorArray([...colors]);
        
        if (leftArr[i] <= rightArr[j]) {
          arr[k] = leftArr[i];
          i++;
        } else {
          arr[k] = rightArr[j];
          j++;
        }
        
        setArray([...arr]);
        await sleep(101 - speed);
        colors[k] = 'bg-purple-500';
        setColorArray([...colors]);
        k++;
      }
      
      while (i < leftArr.length) {
        arr[k] = leftArr[i];
        colors[k] = 'bg-purple-500';
        setArray([...arr]);
        setColorArray([...colors]);
        await sleep(101 - speed);
        i++;
        k++;
      }
      
      while (j < rightArr.length) {
        arr[k] = rightArr[j];
        colors[k] = 'bg-purple-500';
        setArray([...arr]);
        setColorArray([...colors]);
        await sleep(101 - speed);
        j++;
        k++;
      }
      
      for (let idx = left; idx <= right; idx++) {
        colors[idx] = 'bg-green-500';
      }
      setColorArray([...colors]);
    };
    
    const mergeSortHelper = async (arr, left, right) => {
      if (left < right) {
        const mid = Math.floor((left + right) / 2);
        await mergeSortHelper(arr, left, mid);
        await mergeSortHelper(arr, mid + 1, right);
        await merge(arr, left, mid, right);
      }
    };
    
    await mergeSortHelper(arr, 0, arr.length - 1);
    setArray([...arr]);
  };

  const quickSort = async () => {
    const arr = [...array];
    const colors = [...colorArray];
    
    const partition = async (low, high) => {
      const pivot = arr[high];
      colors[high] = 'bg-yellow-500';
      setColorArray([...colors]);
      
      let i = low - 1;
      
      for (let j = low; j < high; j++) {
        colors[j] = 'bg-red-500';
        setColorArray([...colors]);
        await sleep(101 - speed);
        
        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          setArray([...arr]);
          
          colors[i] = 'bg-purple-500';
          colors[j] = 'bg-purple-500';
          setColorArray([...colors]);
          await sleep(101 - speed);
        }
        
        colors[j] = 'bg-cyan-500';
        setColorArray([...colors]);
      }
      
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      setArray([...arr]);
      
      colors[high] = 'bg-cyan-500';
      colors[i + 1] = 'bg-green-500';
      setColorArray([...colors]);
      
      return i + 1;
    };
    
    const quickSortHelper = async (low, high) => {
      if (low < high) {
        const pi = await partition(low, high);
        await quickSortHelper(low, pi - 1);
        await quickSortHelper(pi + 1, high);
      } else if (low === high) {
        colors[low] = 'bg-green-500';
        setColorArray([...colors]);
      }
    };
    
    await quickSortHelper(0, arr.length - 1);
  };

  const startSorting = async () => {
    setSorting(true);
    switch(algorithm) {
      case 'bubble': await bubbleSort(); break;
      case 'selection': await selectionSort(); break;
      case 'insertion': await insertionSort(); break;
      case 'merge': await mergeSort(); break;
      case 'quick': await quickSort(); break;
      default: await bubbleSort();
    }
    setSorting(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-gray-800 rounded-2xl p-4 sm:p-8 shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-cyan-500 mb-6">Sorting Visualizer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <select
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
            disabled={sorting}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-cyan-500"
          >
            <option value="bubble">Bubble Sort</option>
            <option value="selection">Selection Sort</option>
            <option value="insertion">Insertion Sort</option>
            <option value="merge">Merge Sort</option>
            <option value="quick">Quick Sort</option>
          </select>

          <div className="flex flex-col gap-2">
            <label className="text-white text-sm">Size: {arraySize}</label>
            <input
              type="range"
              min="10"
              max="100"
              value={arraySize}
              onChange={(e) => setArraySize(Number(e.target.value))}
              disabled={sorting}
              className="w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white text-sm">Speed: {speed}</label>
            <input
              type="range"
              min="1"
              max="100"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              disabled={sorting}
              className="w-full"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={generateArray}
              disabled={sorting}
              className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-600 text-white rounded-lg transition-colors"
            >
              New Array
            </button>
            <button
              onClick={startSorting}
              disabled={sorting}
              className="flex-1 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-white rounded-lg transition-colors"
            >
              {sorting ? 'Sorting...' : 'Sort'}
            </button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 mb-6 h-96 flex items-end justify-center gap-0.5">
          {array.map((value, idx) => (
            <div
              key={idx}
              style={{
                height: `${(value / 420) * 100}%`,
                width: `${100 / array.length}%`
              }}
              className={`${colorArray[idx] || 'bg-cyan-500'} transition-all duration-100 rounded-t`}
            />
          ))}
        </div>

        <button
          onClick={() => setShowCode(!showCode)}
          className="mb-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
        >
          {showCode ? 'Hide' : 'Show'} Code & Complexity
        </button>
        {showCode && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 bg-gray-900 rounded-lg p-4">
              <h3 className="text-cyan-500 font-bold mb-2">Code Implementation</h3>
              <pre className="text-gray-300 text-sm overflow-x-auto">
                <code>{algorithmInfo[algorithm].code}</code>
              </pre>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="text-cyan-500 font-bold mb-2">Time Complexity</h3>
                <p className="text-gray-300">{algorithmInfo[algorithm].time}</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="text-cyan-500 font-bold mb-2">Space Complexity</h3>
                <p className="text-gray-300">{algorithmInfo[algorithm].space}</p>
              </div>
            </div>
          </div>
        )}
        </div>
    </div>
  );
};
export default SortingVisualizer;