// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug55086.phpt
  it("Bug #55086 (Namespace alias does not work inside trait's use block)", function () {
    expect(parser.parseCode("<?php\nnamespace N1 {\n    trait T1 {\n        public function hello() { return 'hello from t1'; }\n    }\n    trait T2 {\n        public function hello() { return 'hello from t2'; }\n    }\n}\nnamespace N2 {\n    use N1\\T1;\n    use N1\\T2;\n    class A {\n        use T1, T2 {\n            T1::hello insteadof T2;\n            T1::hello as foo;\n        }\n    }\n    $a = new A;\n    echo $a->hello(), PHP_EOL;\n    echo $a->foo(), PHP_EOL;\n    try {\n    } catch (namespace\\Foo $e)\n    {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
