// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/recursive_tree_iterator_005.phpt
  it("SPL: RecursiveTreeIterator and binary vs unicode (PHP 6.0+)", function () {
    expect(parser.parseCode("<?php\n$ary = array(\n    0 => array(\n        (binary) \"binary\",\n        \"abc2\",\n        1,\n    ),\n    (binary) \"binary\" => array(\n        2,\n        \"b\",\n        3 => array(\n            4,\n            \"c\",\n        ),\n        \"4abc\" => array(\n            4,\n            \"c\",\n        ),\n    ),\n);\n$it = new RecursiveTreeIterator(new RecursiveArrayIterator($ary), 0);\nforeach($it as $k => $v) {\n    var_dump($v);\n}\necho \"\\n----------------\\n\\n\";\nforeach($it as $k => $v) {\n    var_dump($k);\n}\necho \"\\n----------------\\n\\n\";\necho \"key, getEntry, current:\\n\";\nforeach($it as $k => $v) {\n    var_dump($it->key(), $it->getEntry(), $it->current());\n}\n?>")).toMatchSnapshot();
  });
});
