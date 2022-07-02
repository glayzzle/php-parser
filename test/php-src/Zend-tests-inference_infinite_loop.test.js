// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/inference_infinite_loop.phpt
  it("Type inference should not result in infinite loop", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $b = false;\n    do {\n        $a = $a + PHP_INT_MAX + 2;\n        $a = 0;\n    } while ($b);\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
