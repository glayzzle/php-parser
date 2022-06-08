// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_named_subpatterns.phpt
  it("Testing mb_ereg() named subpatterns", function () {
    expect(parser.parseCode("<?php\n    mb_regex_encoding(\"UTF-8\");\n    mb_ereg('(?<wsp>\\s*)(?<word>\\w+)', '  中国', $m);\n    var_dump($m);\n    mb_ereg('(?<wsp>\\s*)(?<word>\\w+)', '国', $m);\n    var_dump($m);\n    mb_ereg('(\\s*)(?<word>\\w+)', '  中国', $m);\n    var_dump($m);\n?>")).toMatchSnapshot();
  });
});
