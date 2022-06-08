// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug45765.phpt
  it("Fixed bug #45765 (ReflectionObject with default parameters of self::xxx cause an error)", function () {
    expect(parser.parseCode("<?php\nclass foo2 {\n    const BAR = 'foobar';\n}\nclass foo extends foo2 {\n    const BAR = \"foo's bar\";\n    function test($a = self::BAR) {\n    }\n    function test2($a = parent::BAR) {\n    }\n    function test3($a = foo::BAR) {\n    }\n    function test4($a = foo2::BAR) {\n    }\n}\necho new ReflectionObject(new foo);\n?>")).toMatchSnapshot();
  });
});
