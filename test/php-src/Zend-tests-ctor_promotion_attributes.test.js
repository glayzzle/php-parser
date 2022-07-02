// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ctor_promotion_attributes.phpt
  it("Attributes on promoted properties are assigned to both the property and parameter", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __construct(\n        #[NonNegative]\n        public int $num,\n    ) {}\n}\n$prop = new ReflectionProperty(Test::class, 'num');\nvar_dump($prop->getAttributes()[0]->getName());\n$param = new ReflectionParameter([Test::class, '__construct'], 'num');\nvar_dump($param->getAttributes()[0]->getName());\n?>")).toMatchSnapshot();
  });
});
