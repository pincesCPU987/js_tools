var console = {};
var divv = document.createElement('div');
divv.innerHTML = 'This is your console.<br>';
document.body.appendChild(divv);
console.log = function(inp){
  divv.innerHTML = divv.innerHTML + 'Log: ' + inp + '<br>';
};
console.warn = function(inp){
  divv.innerHTML = divv.innerHTML + 'Warn: ' + inp + '<br>';
};
console.error = function(inp){
  divv.innerHTML = divv.innerHTML + 'Error:' + inp + '<br>';
};
