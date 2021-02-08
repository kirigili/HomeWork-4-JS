console.log('Задание №1');
console.log('\n');
let arr = [1,2,3,4,5];
for(i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log('\n');


console.log('Задание №2');
console.log('\n');
arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for(i = 0; i < arr.length; i++){
    if(arr[i] > -10 && arr[i] < -3){
        console.log(arr[i]);
    }
}
let res = arr.filter(item => item > -10 && item < -3)
                .sort((a,b) => a-b);
console.log(res);
console.log('\n');


console.log('Задание №3');
console.log('\n');
arr = [];
for(i = 23; i < 57; i++){
    arr.push(i);
}
console.log(arr);

let result = 0;
for (let i = 0; i < arr.length; i++) {
	result += arr[i];
}
console.log(result);
console.log('\n');


console.log('Задание №4');
console.log('\n');
arr = [10, 20, 30, 50, 235, 3000,];
for (i = 0; i < arr.length; i++) {
        th = arr[i]/1000
        hn = arr[i]/100
        dec = arr[i]/10
        if(th >= 1 && (th < 6 && th > 4 || th < 3 && th > 0)){
                console.log(arr[i])
        }else if(hn >= 1 && (hn < 6 && hn > 4 || hn < 3 && hn > 0)){
                console.log(arr[i])
        }else if(dec >= 1 && (dec < 6 && dec > 4 || dec < 3 && dec > 0)){
                console.log(arr[i])
}
}
console.log('\n');


document.write('Задание №5');
document.write('<br />');
arr = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
for(i = 0; i < arr.length; i++){
    if (arr[i] == 'СБ' || arr[i] == 'ВС'){
        document.write(' ' +arr[i].bold())
    }
    else{
        document.write(' ' +arr[i])
    }
}


console.log('Задание №6');
console.log('\n');
arr = [43, 45, 954, 65, 333, 676];
arr.push(888);
console.log(arr);
console.log('\n');


console.log('Задание №7');
console.log('\n');
arr = [];
let check = true;
while(check){
    let digit = prompt('Введите число');
    if(digit === '') {
        check = false;
    } else if(digit === null || isNaN(digit)){
        check = false;
    } else {
        arr.push(Number(digit));
    }
}
console.log(arr);
console.log('\n');


console.log('Задание №8');
console.log('\n');
arr = [12, false, 'Текст', 4, 2, -5, 0];
arr.reverse();
console.log(arr);
console.log('\n');
arr = [12, false, 'Текст', 4, 2, -5, 0];
i=arr.length - 1;
while(i > 0){
  console.log(arr[i]);
 i--;
}
console.log('\n');


console.log('Задание №9');
console.log('\n');
arr = [5, 9, 21, , , 9, 78, , , , 6];
result = 0;
for(i = 0; i < arr.length; i++){
    if(arr[i] == undefined){
        result += 1;              
    }    
} console.log(result);
console.log('\n');


console.log('Задание №10');
console.log('\n');
function between00(numarray)
        {
            let result = 0, start = false, sum = 0;
            for (let i = 0; i < numarray.length; i++)
            {
                let n = numarray[i];
                if (n == 0 && !start) { start = true; continue; }
                if (n == 0) result = sum;
                else if (start) sum += n;
            }
            return result;
        }
 
let mas = [1,8,0,13,76,8,7,0,22,0,2,3,2];
console.log(between00(mas), );
console.log('\n');


console.log('Задание №11');
console.log('\n');
i = 0,
j = 0;
let max = 15;
    space = "",
    star = "";

while (i < max) {
  space = "";
  star = "";
  for (j = 0; j < max - i; j++) space += " ";
  for (j = 0; j < 2 * i + 1; j++) star += "^";
  console.log(space + star);
  i++;
}