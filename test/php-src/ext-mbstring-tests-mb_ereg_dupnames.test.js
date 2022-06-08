// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_dupnames.phpt
  it("Testing mb_ereg() duplicate named groups", function () {
    expect(parser.parseCode("<?php\n    mb_regex_encoding(\"UTF-8\");\n    $pattern = '\\w+((?<punct>？)|(?<punct>！))';\n    mb_ereg($pattern, '中？', $m);\n    var_dump($m);\n    mb_ereg($pattern, '中！', $m);\n    var_dump($m);\n?>")).toMatchSnapshot();
  });
});
