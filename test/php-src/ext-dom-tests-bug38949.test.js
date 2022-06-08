// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug38949.phpt
  it("Bug #38949 (Cannot get xmlns value attribute)", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument();\n$doc->load(__DIR__.\"/nsdoc.xml\");\n$root = $doc->documentElement;\necho $root->getAttribute(\"xmlns\").\"\\n\";\necho $root->getAttribute(\"xmlns:ns2\").\"\\n\";\n$child = $root->firstChild->nextSibling;\necho $child->getAttribute(\"xmlns\").\"\\n\";\necho $child->getAttribute(\"xmlns:ns2\").\"\\n\";\necho \"DONE\\n\";\n?>")).toMatchSnapshot();
  });
});
