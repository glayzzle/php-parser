// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/recursive_tree_iterator_006.phpt
  it("SPL: RecursiveTreeIterator and IteratorAggregate", function () {
    expect(parser.parseCode("<?php\n$ary = array(\n    0 => array(\n        \"a\",\n        1,\n    ),\n    \"a\" => array(\n        2,\n        \"b\",\n        3 => array(\n            4,\n            \"c\",\n        ),\n        \"3\" => array(\n            4,\n            \"c\",\n        ),\n    ),\n);\nclass RecursiveArrayIteratorAggregated implements IteratorAggregate {\n    public $it;\n    function __construct($it) {\n        $this->it = new RecursiveArrayIterator($it);\n    }\n    function getIterator(): Traversable {\n        return $this->it;\n    }\n}\n$it = new RecursiveArrayIteratorAggregated($ary);\necho \"-- flags = BYPASS_KEY --\\n\";\nforeach(new RecursiveTreeIterator($it) as $k => $v) {\n    echo \"[$k] => $v\\n\";\n}\necho \"-- flags = BYPASS_CURRENT --\\n\";\nforeach(new RecursiveTreeIterator($it, RecursiveTreeIterator::BYPASS_CURRENT) as $k => $v) {\n    echo \"[$k] => $v\\n\";\n}\necho \"-- flags = BYPASS_KEY|BYPASS_KEY --\\n\";\nforeach(new RecursiveTreeIterator($it, RecursiveTreeIterator::BYPASS_CURRENT|RecursiveTreeIterator::BYPASS_KEY) as $k => $v) {\n    echo \"[$k] => $v\\n\";\n}\necho \"-- flags = 0 --\\n\";\nforeach(new RecursiveTreeIterator($it, 0) as $k => $v) {\n    echo \"[$k] => $v\\n\";\n}\necho \"-- flags = 0, caching_it_flags = CachingIterator::CATCH_GET_CHILD --\\n\";\nforeach(new RecursiveTreeIterator($it, 0, CachingIterator::CATCH_GET_CHILD) as $k => $v) {\n    echo \"[$k] => $v\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
