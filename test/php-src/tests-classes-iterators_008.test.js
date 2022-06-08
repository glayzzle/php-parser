// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/iterators_008.phpt
  it("Ensure plain userspace superclass does not override special iterator behaviour on child class.", function () {
    expect(parser.parseCode("<?php\nClass C {}\nclass D extends C implements Iterator {\n  private $counter = 2;\n  public function valid(): bool {\n    echo __METHOD__ . \"($this->counter)\\n\";\n    return $this->counter;\n  }\n  public function next(): void {\n    $this->counter--;\n    echo __METHOD__ . \"($this->counter)\\n\";\n  }\n  public function rewind(): void {\n    echo __METHOD__ . \"($this->counter)\\n\";\n  }\n  public function current(): mixed {\n    echo __METHOD__ . \"($this->counter)\\n\";\n    return null;\n  }\n  public function key(): mixed {\n    echo __METHOD__ . \"($this->counter)\\n\";\n    return \"\";\n  }\n}\nforeach (new D as $x) {}\n?>")).toMatchSnapshot();
  });
});
