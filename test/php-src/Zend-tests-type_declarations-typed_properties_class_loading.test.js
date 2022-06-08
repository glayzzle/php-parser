// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_class_loading.phpt
  it("Typed properties do not invoke the autoloader", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public X $propX;\n    public ?Y $propY;\n}\nspl_autoload_register(function($class) {\n    echo \"Loading $class\\n\";\n});\n$test = new Test;\ntry {\n    $test->propX = new stdClass;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nif (true) {\n    class X {}\n}\n$test->propX = new X;\nvar_dump($test->propX);\n$test->propY = null;\n$r =& $test->propY;\ntry {\n    $test->propY = new stdClass;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nif (true) {\n    class Y {}\n}\n$r = new Y;\nvar_dump($test->propY);\n?>")).toMatchSnapshot();
  });
});
