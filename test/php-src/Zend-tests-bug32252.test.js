// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug32252.phpt
  it("Bug #32252 (Segfault when offsetSet throws an Exception (only without debug))", function () {
    expect(parser.parseCode("<?php\nclass Test implements ArrayAccess\n{\n    function offsetExists($offset): bool\n    {\n        echo __METHOD__ . \"($offset)\\n\";\n        return false;\n    }\n    function offsetGet($offset): mixed\n    {\n        echo __METHOD__ . \"($offset)\\n\";\n        return null;\n    }\n    function offsetSet($offset, $value): void\n    {\n        echo __METHOD__ . \"($offset, $value)\\n\";\n        throw new Exception(\"Ooops\");\n    }\n    function offsetUnset($offset): void\n    {\n        echo __METHOD__ . \"($offset)\\n\";\n    }\n}\n$list = new Test();\ntry\n{\n    $list[-1] = 123;\n}\ncatch (Exception $e)\n{\n    echo \"CAUGHT\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
