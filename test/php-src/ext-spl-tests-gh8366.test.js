// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/gh8366.phpt
  it("Bug GH-8366 (ArrayIterator may leak when calling __construct())", function () {
    expect(parser.parseCode("<?php\n$it = new \\ArrayIterator();\nforeach ($it as $elt) {}\n$it->__construct([]);\n?>")).toMatchSnapshot();
  });
});
