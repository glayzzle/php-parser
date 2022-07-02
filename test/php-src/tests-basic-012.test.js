// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/012.phpt
  it("Testing $argc and $argv handling (cli)", function () {
    expect(parser.parseCode("<?php\n$argc = $_SERVER['argc'];\n$argv = $_SERVER['argv'];\nfor ($i=1; $i<$argc; $i++) {\n    echo ($i-1).\": \".$argv[$i].\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
