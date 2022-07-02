// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/parse_ini_string_003.phpt
  it("parse_ini_string() typed scanner mode", function () {
    expect(parser.parseCode("<?php\n$contents = <<<EOS\nfoo = 1\nbar = 1.3\nbaz = null\nqux[] = false\nqux[] = off\nqux[] = something\nqux[] = \"something else\"\nEOS;\nvar_dump(parse_ini_string($contents, false, INI_SCANNER_TYPED));\n?>\nDone")).toMatchSnapshot();
  });
});
