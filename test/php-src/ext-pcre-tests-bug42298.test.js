// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug42298.phpt
  it("Bug #42298 (pcre gives bogus results with /u)", function () {
    expect(parser.parseCode("<?php\n$str = \"A\\xc2\\xa3BC\";\npreg_match_all('/\\S\\S/u', $str, $m);\tvar_dump($m);\npreg_match_all('/\\S{2}/u', $str, $m);\tvar_dump($m);\n$str = \"A\\xe2\\x82\\xac \";\npreg_match_all('/\\W\\W/u', $str, $m);\tvar_dump($m);\npreg_match_all('/\\W{2}/u', $str, $m);\tvar_dump($m);\n?>")).toMatchSnapshot();
  });
});
