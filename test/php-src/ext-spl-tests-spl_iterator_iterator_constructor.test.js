// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_iterator_iterator_constructor.phpt
  it("SPL: IteratorInterator constructor checks", function () {
    expect(parser.parseCode("<?php\n$array = array(array(7,8,9),1,2,3,array(4,5,6));\n$arrayIterator = new ArrayIterator($array);\ntry {\n    $test = new IteratorIterator($arrayIterator);\n    $test = new IteratorIterator($arrayIterator, 1);\n    $test = new IteratorIterator($arrayIterator, 1, 1);\n    $test = new IteratorIterator($arrayIterator, 1, 1, 1);\n    $test = new IteratorIterator($arrayIterator, 1, 1, 1, 1);\n} catch (TypeError $e){\n  echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
