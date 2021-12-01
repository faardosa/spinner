const spin = ["\r|", "\r/", "\r-", "\r\\", "\r|", "\r/", "\r-", "\r\\", "\r|", "\r/", "\r-", "\r\\"]
let delay = 0;

for (let i of spin) {
  delay ++;
  setTimeout(() => {
    process.stdout.write(i);
  }, 200 * delay);
}