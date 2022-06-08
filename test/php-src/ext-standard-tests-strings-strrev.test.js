// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrev.phpt
  it("strrev() function", function () {
    expect(parser.parseCode("<?php\n$i = 0;\n$str = '';\nwhile ($i<256) {\n    $str .= chr($i++);\n}\nvar_dump(md5(strrev($str)));\nvar_dump(strrev(\"\"));\n?>")).toMatchSnapshot();
  });
});
