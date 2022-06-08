// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/recursiveiteratoriterator_enditeration_basic.phpt
  it("SPL: RecursiveIteratorIterator::endIteration() is called when ::valid() first returns false", function () {
    expect(parser.parseCode("<?php\n$sample_array = array(1, 2);\n$sub_iterator = new RecursiveArrayIterator($sample_array);\n$iterator = new RecursiveIteratorIterator($sub_iterator);\nforeach ($iterator as $element) {\n  var_dump($element);\n}\nclass EndIterationRecursiveIteratorIterator extends RecursiveIteratorIterator {\n  public function endIteration(): void {\n    echo \"::endIteration() was invoked\\n\";\n  }\n}\n$iterator = new EndIterationRecursiveIteratorIterator($sub_iterator);\nforeach ($iterator as $element) {\n  var_dump($element);\n}\n?>")).toMatchSnapshot();
  });
});
