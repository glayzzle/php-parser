// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/RecursiveIteratorIterator_invalid_aggregate.phpt
  it("RecursiveIteratorIterator constructor should thrown if IteratorAggregate does not return Iterator", function () {
    expect(parser.parseCode("<?php\nclass MyIteratorAggregate implements IteratorAggregate {\n    #[ReturnTypeWillChange]\n    function getIterator() {\n        return null;\n    }\n}\ntry {\n    new RecursiveIteratorIterator(new MyIteratorAggregate);\n} catch (LogicException $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
