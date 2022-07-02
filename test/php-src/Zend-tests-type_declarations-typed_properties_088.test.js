// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_088.phpt
  it("Check for correct invalidation of prop_info cache slots", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public int $prop;\n}\nclass B {\n    public $prop;\n}\nfunction test($obj) {\n    $obj->prop = \"42\";\n    var_dump($obj);\n}\ntest(new A);\ntest(new B);\n?>")).toMatchSnapshot();
  });
});
