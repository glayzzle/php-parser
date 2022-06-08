// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug42703.phpt
  it("Bug #42703 (Exception raised in an iterator::current() causes segfault in FilterIterator)", function () {
    expect(parser.parseCode("<?php\nclass BlaIterator implements Iterator\n{\n    public function rewind(): void { }\n    public function next(): void { }\n    public function valid(): bool {\n        return true;\n    }\n    public function current(): mixed\n    {\n      throw new Exception('boo');\n    }\n    public function key(): mixed { return null; }\n}\n$it = new BlaIterator();\n$itit = new IteratorIterator($it);\ntry {\n  foreach($itit as $key => $value) {\n    echo $key, $value;\n  }\n}\ncatch (Exception $e) {\n    var_dump($e->getMessage());\n}\nvar_dump($itit->current());\nvar_dump($itit->key());\n?>")).toMatchSnapshot();
  });
});
