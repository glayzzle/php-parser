// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug77291.phpt
  it("Bug #77291 (magic methods inherited from a trait may be ignored)", function () {
    expect(parser.parseCode("<?php\ntrait AccessibleProperties\n{\n    public function __isset($property)\n    {\n        return property_exists($this, $property);\n    }\n    public function __get($property)\n    {\n        if (property_exists($this, $property)) {\n            return $this->$property;\n        }\n    }\n}\nclass Foo4567 {\n    use AccessibleProperties;\n    protected $a = 'Some value';\n}\nclass Foo45 {\n    use AccessibleProperties;\n    protected $a = 'Some value';\n}\n$foo = new Foo4567;\nvar_dump(isset($foo->a));\n$foo = new Foo45;\nvar_dump($foo->a);\n?>")).toMatchSnapshot();
  });
});
