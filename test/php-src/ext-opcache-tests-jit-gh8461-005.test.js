// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/gh8461-005.phpt
  it("Bug GH-8461 005 (JIT does not account for function re-compile)", function () {
    expect(parser.parseCode("<?php\nif (!isset(opcache_get_status()['scripts'][__DIR__ . '/gh8461-005.inc'])) {\n    $initialRequest = true;\n    require __DIR__ . '/gh8461-005.inc';\n} else {\n    $initialRequest = false;\n    $y = 0;\n    function test() {\n        global $y;\n        $y += 1;\n    }\n}\nfor ($i = 0; $i < 10; $i++) {\n    test();\n}\nvar_dump($initialRequest ? $x : $y);\nprint \"OK\";")).toMatchSnapshot();
  });
});
