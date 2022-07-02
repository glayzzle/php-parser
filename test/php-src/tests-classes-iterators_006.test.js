// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/iterators_006.phpt
  it("ZE2 iterators and array wrapping", function () {
    expect(parser.parseCode("<?php\nclass ai implements Iterator {\n    private $array;\n    function __construct() {\n        $this->array = array('foo', 'bar', 'baz');\n    }\n    function rewind(): void {\n        reset($this->array);\n        $this->next();\n    }\n    function valid(): bool {\n        return $this->key !== NULL;\n    }\n    function key(): mixed {\n        return $this->key;\n    }\n    function current(): mixed {\n        return $this->current;\n    }\n    function next(): void {\n        $this->key = key($this->array);\n        $this->current = current($this->array);\n        next($this->array);\n    }\n}\nclass a implements IteratorAggregate {\n    public function getIterator(): Traversable {\n        return new ai();\n    }\n}\n$array = new a();\nforeach ($array as $property => $value) {\n    print \"$property: $value\\n\";\n}\n#$array = $array->getIterator();\n#$array->rewind();\n#$array->valid();\n#var_dump($array->key());\n#var_dump($array->current());\necho \"===2nd===\\n\";\n$array = new ai();\nforeach ($array as $property => $value) {\n    print \"$property: $value\\n\";\n}\necho \"===3rd===\\n\";\nforeach ($array as $property => $value) {\n    print \"$property: $value\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
