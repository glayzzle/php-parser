// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/013.phpt
  it("Testing eval function", function () {
    expect(parser.parseCode("<?php\nerror_reporting(0);\n$a=\"echo \\\"Hello\\\";\";\neval($a);\n?>")).toMatchSnapshot();
  });
});
