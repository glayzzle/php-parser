// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug42817.phpt
  it("Bug #42817 (clone() on a non-object does not result in a fatal error)", function () {
    expect(parser.parseCode("<?php\n$a = clone(null);\narray_push($a->b, $c);\n?>")).toMatchSnapshot();
  });
});
