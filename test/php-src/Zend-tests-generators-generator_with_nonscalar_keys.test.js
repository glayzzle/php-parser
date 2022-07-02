// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/generator_with_nonscalar_keys.phpt
  it("Generators can return non-scalar keys", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield [1, 2, 3] => [4, 5, 6];\n    yield (object) ['a' => 'b'] => (object) ['b' => 'a'];\n    yield 3.14 => 2.73;\n    yield false => true;\n    yield true => false;\n    yield null => null;\n}\nforeach (gen() as $k => $v) {\n    var_dump($k, $v);\n}\n?>")).toMatchSnapshot();
  });
});
