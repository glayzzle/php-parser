// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/015_property_group.phpt
  it("Attributes can be applied to groups of properties", function () {
    expect(parser.parseCode("<?php\nclass C\n{\n    #[A(1, X)]\n    public $x, $y;\n}\nconst X = 2;\n$rp1 = new ReflectionProperty('C', 'x');\n$ra1 = $rp1->getAttributes()[0];\nvar_dump($ra1->getName(), $ra1->getArguments());\n$rp2 = new ReflectionProperty('C', 'y');\n$ra2 = $rp2->getAttributes()[0];\nvar_dump($ra2->getName(), $ra2->getArguments());\n?>")).toMatchSnapshot();
  });
});
