// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/incdec_property_003.phpt
  it("ZE2 pre increment/decrement property of overloaded object", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    private $real_a = 2;\n    function __set($property, $value) {\n      if ($property == \"a\") {\n        $this->real_a = $value;\n      }\n    }\n    function __get($property) {\n      if ($property == \"a\") {\n        return $this->real_a;\n      }\n    }\n}\n$obj = new Test;\nvar_dump($obj->a);\n++$obj->a;\nvar_dump($obj->a);\necho \"---Done---\\n\";\n?>")).toMatchSnapshot();
  });
});
