const fs = require("fs");

fs.writeFile("example.txt", "Hello, World! no ma G", (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("File written successfully");
});
