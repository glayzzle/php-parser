// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/dereferencing_001.phpt
  it("ZE2 dereferencing of objects from methods", function () {
    expect(parser.parseCode("<?php\nclass Name {\n    function __construct($_name) {\n        $this->name = $_name;\n    }\n    function display() {\n        echo $this->name . \"\\n\";\n    }\n}\nclass Person {\n    private $name;\n    function __construct($_name, $_address) {\n        $this->name = new Name($_name);\n    }\n    function getName() {\n        return $this->name;\n    }\n}\n$person = new Person(\"John\", \"New York\");\n$person->getName()->display();\n?>")).toMatchSnapshot();
  });
});
