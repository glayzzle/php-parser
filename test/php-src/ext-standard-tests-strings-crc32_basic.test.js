// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/crc32_basic.phpt
  it("Test crc32() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing crc32() : basic functionality\n*/\necho \"*** Testing crc32() : basic functionality ***\\n\";\n// Initialise all required variables\n$str = 'string_val1234';\n// Calling crc32() with all possible arguments\n// checking for the return type of the function\nvar_dump( is_int(crc32($str)) );\n// Printing the returned value from the function\nprintf(\"%u\\n\", crc32($str) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
