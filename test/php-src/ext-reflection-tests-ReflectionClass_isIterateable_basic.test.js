// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_isIterateable_basic.phpt
  it("ReflectionClass::isIterateable() basic", function () {
    expect(parser.parseCode("<?php\nclass IteratorClass implements Iterator {\n    public function __construct() { }\n    public function key(): mixed {}\n    public function current(): mixed {}\n    function next(): void {}\n    function valid(): bool {}\n    function rewind(): void {}\n}\nclass DerivedClass extends IteratorClass {}\nclass NonIterator {}\nfunction dump_iterateable($class) {\n    $reflection = new ReflectionClass($class);\n    var_dump($reflection->isIterateable());\n}\n$classes = array(\"ArrayObject\", \"IteratorClass\", \"DerivedClass\", \"NonIterator\");\nforeach ($classes as $class) {\n    echo \"Is $class iterateable? \";\n    dump_iterateable($class);\n}\n?>")).toMatchSnapshot();
  });
});
