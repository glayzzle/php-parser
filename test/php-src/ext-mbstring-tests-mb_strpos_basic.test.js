// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_strpos_basic.phpt
  it("Test mb_strpos() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of mb_strpos with ASCII and multibyte characters\n */\necho \"*** Testing mb_strpos() : basic functionality***\\n\";\nmb_internal_encoding('UTF-8');\n$string_ascii = 'abc def';\n//Japanese string in UTF-8\n$string_mb = base64_decode('5pel5pys6Kqe44OG44Kt44K544OI44Gn44GZ44CCMDEyMzTvvJXvvJbvvJfvvJjvvJnjgII=');\necho \"\\n-- ASCII string 1 --\\n\";\nvar_dump(mb_strpos($string_ascii, 'd', 2, 'ISO-8859-1'));\necho \"\\n-- ASCII string 2 --\\n\";\nvar_dump(mb_strpos($string_ascii, '123'));\necho \"\\n-- Multibyte string 1 --\\n\";\n$needle1 = base64_decode('5pel5pys6Kqe');\nvar_dump(mb_strpos($string_mb, $needle1));\necho \"\\n-- Multibyte string 2 --\\n\";\n$needle2 = base64_decode(\"44GT44KT44Gr44Gh44Gv44CB5LiW55WM\");\nvar_dump(mb_strpos($string_mb, $needle2));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
