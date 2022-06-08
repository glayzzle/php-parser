// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_search_named_subpatterns_2.phpt
  it("Testing mb_ereg_search() named capture groups", function () {
    expect(parser.parseCode("<?php\n    mb_regex_encoding(\"UTF-8\");\n    mb_ereg_search_init('  中国？');\n    mb_ereg_search('(?<wsp>\\s*)(?<word>\\w+)(?<punct>[？！])');\n    var_dump(mb_ereg_search_getregs());\n?>")).toMatchSnapshot();
  });
});
