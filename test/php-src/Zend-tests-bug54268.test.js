// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug54268.phpt
  it("Bug #54268 (Double free when destroy_zend_class fails)", function () {
    expect(parser.parseCode("<?php\nclass DestructableObject\n{\n        public function __destruct()\n        {\n                DestructableObject::__destruct();\n        }\n}\nclass DestructorCreator\n{\n        public function __destruct()\n        {\n                $this->test = new DestructableObject;\n        }\n}\nclass Test\n{\n        public static $mystatic;\n}\n$x = new Test();\nTest::$mystatic = new DestructorCreator();\n?>")).toMatchSnapshot();
  });
});
