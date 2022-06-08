// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_cachingiterator___toString_basic.phpt
  it("SPL: SplCachingIterator, Test method to convert current element to string", function () {
    expect(parser.parseCode("<?php\n$ai = new ArrayIterator(array(new stdClass(), new stdClass()));\n$ci = new CachingIterator($ai);\nvar_dump(\n$ci->__toString() // if conversion to string is done by echo, for example, an exception is thrown. Invoking __toString explicitly covers different code.\n);\n?>")).toMatchSnapshot();
  });
});
