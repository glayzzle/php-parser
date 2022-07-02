// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_103.phpt
  it("Handling of UNDEF property in compound assign ", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public $a = 0;\n}\nfunction foo() {\n    $x = new C;\n    $x->a = 1;\n    unset($x->a);\n    $x->a += 2;\n    var_dump($x);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
