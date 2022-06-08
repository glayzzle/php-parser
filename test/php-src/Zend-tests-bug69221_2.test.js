// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69221_2.phpt
  it("Bug #69221: Segmentation fault when using a generator in combination with an Iterator (2)", function () {
    expect(parser.parseCode("<?php\n$gen = function() {\n    yield 1;\n};\n$iter = new IteratorIterator($gen());\n$ngen = $iter->getInnerIterator();\nvar_dump(iterator_to_array($ngen, false));\n?>")).toMatchSnapshot();
  });
});
