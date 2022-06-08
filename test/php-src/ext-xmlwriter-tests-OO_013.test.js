// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/OO_013.phpt
  it("XMLWriter: libxml2 XML Writer, Write Raw", function () {
    expect(parser.parseCode("<?php\n$cDataString = \"<cdataElement><![CDATA[Text for inclusion within CData tags can include characters like <, >, &, and quotes like ' and \\\"]]></cdataElement>\";\n$xmlWriter = new XmlWriter();\n$xmlWriter->openMemory();\n$xmlWriter->startDocument('1.0', 'UTF-8');\n$xmlWriter->startElement('myDocumentRoot');\n$xmlWriter->startElement('myElement');\n// CData output\n$xmlWriter->writeRaw($cDataString);\n// end the document and output\n$xmlWriter->endElement();\n$xmlWriter->endElement();\necho $xmlWriter->outputMemory(true);\n?>")).toMatchSnapshot();
  });
});
