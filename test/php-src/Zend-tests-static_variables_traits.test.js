// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/static_variables_traits.phpt
  it("Behavior of static variables in trait methods", function () {
    expect(parser.parseCode("<?php\ntrait T {\n    public static function counter() {\n        static $i = 0;\n        var_dump(++$i);\n    }\n}\nclass C1 {\n    use T {\n        T::counter as counter1;\n        T::counter as counter2;\n    }\n}\nclass C2 {\n    use T;\n}\nC1::counter();\nC1::counter1();\nC1::counter2();\nC2::counter();\nC1::counter();\nC1::counter1();\nC1::counter2();\nC2::counter();\n?>")).toMatchSnapshot();
  });
});
