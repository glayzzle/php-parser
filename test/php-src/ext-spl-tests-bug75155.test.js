// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug75155.phpt
  it("Bug #75155: AppendIterator::append() is broken when appending another AppendIterator", function () {
    expect(parser.parseCode("<?php\n$array_a = new ArrayIterator(array('a', 'b', 'c'));\n$array_b = new ArrayIterator(array('d', 'e', 'f'));\n$iterator = new AppendIterator;\n$iterator->append($array_a);\n$iterator2 = new AppendIterator;\n$iterator2->append($iterator);\n$iterator2->append($array_b);\nforeach ($iterator2 as $current) {\n    echo $current;\n}\n?>")).toMatchSnapshot();
  });
});
