// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/hex_overflow_32bit.phpt
  it("testing integer overflow (32bit)", function () {
    expect(parser.parseCode("<?php\n$doubles = array(\n    0x1736123FFFAAA,\n    0XFFFFFFFFFFFFFFFFFF,\n    0xAAAAAAAAAAAAAAEEEEEEEEEBBB,\n    0x66666666666666666777777,\n    );\nforeach ($doubles as $d) {\n    $l = $d;\n    var_dump($l);\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
