// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_decode_mimeheader_basic.phpt
  it("Test mb_decode_mimeheader() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing mb_decode_mimeheader() : basic functionality ***\\n\";\nmb_internal_encoding('utf-8');\n//the following encoded-words are identical and are UTF-8 Japanese.\n$a = \"=?UTF-8?b?5pel5pys6Kqe44OG44Kt44K544OI44Gn44GZ44CC?=\";\n$b = mb_decode_mimeheader($a);\nvar_dump(bin2hex($b));\n$a = \"=?UTF-8?Q?=E6=97=A5=E6=9C=AC=E8=AA=9E=E3=83=86=E3=82=AD=E3=82=B9=E3=83=88?=\n=?UTF-8?Q?=E3=81=A7=E3=81=99=E3=80=82?=\";\n$b = mb_decode_mimeheader($a);\nvar_dump(bin2hex($b));\n?>")).toMatchSnapshot();
  });
});
