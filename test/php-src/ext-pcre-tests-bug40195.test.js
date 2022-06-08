// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug40195.phpt
  it("Bug #40195 (pcre 6.7 regression)", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match('@^(/([a-z]*))*$@', '//abcde', $m)); var_dump($m);\nvar_dump(preg_match('@^(/(?:[a-z]*))*$@', '//abcde', $m)); var_dump($m);\nvar_dump(preg_match('@^(/([a-z]+))+$@', '/a/abcde', $m)); var_dump($m);\nvar_dump(preg_match('@^(/(?:[a-z]+))+$@', '/a/abcde', $m)); var_dump($m);\n?>")).toMatchSnapshot();
  });
});
