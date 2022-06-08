// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_replace_named_subpatterns.phpt
  it("mb_ereg_replace() with named subpatterns", function () {
    expect(parser.parseCode("<?php\n    mb_regex_set_options('');\n    // \\k<word> syntax\n    echo mb_ereg_replace('(?<a>\\s*)(?<b>\\w+)(?<c>\\s*)', '\\k<a>_\\k<b>_\\k<c>', 'a b c d e' ), \"\\n\";\n    // \\k'word' syntax\n    echo mb_ereg_replace('(?<word>[a-z]+)',\"<\\k'word'>\", 'abc def ghi'), PHP_EOL;\n    // numbered captures with \\k<n> syntax\n    echo mb_ereg_replace('(1)(2)(3)(4)(5)(6)(7)(8)(9)(a)(\\10)', '\\k<0>-\\k<10>-', '123456789aa'), PHP_EOL;\n    // numbered captures with \\k'n' syntax\n    echo mb_ereg_replace('(1)(2)(3)(4)(5)(6)(7)(8)(9)(a)(\\10)', \"\\k'0'-\\k'10'-\", '123456789aa'), PHP_EOL;\n    // backref 0 works, but 01 is ignored\n    echo mb_ereg_replace('a', \"\\k'0'_\\k<01>\", 'a'), PHP_EOL;\n    // Numbered backref is ignored if named backrefs are present\n    echo mb_ereg_replace('(?<a>A)\\k<a>', '-\\1-', 'AA'), PHP_EOL;\n    // An empty backref is ignored\n    echo mb_ereg_replace('(\\w)\\1', '-\\k<>-', 'AA'), PHP_EOL;\n    // An unclosed backref is ignored\n    echo mb_ereg_replace('(?<a>\\w+)', '-\\k<a', 'AA'), PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
