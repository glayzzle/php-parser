// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_069.phpt
  it("SPL: RecursiveIteratorIterator cannot be used with foreach by reference", function () {
    expect(parser.parseCode("<?php\n$arr = array(array(1,2));\n$arrOb = new ArrayObject($arr);\n$recArrIt = new RecursiveArrayIterator($arrOb->getIterator());\n$recItIt = new RecursiveIteratorIterator($recArrIt);\nforeach ($recItIt as &$val) echo \"$val\\n\";\n?>")).toMatchSnapshot();
  });
});
