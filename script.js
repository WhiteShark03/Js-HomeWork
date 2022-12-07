// 1.1 Введение
// alert('Hello Bakai');

//2.1 Файлы со скриптами
// alert('some text');

//2.2
// alert('Laffon Biff');
// alert('Mana break');
// alert('Some som');

//3.1 Кеширование
// <script src="script.js?v=1"></script>

//4.1 Строгий режим
// ('use strict');
// alert('Barak Obeme');

//5.1 Комментарии в JavaScript
// Погода не очень (однострочный комментарий)
/* Я бы сказал что погода дерьмовая, но боюсь что она обидится(Многострочный комментарий)*/

//6.1 Переменные
// let num = 123;
// alert(num);

//6.2
// let a = 1;
// let b = 2;
// let c = 3;

// let a = 'te', b = 'mir', c = 'lan';

// let a, b, c;
// a = 'peace';
// b = 'kolen';
// c = 'fear';

//6.3
// let a = 10;
// alert(a);
// a = 20;
// alert(a);

//7.1 Математические операции с числами
// let a = 1 + 2 + 3;
// alert(a);

//8.1 Математические операции с переменными
// let a = 10;
// let b = 2;
// alert(a + b);
// alert(a - b);
// alert(a * b);
// alert(a / b);

//8.2
// let c = 10;
// let d = 5;
// let result = c + d;
// alert(result);

//8.3
// let a = 1;
// let b = 2;
// let c = 3;
// alert(a + b + c);

//8.4
// let a = 10;
// let b = 5;
// let c = a - b;
// let d = 7;
// let result = c + d;
// alert(result);

//9.1 Приоритет математических операций
// let a = 5 + 5 * 3;
// alert(a); //20

//9.2
// let a = 5 + 5 * 3 + 3;
// alert(a); //23

//9.3
// let a = 8 / 2 + 2;
// alert(a); //6

//9.4
// let a = 8 + 2 / 2;
// alert(a); //9

//9.5
// let a = (8 / 2) * 2;
// alert(a); //8

//9.6
// let a = (8 * 4) / 2 / 2;
// alert(a); //4

//9.7
// let a = (2 + 3) * (2 + 3);
// alert(a); //25

//9.8
// let a = (2 + 3) * 2 + 3;
// alert(a); //13

//9.9
// let a = 2 * (2 + 4 * (3 + 1));
// alert(a); //36

// 9.10
// let a = 2 * 8 / 4;
// alert(a); //4

//9.11
// let a = (2 * 8) / 4;
// alert(a); //4

// 9.12;
// let a = 2 * (8 / 4);
// alert(a); //4

//10.1 Дроби
// let a = 1.5;
// let b = 0.75;
// alert(a + b);

//11.1 Отриц числа
// let a = -100;
// alert(a);

//11.2
// let a = 55;
// alert(-a);
// let b = -21;
// alert(+b);

//12.1 Остаток от деления
// let a = 13;
// let b = 5;
// alert(a % b);

//13.1 Возведение в степень
// let a = 2 ** 10;
// alert(a);

//13.2
// let a = 3 * 2 ** 3;
// alert(a); //216

//13.3
// let a = (3 * 2) ** 3;
// alert(a); //24

//13.4
// let a = 3 * 2 ** (3 + 1);
// alert(a); //48

//13.5
// let a = 2 ** 3 * 3;
// alert(a); //24

//13.6
// let a = 3 * 2 ** 3 * 3;
// alert(a); //72

//14.1 СТроки
// let a = 'Temirlan ';
// let b = 'Altykeev';
// alert(a +' '+ b);

//15.1 СЛожение строк
// let str = '!!!';
// alert(str);

//15.2
// let a = 'java';
// let b = 'script';
// alert(a + b);

//15.3
// let a = 'hello';
// let b = 'world';
// alert(a + ' ' + b);

//16.1 Длина строки
// let a = 'Sometextforexample';
// alert(a.length);

//17.1 Шаблонные строки
// let str1 = 'xxx';
// let str2 = 'yyy';
// let txt = `aaa  ${str1}  bbb  ${str2}  ccc`;
// alert(txt);

//17.2
// let str = `'a
// b'` 'c';

//18.1 Спец значения
// let a;
// alert(a);

//18.2
// let a = null;
// alert(a);

//18.3
// let a = true;
// alert(a);

//18.4
// let a = false;
// alert(a);

//18.5
// let a = 'str1';
// let b = ' str2';
// alert(a * b);

//18.6
// alert(10 / 0);

//18.7
// alert(-10 / 0);

//19.1 Работа с консолью
// let a = 'clown';
// console.log(a);

//19.2
// let a = 'im';
// let b = 'a';
// let c = 'clown';
// console.log(a + ' ' + b + ' ' + c);

//19.3
// let a;
// console.log(123);
// console.log('123');
// console.log(-123 / 0);
// console.log(a);
// console.log(a * 'str');

//19.4
// let a=var;
// console.log(a(var));

//20.1 Константы ...

//21.1 Автоматическое преобразование типов данных
// let a = '5' + '2';
// alert(a); //52

