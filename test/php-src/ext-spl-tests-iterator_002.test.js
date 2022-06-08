// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_002.phpt
  it("SPL: Iterator using getInnerIterator", function () {
    expect(parser.parseCode("<?php\nclass RecursiceArrayIterator extends ArrayIterator implements RecursiveIterator\n{\n    function hasChildren(): bool\n    {\n        return is_array($this->current());\n    }\n    function getChildren(): RecursiceArrayIterator\n    {\n        return new RecursiceArrayIterator($this->current());\n    }\n}\nclass CrashIterator extends FilterIterator implements RecursiveIterator\n{\n    function accept(): bool\n    {\n        return true;\n    }\n    function hasChildren(): bool\n    {\n        return $this->getInnerIterator()->hasChildren();\n    }\n    function getChildren(): RecursiceArrayIterator\n    {\n        return new RecursiceArrayIterator($this->getInnerIterator()->current());\n    }\n}\n$array = array(1, 2 => array(21, 22 => array(221, 222), 23 => array(231)), 3);\n$dir = new RecursiveIteratorIterator(new CrashIterator(new RecursiceArrayIterator($array)), RecursiveIteratorIterator::LEAVES_ONLY);\nforeach ($dir as $file) {\n    print \"$file\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
