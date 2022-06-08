// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/__set__get_003.phpt
  it("ZE2 __set() signature check", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    function __set() {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
