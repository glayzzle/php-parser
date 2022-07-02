// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/generator_with_keys.phpt
  it("Generators can also yield keys", function () {
    expect(parser.parseCode("<?php\nfunction reverse(array $array) {\n    end($array);\n    while (null !== $key = key($array)) {\n        yield $key => current($array);\n        prev($array);\n    }\n}\n$array = [\n    'foo' => 'bar',\n    'bar' => 'foo',\n];\nforeach (reverse($array) as $key => $value) {\n    echo $key, ' => ', $value, \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
