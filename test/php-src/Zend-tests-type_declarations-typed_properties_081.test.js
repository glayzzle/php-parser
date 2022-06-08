// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_081.phpt
  it("Clone must inherit typed references", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public int $x = 42;\n}\n$test = new Test;\n$x =& $test->x;\n$test2 = clone $test;\nunset($test);\ntry {\n    $x = \"foo\";\n} catch (TypeError $e) { echo $e->getMessage(), \"\\n\"; }\nvar_dump($test2->x);\n?>")).toMatchSnapshot();
  });
});
