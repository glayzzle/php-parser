// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_documentURI_basic.phpt
  it("Tests DOMDocument::documentURI read and write", function () {
    expect(parser.parseCode("<?php\n// create dom document\n$dom = new DOMDocument;\n$xml = '<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<!DOCTYPE s1 PUBLIC \"http://www.ibm.com/example.dtd\" \"example.dtd\">\n<s1>foo</s1>';\n$dom->loadXML($xml);\nif(!$dom) {\n  echo \"Error while parsing the document\\n\";\n  exit;\n}\necho \"DOMDocument created\\n\";\n$test = $dom->documentURI;\necho \"Read initial documentURI:\\n\";\necho $test.\"\\n\";\n$dom->documentURI = 'http://dom.example.org/example.xml';\n$test = $dom->documentURI;\necho \"Set documentURI to a URL, reading again:\\n\";\nvar_dump( $test );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
