// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/__call_002.phpt
  it("ZE2 __call() signature check", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    function __call() {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
