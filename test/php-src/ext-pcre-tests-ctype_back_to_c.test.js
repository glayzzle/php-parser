// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/ctype_back_to_c.phpt
  it("Changing LC_CTYPE back to C", function () {
    expect(parser.parseCode("<?php\nvar_dump(setlocale(LC_CTYPE, \"de_DE\", \"de-DE\") !== false);\nvar_dump(preg_match('/\\w/', \"\\xe4\"));\nvar_dump(setlocale(LC_CTYPE, \"C\") !== false);\nvar_dump(preg_match('/\\w/', \"\\xe4\"));\n?>")).toMatchSnapshot();
  });
});
