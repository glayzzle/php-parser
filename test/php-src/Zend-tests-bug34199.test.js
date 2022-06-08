// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug34199.phpt
  it("Bug #34199 (if($obj)/if(!$obj) inconsistency because of cast handler)", function () {
    expect(parser.parseCode("<?php\n$xml = \"<root></root>\";\n$xml = simplexml_load_string($xml);\n$kids = $xml->children();\nvar_dump((bool)$kids);\nif($kids) echo \"bug\\n\"; else echo \"ok\\n\";\nif(!$kids) echo \"ok\\n\"; else echo \"bug\\n\";\n?>")).toMatchSnapshot();
  });
});
