// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_031.phpt
  it("GC 031: gc_collect_roots() with GC turned off.", function () {
    expect(parser.parseCode("<?php\ngc_collect_cycles();\necho \"DONE\\n\";\n?>")).toMatchSnapshot();
  });
});
