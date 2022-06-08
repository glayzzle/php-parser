// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug73629.phpt
  it("Bug #73629 (SplDoublyLinkedList::setIteratorMode masks intern flags)", function () {
    expect(parser.parseCode("<?php\n$q = new SplQueue();\ntry {\n    $q->setIteratorMode(SplDoublyLinkedList::IT_MODE_FIFO);\n} catch (Exception $e) {\n    echo 'unexpected exception: ' . $e->getMessage() . \"\\n\";\n}\ntry {\n    $q->setIteratorMode(SplDoublyLinkedList::IT_MODE_LIFO);\n} catch (Exception $e) {\n    echo 'expected exception: ' . $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
