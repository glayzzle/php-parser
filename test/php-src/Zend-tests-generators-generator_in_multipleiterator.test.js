// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/generator_in_multipleiterator.phpt
  it("Generators work properly in MultipleIterator", function () {
    expect(parser.parseCode("<?php\nfunction gen1() {\n    yield 'a';\n    yield 'aa';\n}\nfunction gen2() {\n    yield 'b';\n    yield 'bb';\n}\n$it = new MultipleIterator;\n$it->attachIterator(gen1());\n$it->attachIterator(gen2());\nforeach ($it as $values) {\n    var_dump($values);\n}\n?>")).toMatchSnapshot();
  });
});
