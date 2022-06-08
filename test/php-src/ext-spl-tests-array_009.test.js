// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_009.phpt
  it("SPL: ArrayIterator implementing RecursiveIterator", function () {
    expect(parser.parseCode("<?php\n$array = array(1, 2 => array(21, 22 => array(221, 222), 23 => array(231)), 3);\n$dir = new RecursiveIteratorIterator(new RecursiveArrayIterator($array), RecursiveIteratorIterator::LEAVES_ONLY);\nforeach ($dir as $file) {\n    print \"$file\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
