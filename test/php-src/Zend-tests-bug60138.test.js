// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60138.phpt
  it("Bug #60138 (GC crash with referenced array in RecursiveArrayIterator)", function () {
    expect(parser.parseCode("<?php\n$tree = array(array(\"f\"));\n$category =& $tree[0];\n$iterator = new RecursiveIteratorIterator(\n    new RecursiveArrayIterator($tree),\n    RecursiveIteratorIterator::SELF_FIRST\n);\nforeach($iterator as $file);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
