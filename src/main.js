function main(args:string[]){
  args && Array.isArray(args) && console.log(...args);
}
(function(args){
  main(args);
})(['main','index']);
