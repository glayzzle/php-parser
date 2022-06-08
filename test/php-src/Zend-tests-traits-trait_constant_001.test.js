// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/trait_constant_001.phpt
  it("__TRAIT__: Basics, a constant denoting the trait of definition.", function () {
    expect(parser.parseCode("<?php\ntrait TestTrait {\n    public static function test() {\n        return __TRAIT__;\n    }\n}\nclass Direct {\n    use TestTrait;\n}\nclass IndirectInheritance extends Direct {\n}\ntrait TestTraitIndirect {\n  use TestTrait;\n}\nclass Indirect {\n  use TestTraitIndirect;\n}\necho Direct::test().\"\\n\";\necho IndirectInheritance::test().\"\\n\";\necho Indirect::test().\"\\n\";\n?>")).toMatchSnapshot();
  });
});
