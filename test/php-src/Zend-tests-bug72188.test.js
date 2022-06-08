// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72188.phpt
  it("Bug #72188 (Nested try/finally blocks losing return value)", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    try {\n        return 5;\n    } finally {\n        try {\n            echo 1;\n        } finally {\n            echo 2;\n        }\n    }\n}\n$a = test();\nif($a !== 5) {\n    echo \"FAILED: expected 5, received \", var_export($a), PHP_EOL;\n} else {\n    echo \"Passed\", PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
