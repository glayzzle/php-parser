// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug81587.phpt
  it("Bug #81587: MultipleIterator Segmentation fault w/ SimpleXMLElement attached", function () {
    expect(parser.parseCode("<?php\n$mi = new MultipleIterator();\n$mi->attachIterator(new SimpleXMLElement('<x><y/></x>'));\nforeach ($mi as $v) {\n    var_dump($v);\n}\n?>")).toMatchSnapshot();
  });
});
