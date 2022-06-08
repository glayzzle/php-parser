// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bug81226.phpt
  it("Bug #81226: Integer overflow behavior is different with JIT enabled", function () {
    expect(parser.parseCode("<?php\n// 65-bit hexadecimal number\n$hex = '10000000000000041';\nfor ($i = 0; $i < 200; ++$i) {\n    $characterReferenceCode = 0;\n    for ($j = 0, $len = strlen($hex); $j < $len; ++$j) {\n        $characterReferenceCode *= 16;\n        $characterReferenceCode += ord($hex[$j]) - 0x0030;\n    }\n    assert($characterReferenceCode > 0x10FFFF);\n}\n?>\nOK")).toMatchSnapshot();
  });
});
