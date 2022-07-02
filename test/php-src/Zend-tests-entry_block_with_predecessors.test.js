// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/entry_block_with_predecessors.phpt
  it("For SSA form the entry block should have no predecessors", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    while (true) {\n        var_dump($a + 1);\n        $a = 1;\n        if (@$i++) {\n            break;\n        }\n    }\n}\nfunction test2() {\n    while (true) {\n        $a = 42;\n        if (@$i++ > 1) {\n            break;\n        }\n        $a = new stdClass;\n    }\n}\ntest();\ntest2();\n?>")).toMatchSnapshot();
  });
});
