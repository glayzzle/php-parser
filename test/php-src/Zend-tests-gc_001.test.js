// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_001.phpt
  it("GC 001: gc_enable()/gc_diable()/gc_enabled()", function () {
    expect(parser.parseCode("<?php\ngc_disable();\nvar_dump(gc_enabled());\ngc_enable();\nvar_dump(gc_enabled());\n?>")).toMatchSnapshot();
  });
});
