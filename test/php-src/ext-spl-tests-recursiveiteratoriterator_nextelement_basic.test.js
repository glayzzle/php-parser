// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/recursiveiteratoriterator_nextelement_basic.phpt
  it("SPL: RecursiveIteratorIterator::nextElement() is called when the next element is ready", function () {
    expect(parser.parseCode("<?php\n$sample_array = array(1, 2, array(3, 4));\n$sub_iterator = new RecursiveArrayIterator($sample_array);\n$iterator = new RecursiveIteratorIterator($sub_iterator);\nforeach ($iterator as $element) {\n  var_dump($element);\n}\nclass NextElementRecursiveIteratorIterator extends RecursiveIteratorIterator {\n  public function nextElement(): void {\n    echo \"::nextElement() was invoked\\n\";\n  }\n}\n$iterator = new NextElementRecursiveIteratorIterator($sub_iterator);\nforeach ($iterator as $element) {\n  var_dump($element);\n}\n?>")).toMatchSnapshot();
  });
});
