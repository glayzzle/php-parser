// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug55156.phpt
  it("Bug #55156 (ReflectionClass::getDocComment() returns comment even though the class has none)", function () {
    expect(parser.parseCode("<?php\n/** test */\nnamespace foo {\n    function test() { }\n    $x = new \\ReflectionFunction('foo\\test');\n    var_dump($x->getDocComment());\n    /** test1 */\n    class bar { }\n    /** test2 */\n    class foo extends namespace\\bar { }\n    $x = new \\ReflectionClass('foo\\bar');\n    var_dump($x->getDocComment());\n    $x = new \\ReflectionClass('foo\\foo');\n    var_dump($x->getDocComment());\n}\n?>")).toMatchSnapshot();
  });
});
