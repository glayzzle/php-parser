// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug63399.phpt
  it("Bug #63399 (ReflectionClass::getTraitAliases() incorrectly resolves traitnames)", function () {
    expect(parser.parseCode("<?php\ntrait Trait1 {\n        public function run() {}\n        public function say() {}\n}\ntrait Trait2 {\n        public function run() {}\n        public function say() {}\n}\nclass MyClass\n{\n    use Trait1, Trait2 {\n        Trait1::run as execute;\n        Trait1::say insteadof Trait2;\n        Trait2::run insteadof Trait1;\n        Trait2::say as talk;\n    }\n}\n$ref = new ReflectionClass('MyClass');\nprint_r($ref->getTraitAliases());\nprint_r($ref->getTraits());\n?>")).toMatchSnapshot();
  });
});
