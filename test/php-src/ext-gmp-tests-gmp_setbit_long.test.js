// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_setbit_long.phpt
  it("gmp_setbit() with large index", function () {
    expect(parser.parseCode("<?php\n$n = gmp_init(\"227200\");\nfor($a = 1<<30; $a > 0 && $a < 0x8000000000; $a <<= 2) {\n    $i = $a - 1;\n    printf(\"%X\\n\", $i);\n    try {\n        gmp_setbit($n, $i, 1);\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
