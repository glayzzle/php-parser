// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/hrtime/hrtime.phpt
  it("Test hrtime() aligns with microtime()", function () {
    expect(parser.parseCode("<?php\n$m0 = microtime(true);\n$h0 = hrtime(true);\nfor ($i = 0; $i < 1024*1024; $i++);\n$h1 = hrtime(true);\n$m1 = microtime(true);\n$d0 = ($m1 - $m0)*1000000000.0;\n$d1 = $h1 - $h0;\n/* Relative uncertainty. */\n$d = abs($d0 - $d1)/$d1;\nif ($d > 0.05) {\n    print \"FAIL, $d\";\n} else {\n    print \"OK, $d\";\n}\n?>")).toMatchSnapshot();
  });
});
