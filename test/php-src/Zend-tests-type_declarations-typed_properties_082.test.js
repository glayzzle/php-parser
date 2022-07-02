// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_082.phpt
  it("Test typed references to static properties ", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public static int $x = 0;\n}\nclass Test2 extends Test {\n    public static $y = 1;\n}\n$x =& Test::$x;\ntry {\n    $x = \"foo\";\n} catch (TypeError $e) { echo $e->getMessage(), \"\\n\"; }\nvar_dump($x, Test::$x);\nTest::$x =& Test2::$y; // remove the typed ref from $x\n$x = \"foo\";\nvar_dump($x, Test::$x);\n?>")).toMatchSnapshot();
  });
});
