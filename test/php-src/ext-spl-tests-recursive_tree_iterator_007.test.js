// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/recursive_tree_iterator_007.phpt
  it("SPL: RecursiveTreeIterator and Exception from getEntry()", function () {
    expect(parser.parseCode("<?php\n$ary = array(new stdClass);\nclass RecursiveArrayIteratorAggregated implements IteratorAggregate {\n    public $it;\n    function __construct($it) {\n        $this->it = new RecursiveArrayIterator($it);\n    }\n    function getIterator(): Traversable {\n        return $this->it;\n    }\n}\n$it = new RecursiveArrayIteratorAggregated($ary);\ntry {\n    foreach(new RecursiveTreeIterator($it) as $k => $v) {\n        echo \"[$k] => $v\\n\";\n    }\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
