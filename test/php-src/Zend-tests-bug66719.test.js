// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug66719.phpt
  it("Bug #66719: Weird behaviour when using get_called_class() with call_user_func()", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    public static function who()\n    {\n        var_dump(get_called_class());\n    }\n}\nclass B extends A\n{\n    public static function who()\n    {\n        parent::who();\n    }\n}\nclass C\n{\n    public static function test() {\n        B::who();\n        call_user_func(array(A::class, 'who'));\n        call_user_func(array(B::class, 'parent::who'));\n    }\n}\nB::who();\ncall_user_func(array(A::class, 'who'));\ncall_user_func(array(B::class, 'parent::who'));\nC::test();\n?>")).toMatchSnapshot();
  });
});
