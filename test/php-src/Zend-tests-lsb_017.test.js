// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/lsb_017.phpt
  it("ZE2 Late Static Binding nested calls", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public static function test($x=null) {\n        if (!is_null($x)) {\n            echo \"$x\\n\";\n        }\n        return get_called_class();\n    }\n}\nclass B extends A {\n}\nclass C extends A {\n}\nclass D extends A {\n}\necho A::test(B::test(C::test(D::test()))).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
