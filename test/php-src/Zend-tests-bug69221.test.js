// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69221.phpt
  it("Bug #69221: Segmentation fault when using a generator in combination with an Iterator", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield 1;\n};\n$gen1 = gen();\n$gen2 = (object) $gen1;\nforeach ($gen1 as $v1) {\n    foreach ($gen2 as $v2) {\n        break 2;\n    }\n}\nunset($gen1);\nforeach ($gen2 as $v) { var_dump($v); }\n?>")).toMatchSnapshot();
  });
});
