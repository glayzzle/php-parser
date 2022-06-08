// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug72957.phpt
  it("Bug #72957: Null coalescing operator doesn't behave as expected with SimpleXMLElement", function () {
    expect(parser.parseCode("<?php\n$xml = new SimpleXMLElement('<root><elem>Text</elem></root>');\necho 'elem2 is: ' . ($xml->elem2 ?? 'backup string') . \"\\n\";\necho 'elem2 is: ' . (isset($xml->elem2) ? $xml->elem2 : 'backup string') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
