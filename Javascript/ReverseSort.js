const arr = new Array(30,10,40,50,70,99,183,567);
console.log("Array before sorting : ");
console.log(arr);
let len = arr.length;
for (let i = 0; i < len - 1; i++) 
{
    for (let j = 0; j < len - 1 - i; j++) 
    {
      if (arr[j] < arr[j + 1]) 
      {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
}
console.log("Array after sorting : ");
console.log(arr);
