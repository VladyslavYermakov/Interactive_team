function showMaxNumber(){
    const a = Number(document.getElementById('num1').value);
    const b = Number(document.getElementById('num2').value);
    const c = Number(document.getElementById('num3').value);
    const result = document.getElementById('threenumbersText');
    

    if(!document.getElementById("num1").value ||
!document.getElementById("num2").value ||
!document.getElementById("num3").value ){
    result.textContent = 'Найбільше число, яке ви ввели - ?';
    return;
}
let max = Math.max(a,b,c)
result.textContent = 'Найбільше число, яке ви ввели - ' + max;
}