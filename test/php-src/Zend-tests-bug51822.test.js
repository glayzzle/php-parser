// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug51822.phpt
  it("Bug #51822 (Segfault with strange __destruct() for static class variables)", function () {
    expect(parser.parseCode("<?php\nclass DestructableObject\n{\n    public function __destruct()\n    {\n        echo \"2\\n\";\n    }\n}\nclass DestructorCreator\n{\n    public function __destruct()\n    {\n        $this->test = new DestructableObject;\n        echo \"1\\n\";\n    }\n}\nclass Test\n{\n    public static $mystatic;\n}\n// Uncomment this to avoid segfault\n//Test::$mystatic = new DestructorCreator();\n$x = new Test();\nif (!isset(Test::$mystatic))\n    Test::$mystatic = new DestructorCreator();\necho \"bla\\n\";\n?>")).toMatchSnapshot();
  });
});
