// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72215_1.phpt
  it("Bug #72215.1 (Wrong return value if var modified in finally)", function () {
    expect(parser.parseCode("<?php\nfunction &test(&$b) {\n    $a =& $b;\n    try {\n        return $a;\n    } finally {\n        $a = 2;\n    }\n}\n$x = 1;\n$y =& test($x);\nvar_dump($y);\n$x = 3;\nvar_dump($y);\n?>")).toMatchSnapshot();
  });
});
