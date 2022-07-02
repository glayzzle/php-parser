// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/foreachLoopIterator.002.phpt
  it("foreach with iterator and &$value reference", function () {
    expect(parser.parseCode("<?php\nclass MyIterator implements Iterator {\n    public function valid(): bool { return true; }\n    public function next(): void {}\n    public function rewind(): void {}\n    public function current(): mixed { return null; }\n    public function key(): mixed {return \"\"; }\n}\n$f = new MyIterator;\necho \"-----( Try to iterate with &\\$value: )-----\\n\";\nforeach ($f as $k=>&$v) {\n    echo \"$k => $v\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
