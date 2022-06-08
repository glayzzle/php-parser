// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/rtrim_basic.phpt
  it("Test rtrim() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing rtrim() : basic functionality ***\\n\";\n$text  = \"---These are a few words---  \\t\\r\\n\\0\\x0B  \";\n$hello  = \"!===Hello World===!\";\n$alpha = \"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n$binary = \"Example string\\x0A\\x0D\";\necho \"\\n-- Trim string with all white space characters --\\n\";\nvar_dump(rtrim($text));\necho \"\\n-- Trim non-whitespace from a string --\\n\";\nvar_dump(rtrim($hello, \"=!\"));\necho \"\\n-- Trim some non-white space characters from a string --\\n\";\nvar_dump(rtrim($hello, \"!dlWro=\"));\necho \"\\n-- Trim some non-white space characters from a string using a character range --\\n\";\nvar_dump(rtrim($alpha, \"A..Z\"));\necho \"\\n-- Trim the ASCII control characters at the beginning of a string --\\n\";\nvar_dump(rtrim($binary, \"\\x00..\\x1F\"));\n?>")).toMatchSnapshot();
  });
});
