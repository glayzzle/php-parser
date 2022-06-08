// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/skeleton/tests/002.phpt
  it("test1() Basic test", function () {
    expect(parser.parseCode("<?php\n$ret = test1();\nvar_dump($ret);\n?>")).toMatchSnapshot();
  });
});
