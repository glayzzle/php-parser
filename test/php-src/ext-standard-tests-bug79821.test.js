// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/bug79821.phpt
  it("Bug #79821 (array grow during var_dump)", function () {
    expect(parser.parseCode("<?php\nforeach (['var_dump', 'debug_zval_dump', 'var_export'] as $output) {\n    $foo = $bar = [];\n    for ($i = 0; $i < 3; $i++) {\n        $foo = [$foo, [&$bar]];\n    }\n    ob_start(function (string $buffer) use (&$bar) {\n        $bar[][] = null;\n        return '';\n    }, 64);\n    $output($foo[0]);\n    ob_end_clean();\n}\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
