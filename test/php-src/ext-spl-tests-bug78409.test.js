// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug78409.phpt
  it("Bug #78409: Segfault when creating instance of ArrayIterator without constructor", function () {
    expect(parser.parseCode("<?php\n$a = new ArrayObject;\n$u = [\n    0,\n    [],\n    [],\n];\n$a->__unserialize($u);\nvar_dump($u);\n?>")).toMatchSnapshot();
  });
});
