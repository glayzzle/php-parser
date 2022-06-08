// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/flexible-heredoc-complex-test4.phpt
  it("Flexible heredoc syntax complex test 4: interpolated variable with\nthe same delimiter name as the heredoc", function () {
    expect(parser.parseCode("<?php\n{\n    $FOO = \"FOO\";\n    define(\"FOO\", \"FOO\");\n    $b = <<<FOO\n    Test\n    ${\n        FOO\n    }\n    FOO;\n    var_dump($b);\n}\n{\n    $FOO = \"FOO\";\n    $b = <<<FOO\n        Test\n        ${\n        FOO\n        }\n    FOO;\n    var_dump($b);\n}\n?>")).toMatchSnapshot();
  });
});
