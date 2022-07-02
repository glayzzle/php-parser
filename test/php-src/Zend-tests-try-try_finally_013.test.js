// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_013.phpt
  it("Return in try and finally inside loop", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $array = [1, 2, $n = 3];\n    foreach ($array as $value) {\n        try {\n            echo \"try\\n\";\n            return;\n        } finally {\n            echo \"finally\\n\";\n            return;\n        }\n    }\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
