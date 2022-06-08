// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_019.phpt
  it("Test typed properties int must not be allowed to overflow", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public int $bar = PHP_INT_MAX;\n    public function inc() {\n        return ++$this->bar;\n    }\n}\n$foo = new Foo();\ntry {\n    $foo->inc();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
