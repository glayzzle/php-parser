// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplDoublyLinkedList_bottom_empty.phpt
  it("SplDoublyLinkedList::bottom empty", function () {
    expect(parser.parseCode("<?php\ntry {\n    (new SplDoublyLinkedList)->bottom();\n} catch (RuntimeException $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
