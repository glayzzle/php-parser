// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplDoublyLinkedList_top_empty.phpt
  it("SplDoublyLinkedList::top empty", function () {
    expect(parser.parseCode("<?php\ntry {\n    (new SplDoublyLinkedList)->top();\n} catch (RuntimeException $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
