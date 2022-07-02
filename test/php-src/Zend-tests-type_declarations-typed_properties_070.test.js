// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_070.phpt
  it("Test typed static property with assign op operators", function () {
    expect(parser.parseCode("<?php\nfunction &stringRef() {\n    static $a = \"1\";\n    $b = $a;\n    $a = &$b;\n    return $a;\n}\nclass Foo {\n    public static int $i = 0;\n    public static string $s = \"1\";\n}\nFoo::$s .= \"1\";\nvar_dump(Foo::$s);\nFoo::$s += 2;\nvar_dump(Foo::$s);\nFoo::$s = &stringRef();\nFoo::$s .= 2;\nvar_dump(Foo::$s);\nFoo::$i += stringRef();\nvar_dump(Foo::$i);\ntry {\n    Foo::$i += PHP_INT_MAX;\n} catch (TypeError $e) { print $e->getMessage().\"\\n\"; }\nvar_dump(Foo::$i);\ntry {\n    Foo::$i .= PHP_INT_MAX;\n} catch (TypeError $e) { print $e->getMessage().\"\\n\"; }\nvar_dump(Foo::$i);\n?>")).toMatchSnapshot();
  });
});
