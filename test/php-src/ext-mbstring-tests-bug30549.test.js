// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug30549.phpt
  it("Bug #30549 (incorrect character translations for some ISO8859 charsets)", function () {
    expect(parser.parseCode("<?php\ntest('ISO-8859-7',  array(0xa4 => 0x20ac, 0xa5 => 0x20af, 0xaa => 0x037a));\ntest('ISO-8859-8',  array(0xaf => 0x00af, 0xfd => 0x200e, 0xfe => 0x200f));\ntest('ISO-8859-10', array(0xa4 => 0x012a                                ));\nfunction test($enc, $map) {\n    print \"$enc\\n\";\n    foreach($map as $fromc => $toc) {\n        $ustr = mb_convert_encoding(pack('C', $fromc), 'UCS-4BE', $enc);\n        foreach (unpack('Nc', $ustr) as $unic);\n        printf(\"0x%04x, 0x%04x\\n\", $toc, $unic);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
