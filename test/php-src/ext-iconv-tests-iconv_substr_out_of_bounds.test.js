// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv_substr_out_of_bounds.phpt
  it("iconv_substr() with out of bounds offset", function () {
    expect(parser.parseCode("<?php\nvar_dump(iconv_substr(\"foo\", 3));\nvar_dump(iconv_substr(\"foo\", -3));\nvar_dump(iconv_substr(\"foo\", 4));\nvar_dump(iconv_substr(\"foo\", -4));\nvar_dump(iconv_substr(\"äöü\", 3));\nvar_dump(iconv_substr(\"äöü\", -3));\nvar_dump(iconv_substr(\"äöü\", 4));\nvar_dump(iconv_substr(\"äöü\", -4));\nvar_dump(iconv_substr(\"foo\", 0, 3));\nvar_dump(iconv_substr(\"foo\", 0, -3));\nvar_dump(iconv_substr(\"foo\", 0, 4));\nvar_dump(iconv_substr(\"foo\", 0, -4));\nvar_dump(iconv_substr(\"äöü\", 0, 3));\nvar_dump(iconv_substr(\"äöü\", 0, -3));\nvar_dump(iconv_substr(\"äöü\", 0, 4));\nvar_dump(iconv_substr(\"äöü\", 0, -4));\nvar_dump(iconv_substr(\"äöü\", -4, 1));\nvar_dump(iconv_substr(\"äöü\", -4, -1));\nvar_dump(iconv_substr(\"äöü\", 2, -2));\n?>")).toMatchSnapshot();
  });
});
