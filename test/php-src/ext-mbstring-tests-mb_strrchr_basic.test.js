// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_strrchr_basic.phpt
  it("Test mb_strrchr() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing mb_strrchr() : basic functionality ***\\n\";\nmb_internal_encoding('UTF-8');\n$string_ascii = 'abc def';\n//Japanese string in UTF-8\n$string_mb = base64_decode('5pel5pys6Kqe44OG44Kt44K544OI44Gn44GZ44CCMDEyMzTvvJXvvJbvvJfvvJjvvJnjgII=');\necho \"\\n-- ASCII string: needle exists --\\n\";\nvar_dump(bin2hex(mb_strrchr($string_ascii, 'd', false, 'ISO-8859-1')));\nvar_dump(bin2hex(mb_strrchr($string_ascii, 'd')));\nvar_dump(bin2hex(mb_strrchr($string_ascii, 'd', true)));\necho \"\\n-- ASCII string: needle doesn't exist --\\n\";\nvar_dump(mb_strrchr($string_ascii, '123'));\necho \"\\n-- Multibyte string: needle exists --\\n\";\n$needle1 = base64_decode('5pel5pys6Kqe');\nvar_dump(bin2hex(mb_strrchr($string_mb, $needle1)));\nvar_dump(bin2hex(mb_strrchr($string_mb, $needle1, false, 'utf-8')));\nvar_dump(bin2hex(mb_strrchr($string_mb, $needle1, true)));\necho \"\\n-- Multibyte string: needle doesn't exist --\\n\";\n$needle2 = base64_decode('44GT44KT44Gr44Gh44Gv44CB5LiW55WM');\nvar_dump(mb_strrchr($string_mb, $needle2));\n?>")).toMatchSnapshot();
  });
});
