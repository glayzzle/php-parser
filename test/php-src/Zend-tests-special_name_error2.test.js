// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/special_name_error2.phpt
  it("Cannot use special class name as alias", function () {
    expect(parser.parseCode("<?php\nuse Foo\\Bar as self;\n?>")).toMatchSnapshot();
  });
});
