// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/new_args_without_ctor.phpt
  it("Argument of new on class without constructor are evaluated", function () {
    expect(parser.parseCode("<?php\nnew stdClass(print 'a', print 'b');\n?>")).toMatchSnapshot();
  });
});
