// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug39873.phpt
  it("Bug #39873 (number_format() breaks with locale & decimal points)", function () {
    expect(parser.parseCode("<?php\n    setlocale(LC_ALL, \"ita\",\"it\",\"Italian\",\"it_IT\",\"it_IT.ISO8859-1\",\"it_IT.ISO_8859-1\");\n    $num = 0+\"1234.56\";\n    echo number_format($num,2);\n    echo \"\\n\";\n?>")).toMatchSnapshot();
  });
});
