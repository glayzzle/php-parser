// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug36071.phpt
  it("Bug #36071 (Engine Crash related with 'clone')", function () {
    expect(parser.parseCode("<?php\n$a = clone 0;\n$a[0]->b = 0;\n?>")).toMatchSnapshot();
  });
});
