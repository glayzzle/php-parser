// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug62892.phpt
  it("Bug #62892 (ReflectionClass::getTraitAliases crashes on importing trait methods as private)", function () {
    expect(parser.parseCode("<?php\ntrait myTrait {\n     public function run() {}\n}\nclass myClass {\n     use myTrait {\n         MyTrait::run as private;\n     }\n}\n$class = new \\ReflectionClass('myClass');\nvar_dump($class->getTraitAliases());\n?>")).toMatchSnapshot();
  });
});
