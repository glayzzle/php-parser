// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/generator_method.phpt
  it("Methods can be generators", function () {
    expect(parser.parseCode("<?php\nclass Test implements IteratorAggregate {\n    protected $data;\n    public function __construct(array $data) {\n        $this->data = $data;\n    }\n    public function getIterator(): Traversable {\n        foreach ($this->data as $value) {\n            yield $value;\n        }\n    }\n}\n$test = new Test(['foo', 'bar', 'baz']);\nforeach ($test as $value) {\n    var_dump($value);\n}\n?>")).toMatchSnapshot();
  });
});
