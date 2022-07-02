// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/substr_count_variation_002.phpt
  it("Test substr_count() function (variation - 2)", function () {
    expect(parser.parseCode("<?php\necho \"\\n*** Testing possible variations ***\\n\";\necho \"\\n-- complex strings containing other than 7-bit chars --\\n\";\n$str = chr(128).chr(129).chr(128).chr(256).chr(255).chr(254).chr(255);\nvar_dump(substr_count($str, chr(128)));\nvar_dump(substr_count($str, chr(255)));\nvar_dump(substr_count($str, chr(256)));\necho \"\\n-- heredoc string --\\n\";\n$string = <<<EOD\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nacdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nacdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nEOD;\nvar_dump(substr_count($string, \"abcd\"));\nvar_dump(substr_count($string, \"1234\"));\necho \"\\n-- heredoc null string --\\n\";\n$str = <<<EOD\nEOD;\nvar_dump(substr_count($str, \"\\0\"));\nvar_dump(substr_count($str, \"\\x000\"));\nvar_dump(substr_count($str, \"0\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
