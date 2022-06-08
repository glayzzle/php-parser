// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/bug73127.phpt
  it("Bug #73127 (gost-crypto hash incorrect if input data contains long 0xFF sequence)", function () {
    expect(parser.parseCode("<?php\n$test1 = str_repeat(\"\\xFF\", 40);\n$test2 = str_repeat(\"\\x00\", 40);\necho hash('gost-crypto', $test1),\n     \"\\n\",\n     hash('gost', $test1),\n     \"\\n\",\n     hash('gost-crypto', $test2),\n     \"\\n\",\n     hash('gost', $test2),\n     \"\\n\",\n     hash('gost-crypto', ''),\n     \"\\n\",\n     hash('gost', '')\n    ;\n?>")).toMatchSnapshot();
  });
});
