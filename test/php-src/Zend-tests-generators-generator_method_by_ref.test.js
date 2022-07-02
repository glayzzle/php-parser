// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/generator_method_by_ref.phpt
  it("Generator methods can yield by reference", function () {
    expect(parser.parseCode("<?php\nclass Test implements IteratorAggregate {\n    protected $data;\n    public function __construct(array $data) {\n        $this->data = $data;\n    }\n    public function getData() {\n        return $this->data;\n    }\n    public function &getIterator(): Traversable {\n        foreach ($this->data as $key => &$value) {\n            yield $key => $value;\n        }\n    }\n}\n$test = new Test([1, 2, 3, 4, 5]);\nforeach ($test as &$value) {\n    $value *= -1;\n}\nvar_dump($test->getData());\n?>")).toMatchSnapshot();
  });
});
