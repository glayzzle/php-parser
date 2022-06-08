// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/trim_basic.phpt
  it("Test trim() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing trim() : basic functionality ***\\n\";\n$text  = \"  \\t\\r\\n\\0\\x0B  ---These are a few words---  \\t\\r\\n\\0\\x0B  \";\n$hello  = \"!===Hello World===!\";\n$binary = \"\\x0A\\x0DExample string\\x0A\\x0D\";\necho \"\\n-- Trim string with all white space characters --\\n\";\nvar_dump(trim($text));\necho \"\\n-- Trim non-whitespace from a string --\\n\";\nvar_dump(trim($hello, \"=!\"));\necho \"\\n-- Trim some non-white space characters from a string --\\n\";\nvar_dump(trim($hello, \"Hdle\"));\necho \"\\n-- Trim the ASCII control characters at the beginning of a string --\\n\";\nvar_dump(trim($binary, \"\\x00..\\x1F\"));\n?>")).toMatchSnapshot();
  });
});
