// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/011.phpt
  it("Testing $argc and $argv handling (GET)", function () {
    expect(parser.parseCode("<?php\n$argc = $_SERVER['argc'];\n$argv = $_SERVER['argv'];\nfor ($i=0; $i<$argc; $i++) {\n    echo \"$i: \".$argv[$i].\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
