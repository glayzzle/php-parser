// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_033.phpt
  it("SPL: ParentIterator", function () {
    expect(parser.parseCode("<?php\n$it = new ParentIterator(new RecursiveArrayIterator(array(1,array(21,22, array(231)),3)));\nforeach(new RecursiveIteratorIterator($it) as $k=>$v)\n{\n    var_dump($k);\n    var_dump($v);\n}\necho \"==SECOND==\\n\";\nforeach(new RecursiveIteratorIterator($it, 1) as $k=>$v)\n{\n    var_dump($k);\n    var_dump($v);\n}\n?>")).toMatchSnapshot();
  });
});
