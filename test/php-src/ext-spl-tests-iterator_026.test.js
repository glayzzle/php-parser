// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_026.phpt
  it("SPL: CachingIterator::hasNext()", function () {
    expect(parser.parseCode("<?php\n$ar = array(1, 2, array(31, 32, array(331)), 4);\n$it = new RecursiveArrayIterator($ar);\n$it = new RecursiveCachingIterator($it);\n$it = new RecursiveIteratorIterator($it);\nforeach($it as $k=>$v)\n{\n    echo \"$k=>$v\\n\";\n    echo \"hasNext: \" . ($it->getInnerIterator()->hasNext() ? \"yes\" : \"no\") . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
