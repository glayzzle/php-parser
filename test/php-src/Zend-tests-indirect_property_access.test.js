// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/indirect_property_access.phpt
  it("Testing indirect property access", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public $x = 1;\n}\nclass bar {\n    public $y = 'foo';\n}\n$x = 'bar';\n$bar = new bar;\nvar_dump((new bar)->y);     // foo\nvar_dump((new $x)->y);      // foo\nvar_dump((new $bar->y)->x); // 1\n?>")).toMatchSnapshot();
  });
});
