// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug61165.phpt
  it("Bug #61165 (Segfault - strip_tags())", function () {
    expect(parser.parseCode("<?php\n$handler = NULL;\nclass T {\n    public $_this;\n    public function __toString() {\n        global $handler;\n        $handler = $this;\n        $this->_this = $this; // <-- uncomment this\n        return 'A';\n    }\n}\n$t = new T;\nfor ($i = 0; $i < 3; $i++) {\n    strip_tags($t);\n    strip_tags(new T);\n}\nvar_dump($handler);\n?>")).toMatchSnapshot();
  });
});
