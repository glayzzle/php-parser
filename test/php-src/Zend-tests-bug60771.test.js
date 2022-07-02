// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60771.phpt
  it("test of larger than 8kb text file being parsed by require statement", function () {
    expect(parser.parseCode("<?php\n file_put_contents('test.php',str_repeat('passed, ',1024));\n require('./test.php');\n unlink('test.php');\n?>")).toMatchSnapshot();
  });
});
