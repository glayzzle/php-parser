// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug74840.phpt
  it("Bug #74840: Opcache overwrites argument of GENERATOR_RETURN within finally", function () {
    expect(parser.parseCode("<?php\n$g = (function($a) {\n    try {\n        return $a + 1;\n    } finally {\n        $b = $a + 2;\n        var_dump($b);\n    }\n    yield; // Generator\n})(1);\n$g->next();\nvar_dump($g->getReturn());\n?>")).toMatchSnapshot();
  });
});
