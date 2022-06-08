// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplDoublyLinkedList_add_null_offset.phpt
  it("Check that SplDoublyLinkedList::add throws an exception with an invalid offset argument", function () {
    expect(parser.parseCode("<?php\ntry {\n    $dll = new SplDoublyLinkedList();\n    var_dump($dll->add([],2));\n} catch (TypeError $e) {\n    echo \"Exception: \".$e->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
