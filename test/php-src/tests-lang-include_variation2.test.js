// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/include_variation2.phpt
  it("Including a file in the current script directory from an included function", function () {
    expect(parser.parseCode("<?php\nrequire_once 'include_files/function.inc';\ntest();\n?>")).toMatchSnapshot();
  });
});
