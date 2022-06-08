// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug68175.phpt
  it("Bug #68175 (RegexIterator pregFlags are NULL instead of 0)", function () {
    expect(parser.parseCode("<?php\n$arr = new ArrayIterator(array());\n$regex = new RegexIterator($arr, '/^test/');\nvar_dump(\n    $regex->getMode(),\n    $regex->getFlags(),\n    $regex->getPregFlags()\n);\n?>")).toMatchSnapshot();
  });
});
