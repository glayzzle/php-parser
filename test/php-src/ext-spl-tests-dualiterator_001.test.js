// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/dualiterator_001.phpt
  it("SPL: DualIterator", function () {
    expect(parser.parseCode("<?php\nfunction spl_examples_autoload($classname)\n{\n    include(__DIR__ . '/' . strtolower($classname) . '.inc');\n}\nspl_autoload_register('spl_examples_autoload');\nfunction test($a, $b, $identical = false)\n{\n    var_dump(DualIterator::compareIterators(\n                    new RecursiveArrayIterator($a),\n                    new RecursiveArrayIterator($b),\n                    $identical));\n}\ntest(array(1,2,3), array(1,2,3));\ntest(array(1,2,3), array(1,2));\ntest(array(1,array(21,22),3), array(1,array(21,22),3));\ntest(array(1,array(21,22),3), array(1,array(21,22,23),3));\ntest(array(1,array(21,22),3), array(1,array(21,22,3)));\ntest(array(1,array(21,22),3), array(1,array(21),array(22),3));\ntest(array(1,2,3), array(1,\"2\",3), false);\ntest(array(1,2,3), array(1,\"2\",3), true);\ntest(array(1,array(21,22),3), array(1,array(21,\"22\"),3), false);\ntest(array(1,array(21,22),3), array(1,array(21,\"22\"),3), true);\n?>")).toMatchSnapshot();
  });
});
