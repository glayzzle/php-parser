// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_regex_encoding_basic.phpt
  it("Test mb_regex_encoding() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test Basic functionality of mb_regex_encoding\n */\necho \"*** Testing mb_regex_encoding() : basic functionality ***\\n\";\nvar_dump(mb_regex_encoding());\nvar_dump(mb_regex_encoding('UTF-8'));\nvar_dump(mb_regex_encoding());\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
