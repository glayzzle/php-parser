// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/__set__get_002.phpt
  it("ZE2 __get() signature check", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    function __get($x,$y) {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
