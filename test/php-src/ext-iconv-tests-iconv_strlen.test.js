// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv_strlen.phpt
  it("iconv_strlen()", function () {
    expect(parser.parseCode("<?php\nfunction foo($str, $charset) {\n    var_dump(strlen($str));\n    var_dump(iconv_strlen($str, $charset));\n}\nfoo(\"abc\", \"ASCII\");\nfoo(\"���ܸ� EUC-JP\", \"EUC-JP\");\n?>")).toMatchSnapshot();
  });
});
