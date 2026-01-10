//Merged sort is basically based on DIVIDE AND CONQUER RULE
// First we have to divide the whole array into smaller parts.
//a. si --> mid and another one is b. mid+1 --> ei
//Then we have to follow this steps until we get a single elements
//then we have to sort that indivitual arrays
//then put it into an empty array which is a merged array and a sorted array too
//this is the conquer step and thus we can easily do the merge sort

var beep = new Audio('beep3.mp3')
var mouseclick = new Audio('Mouseclick.mp3')
var done = new Audio('wrong.mp3')
const MergeSortButton = document.querySelector(".MergeSort");

MergeSortButton.addEventListener('click', async function () {
   // headingchange1.textContent = "Merge Sort";
   selectText.innerHTML = `Merge Sort..`
   mouseclick.play()
   const description = document.querySelector('#description')
   description.style.display = 'flex'
   const section = document.querySelector('#fullbody')
   section.style.height = '184vh'

   await descriptionText_merge();
   let element = document.querySelectorAll('.bar');
   let si = 0;
   let ei = parseInt(element.length) - 1;
   disableSortingBtn();
   disableSizeSlider();
   disableNewArrayBtn();

   await MergeSort(element, si, ei);
   selectText.innerHTML=`Sorting Complete!`
   done.play();
   // enableSortingBtn();
   // enableSizeSlider();
   enableNewArrayBtn();

});



async function descriptionText_merge() {
   const section = document.querySelector('#fullbody')
   section.style.height = `184vh`

   const description = document.querySelector('#description')
   description.style.display = 'flex'

   const code = document.querySelector('.language-java')
   // console.log(code.innerHTML)
   code.innerHTML = `/* C++ program for Merge Sort */
#include <iostream>
using namespace std;

// Merge two subarrays L and R into arr
void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;  // Size of left subarray
    int n2 = right - mid;     // Size of right subarray

    // Create temporary arrays
    int L[n1], R[n2];

    // Copy data to temporary arrays
    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    // Merge the temporary arrays back into arr[left..right]
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of L[], if any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of R[], if any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

// Function to implement MergeSort
void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;

        // Recursively sort the first and second halves
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);

        // Merge the sorted halves
        merge(arr, left, mid, right);
    }
}

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main() {
    int arr[] = {12, 11, 13, 5, 6, 7};
    int n = sizeof(arr) / sizeof(arr[0]);

    cout << "Original array: ";
    printArray(arr, n);

    mergeSort(arr, 0, n - 1);

    cout << "Sorted array: ";
    printArray(arr, n);

    return 0;
}



`
   const time = document.querySelector('#time')
   time.innerHTML = `Time Complexity: O(N log(N)),  Sorting arrays on different machines. 
Merge Sort is a recursive algorithm and time complexity can be expressed as following recurrence relation. 

T(n) = 2T(n/2) + θ(n)
`

   const space = document.querySelector('#space')
   space.innerHTML = `Auxiliary Space: O(n), In merge sort all elements are copied into an auxiliary array. 
So N auxiliary space is required for merge sort.`


}









//Divide

async function MergeSort(element, si, ei) {
   if (si >= ei) {
      return;

   }
   const middle = si + Math.floor((ei - si) / 2);
   await MergeSort(element, si, middle);
   await MergeSort(element, middle + 1, ei);

   await Merge(element, si, middle, ei);          // si--> starting index and ei --> ending index

}

//Conquer

async function Merge(element, low, mid, high) {


   const a1 = mid - low + 1;
   const a2 = high - mid;
   let left = new Array(a1);
   let right = new Array(a2);

   for (let i = 0; i < a1; i++) {
      await waitforme(delay);
      beep.play();
      element[low + i].style.background = 'red';
      left[i] = element[low + i].style.height;


   }


   for (let i = 0; i < a2; i++) {
      await waitforme(delay);
      beep.play();
      element[mid + 1 + i].style.background = 'yellow';
      right[i] = element[mid + 1 + i].style.height;
   }
   await waitforme(delay);



   let i = 0, j = 0, k = low;
   while (i < a1 && j < a2) {
      beep.play();
      await waitforme(delay);
      if (parseInt(left[i]) <= parseInt(right[j])) {
         if ((a1 + a2) === element.length) {
            element[k].style.background = 'rgb(0,255,0)';
         }

         else {
            element[k].style.background = 'lightgreen';



         }

         element[k].style.height = left[i];

         i++;
         k++;

      }

      else {
         if ((a1 + a2) === element.length) {
            element[k].style.background = 'rgb(0,255,0)';
         }
         else {
            element[k].style.background = 'lightgreen';
         }

         element[k].style.height = right[j];
         j++;
         k++;
      }

   }
   while (i < a1) {
      beep.play();
      await waitforme(delay);
      if ((a1 + a2) === element.length) {
         element[k].style.background = 'rgb(0,255,0)';
      }
      else {
         element[k].style.background = 'lightgreen';

      }
      element[k].style.height = left[i];
      i++;
      k++;
   }

   while (j < a2) {
      beep.play();
      await waitforme(delay);
      if ((a1 + a2) === element.length) {
         element[k].style.background = 'rgb(0,255,0)';
      }
      else {
         element[k].style.background = 'lightgreen';

      }

      element[k].style.height = right[j];
      j++;
      k++;
   }

}
