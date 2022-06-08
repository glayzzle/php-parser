// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug31348.phpt
  it("Bug #31348 (CachingIterator::rewind() leaks)", function () {
    expect(parser.parseCode("<?php\n$a = Array(\"some\",\"blah\");\n$i = new ArrayIterator($a);\n$ci = new CachingIterator($i);\n$ci->rewind();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
