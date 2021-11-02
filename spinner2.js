let delay = 100;
const characters = "|/-\\|/-\\|";//["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
for (const character of characters) {
  setTimeout(() => {
    process.stdout.write(`\r${character}   `);
  }, delay);
  delay += 200;
}
setTimeout(() => {
  console.log("\n");
}, delay);