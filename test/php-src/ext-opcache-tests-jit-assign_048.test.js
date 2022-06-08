// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_048.phpt
  it("JIT ASSIGN: incorrect type store elimination", function () {
    expect(parser.parseCode("<?php\nfunction test(){\n    $j = 0;\n    for($i=0; $i<10; $i++) {\n        +$b = +$b = unserialize('');\n        $y[] = 4;\n        $a + ~$b = $j++;\n     }\n}\ntest();\n?>\nDONE")).toMatchSnapshot();
  });
});
