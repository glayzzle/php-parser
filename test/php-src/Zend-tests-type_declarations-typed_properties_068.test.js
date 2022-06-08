// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_068.phpt
  it("Test typed static property by ref", function () {
    expect(parser.parseCode("<?php\nfunction &ref($a = null) {\n    static $f;\n    if ($a !== null) $f = function &() use (&$a) { return $a; };\n    return $f();\n}\nclass Foo {\n    public static int $i;\n    public static string $s = \"x\";\n}\nFoo::$i = &ref(5);\nvar_dump(Foo::$i);\n$i = &Foo::$i;\n$i = 2;\nvar_dump($i, Foo::$i);\n$i = \"3\";\nvar_dump($i, Foo::$i);\nFoo::$i = \"4\";\nvar_dump($i, Foo::$i);\ntry {\n    $i = null;\n} catch (TypeError $e) { print $e->getMessage().\"\\n\"; }\nvar_dump($i, Foo::$i);\ntry {\n    Foo::$i = null;\n} catch (TypeError $e) { print $e->getMessage().\"\\n\"; }\nvar_dump($i, Foo::$i);\nFoo::$s = &ref(5);\nvar_dump(Foo::$s, ref());\nFoo::$i = &ref(\"0\");\nvar_dump(Foo::$i, ref());\ntry {\n    Foo::$i = &ref(\"x\");\n} catch (TypeError $e) { print $e->getMessage().\"\\n\"; }\nvar_dump(Foo::$i, ref());\ntry {\n    Foo::$i = &Foo::$s;\n} catch (TypeError $e) { print $e->getMessage().\"\\n\"; }\nvar_dump(Foo::$i, Foo::$s);\ntry {\n    Foo::$s = &Foo::$i;\n} catch (TypeError $e) { print $e->getMessage().\"\\n\"; }\nvar_dump(Foo::$i, Foo::$s);\n?>")).toMatchSnapshot();
  });
});
