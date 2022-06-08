// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/bug74157.phpt
  it("Bug #74157 (Segfault with nested generators)", function () {
    expect(parser.parseCode("<?php\nfunction a() {\n    $a = $b = $c = 2;\n    foreach(range(1, 5) as $v) {\n        yield $v;\n    }\n    return;\n}\nforeach (a(range(1, 3)) as $a) {\n    var_dump($a);\n}\n?>")).toMatchSnapshot();
  });
});
