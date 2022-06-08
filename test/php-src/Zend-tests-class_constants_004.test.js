// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_constants_004.phpt
  it("Testing constants (normal, namespace, class and interface)", function () {
    expect(parser.parseCode("<?php\nnamespace foo;\ndefine('foo', 3);\nconst foo = 1;\nclass foo {\n    const foo = 2;\n}\ninterface Ifoo {\n    const foo = 4;\n}\n$const  = __NAMESPACE__ .'\\\\foo';  // class\n$const2 = __NAMESPACE__ .'\\\\Ifoo'; // interface\nvar_dump(\tfoo,\n            \\foo\\foo,\n            namespace\\foo,\n            \\foo\\foo::foo,\n            $const::foo,\n            \\foo,\n            constant('foo'),\n            Ifoo::foo,\n            $const2::foo\n            );\n?>")).toMatchSnapshot();
  });
});
