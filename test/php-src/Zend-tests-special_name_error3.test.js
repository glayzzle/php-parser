// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/special_name_error3.phpt
  it("Cannot use special class name as trait name", function () {
    expect(parser.parseCode("<?php\ntrait self {}\n?>")).toMatchSnapshot();
  });
});
