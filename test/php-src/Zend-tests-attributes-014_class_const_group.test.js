// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/014_class_const_group.phpt
  it("Attributes can be applied to groups of class constants", function () {
    expect(parser.parseCode("<?php\nclass C\n{\n    #[A(1, X)]\n    public const A = 1, B = 2;\n}\nconst X = 2;\n$rp1 = new ReflectionClassConstant('C', 'A');\n$ra1 = $rp1->getAttributes()[0];\nvar_dump($ra1->getName(), $ra1->getArguments());\n$rp2 = new ReflectionClassConstant('C', 'B');\n$ra2 = $rp2->getAttributes()[0];\nvar_dump($ra2->getName(), $ra2->getArguments());\n?>")).toMatchSnapshot();
  });
});
