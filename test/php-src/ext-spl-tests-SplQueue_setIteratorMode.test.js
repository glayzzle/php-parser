// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplQueue_setIteratorMode.phpt
  it("Check that SplQueue can't be set to LIFO", function () {
    expect(parser.parseCode("<?php\n$queue = new SplQueue();\ntry {\n  $queue->setIteratorMode(SplDoublyLinkedList::IT_MODE_LIFO);\n} catch (Exception $e) {\n  echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
