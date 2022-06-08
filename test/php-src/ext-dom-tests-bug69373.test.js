// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug69373.phpt
  it("Bug #69373 References to deleted XPath query results", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument();\nfor( $i=0; $i<20; $i++ ) {\n    $doc->loadXML(\"<parent><child /><child /></parent>\");\n    $xpath = new DOMXpath($doc);\n    $all = $xpath->query('//*');\n    $doc->firstChild->nodeValue = '';\n}\necho 'DONE', PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
