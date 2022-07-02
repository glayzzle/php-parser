// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_003.phpt
  it("GC 003: gc_enabled() and ini_set()", function () {
    expect(parser.parseCode("<?php\nini_set('zend.enable_gc','0');\nvar_dump(gc_enabled());\necho ini_get('zend.enable_gc') . \"\\n\";\nini_set('zend.enable_gc','1');\nvar_dump(gc_enabled());\necho ini_get('zend.enable_gc') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
