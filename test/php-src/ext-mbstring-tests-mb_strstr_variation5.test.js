// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_strstr_variation5.phpt
  it("Test mb_strstr() function : variation - multiple needles", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing mb_strstr() : variation ***\\n\";\nmb_internal_encoding('UTF-8');\n//with repeated needles\n$string_ascii = 'abcdef zbcdyx';\n$needle_ascii = \"bcd\";\n//Japanese string in UTF-8 with repeated needles\n$string_mb = base64_decode('5pel5pys6Kqe44OG44Kt44K544OIMzTvvJXvvJbml6XmnKzoqp7jg4bjgq3jgrnjg4g=');\n$needle_mb = base64_decode('6Kqe44OG44Kt');\necho \"-- Ascii data --\\n\";\nvar_dump(bin2hex(mb_strstr($string_ascii, $needle_ascii, false)));\nvar_dump(bin2hex(mb_strstr($string_ascii, $needle_ascii, true)));\necho \"-- mb data in utf-8 --\\n\";\n$res = mb_strstr($string_mb, $needle_mb, false);\nif ($res !== false) {\n    var_dump(bin2hex($res));\n}\nelse {\n   echo \"nothing found!\\n\";\n}\n$res = mb_strstr($string_mb, $needle_mb, true);\nif ($res !== false) {\n    var_dump(bin2hex($res));\n}\nelse {\n   echo \"nothing found!\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
