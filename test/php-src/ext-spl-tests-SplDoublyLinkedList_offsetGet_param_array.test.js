// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplDoublyLinkedList_offsetGet_param_array.phpt
  it("SplDoublyLinkedList::offsetGet() with 1st parameter passed as array.", function () {
    expect(parser.parseCode("<?php\n$array = new SplDoublyLinkedList( );\n$get = $array->offsetGet( array( 'fail' ) );\n?>")).toMatchSnapshot();
  });
});
