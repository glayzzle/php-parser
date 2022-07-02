// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_alias_013.phpt
  it("Testing alias of alias", function () {
    expect(parser.parseCode("<?php\nnamespace test\\baz;\nclass foo {\n}\nnew foo;\n$alias1 = __NAMESPACE__ .'\\T';\nclass_alias(__NAMESPACE__ .'\\foo', $alias1);\n$alias2 = $alias1 .'\\BAR';\nclass_alias($alias1, $alias2);\nvar_dump(new \\test\\baz\\foo, new \\test\\baz\\T\\BAR);\n?>")).toMatchSnapshot();
  });
});
