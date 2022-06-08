// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_095.phpt
  it("Absolute namespaces should be allowed", function () {
    expect(parser.parseCode("<?php\nnamespace Foo\\Bar {\n    class ClassA{}\n    class ClassB{}\n    class ClassC{}\n    function fn_a(){ return __FUNCTION__; }\n    function fn_b(){ return __FUNCTION__; }\n    function fn_c(){ return __FUNCTION__; }\n    const CONST_A = 1;\n    const CONST_B = 2;\n    const CONST_C = 3;\n}\nnamespace Baz {\n    use \\Foo\\Bar\\{ClassA, ClassB, ClassC};\n    use function \\Foo\\Bar\\{fn_a, fn_b, fn_c};\n    use const \\Foo\\Bar\\{CONST_A, CONST_B, CONST_C};\n    var_dump(ClassA::class);\n    var_dump(ClassB::class);\n    var_dump(ClassC::class);\n    var_dump(fn_a());\n    var_dump(fn_b());\n    var_dump(fn_c());\n    var_dump(CONST_A);\n    var_dump(CONST_B);\n    var_dump(CONST_C);\n    echo \"\\nDone\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
