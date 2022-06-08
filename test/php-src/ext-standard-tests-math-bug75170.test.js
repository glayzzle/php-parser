// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/bug75170.phpt
  it("Bug #75170: mt_rand() bias on 64-bit machines", function () {
    expect(parser.parseCode("<?php\n// PHP pre-7.1.0 modulo bias\nmt_srand(1234567890);\n$total = 10000;\n$max = 0x66666666;\n$halves[0] = $halves[1] = 0;\nfor ($i = 0; $i < $total; $i++) {\n    $halves[(mt_rand(0, $max - 1) >> 1) & 1]++;\n}\nprintf(\"%.1f%% vs. %.1f%%\\n\", 100. * $halves[0] / $total, 100. * $halves[1] / $total);\n// PHP 7.1.0 to 7.2.0beta2 modulo bias bug found during work\n// on http://www.openwall.com/php_mt_seed/\nmt_srand(1234567890);\n$total = 10000;\n$max = 0x66666666;\n$halves[0] = $halves[1] = 0;\nfor ($i = 0; $i < $total; $i++) {\n    $halves[(int) (mt_rand(0, $max - 1) / ($max / 2))]++;\n}\nprintf(\"%.1f%% vs. %.1f%%\\n\", 100. * $halves[0] / $total, 100. * $halves[1] / $total);\n?>")).toMatchSnapshot();
  });
});
