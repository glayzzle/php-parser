// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/pcre_anchored.phpt
  it("A (PCRE_ANCHORED) modifier", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match('/\\PN+/', '123abc', $m));\nvar_dump($m);\nvar_dump(preg_match('/\\P{N}+/A', '123abc'));\nvar_dump(preg_match('/^\\P{N}+/', '123abc'));\nvar_dump(preg_match('/^\\P{N}+/A', '123abc'));\n?>")).toMatchSnapshot();
  });
});
