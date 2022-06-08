// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_substr_basic.phpt
  it("Test mb_substr() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test Basic Functionality of mb_substr with ASCII characters and multibyte strings.\n */\necho \"*** Testing mb_substr() : basic functionality ***\\n\";\n$string_ascii = 'ABCDEF';\n//Japanese string in UTF-8\n$string_mb = base64_decode('5pel5pys6Kqe44OG44Kt44K544OI44Gn44GZ44CCMDEyMzTvvJXvvJbvvJfvvJjvvJnjgII=');\necho \"\\n-- ASCII string 1 --\\n\";\nvar_dump(mb_substr($string_ascii, 3));\necho \"\\n-- ASCII string 2 --\\n\";\nvar_dump(mb_substr($string_ascii, 3, 5, 'ISO-8859-1'));\necho \"\\n-- Multibyte string 1 --\\n\";\n$result_1 = mb_substr($string_mb, 2, 7);\nvar_dump(base64_encode($result_1));\necho \"\\n-- Multibyte string 2 --\\n\";\n$result_2 = mb_substr($string_mb, 2, 7, 'utf-8');\nvar_dump(base64_encode($result_2));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
