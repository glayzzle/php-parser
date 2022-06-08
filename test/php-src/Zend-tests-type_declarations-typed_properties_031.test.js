// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_031.phpt
  it("Test typed properties coerce int to float even in strict mode", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\nclass Bar\n{\n    public float $bar;\n    public function setBar($value) {\n        $this->bar = $value;\n    }\n}\n$bar = new Bar();\n$bar->setBar(100);\nvar_dump($bar->bar);\n?>")).toMatchSnapshot();
  });
});
