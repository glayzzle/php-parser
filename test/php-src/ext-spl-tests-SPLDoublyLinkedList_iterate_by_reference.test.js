// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SPLDoublyLinkedList_iterate_by_reference.phpt
  it("SplDoublyLinkedList Iterating a DLL by reference shouldn't be permitted", function () {
    expect(parser.parseCode("<?php\n$dll = new SplDoublyLinkedList();\n$dll->push(2);\n$dll->push(3);\ntry {\n    foreach($dll as $key => &$value) {\n        // We should never see this output, because the \"by reference\" exception should be thrown in the previous line\n        echo $value, PHP_EOL;\n        $value *= $value;\n        echo $value, PHP_EOL;\n    }\n} catch (\\Error $e) {\n    echo $e->getMessage(), PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
