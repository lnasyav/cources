//1
for (let i=1; i<=50; i++) {
    console.log(i)
}

for (let i=35; i>=8; i=i-1) {
    console.log(i)
}
//2
let i=89
while (i>11) {
    i=i-1
    console.log(i)
}



//3
let s=0;
for (let i=1; i<=100; i++) {
    s+=i;
}
console.log(s);


//4
let i=0;
let s=0;
while (i<=4) {
    i++;
    s+=i;
    console.log(s);
}

//5
let i=6;
while (i<=54) {
    i=i+2;
    console.log(i);
}

for (let i=8; i<=56; i=i+2) {
    console.log(i);
}

//6
for (let i=2; i<11; i++){
    for (let j=2; j<11; j++){
        console.log(i+'*'+j+'='+i*j);
    }
}

//7
let num=0;
let i=1000;
let j=2;

do {
    i=i/j;
    num++;
}while (i>50)

console.log('Результат деления:'+i);
console.log('Кол-во итераций:'+num);

//8
let i = 0, s = 0;
let num=0;

while (true) {
    num = +prompt('Введите число ');
    if ((num!= 0) || (num!= '')) {
        if (Number.isNaN(num)) {
            alert('Введите ЧИСЛО');
        } else {
            i++;
            s = s + num;
        };
    } else
        {
            break
        };
    };
 console.log('Чисел введено: ' + i )
 console.log('Сумма чисел: ' + s)
 console.log('Среднее арифметическое: ' + (s / i));

 //9
let strn="4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
str=strn.split(' ');
let max=0, min=str[0];
 for (let i=0;i<str.length; i++) {
     if (max < str[i]) {
         max = str[i];
     }
     if (min > str[i]) {
         min = str[i];
     }
 }
 console.log(max);
 console.log(min);

 //10
let n1="123";
let sum=0;
let r=0;

n=n1.split('');
console.log(n[0],n[1],n[2]);

for (let i=0; i<n.length; i++) {
    r++;
    sum+=+n[i];
}
ob=n.reverse();
obr=ob.join('');
console.log(r);
console.log(sum);
console.log(obr);




