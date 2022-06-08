// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug45706.phpt
  it("Bug #45706 Unserialization of classes derived from ArrayIterator fails", function () {
    expect(parser.parseCode("<?php\nclass Foo1 extends ArrayIterator\n{\n}\nclass Foo2 {\n}\n$x = array(new Foo1(),new Foo2);\n$s = serialize($x);\n$s = str_replace(\"Foo\", \"Bar\", $s);\n$y = unserialize($s);\nvar_dump($y);\n?>")).toMatchSnapshot();
  });
});
