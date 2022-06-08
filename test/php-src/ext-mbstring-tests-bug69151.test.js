// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug69151.phpt
  it("Bug #69151 (mb_ereg should reject ill-formed byte sequence)", function () {
    expect(parser.parseCode("<?php\n$str = \"\\x80\";\nvar_dump(false === mb_eregi('.', $str, $matches));\nvar_dump([] === $matches);\nvar_dump(NULL === mb_ereg_replace('.', \"\\\\0\", $str));\nvar_dump(false === mb_ereg_search_init(\"\\x80\", '.'));\nvar_dump(false === mb_ereg_search());\n?>")).toMatchSnapshot();
  });
});
