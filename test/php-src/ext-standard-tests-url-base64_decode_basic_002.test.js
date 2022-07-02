// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/url/base64_decode_basic_002.phpt
  it("Test base64_decode() function : basic functionality - strict vs non-strict with non-base64 chars.", function () {
    expect(parser.parseCode("<?php\necho \"Decode 'hello world!':\\n\";\n$noWhiteSpace = \"aGVsbG8gd29ybGQh\";\nvar_dump(base64_decode($noWhiteSpace));\nvar_dump(base64_decode($noWhiteSpace, false));\nvar_dump(base64_decode($noWhiteSpace, true));\necho \"\\nWhitespace does not affect base64_decode, even with \\$strict===true:\\n\";\n$withWhiteSpace = \"a GVs   bG8gd2\n                        9ybGQh\";\nvar_dump(base64_decode($withWhiteSpace));\nvar_dump(base64_decode($withWhiteSpace, false));\nvar_dump(base64_decode($withWhiteSpace, true));\necho \"\\nOther chars outside the base64 alphabet are ignored when \\$strict===false, but cause failure with \\$strict===true:\\n\";\n$badChars = $noWhiteSpace . '*';\nvar_dump(base64_decode($badChars));\nvar_dump(base64_decode($badChars, false));\nvar_dump(base64_decode($badChars, true));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
