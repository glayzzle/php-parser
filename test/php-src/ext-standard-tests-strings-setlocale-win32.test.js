// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/setlocale-win32.phpt
  it("Unix locale names are rejected on Windows, except for some special cases", function () {
    expect(parser.parseCode("<?php\nvar_dump(setlocale(LC_ALL, 'de_DE'));\nvar_dump(setlocale(LC_ALL, 'de_DE.UTF-8'));\n// the following are supposed to be accepted\nvar_dump(setlocale(LC_ALL, 'uk_UK'));\nvar_dump(setlocale(LC_ALL, 'uk_US'));\nvar_dump(setlocale(LC_ALL, 'us_UK'));\nvar_dump(setlocale(LC_ALL, 'us_US'));\n?>")).toMatchSnapshot();
  });
});
