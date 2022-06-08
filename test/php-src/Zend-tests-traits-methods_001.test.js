// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/methods_001.phpt
  it("Testing magic method on trait", function () {
    expect(parser.parseCode("<?php\ntrait foo {\n    public function __toString() {\n        return '123';\n    }\n    public function __get($x) {\n        var_dump($x);\n    }\n    public function __set($attr, $val) {\n        var_dump($attr .'==='. $val);\n    }\n    public function __clone() {\n        var_dump(__FUNCTION__);\n    }\n}\nclass bar {\n    use foo;\n}\n$o = new bar;\necho $o, PHP_EOL;\n$o->xyz;\n$o->xyz = 2;\nclone $o;\n?>")).toMatchSnapshot();
  });
});
