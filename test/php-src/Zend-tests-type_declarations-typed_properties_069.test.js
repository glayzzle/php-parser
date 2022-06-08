// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_069.phpt
  it("Test assign of invalid string to typed static int property", function () {
    expect(parser.parseCode("<?php\nfunction &nonNumericStringRef() {\n    static $a = \"x\";\n    return $a;\n}\nclass Foo {\n    public static int $i;\n}\ntry {\n    Foo::$i = &nonNumericStringRef();\n} catch (TypeError $e) { print $e->getMessage().\"\\n\"; }\ntry {\n    var_dump(Foo::$i);\n} catch (Error $e) { print $e->getMessage().\"\\n\"; }\nvar_dump(nonNumericStringRef());\n?>")).toMatchSnapshot();
  });
});
