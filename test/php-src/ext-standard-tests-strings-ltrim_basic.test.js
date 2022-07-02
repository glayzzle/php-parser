// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/ltrim_basic.phpt
  it("Test ltrim() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ltrim() : basic functionality ***\\n\";\n$text  = \" \\t\\r\\n\\0\\x0B ---These are a few words---  \";\n$hello  = \"!===Hello World===!\";\n$binary = \"\\x09\\x0AExample string\";\n$alpha = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789\";\necho \"\\n-- Trim string with all white space characters --\\n\";\nvar_dump(ltrim($text));\necho \"\\n-- Trim non-whitespace from a string --\\n\";\nvar_dump(ltrim($hello, \"=!\"));\necho \"\\n-- Trim some non-white space characters from a string --\\n\";\nvar_dump(ltrim($hello, \"!oleH=\"));\necho \"\\n-- Trim some non-white space characters from a string suing a character range --\\n\";\nvar_dump(ltrim($alpha, \"A..Z\"));\necho \"\\n-- Trim the ASCII control characters at the beginning of a string --\\n\";\nvar_dump(ltrim($binary, \"\\x00..\\x1F\"));\n?>")).toMatchSnapshot();
  });
});
