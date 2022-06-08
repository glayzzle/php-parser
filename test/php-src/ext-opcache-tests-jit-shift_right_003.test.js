// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/shift_right_003.phpt
  it("JIT Shift Right: 003", function () {
    expect(parser.parseCode("<?php\nfunction encodeDynamicInteger(int $int): string {\n    $out = \"\";\n    for ($i = 0; ($int >> $i) > 0x80; $i += 7) {\n        $out .= \\chr(0x80 | (($int >> $i) & 0x7f));\n    }\n    return $out . \\chr($int >> $i);\n}\n$s = encodeDynamicInteger(235);\nvar_dump(strlen($s), ord($s[0]), ord($s[1]));\n?>")).toMatchSnapshot();
  });
});
