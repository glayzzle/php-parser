// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_internal_encoding_basic.phpt
  it("Test mb_internal_encoding() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of mb_internal_encoding\n */\necho \"*** Testing mb_internal_encoding() : basic functionality ***\\n\";\nvar_dump(mb_internal_encoding());   //default internal encoding\nvar_dump(mb_internal_encoding('UTF-8'));    //change internal encoding to UTF-8\nvar_dump(mb_internal_encoding());    //check internal encoding is now set to UTF-8\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
