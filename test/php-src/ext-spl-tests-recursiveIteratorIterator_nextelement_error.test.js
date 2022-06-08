// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/recursiveIteratorIterator_nextelement_error.phpt
  it("SPL: RecursiveIteratorIterator - Exception thrown in nextelement which should be handled in next()", function () {
    expect(parser.parseCode("<?php\n$arr = array(1,2);\n$arrOb = new ArrayObject($arr);\n$recArrIt = new RecursiveArrayIterator($arrOb->getIterator());\nclass MyRecursiveIteratorIterator extends RecursiveIteratorIterator {\n    function nextelement(): void {\n        throw new Exception;\n    }\n}\n$recItIt = new MyRecursiveIteratorIterator($recArrIt, RecursiveIteratorIterator::LEAVES_ONLY, RecursiveIteratorIterator::CATCH_GET_CHILD);\nvar_dump($recItIt->next());\n$recItIt = new MyRecursiveIteratorIterator($recArrIt, RecursiveIteratorIterator::LEAVES_ONLY);\nvar_dump($recItIt->next());\n?>")).toMatchSnapshot();
  });
});
