// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/bug70228_8.phpt
  it("Bug #70228 (memleak if return in finally block)", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $array = [1, 2, $n = 3];\n    foreach ($array as $value) {\n        var_dump($value);\n        try {\n            try {\n                switch (str_repeat(\"b\", 2)) {\n                    case \"bb\":\n                        return str_repeat(\"a\", 2);\n                }\n            } finally {\n                throw new Exception;\n            }\n        } catch (Exception $e) { }\n    }\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
