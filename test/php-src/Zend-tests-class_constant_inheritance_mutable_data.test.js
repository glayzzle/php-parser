// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_constant_inheritance_mutable_data.phpt
  it("Class constant inheritance with mutable data", function () {
    expect(parser.parseCode("<?php\n// This would previously leak under opcache.\nclass A {\n    const X = 'X' . self::Y;\n    const Y = 'Y';\n}\ninterface I {\n    const X2 = 'X2' . self::Y2;\n    const Y2 = 'Y2';\n}\neval('class B extends A implements I {}');\nvar_dump(new B);\nvar_dump(B::X, B::X2);\n// This should only produce one warning, not two.\nclass X {\n    const C = 1 % 1.5;\n}\nclass Y extends X {\n}\nvar_dump(X::C, Y::C);\n?>")).toMatchSnapshot();
  });
});
