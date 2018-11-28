const greeting = "hello from javascript";

console.log(greeting);

document.getElementsByTagName('button')[0].addEventListener('click', () => {
  console.log('OMG CLICKED!!');
  document.getElementsByTagName('h1')[0].innerText = greeting;
})
