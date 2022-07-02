// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/iterator_key_by_ref.phpt
  it("Iterator::key() with by-ref return", function () {
    expect(parser.parseCode("<?php\nclass Test extends ArrayIterator {\n    #[ReturnTypeWillChange]\n    function &key() {\n        return $foo;\n    }\n}\nforeach (new Test([0]) as $k => $v) {\n    var_dump($k);\n}\n?>")).toMatchSnapshot();
  });
});
