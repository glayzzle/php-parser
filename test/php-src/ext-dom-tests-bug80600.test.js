// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug80600.phpt
  it("dom: DOMChildNode::remove does not work on character data", function () {
    expect(parser.parseCode("<?php\n$doc = new \\DOMDocument();\n$doc->loadXML('<a><!-- foo --></a>');\n$doc->documentElement->firstChild->remove();\necho $doc->saveXML($doc->documentElement);")).toMatchSnapshot();
  });
});
