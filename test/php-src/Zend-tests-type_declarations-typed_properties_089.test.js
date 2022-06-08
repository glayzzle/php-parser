// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_089.phpt
  it("Modification of typed property during assignment must not leak", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public string $prop = \"\";\n}\nclass B {\n    public function __toString() {\n        global $a;\n        $a->prop = \"dont \";\n        $a->prop .= \"leak \";\n        $a->prop .= \"me!\";\n        return \"test\";\n    }\n}\n$a = new A;\n$a->prop = new B;\nvar_dump($a);\n$a = new A;\n$prop = &$a->prop;\n$a->prop = new B;\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
