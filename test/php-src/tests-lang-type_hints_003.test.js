// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/type_hints_003.phpt
  it("ZE2 type", function () {
    expect(parser.parseCode("<?php\nclass T {\n    function f(P $p = 42) {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