//21.2
// let a = '5' + 2;
// alert(a); //52

//21.3
// let a = 5 + '2';
// alert(a); //52

//21.4
// let a = 5 + 2;
// alert(a); //7

//21.5
// let a = '5' * '2';
// alert(a); //10

//21.6
// let a = '5' - '2';
// alert(a); //3

//21.7
// let a = '5' / '2';
// alert(a); //2.5

//21.8
// let a = '5' % '2';
// alert(a); //1

//21.9
// let a = '5s' * '2';
// alert(a); //NaN

//21.10
// let a = '5s' + '2';
// alert(a); //NaN

//21.11
// let a = -'5' + -'2';
// alert(a); //-7

//21.12
// let a = '5' * 1 + '2' * 1;
// alert(a); //7

//21.13
// let a = '5' * '1' + '2' * '1';
// alert(a); //7

//21.14
// let a = '' + 3 + 1;
// alert(a); //31

//22.1 Преобразование к числу
// let a = '10';
// let b = '20';
// alert(Number(a) + Number(b));

//22.2
// alert(Number('2') + Number('3')); //5

//22.3
// alert(2 + Number('3')); //5

//22.4
// alert('2' + Number('3')); //23

//22.5
// let a = +'2';
// let b = +'3';
// alert(a + b); // 5

//23.1 ВЫделение чисел в JS
// let a = parseInt('5px');
// let b = parseInt('6px');
// alert(a + b);

//23.2
// let a = parseFloat('5.5px');
// let b = parseFloat('6.25px');
// alert(a + b);

//23.3
// let a = parseFloat('5.5px');
// let b = parseFloat('6.25px');
// alert(a + b + 'px');

//24.1 Преобразование к строке
// let a = 777;
// let b = 666;
// alert(String(a) + String(b));

//24.2
// let num = 031423451313513;
// alert(String(num).length);

//24.3
// let num1 = 21516;
// let num2 = 214;
// alert(String(num1).length + String(num2).length);

//25.1 Преобразование логического типа
// alert(true + 3); //4

//25.2
// alert(true + true); //2

//25.3
// alert(true - true); //0

//25.4
// alert(true + false); //1

//25.5
// alert('1' + true); //1true

//25.6
// alert(String(true) + 1); //1true

//25.7
// alert(String(true) + Number(true)); //true1

//26.1 Преобразование к логическому типу
// let test = Boolean(3);
// alert(test); //true

//26.2
// let test = Boolean(0);
// alert(test); //false

//26.3
// let test = Boolean(-1);
// alert(test); //true

//26.4
// let test = Boolean(-0);
// alert(test); //false

//26.5
// let test = Boolean(+0);
// alert(test); //false

//26.6
// let test = Boolean('abc');
// alert(test); //true

//26.7
// let test = Boolean('');
// alert(test); //false

//26.8
// let test = Boolean('0');
// alert(test); //true

//26.9
// let test = Boolean(true);
// alert(test); // true

//26.10
// let test = Boolean(false);
// alert(test); //false

//26.11
// let test = Boolean('true');
// alert(test); //true

//26.12
// let test = Boolean('false');
// alert(test); //true

// 26.13
// let test = Boolean(null);
// alert(test); //false

// 26.14
// let test = Boolean('null');
// alert(test); //true

//26.15
// let test = Boolean(undefined);
// alert(test); //false

// 26.16
// let test = Boolean('undefined');
// alert(test); //true

//26.17
// let test = Boolean(NaN);
// alert(test); //false

//26.18
// let test = Boolean('NaN');
// alert(test); //true

// 26.19
// let test = Boolean(3 * 'abc');
// alert(test); //true

// 26.20
// let test = Boolean(Infinity);
// alert(test); //true

//26.21
// let test = Boolean(1 / 0);
// alert(test); //false

//27.1 Получение символов строки
// let str = 'abcde';
// alert(str[0]);
// alert(str[2]);
// alert(str[4]);

//27.2
// let str1 = 'abcde';
// let str2 = str1[4] + str1[3] + str1[2] + str1[1] + str1[0];
// alert(str2);

//27.3
// let str = 'abcde';
// let num = 2;
// alert(str[num]);

//28.1 ПОследний симов строки
// let str = 'temirlan';
// alert(str[str.length - 1]);

//28.2
// let str = 'temirlan';
// alert(str[str.length - 2]);

//28.3
// let str = 'temirlan';
// alert(str[str.length - 3]);

//29.1 Строки с цифрами
// let str = '12345';
// alert(
// 	Number(str[0]) +
// 		Number(str[1]) +
// 		Number(str[2]) +
// 		Number(str[3]) +
// 		Number(str[4])
// );

//29.2
// let num = String(12345);
// alert(
// 	Number(num[0]) +
// 		Number(num[1]) +
// 		Number(num[2]) +
// 		Number(num[3]) +
// 		Number(num[4])
// );

//29.3
// let num = String(12345);
// alert(num[0] * num[1] * num[2] * num[3] * num[4]);

