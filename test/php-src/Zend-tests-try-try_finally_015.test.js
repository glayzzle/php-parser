// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_015.phpt
  it("Ignoring return inside loop using finally", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $array = [1, 2, $n = 3];\n    foreach ($array as $value) {\n        var_dump($value);\n        try {\n            try {\n                foreach ($array as $_) {\n                    return;\n                }\n            } finally {\n                throw new Exception;\n            }\n        } catch (Exception $e) { }\n    }\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
