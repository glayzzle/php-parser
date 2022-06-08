// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplStack_setIteratorMode.phpt
  it("Check that SplStack can't be set to FIFO", function () {
    expect(parser.parseCode("<?php\n$stack = new SplStack();\ntry {\n  $stack->setIteratorMode(SplDoublyLinkedList::IT_MODE_FIFO);\n} catch (Exception $e) {\n  echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
