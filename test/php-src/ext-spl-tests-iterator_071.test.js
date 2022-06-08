// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_071.phpt
  it("SPL: RecursiveIteratorIterator - Test where the case is RS_SELF and mode is CHILD_FIRST", function () {
    expect(parser.parseCode("<?php\n$arr = array(array(1,2),2);\n$arrOb = new ArrayObject($arr);\n$recArrIt = new RecursiveArrayIterator($arrOb->getIterator());\nclass MyRecursiveIteratorIterator extends RecursiveIteratorIterator {\n    function nextelement(): void {\n        echo __METHOD__.\"\\n\";\n    }\n}\n$recItIt = new MyRecursiveIteratorIterator($recArrIt, RecursiveIteratorIterator::CHILD_FIRST);\nforeach ($recItIt as $key => $val) echo \"$key\\n\";\n?>")).toMatchSnapshot();
  });
});
