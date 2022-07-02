// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug42818.phpt
  it("Bug #42818 ($foo = clone(array()); leaks memory)", function () {
    expect(parser.parseCode("<?php\n$foo = clone(array());\n?>")).toMatchSnapshot();
  });
});