//29.4
// let num = String(12345);
// let revers = num[4] + num[3] + num[2] + num[1] + num[0];
// alert(revers);

//30.1 Сокращенные операции
// let num = 1;
// num = num + 1;
// num = num + 1;
// alert(num); //3

//30.2
// let num = 1;
// num = num + 2;
// num = num + 3;
// alert(num); //6

//30.3
// let num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num);

//31.1 Операции инкремента и декремента
// let num = 10;
// num++;
// num++;
// num--;
// alert(num);

//31.2
// let num = 3;
// alert(++num); //4

//31.3
// let num = 3;
// alert(num++); //3

//31.4
// let num = 3;
// alert(--num); //2

//31.5
// let num = 3;
// alert(num--); //3

//31.6
// let num1 = 3;
// let num2 = ++num1;
// alert(num1); //3
// alert(num2); //4

//31.7
// let num1 = 3;
// let num2 = num1++;
// alert(num1); //3
// alert(num2); //4

//31.8
// let num1 = 3;
// let num2 = --num1;
// alert(num1); //2
// alert(num2); //2

// 31.9
// let num1 = 3;
// let num2 = num1--;
// alert(num1); //2
// alert(num2); //3

//31.10
// let num1 = 3;
// num1++;
// let num2 = num1--;
// alert(num1++); //2
// alert(--num2); //3

//32.1 Неточные вычисления
// alert(0.1 * 0.2); //0.020000000000000004

//32.2
// alert(0.3 - 0.1); //0.19999999999999998

//33.1 Функция prompt
// let age = prompt('Введите ваш возраст: ');
// alert('Ваш позраст: ' + age);

//33.2
// let num1 = prompt('Введите первое число');
// let num2 = prompt('Введите второе число');
// alert(Number(num1) + Number(num2));

//33.3
// let square = prompt('Сторона квадрата: ');
// alert(square ** 2);

//33.4
// let rectangle1 = prompt('Первая сторона прямоугольника: ');
// let rectangle2 = prompt('Вторая сторона прямоугольника: ');
// alert((Number(rectangle1) + Number(rectangle2)) * 2);

//34.1 Вывод текста в документ
// document.write('Some text');

//34.2
// document.write('some <em> coursive  text');

//34.3
// let str = 'text';
// document.write('<em>' + str + '</em>');

//34.4
// document.write('<br>1');
// document.write('<br>2');
// document.write('<br>3');
// document.write('<br>4');
// document.write('<br>5');

//35.1 ПОиск ошибок
// let num1 = 1;
// let num2 = 2;
// console.log('сумма: ' + Number(num1) + Number(num2)); //Не решил

//35.2
// let a = 1;
// let b = 2;
// let c = a + b;
// console.log(c);

//35.3
// let num = '123';
// let sum = +num[0] + +num[1] + +num[2];
// console.log(sum);

//35.4
// let num = String(123);
// console.log(num[0]);

//35.5
// let a = 0;
// console.log(++a);

//35.6
// let num = String(123);
// console.log(num.length);

//35.7
// let a = 24 * 60 * 60;
// console.log(a);

//35.8
// let num = 123;
// let str = String(num);
// console.log(str.length);

//35.9
// let num = 123;
// let str = String(num);
// console.log(str[str.length - 1]);

//35.10
// let num = 123;
// let str = String(num);
// console.log(str.length);

//35.11
// let num = 123;
// let str = String(num);
// console.log(str[str.length - 1]);

//35.12
// 1 Вариант
// let a = '123';
// let b = '456';
// let s = +Number(a) + Number(b);
// console.log(s);

// 2 Вариант
// let a = '123';
// let b = '456';
// let s = +Number(a) + +String(b);
// console.log(s);

//35.13 Не решено
// let aaa = 1;
// let bbb = 2;
// let ccc = 3;

// console.log(Number(aaa) + Number(bbb) + Number(ссс));

//36.1 Практика на операции
// alert(60 * 60 * 24);

//36.2
// alert(60 * 60 * 24 * 30);

//36.3
// alert(60 * 60 * 24 * 365);

//36.4
// alert(60 * 24);

//36.5
// alert(60 * 24 * 365);

//36.6
// alert(1024 * 1024);

//36.7
// alert(1024 * 1024 * 1024);

//36.8
// alert(1024 * 1024 * 1024 * 10);

//36.9
// alert(1024 * 1024 * 1024 * 1024);

//36.10
// alert(1024 * 1024 * 1024);

//37.1 Практика на формулы
// let r = 20;
// let s = 3.14 * (r * 2);
// alert(s);

//37.2
// let a = 45;
// let s = a * 2;
// alert(s);

//37.3
// let a = 75;
// let b = 20;
// let s = a * b;
// alert(s);

//37.4
// let a = 12;
// let b = 7;
// let p = 2 * (a + b);
// alert(p);

//37.5
// let tc = 360;
// let faren = (tc * 9) / 5 + 32;
// alert(faren);

//37.6
// let tf = 780;
// let celc = (tf - 32) * (5 / 9);
// alert(celc);
