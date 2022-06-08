// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_038.phpt
  it("SPL: RoRewindIterator and string keys", function () {
    expect(parser.parseCode("<?php\nforeach(new NoRewindIterator(new ArrayIterator(array('Hello'=>0, 'World'=>1))) as $k => $v)\n{\n    var_dump($v);\n    var_dump($k);\n}\n?>")).toMatchSnapshot();
  });
});
