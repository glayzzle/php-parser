// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_replace_basic.phpt
  it("Test mb_ereg_replace() function : basic", function () {
    expect(parser.parseCode("<?php\n/*\n * Test Basic Functionality of mb_ereg_replace()\n */\necho \"*** Testing mb_ereg_replace() : basic functionality ***\\n\";\nmb_internal_encoding('UTF-8');\nmb_regex_encoding('UTF-8');\n$string_ascii = 'abc def';\n$string_mb = base64_decode('5pel5pys6Kqe44OG44Kt44K544OI44Gn44GZ44CCMDEyMzTvvJXvvJbvvJfvvJjvvJnjgII=');\necho \"\\n-- ASCII string 1 --\\n\";\n$result_1 = mb_ereg_replace('(.*)def', '\\\\1 123', $string_ascii);\nvar_dump(bin2hex($result_1));\necho \"\\n-- ASCII string 2 --\\n\";\n$result_2 = mb_ereg_replace('123', 'abc', $string_ascii);\nvar_dump(bin2hex($result_2));\necho \"\\n-- Multibyte string 1 --\\n\";\n$regex1 = base64_decode('KOaXpeacrOiqnikuKj8oWzEtOV0rKQ==');   //Japanese regex in UTF-8\n$result_3 = mb_ereg_replace($regex1, '\\\\1_____\\\\2', $string_mb);\nvar_dump(bin2hex($result_3));\necho \"\\n-- Multibyte string 2 --\\n\";\n$regex2 = base64_decode('5LiW55WM');\n$result_4 = mb_ereg_replace($regex2, '_____', $string_mb);\nvar_dump(bin2hex($result_4));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
