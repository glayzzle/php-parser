// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug75426.phpt
  it("Bug #75426: \"Cannot use empty array elements\" reports wrong position", function () {
    expect(parser.parseCode("<?php\n$a = [\n    1,\n    2,\n    3,\n    ,\n    5,\n    6,\n];\n?>")).toMatchSnapshot();
  });
});
