// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/gh8461-006.phpt
  it("Bug GH-8461 006 (JIT does not account for function re-compile)", function () {
    expect(parser.parseCode("<?php\nnamespace {\n    $x = 0;\n    function test() {\n        global $x;\n        $x += 1;\n    }\n}\nnamespace test {\n    if (!isset(opcache_get_status()['scripts'][__DIR__ . '/gh8461-006.inc'])) {\n        $initialRequest = true;\n        require __DIR__ . '/gh8461-006.inc';\n    } else {\n        $initialRequest = false;\n        $y = 0;\n        function test() {\n            global $y;\n            $y += 1;\n        }\n    }\n    for ($i = 0; $i < 10; $i++) {\n        test();\n    }\n    var_dump($initialRequest ? $x : $y);\n    print \"OK\";\n}")).toMatchSnapshot();
  });
});
