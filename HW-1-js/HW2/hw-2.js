/*let name=prompt('Ваше имя');
let age=prompt('Ваш возраст');
let city=prompt('Город проживания');
let phone=prompt('Ваш телефон');
let email=prompt('Ваша электронная почта');
let company=prompt('Место работы');


let date= new Date();
let current_year=Number(date.getFullYear());
let age2=current_year-Number(age);
let age3=String(age2);


document.write('Меня зовут ',name,'. Мне лет ',age,'. Я проживаю в городе ',city,' и работаю в ',company,'. Мои контакты ',phone,', ',email,'. ');
document.write(name,' родилась в ',age3,' году.');
*/

/*let str='123456';
sum1=Number(str[0])+Number(str[1])+Number(str[2]);
sum2=Number(str[3])+Number(str[4])+Number(str[5]);

if (sum1==sum2) {
    alert('Да');
}
else {
    alert('Нет');
}*/

//4
/*let a1=prompt('Введите переменную');

if (a1>0) {
    alert('Верно');
}
else {
    alert('Неверно');
}
*/
//5
/*let a=10, b=2;
let s=a+b,
    r=a-b,
    p=a*b,
    ch=a/b,
    sum1=s+r+p+ch;

if (sum1>1) {
 sum2=sum1*sum1;
}
if (((a>2) && (a<14))||((b>=6)(b<14))) {
    alert('Верно');
}
else {
    alert('Неверно');
}

 */
//7
/*
let n=prompt('Введите число от 0 до 59');
if ((n>=0)&&(n<15)) {
    alert('1');
}
if ((n>=15)&&(n<30)) {
    alert('2');
}
if ((n>=30)&&(n<45)) {
    alert('3');
}
if ((n>=45)&&(n<=59)) {
    alert('4');
}

//8
let day=prompt('Какое сегодня число?');
if ((day>=1)&&(day<10)) {
    alert('1');
}
if ((day>=10)&&(day<20)) {
    alert('2');
}
if ((day>=20)&&(day<=31)) {
    alert('3');
}

//9
let day1=prompt('Количество дней');
let y1=day1/365,
    m1=day1/31,
    n1=day1/7,
    ch1=day1*24,
    min=day1*24*60,
    s=day1*24*60*60;
if (y1<1) {
    alert('меньше года');
}
if (m1<1) {
    alert('меньше месяца');
}
if (n1<1) {
    alert('меньше недели');
}
*/

//10

let day2=prompt('Введите день года')
let day3=0;

if (day2>=1 && day2<=31) {
    day3=1;
}
if (day2>31 && day2<=59) {
    day3=2;
}
if (day2>59 && day2<=90) {
    day3=3;
}
if (day2>90 && day2<=120) {
    day3=4;
}
if (day2>120 && day2<=151) {
    day3=5;
}
if (day2>151 && day2<=181) {
    day3=6;
}
if (day2>181 && day2<=212) {
    day3=7;
}
if (day2>212 && day2<=243) {
    day3=8;
}
if (day2>243 && day2<=273) {
    day3=9;
}
if (day2>273 && day2<=304) {
    day3=10;
}
if (day2>304 && day2<=334) {
    day3=11;
}
if (day2>334 && day2<=365) {
    day3=12;
}

   switch (day3) {
       case 1:
           alert('Январь. Зима.');
           break;
       case 2:
           alert('Февраль. Зима.');
           break;
       case 3:
           alert('Март. Весна.');
           break;
       case 4:
           alert('Апрель. Весна.');
           break;
       case 5:
           alert('Май. Весна.');
           break;
       case 6:
           alert('Июнь. Лето.');
           break;
       case 7:
           alert('Июль. Лето.');
           break;
       case 8:
           alert('Август. Лето.');
           break
       case 9:
           alert('Сентябрь. Осень.');
           break;
       case 10:
           alert('Октябрь. Осень.');
           break;
       case 11:
           alert('Ноябрь. Осень.');
           break;
       case 12:
           alert('Декабрь. Зима.');
           break;
   }








