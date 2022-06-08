// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_074.phpt
  it("Typed property must be compatible when returned via &__get()", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $prop = \"x\";\n    public int $val;\n    public function &__get($name) {\n        return $this->prop;\n    }\n}\n$test = new Test;\n$dummyRef = &$test->prop;\nunset($test->val);\nvar_dump($test);\ntry {\n    var_dump($test->val);\n} catch (TypeError $e) { print $e->getMessage().\"\\n\"; }\nvar_dump($test);\n$test->prop = \"y\";\nvar_dump($test->prop);\n?>")).toMatchSnapshot();
  });
});
