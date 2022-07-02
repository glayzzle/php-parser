// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/parse_ini_string_bug76068.phpt
  it("Bug #76068 parse_ini_string fails to parse \"[foo]\\nbar=1|>baz\" with segfault", function () {
    expect(parser.parseCode("<?php\n$s = parse_ini_string(\"[foo]\\nbar=1|>baz\",true, \\INI_SCANNER_TYPED);\nvar_dump($s);\n$s = parse_ini_string(\"[foo]\\nbar=\\\"1|>baz\\\"\",true, \\INI_SCANNER_TYPED);\nvar_dump($s);\n$s = parse_ini_string(\"[foo]\\nbar=1\",true, \\INI_SCANNER_TYPED);\nvar_dump($s);\n$s = parse_ini_string(\"[foo]\\nbar=42|>baz\",true, \\INI_SCANNER_TYPED);\nvar_dump($s);\n?>")).toMatchSnapshot();
  });
});
