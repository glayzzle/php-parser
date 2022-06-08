// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv_strlen_basic.phpt
  it("Test iconv_strlen() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of iconv_strlen()\n */\necho \"*** Testing iconv_strlen() : basic functionality***\\n\";\n$string_ascii = 'abc def';\n//Japanese string in UTF-8\n$string_mb = base64_decode('5pel5pys6Kqe44OG44Kt44K544OI44Gn44GZ44CCMDEyMzTvvJXvvJbvvJfvvJjvvJnjgII=');\necho \"\\n-- ASCII String --\\n\";\nvar_dump(iconv_strlen($string_ascii));\necho \"\\n-- Multibyte String --\\n\";\nvar_dump(iconv_strlen($string_mb, 'UTF-8'));\n?>")).toMatchSnapshot();
  });
});
