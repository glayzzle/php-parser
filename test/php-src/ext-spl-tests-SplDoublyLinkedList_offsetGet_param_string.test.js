// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplDoublyLinkedList_offsetGet_param_string.phpt
  it("SplDoublyLinkedList::offsetGet() with 1st parameter passed as string.", function () {
    expect(parser.parseCode("<?php\n$array = new SplDoublyLinkedList( );\n$get = $array->offsetGet( 'fail' );\n?>")).toMatchSnapshot();
  });
});
