# Bubble-Sort
The Bubble Sort algorithm sorts a sequence of integers by comparing couples of adjacent elements starting from the beginning of the sequence. If the first element is greater than the second one, it swaps them. Then, it proceeds with the following couple. When the last element of the sequence is reached, it starts a new cycle from the beginning of the sequence, and repeats the process until the elements are sorted. The algorithm stops after one cycle completes with no swaps.

## Objective: 
Fulfill the user stories below and get all the tests to pass to complete the lab.

## User Stories:

1. You should have a function named generateElement that returns a random integer between 1 and 100, inclusive.
2. You should have a function named generateArray that uses the generateElement function to return an array containing five random integers.
3. You should have a function named generateContainer that creates and returns an empty div element.
4. You should have a function named fillArrContainer that takes an HTML element as the first argument and an array as the second argument.
5. The fillArrContainer should take an element as its first parameter and an array of integers as its second parameter, then populate the element with five span elements, with each span showing one of the integers from the array.
6. You should have a function named isOrdered that takes two integers and returns a boolean indicating if the first integer is less than or equal to the second.
7. You should have a function named swapElements that takes an array of integers and a numeric index.
8. The swapElements function should modify the array in place by swapping the element at the passed index and the following element if isOrdered returns false.
9. You should have a function named highlightCurrentEls that takes an HTML element and a numeric index.
10. The highlightCurrentEls function should set the border of the given element's child at the given index, and the child immediately after the index, to have a dashed style, a red color, and a width of your choice.
11. When you click #generate-btn you should use the fillArrContainer function to fill #starting-array with five span elements, each with a random number as its text. If present, other elements should be removed from #array-container.
12. You should implement the Bubble Sort algorithm so that after you click #sort-btn, #array-container contains a div element for each of the steps required by the Bubble Sort algorithm to sort the starting array, including the div representing the starting array and a div representing the sorted array. The functions you have created so far can be useful here.
13. Each div should contain five span elements, representing the array in its current state of being sorted.
14. After you click #sort-btn, #starting-array should represent the starting step with the initial array and the first two integers highlighted.
15. For each sorting step, you should use highlightCurrentEls to highlight the two numbers that are being compared, and swap them in the next step by using swapElements.
