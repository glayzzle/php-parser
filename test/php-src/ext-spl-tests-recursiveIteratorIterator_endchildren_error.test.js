// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/recursiveIteratorIterator_endchildren_error.phpt
  it("SPL: RecursiveIteratorIterator - Exception thrown in endchildren which should be handled in next()", function () {
    expect(parser.parseCode("<?php\n$arr = array(array(1,2));\n$arrOb = new ArrayObject($arr);\n$recArrIt = new RecursiveArrayIterator($arrOb->getIterator());\nclass MyRecursiveIteratorIterator extends RecursiveIteratorIterator {\n    function endchildren(): void {\n        throw new Exception;\n    }\n}\n$recItIt = new MyRecursiveIteratorIterator($recArrIt, RecursiveIteratorIterator::LEAVES_ONLY, RecursiveIteratorIterator::CATCH_GET_CHILD);\nforeach ($recItIt as $val) echo \"$val\\n\";\n$recItIt2 = new MyRecursiveIteratorIterator($recArrIt, RecursiveIteratorIterator::LEAVES_ONLY);\necho \"===NEXT LOOP===\\n\";\nforeach ($recItIt2 as $val) echo \"$val\\n\";\n?>")).toMatchSnapshot();
  });
});
