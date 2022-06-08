// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/arrow_functions/005.phpt
  it("Arrow function $this binding", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function method() {\n        // It would be okay if this is NULL, but the rest should work\n        $fn = fn() => 42;\n        $r = new ReflectionFunction($fn);\n        var_dump($r->getClosureThis());\n        $fn = fn() => $this;\n        var_dump($fn());\n        $fn = fn() => Test::method2();\n        $fn();\n        $fn = fn() => call_user_func('Test::method2');\n        $fn();\n        $thisName = \"this\";\n        $fn = fn() => $$thisName;\n        var_dump($fn());\n        $fn = fn() => self::class;\n        var_dump($fn());\n        // static can be used to unbind $this\n        $fn = static fn() => isset($this);\n        var_dump($fn());\n    }\n    public function method2() {\n        var_dump($this);\n    }\n}\n(new Test)->method();\n?>")).toMatchSnapshot();
  });
});
