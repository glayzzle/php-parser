// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/002.phpt
  it("Simple While Loop Test", function () {
    expect(parser.parseCode("<?php\n$a=1;\nwhile ($a<10) {\n    echo $a;\n    $a++;\n}\n?>")).toMatchSnapshot();
  });
});
