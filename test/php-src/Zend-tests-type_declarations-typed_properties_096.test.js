// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_096.phpt
  it("References to typed properties with undefined classes", function () {
    expect(parser.parseCode("<?php\nclass Test1 {\n    public Foobar $prop;\n    public int $prop2;\n}\n$test = new Test1;\n$test->prop2 = 123;\n$ref =& $test->prop2;\ntry {\n    $test->prop =& $ref;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($test);\nclass Test2 {\n    public ?Foobar $prop;\n    public ?int $prop2;\n}\n$test = new Test2;\n$test->prop2 = null;\n$ref =& $test->prop2;\n$test->prop =& $ref;\nvar_dump($test);\n?>")).toMatchSnapshot();
  });
});
