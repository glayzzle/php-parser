// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/RecursiveIteratorIterator_dtor_order.phpt
  it("Handle object_iterator being destroyed before the RecursiveIteratorIterator object", function () {
    expect(parser.parseCode("<?php\n$dummy = new stdClass; // Dummy object to control object store ordering\n$it = new RecursiveIteratorIterator(new RecursiveArrayIterator([1]));\nunset($dummy);\nforeach ($it as $v) {\n    eval('class self {}'); // Cause a bailout.\n}\n?>")).toMatchSnapshot();
  });
});
