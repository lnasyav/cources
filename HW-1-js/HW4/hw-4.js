//1
let arr=[1, 2, 3, 4, 5];
for(i=0;i<arr.length;i++){
    console.log(arr[i])
}

//2
let arr1= [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for(i=0;i<arr1.length;i++){
    if((arr1[i]<-3) && (arr1[i]>-10)){
        console.log(arr1[i])
    }
}

//3
let arr2=[];
let sum=0;
for(let i=23;i<=57;i++){
    arr2.push(i);
  }
console.log(arr2);
for (i=0; i<arr2.length;i++){
    sum+=+arr2[i];
}
console.log(sum);

//4
let arr3=['10', '20', '30', '50', '235', '3000'];
//console.log(arr3)
for (let i=0;i<arr3.length;i++){
    if (((arr3[i][0]==1)||((arr3[i][0])==2)||((arr3[i][0]==5))||((arr3[i]%100)==2))){
      console.log(arr3[i]);
    }
}

//5
let arr4 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

for (let i = 0; i < arr4.length; i++) {
    if (i > 4) {
       document.writeln(arr4[i].bold());
    } else {
        document.writeln(arr4[i]);
    }
}



//6
let arr5=[5, 8, 7];
arr5.push(5);
let n=arr5.length-1;
console.log(arr5);
console.log(arr5[n]);

//7
let arr6=[];
let  i=0;
while (true){
    arr6[i]=prompt('Введите число ');
    if (arr6[i]!=''){
        i++
    } else {
        break
    };
}
console.log(arr6.join(' '));
arr6.sort()
console.log(arr6.join(' '));

//8
let arr7=[12, false, 'Текст', 4, 2, -5, 0];
let obr1=arr7.reverse();
console.log(obr1);


//9
let arr8=[5, 9, 21, , , 9, 78, , , , 6];
let k=0;
console.log(arr8);
for(let i=0;i<arr8.length;i++){
    if (arr8[i]=== undefined){
        k++
    }
}
console.log(k);

//10
let arr9= [48,9,0,4,21,2,1,0,8,84,76,8,0,13,2];
let f=arr9.indexOf(0);
let l=arr9.lastIndexOf(0);
sum=0;
 for(let i=f; i<l;i++){
     sum+=+arr9[i];
 }
 console.log(sum);




