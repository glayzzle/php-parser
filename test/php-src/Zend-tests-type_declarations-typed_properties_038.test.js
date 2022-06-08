// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_038.phpt
  it("Test typed properties overflowing", function () {
    expect(parser.parseCode("<?php\n$foo = new class {\n    public int $bar = PHP_INT_MAX;\n};\ntry {\n    $foo->bar++;\n} catch(TypeError $t) {\n    var_dump($t->getMessage());\n}\nvar_dump($foo);\ntry {\n    $foo->bar += 1;\n} catch(TypeError $t) {\n    var_dump($t->getMessage());\n}\nvar_dump($foo);\ntry {\n    ++$foo->bar;\n} catch(TypeError $t) {\n    var_dump($t->getMessage());\n}\nvar_dump($foo);\ntry {\n    $foo->bar = $foo->bar + 1;\n} catch(TypeError $t) {\n    var_dump($t->getMessage());\n}\nvar_dump($foo);\n?>")).toMatchSnapshot();
  });
});
