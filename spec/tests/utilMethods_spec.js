var fs = require('fs')
var utilMethods = fs.readFileSync('utilMethods.js','utf-8');

describe("TEST", function() {
  it("TEST", function() {
    console.log(utilMethods);
  });
});
