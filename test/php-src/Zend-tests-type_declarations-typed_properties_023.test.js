// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_023.phpt
  it("Test typed static property", function () {
    expect(parser.parseCode("<?php\nfunction &ref() {\n    static $a = 5;\n    return $a;\n}\nclass Foo {\n    public static int $i;\n    public static string $s = \"x\";\n}\nvar_dump(Foo::$i = 1);\nvar_dump(Foo::$i);\nvar_dump(Foo::$i = \"1\");\nvar_dump(Foo::$i);\nvar_dump(Foo::$s);\nvar_dump(Foo::$s = Foo::$i++);\nvar_dump(Foo::$s, Foo::$i);\n$a = 3;\nvar_dump(Foo::$s = $a);\nvar_dump(Foo::$s);\nvar_dump(Foo::$i = \"4\");\nvar_dump(Foo::$i);\nvar_dump(Foo::$i = ref());\nvar_dump(Foo::$i);\nvar_dump(Foo::$s = ref());\nvar_dump(Foo::$s);\nvar_dump(ref());\n?>")).toMatchSnapshot();
  });
});
