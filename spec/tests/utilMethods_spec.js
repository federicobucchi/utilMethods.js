var fs = require('fs')
var utilMethods = fs.readFileSync('utilMethods.js','utf-8') // depends on the file encoding

describe("TEST", function() {
  it("TEST", function() {
    console.log(utilMethods);
  });
});
