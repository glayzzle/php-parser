// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_075.phpt
  it("Test typed properties overflowing", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public static int $bar = PHP_INT_MAX;\n};\ntry {\n    Foo::$bar++;\n} catch(TypeError $t) {\n    var_dump($t->getMessage());\n}\nvar_dump(Foo::$bar);\ntry {\n    Foo::$bar += 1;\n} catch(TypeError $t) {\n    var_dump($t->getMessage());\n}\nvar_dump(Foo::$bar);\ntry {\n    ++Foo::$bar;\n} catch(TypeError $t) {\n    var_dump($t->getMessage());\n}\nvar_dump(Foo::$bar);\ntry {\n    Foo::$bar = Foo::$bar + 1;\n} catch(TypeError $t) {\n    var_dump($t->getMessage());\n}\nvar_dump(Foo::$bar);\n?>")).toMatchSnapshot();
  });
});
