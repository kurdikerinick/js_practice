const arg = process.argv;
console.log(arg);
const name = arg[2];
console.log('hello', name);
console.log(process.arch);
console.log(process.cwd);
console.log(process.env);
console.log(process.version)