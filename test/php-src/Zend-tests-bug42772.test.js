// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug42772.phpt
  it("Bug #42772 (Storing $this in a static var fails while handling a cast to string)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    static public $foo;\n    function __toString() {\n        self::$foo = $this;\n        return 'foo';\n    }\n}\n$foo = (string)new Foo();\nvar_dump(Foo::$foo);\n?>")).toMatchSnapshot();
  });
});
