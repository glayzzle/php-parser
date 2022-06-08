// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug69864.phpt
  it("Bug #69864 (Segfault in preg_replace_callback)", function () {
    expect(parser.parseCode("<?php\n/* CAUTION: this test will most likely fail with valgrind until --smc-check=all is used. */\nconst PREG_CACHE_SIZE = 4096; // this has to be >= the resp. constant in php_pcre.c\nvar_dump(preg_replace_callback('/a/', function($m) {\n    for ($i = 0; $i < PREG_CACHE_SIZE; $i++) {\n        preg_match('/foo' . $i . 'bar/', '???foo' . $i . 'bar???');\n    }\n    return 'b';\n}, 'aa'));\nvar_dump(preg_replace_callback('/a/', function($m) {\n    for ($i = 0; $i < PREG_CACHE_SIZE; $i++) {\n        preg_replace('/foo' . $i . 'bar/', 'baz', '???foo' . $i . 'bar???');\n    }\n    return 'b';\n}, 'aa'));\nvar_dump(preg_replace_callback('/a/', function($m) {\n    for ($i = 0; $i < PREG_CACHE_SIZE; $i++) {\n        preg_split('/foo' . $i . 'bar/', '???foo' . $i . 'bar???');\n    }\n    return 'b';\n}, 'aa'));\nvar_dump(preg_replace_callback('/a/', function($m) {\n    for ($i = 0; $i < PREG_CACHE_SIZE; $i++) {\n        preg_grep('/foo' . $i . 'bar/', ['???foo' . $i . 'bar???']);\n    }\n    return 'b';\n}, 'aa'));\n?>")).toMatchSnapshot();
  });
});
