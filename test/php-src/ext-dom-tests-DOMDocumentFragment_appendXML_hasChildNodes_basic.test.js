// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocumentFragment_appendXML_hasChildNodes_basic.phpt
  it("Testing DOMDocumentFragment::appendXML and DOMDocumentFragment::hasChildNodes", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument();\n$fragment = $doc->createDocumentFragment();\nif ($fragment->hasChildNodes()) {\n  echo \"has child nodes\\n\";\n} else {\n  echo \"has no child nodes\\n\";\n}\n$fragment->appendXML('<foo>bar</foo>');\nif ($fragment->hasChildNodes()) {\n  echo \"has child nodes\\n\";\n} else {\n  echo \"has no child nodes\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
