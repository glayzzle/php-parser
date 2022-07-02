// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug60801.phpt
  it("Bug #60801 (strpbrk() mishandles NUL byte)", function () {
    expect(parser.parseCode("<?php\n$haystack = \"foob\\x00ar\";\n$needle = \"a\\x00b\";\nvar_dump(strpbrk($haystack, 'ar'));\nvar_dump(strpbrk($haystack, \"\\x00\"));\nvar_dump(strpbrk($haystack, $needle));\nvar_dump(strpbrk('foobar', $needle));\nvar_dump(strpbrk(\"\\x00\", $needle));\nvar_dump(strpbrk('xyz', $needle));\nvar_dump(strpbrk($haystack, 'xyz'));\n?>")).toMatchSnapshot();
  });
});
