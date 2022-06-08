// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplQueue_setIteratorMode_param_lifo.phpt
  it("SplQueue setIteratorMode to LIFO produces fail condition in try/catch", function () {
    expect(parser.parseCode("<?php\ntry {\n    $dll = new SplQueue();\n    $dll->setIteratorMode(SplDoublyLinkedList::IT_MODE_LIFO);\n} catch (Exception $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
