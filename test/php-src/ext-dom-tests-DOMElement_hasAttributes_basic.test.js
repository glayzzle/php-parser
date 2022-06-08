// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMElement_hasAttributes_basic.phpt
  it("DOMNode: hasAttributes()", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"dom_test.inc\");\n$dom = new DOMDocument;\n$dom->loadXML($xmlstr);\nif(!$dom) {\n  echo \"Error while parsing the document\\n\";\n  exit;\n}\n$element = $dom->documentElement;\necho \"Verify that we have a DOMElement object:\\n\";\necho get_class($element), \"\\n\";\necho \"\\nElement should have attributes:\\n\";\nvar_dump($element->hasAttributes());\n$nodelist=$dom->getElementsByTagName('tbody') ;\n$element = $nodelist->item(0);\necho \"\\nVerify that we have a DOMElement object:\\n\";\necho get_class($element), \"\\n\";\necho \"\\nElement should have no attributes:\\n\";\nvar_dump($element->hasAttributes());\n?>")).toMatchSnapshot();
  });
});
