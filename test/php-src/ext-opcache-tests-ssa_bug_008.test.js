// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/ssa_bug_008.phpt
  it("Incorrect CFG/SSA reconstruction", function () {
    expect(parser.parseCode("<?php\nif (!is_int($info = gc_collect_cycles()) || ($info < 100)) {\n        echo gettype($info).\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
