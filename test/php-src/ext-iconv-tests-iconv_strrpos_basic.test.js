// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv_strrpos_basic.phpt
  it("Test iconv_strrpos() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of iconv_strrpos()\n */\necho \"*** Testing iconv_strrpos() : basic ***\\n\";\niconv_set_encoding(\"internal_encoding\", \"UTF-8\");\n$string_ascii = 'This is an English string. 0123456789.';\n//Japanese string in UTF-8\n$string_mb = base64_decode('5pel5pys6Kqe44OG44Kt44K544OI44Gn44GZ44CCMDEyMzTvvJXvvJbvvJfvvJjvvJnjgII=');\necho \"\\n-- ASCII string 1 --\\n\";\nvar_dump(iconv_strrpos($string_ascii, 'is', 'ISO-8859-1'));\necho \"\\n-- ASCII string 2 --\\n\";\nvar_dump(iconv_strrpos($string_ascii, 'hello, world'));\necho \"\\n-- Multibyte string 1 --\\n\";\n$needle1 = base64_decode('44CC');\nvar_dump(iconv_strrpos($string_mb, $needle1));\necho \"\\n-- Multibyte string 2 --\\n\";\n$needle2 = base64_decode('44GT44KT44Gr44Gh44Gv44CB5LiW55WM');\nvar_dump(iconv_strrpos($string_mb, $needle2));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
