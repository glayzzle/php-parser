// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocumentType_publicId_basic_001.phpt
  it("DOMDocumentType::publicId with empty value.", function () {
    expect(parser.parseCode("<?php\n$xml  = '<?xml version=\"1.0\" encoding=\"UTF-8\" ?>';\n$xml .= '<!DOCTYPE chapter SYSTEM \"http://www.xmlwriter.net/logo.gif\">';\n$xml .= '<chapter>1</chapter>';\n$doc = new DOMDocument();\n$doc->loadXML($xml);\n$doctype = $doc->doctype;\nvar_dump($doctype->publicId);\n?>")).toMatchSnapshot();
  });
});
