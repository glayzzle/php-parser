// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug69180.phpt
  it("Bug #69180: Reflection does not honor trait conflict resolution / method aliasing", function () {
    expect(parser.parseCode("<?php\ntrait T1\n{\n    public function foo()\n    {\n    }\n}\ntrait T2\n{\n    use T1 { foo as bar; }\n    public function foo()\n    {\n    }\n}\nclass C\n{\n    use T2;\n}\n$class = new ReflectionClass('C');\nforeach ($class->getMethods() as $method) {\n    var_dump($method->getName());\n}\n?>")).toMatchSnapshot();
  });
});
