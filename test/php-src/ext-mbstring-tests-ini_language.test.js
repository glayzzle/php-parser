// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/ini_language.phpt
  it("mbstring.language bug", function () {
    expect(parser.parseCode("<?php\nvar_dump(ini_get('internal_encoding'));\nvar_dump(mb_internal_encoding());\n?>")).toMatchSnapshot();
  });
});
