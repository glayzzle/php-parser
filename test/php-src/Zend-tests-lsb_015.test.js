// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/lsb_015.phpt
  it("ZE2 Late Static Binding with exceptions", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    B::throwException();\n}\nclass C {\n    public static function bla() {\n        B::throwException();\n    }\n    public static function getException() {\n        return new Exception();\n    }\n}\nclass A {\n    public static function throwException_after() {\n        C::bla();\n    }\n    public static function throwException() {\n        throw C::getException();\n    }\n    public static function test() {\n        static::who();\n    }\n    public static function who() {\n        echo \"A\\n\";\n    }\n    public static function mycatch() {\n        try {\n            static::who();\n            B::throwException_after();\n        } catch(Exception $e) {\n            static::who();\n            A::test();\n            static::who();\n            B::test();\n            static::who();\n            self::simpleCatch();\n            static::who();\n        }\n    }\n    public static function simpleCatch() {\n        try {\n            static::who();\n            throw new Exception();\n        } catch (Exception $e) {\n            static::who();\n        }\n    }\n}\nclass B extends A {\n    public static function who() {\n        echo \"B\\n\";\n    }\n}\necho \"via A:\\n\";\nA::myCatch();\necho \"via B:\\n\";\nB::myCatch();\n?>")).toMatchSnapshot();
  });
});
