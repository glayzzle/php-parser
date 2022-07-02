// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/static_variable_in_private_trait_method.phpt
  it("Behavior of static variable in private trait method", function () {
    expect(parser.parseCode("<?php\ntrait T {\n    private static function method() {\n        static $x;\n        if ($x === null) $x = new stdClass;\n        return $x;\n    }\n    public static function method2() {\n        return self::method();\n    }\n}\nclass C {\n    use T;\n}\nvar_dump(C::method2());\nclass D extends C {\n    use T;\n}\nvar_dump(D::method2());\n?>")).toMatchSnapshot();
  });
});
