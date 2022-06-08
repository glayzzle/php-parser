// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/lc_ctype_inheritance.phpt
  it("Do not inherit LC_CTYPE from environment", function () {
    expect(parser.parseCode("<?php\nvar_dump(setlocale(LC_CTYPE, \"0\"));\nvar_dump(bin2hex(strtoupper(\"\\xe4\")));\nvar_dump(preg_match('/\\w/', \"\\xe4\"));\nvar_dump(setlocale(LC_CTYPE, \"de_DE\", \"de-DE\") !== false);\nvar_dump(bin2hex(strtoupper(\"\\xe4\")));\nvar_dump(preg_match('/\\w/', \"\\xe4\"));\n?>")).toMatchSnapshot();
  });
});
