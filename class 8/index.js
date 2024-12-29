
let heading1 = document.getElementsByTagName('h1');
heading1[0].style.color = 'red';
console.log(heading1);

for (let i = 0; i < heading1.length; i++) {
    heading1[i].style.color = 'blue';    
}
