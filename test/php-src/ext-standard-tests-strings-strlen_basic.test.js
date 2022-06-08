// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strlen_basic.phpt
  it("Test strlen() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strlen() : basic functionality ***\\n\";\nvar_dump(strlen(\"abcdef\"));\nvar_dump(strlen(\" ab de \"));\nvar_dump(strlen(\"\"));\nvar_dump(strlen(\"\\x90\\x91\\x00\\x93\\x94\\x90\\x91\\x95\\x96\\x97\\x98\\x99\\x9a\\x9b\\x9c\\x9d\\x9e\\x9f\"));\n?>")).toMatchSnapshot();
  });
});
