// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/add_011.phpt
  it("JIT ADD: 011 overflow handling", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $n = $a = 0;\n    while ($a <= 0) {\n        $a &= $a-- + $a + $u;\n        var_dump($a);\n        if (++$n > 59) die(\"bug\\n\");\n    }\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
