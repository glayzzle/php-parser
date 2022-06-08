// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_006.phpt
  it("SPL: IteratorIterator and SimpleXMlElement", function () {
    expect(parser.parseCode("<?php\n$root = simplexml_load_string('<?xml version=\"1.0\"?>\n<root>\n <child>Hello</child>\n <child>World</child>\n</root>\n');\nforeach (new IteratorIterator($root->child) as $child) {\n    echo $child.\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
