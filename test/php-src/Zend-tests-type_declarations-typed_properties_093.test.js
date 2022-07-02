// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_093.phpt
  it("Typed property assignment by ref with variable name", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public int $prop;\n}\n$name = new class {\n    public function __toString() {\n        return 'prop';\n    }\n};\n$test = new Test;\n$ref = \"foobar\";\ntry {\n    $test->$name =& $ref;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($test);\n?>")).toMatchSnapshot();
  });
});
