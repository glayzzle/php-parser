// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_isIterateable_001.phpt
  it("ReflectionClass::isIterateable()", function () {
    expect(parser.parseCode("<?php\nInterface ExtendsIterator extends Iterator {\n}\nInterface ExtendsIteratorAggregate extends IteratorAggregate {\n}\nClass IteratorImpl implements Iterator {\n    public function next(): void {}\n    public function key(): mixed {}\n    public function rewind(): void {}\n    public function current(): mixed {}\n    public function valid(): bool {}\n}\nClass IteratorAggregateImpl implements IteratorAggregate {\n    public function getIterator(): Traversable {}\n}\nClass ExtendsIteratorImpl extends IteratorImpl {\n}\nClass ExtendsIteratorAggregateImpl extends IteratorAggregateImpl {\n}\nClass A {\n}\n$classes = array('Traversable', 'Iterator', 'IteratorAggregate', 'ExtendsIterator', 'ExtendsIteratorAggregate',\n      'IteratorImpl', 'IteratorAggregateImpl', 'ExtendsIteratorImpl', 'ExtendsIteratorAggregateImpl', 'A');\nforeach($classes as $class) {\n    $rc = new ReflectionClass($class);\n    echo \"Is $class iterable? \";\n    var_dump($rc->isIterateable());\n}\necho \"\\nTest static invocation:\\n\";\nReflectionClass::isIterateable();\n?>")).toMatchSnapshot();
  });
});
