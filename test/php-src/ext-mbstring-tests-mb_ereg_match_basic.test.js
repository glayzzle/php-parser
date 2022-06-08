// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_match_basic.phpt
  it("Test mb_ereg_match() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of mb_ereg_match\n */\nmb_internal_encoding('UTF-8');\nmb_regex_encoding('UTF-8');\necho \"*** Testing mb_ereg_match() : basic functionality ***\\n\";\n$string_ascii = 'abc def, 0123456789';\n$string_mb = base64_decode('5pel5pys6Kqe44OG44Kt44K544OI44Gn44GZ44CCMDEyMzTvvJXvvJbvvJfvvJjvvJnjgII=');\n//will return true as pattern matches from start of string\necho \"\\n-- ASCII string 1 --\\n\";\nvar_dump(mb_ereg_match('.*def', $string_ascii));\n//will return false as pattern would match half way through string\necho \"\\n-- ASCII string 2 --\\n\";\nvar_dump(mb_ereg_match('def', $string_ascii));\necho \"\\n-- Multibyte string 1 --\\n\";\n$regex1 = base64_decode('5pel5pys6KqeKC4qKT9bMS05XSs=');\nvar_dump(mb_ereg_match($regex1, $string_mb, 'i'));\necho \"\\n-- Multibyte string 2 --\\n\";\n$regex2 = base64_decode('5LiW55WM');\nvar_dump(mb_ereg_match($regex2, $string_mb));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
