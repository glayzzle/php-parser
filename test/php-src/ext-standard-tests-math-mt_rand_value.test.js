// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/mt_rand_value.phpt
  it("Test mt_rand() output", function () {
    expect(parser.parseCode("<?php\nmt_srand(12345678, MT_RAND_PHP);\nfor ($i=0; $i<16; $i++) {\n    echo mt_rand().PHP_EOL;\n}\necho PHP_EOL;\n$x = 0;\nfor ($i=0; $i<1024; $i++) {\n    $x ^= mt_rand();\n}\necho $x.PHP_EOL;\necho PHP_EOL;\nmt_srand(12345678 /*, MT_RAND_MT19937 */);\nfor ($i=0; $i<16; $i++) {\n    echo mt_rand().PHP_EOL;\n}\necho PHP_EOL;\n$x = 0;\nfor ($i=0; $i<1024; $i++) {\n    $x ^= mt_rand();\n}\necho $x.PHP_EOL;\n/*\n * Note that the output will be different from the original mt19937ar.c,\n * because PHP's implementation contains a bug. Thus, this test actually\n * checks to make sure that PHP's behaviour is wrong, but consistently so.\n */\n?>")).toMatchSnapshot();
  });
});
