// console.log(process.argv);
var arglist = process.argv.slice(2, process.argv.length);
// console.log(arglist);
var argnums = arglist.map(function(item) {return Number(item);});
// console.log(argnums);
var sumargs = 0;
for (var i = 0; i < arglist.length; i++) {
	sumargs += argnums[i];
}
console.log(sumargs);

//Official solution:
/*var result = 0;

for (var i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i]);

console.log(result);*/