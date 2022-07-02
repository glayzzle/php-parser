// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/foreachLoopIteratorAggregate.002.phpt
  it("IteratorAggregate::getIterator bad return type", function () {
    expect(parser.parseCode("<?php\nclass bad1 implements IteratorAggregate {\n    #[ReturnTypeWillChange]\n    function getIterator() {\n        return null;\n    }\n}\nclass bad2 implements IteratorAggregate {\n    #[ReturnTypeWillChange]\n    function getIterator() {\n        return new stdClass;\n    }\n}\nclass bad3 implements IteratorAggregate {\n    #[ReturnTypeWillChange]\n    function getIterator() {\n        return 1;\n    }\n}\nclass bad4 implements IteratorAggregate {\n    #[ReturnTypeWillChange]\n    function getIterator() {\n        return array(1,2,3);\n    }\n}\nfunction f($className) {\n    try {\n        foreach (new $className as $k=>$v) {\n            echo \"$k => $v\\n\";\n        }\n    } catch (Exception $e) {\n            echo $e->getLine() . \": \" . $e->getMessage() .\"\\n\";\n    }\n}\nf(\"bad1\");\nf(\"bad2\");\nf(\"bad3\");\nf(\"bad4\");\n?>")).toMatchSnapshot();
  });
});
