// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug76667.phpt
  it("Bug #76667 (Segfault with divide-assign op and __get + __set)", function () {
    expect(parser.parseCode("<?php\nclass T {\n    public function __get($k)\n    {\n        return $undefined->$k;\n    }\n    public function __set($k, $v)\n    {\n        return $this->$v /= 0;\n    }\n}\n$x = new T;\ntry {\n    $x->x = 1;\n} catch (\\DivisionByZeroError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
