// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_substr_count_basic.phpt
  it("Test mb_substr_count() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test Basic functionality of mb_substr_count\n */\necho \"*** Testing mb_substr_count() : basic functionality ***\\n\";\n$string_ascii = 'This is an English string. 0123456789.';\n$string_mb = base64_decode('5pel5pys6Kqe44OG44Kt44K544OI44Gn44GZ44CCMDEyMzTvvJXvvJbvvJfvvJjvvJnjgII=');\n$needle_mb1 = base64_decode('44CC');\n$needle_mb2 = base64_decode('44GT44KT44Gr44Gh44Gv44CB5LiW55WM');\necho \"\\n-- ASCII String --\\n\";\nvar_dump(mb_substr_count($string_ascii, 'is'));\nvar_dump(mb_substr_count($string_ascii, 'hello, world'));\necho \"\\n-- Multibyte String --\\n\";\nvar_dump(mb_substr_count($string_mb, $needle_mb1));\nvar_dump(mb_substr_count($string_mb, $needle_mb2));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
