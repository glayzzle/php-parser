// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/ArrayObject_unserialize_empty_string.phpt
  it("ArrayObject: test that you can unserialize a empty string", function () {
    expect(parser.parseCode("<?php\n$a = new ArrayObject(array());\n$a->unserialize(\"\");\n?>\nDone")).toMatchSnapshot();
  });
});
