// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug37457.phpt
  it("Bug #37457 (Crash when an exception is thrown in accept() method of FilterIterator)", function () {
    expect(parser.parseCode("<?php\nclass Collection implements Iterator\n{\n    protected $array, $valid = false;\n    public function __construct(array $a)\n    {\n        echo __METHOD__ . \"\\n\";\n        $this->array = $a;\n    }\n    public function current(): mixed\n    {\n        echo __METHOD__ . \"\\n\";\n        return current($this->array);\n    }\n    public function key(): mixed\n    {\n        echo __METHOD__ . \"\\n\";\n        return key($this->array);\n    }\n    public function next(): void\n    {\n        echo __METHOD__ . \"\\n\";\n        $this->valid = (false !== next($this->array));\n    }\n    public function valid(): bool\n    {\n        echo __METHOD__ . \"\\n\";\n        return $this->valid;\n    }\n    public function rewind(): void\n    {\n        echo __METHOD__ . \"\\n\";\n        $this->valid = (false !== reset($this->array));\n    }\n}\nclass TestFilter extends FilterIterator\n{\n    public function accept(): bool\n    {\n        echo __METHOD__ . \"\\n\";\n        throw new Exception(\"Failure in Accept\");\n    }\n}\n$test = new TestFilter(new Collection(array(0)));\ntry\n{\n    foreach ($test as $item)\n    {\n        echo $item;\n    }\n}\ncatch (Exception $e)\n{\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
