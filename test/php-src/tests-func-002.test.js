// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/func/002.phpt
  it("Static variables in functions", function () {
    expect(parser.parseCode("<?php\nfunction blah()\n{\n  static $hey=0,$yo=0;\n  echo \"hey=\".$hey++.\", \",$yo--.\"\\n\";\n}\nblah();\nblah();\nblah();\nif (isset($hey) || isset($yo)) {\n  echo \"Local variables became global :(\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
