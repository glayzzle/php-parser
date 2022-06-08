// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/recursiveiteratoriterator_beginiteration_basic.phpt
  it("SPL: RecursiveIteratorIterator::beginIteration() is called by RecursiveIteratorIterator::rewind()", function () {
    expect(parser.parseCode("<?php\n$sample_array = array(1, 2);\n$sub_iterator = new RecursiveArrayIterator($sample_array);\n$iterator = new RecursiveIteratorIterator($sub_iterator);\nforeach ($iterator as $element) {\n  var_dump($element);\n}\nclass SkipsFirstElementRecursiveIteratorIterator extends RecursiveIteratorIterator {\n  public function beginIteration(): void {\n    echo \"::beginIteration() was invoked\\n\";\n    $this->next();\n  }\n}\n$iterator = new SkipsFirstElementRecursiveIteratorIterator($sub_iterator);\nforeach ($iterator as $element) {\n  var_dump($element);\n}\n?>")).toMatchSnapshot();
  });
});
