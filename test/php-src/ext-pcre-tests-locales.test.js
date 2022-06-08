// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/locales.phpt
  it("Localized match", function () {
    expect(parser.parseCode("<?php\n// this tests if the cache is working correctly, as the char tables\n// must be rebuilt after the locale change\nsetlocale(LC_ALL, 'C', 'POSIX');\nvar_dump(preg_match('/^\\w{6}$/', 'a�����'));\nsetlocale(LC_ALL, 'pt_PT', 'pt', 'pt_PT.ISO8859-1', 'portuguese');\nvar_dump(preg_match('/^\\w{6}$/', 'a�����'));\nsetlocale(LC_ALL, 'C', 'POSIX');\nvar_dump(preg_match('/^\\w{6}$/', 'a�����'));\n?>")).toMatchSnapshot();
  });
});
