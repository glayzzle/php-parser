// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_002.phpt
  it("GC 002: gc_enable()/gc_diable() and ini_get()", function () {
    expect(parser.parseCode("<?php\ngc_disable();\nvar_dump(gc_enabled());\necho ini_get('zend.enable_gc') . \"\\n\";\ngc_enable();\nvar_dump(gc_enabled());\necho ini_get('zend.enable_gc') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
