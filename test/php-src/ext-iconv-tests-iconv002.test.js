// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv002.phpt
  it("iconv() test 2 (UCS4BE to ASCII)", function () {
    expect(parser.parseCode("<?php\n/*\nExpected output:\n&#97;&#98;&#99;&#100;\nabcd\n*/\n   $s = unpack(\"V*\", iconv(\"ascii\",\"UCS-4LE\", \"abcd\"));\n   foreach($s as $c) { print \"&#$c;\"; } print \"\\n\";\n   $s = pack(\"NNNN\", 97, 98, 99, 100);\n   $q = iconv(\"UCS-4BE\", \"ascii\", $s);\n   print $q; print \"\\n\";\n?>")).toMatchSnapshot();
  });
});
