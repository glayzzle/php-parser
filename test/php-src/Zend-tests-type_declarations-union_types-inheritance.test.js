// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/inheritance.phpt
  it("Various inheritance scenarios for properties/methods with union types", function () {
    expect(parser.parseCode("<?php\nclass X {\n    public A|B|int $prop;\n    public function method(A|B|int $arg): A|B|int { }\n    private A|B|int $prop2;\n    private function method2(A|B|int $arg): A|B|int { }\n}\nclass Y extends X {\n}\ntrait T {\n    public A|B|int $prop;\n    public function method(A|B|int $arg): A|B|int { }\n    private A|B|int $prop2;\n    private function method2(A|B|int $arg): A|B|int { }\n}\nclass Z {\n    use T;\n}\nclass U extends X {\n    use T;\n}\nclass V extends X {\n    use T;\n    public A|B|int $prop;\n    public function method(A|B|int $arg): A|B|int { }\n    private A|B|int $prop2;\n    private function method2(A|B|int $arg): A|B|int { }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
