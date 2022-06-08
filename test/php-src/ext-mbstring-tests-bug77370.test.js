// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug77370.phpt
  it("Bug #77370 (Buffer overflow on mb regex functions - fetch_token)", function () {
    expect(parser.parseCode("<?php\nvar_dump(mb_split(\"   \\xfd\",\"\"));\n?>")).toMatchSnapshot();
  });
});
