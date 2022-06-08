// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMNode_issamenode_basic.phpt
  it("DOMNode: isSameNode()", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"dom_test.inc\");\n$dom = new DOMDocument;\n$dom->loadXML($xmlstr);\nif(!$dom) {\n  echo \"Error while parsing the document\\n\";\n  exit;\n}\n$node = $dom->documentElement;\nif($node->isSameNode($node))\n    echo \"EXPECTING SAME NODE, PASSED\\n\" ;\nelse\n    echo \"EXPECTING SAME NODE, FAILED\\n\" ;\n$nodelist=$dom->getElementsByTagName('tbody') ;\nif($nodelist->item(0)->isSameNode($node))\n    echo \"EXPECTING NOT SAME NODE, FAILED\\n\" ;\nelse\n    echo \"EXPECTING NOT SAME NODE, PASSED\\n\" ;\n?>")).toMatchSnapshot();
  });
});
