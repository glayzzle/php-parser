// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug31346.phpt
  it("Bug #31486 (ArrayIterator::next segfaults)", function () {
    expect(parser.parseCode("<?php\n$obj = new stdClass;\n$obj->var1=1;\n$ao = new ArrayObject($obj);\n$i = $ao->getIterator();\n$ao->offsetUnset($i->key());\n$i->next();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
