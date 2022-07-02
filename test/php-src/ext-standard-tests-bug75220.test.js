// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/bug75220.phpt
  it("Bug #75220 (is_callable crash for 'parent')", function () {
    expect(parser.parseCode("<?php\n$a = new A();\n$a->bar('foo');\nclass B {};\nclass A extends B\n{\n    function bar($func)\n    {\n        var_dump('foo');\n        var_dump(is_callable('parent::foo'));\n        var_dump(is_callable(array('parent', 'foo')));\n    }\n    function __call($func, $args)\n    {\n    }\n};\n?>")).toMatchSnapshot();
  });
});
