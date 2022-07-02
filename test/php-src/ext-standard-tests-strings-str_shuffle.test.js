// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/str_shuffle.phpt
  it("Testing str_shuffle.", function () {
    expect(parser.parseCode("<?php\n$s = '123';\nvar_dump(str_shuffle($s));\nvar_dump($s);\n?>")).toMatchSnapshot();
  });
});
