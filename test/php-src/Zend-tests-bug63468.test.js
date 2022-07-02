// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug63468.phpt
  it("Bug #63468 (wrong called method as callback with inheritance)", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    public function run()\n    {\n        return call_user_func(array('Bar', 'getValue'));\n    }\n    private static function getValue()\n    {\n        return 'Foo';\n    }\n}\nclass Bar extends Foo\n{\n    public static function getValue()\n    {\n        return 'Bar';\n    }\n}\n$x = new Bar;\nvar_dump($x->run());\n?>")).toMatchSnapshot();
  });
});
