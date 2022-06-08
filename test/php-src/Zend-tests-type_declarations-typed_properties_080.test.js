// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_080.phpt
  it("Access to typed static properties before initialization", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public static int $a;\n    protected static int $b;\n    private static int $c;\n    static function run() {\n        try {\n            self::$a;\n        } catch (Error $e) {\n            echo $e->getMessage(), \"\\n\";\n        }\n        try {\n            self::$b;\n        } catch (Error $e) {\n            echo $e->getMessage(), \"\\n\";\n        }\n        try {\n            self::$c;\n        } catch (Error $e) {\n            echo $e->getMessage(), \"\\n\";\n        }\n    }\n}\nTest::run();\n?>")).toMatchSnapshot();
  });
});
