// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_014.phpt
  it("Break 2 in try and return in finally inside nested loop", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $array = [1, 2, $n = 3];\n    foreach ($array as $value) {\n        foreach ($array as $value) {\n            try {\n                echo \"try\\n\";\n                break 2;\n            } finally {\n                echo \"finally\\n\";\n                return;\n            }\n        }\n    }\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
