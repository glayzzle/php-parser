// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/recursive_tree_iterator_setpostfix.phpt
  it("SPL: RecursiveTreeIterator::setPostfix()", function () {
    expect(parser.parseCode("<?php\n$arr = array(\n    0 => array(\n        \"a\",\n        1,\n    ),\n    \"a\" => array(\n        2,\n        \"b\",\n        3 => array(\n            4,\n            \"c\",\n        ),\n        \"3\" => array(\n            4,\n            \"c\",\n        ),\n    ),\n);\n$it = new RecursiveArrayIterator($arr);\n$it = new RecursiveTreeIterator($it);\necho \"----\\n\";\necho $it->getPostfix();\necho \"\\n\\n\";\necho \"----\\n\";\n$it->setPostfix(\"POSTFIX\");\necho $it->getPostfix();\necho \"\\n\\n\";\necho \"----\\n\";\nforeach($it as $k => $v) {\n    echo \"[$k] => $v\\n\";\n}\necho \"----\\n\";\n$it->setPostfix(\"\");\necho $it->getPostfix();\necho \"\\n\\n\";\necho \"----\\n\";\nforeach($it as $k => $v) {\n    echo \"[$k] => $v\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
