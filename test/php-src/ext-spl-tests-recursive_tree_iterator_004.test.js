// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/recursive_tree_iterator_004.phpt
  it("SPL: RecursiveTreeIterator methods", function () {
    expect(parser.parseCode("<?php\n$ary = array(\n    0 => array(\n        \"a\",\n        1,\n    ),\n    \"a\" => array(\n        2,\n        \"b\",\n        3 => array(\n            4,\n            \"c\",\n        ),\n        \"3\" => array(\n            4,\n            \"c\",\n        ),\n    ),\n);\n$it = new RecursiveTreeIterator(new RecursiveArrayIterator($ary));\nforeach($it as $k => $v) {\n    echo '[' . $it->key() . '] => ' . $it->getPrefix() . $it->getEntry() . $it->getPostfix() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
