// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69955.phpt
  it("Bug #69955 (Segfault when trying to combine [] and assign-op on ArrayAccess object).", function () {
    expect(parser.parseCode("<?php\nclass C10 implements ArrayAccess\n{\n        function offsetExists($offset): bool\n        {\n                echo \"\\nInside \" . __METHOD__ . \"\\n\"; var_dump($offset);\n        }\n        function offsetGet($offset): mixed\n        {\n                echo \"\\nInside \" . __METHOD__ . \"\\n\"; var_dump($offset); return 100;\n        }\n        function offsetSet($offset, $value): void\n        {\n                echo \"\\nInside \" . __METHOD__ . \"\\n\"; var_dump($offset); var_dump($value);\n        }\n        function offsetUnset($offset): void\n        {\n                echo \"\\nInside \" . __METHOD__ . \"\\n\"; var_dump($offset);\n        }\n}\n$c10 = new C10;\nvar_dump($c10[] += 5);\n?>")).toMatchSnapshot();
  });
});
