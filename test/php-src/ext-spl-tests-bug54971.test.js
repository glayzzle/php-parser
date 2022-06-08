// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug54971.phpt
  it("Bug #54971 (Wrong result when using iterator_to_array with use_keys on true)", function () {
    expect(parser.parseCode("<?php\n$source = <<<XML\n<root>\n<node>val1</node>\n<node>val2</node>\n</root>\nXML;\n$doc = new DOMDocument();\n$doc->loadXML($source);\n$xpath = new DOMXPath($doc);\n$items = $xpath->query('//node');\nprint_r(array_map('get_class', iterator_to_array($items, false)));\nprint_r(array_map('get_class', iterator_to_array($items, true)));\n?>")).toMatchSnapshot();
  });
});
