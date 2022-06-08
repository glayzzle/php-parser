// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_strstr_empty_needle.phpt
  it("Test mb_strstr() function : with empty needle", function () {
    expect(parser.parseCode("<?php\nmb_internal_encoding('UTF-8');\n$string_ascii = 'abc def';\n// Japanese string in UTF-8\n$string_mb = \"日本語テキストです。01234５６７８９。\";\necho \"\\n-- ASCII string --\\n\";\nvar_dump(mb_strstr($string_ascii, '', false, 'ISO-8859-1'));\nvar_dump(mb_strstr($string_ascii, ''));\nvar_dump(mb_strstr($string_ascii, '', true));\necho \"\\n-- Multibyte string --\\n\";\nvar_dump(mb_strstr($string_mb, ''));\nvar_dump(mb_strstr($string_mb, '', false, 'utf-8'));\nvar_dump(mb_strstr($string_mb, '', true));\n?>")).toMatchSnapshot();
  });
});
