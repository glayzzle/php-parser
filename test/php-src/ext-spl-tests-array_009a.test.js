// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_009a.phpt
  it("SPL: ArrayIterator implementing RecursiveIterator", function () {
    expect(parser.parseCode("<?php\nclass MyRecursiveArrayIterator extends ArrayIterator implements RecursiveIterator\n{\n    function hasChildren(): bool\n    {\n        return is_array($this->current());\n    }\n    function getChildren(): MyRecursiveArrayIterator\n    {\n        return new MyRecursiveArrayIterator($this->current());\n    }\n}\n$array = array(1, 2 => array(21, 22 => array(221, 222), 23 => array(231)), 3);\n$dir = new RecursiveIteratorIterator(new MyRecursiveArrayIterator($array), RecursiveIteratorIterator::LEAVES_ONLY);\nforeach ($dir as $file) {\n    print \"$file\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
