// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/RegexIterator_with_reference_replacement.phpt
  it("RegexIterator with $replacement being a reference", function () {
    expect(parser.parseCode("<?php\n$a = new ArrayIterator(array('test1', 'test2', 'test3'));\n$i = new RegexIterator($a, '/^(test)(\\d+)/', RegexIterator::REPLACE);\n$r = '$2:$1';\n$i->replacement =& $r;\nvar_dump(iterator_to_array($i));\n?>")).toMatchSnapshot();
  });
});
