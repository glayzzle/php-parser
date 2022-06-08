// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/OO_012.phpt
  it("XMLWriter: libxml2 XML Writer, Write CDATA", function () {
    expect(parser.parseCode("<?php\n$cDataString = \"Text for inclusion within CData tags can include characters like <, >, &, and quotes like ' and \\\"\";\n$xmlWriter = new XmlWriter();\n$xmlWriter->openMemory();\n$xmlWriter->startDocument('1.0', 'UTF-8');\n$xmlWriter->startElement('myDocumentRoot');\n$xmlWriter->startElement('myElement');\n// CData output\n$xmlWriter->startElement('cdataElement');\n$xmlWriter->writeCData($cDataString);\n$xmlWriter->endElement();\n// end the document and output\n$xmlWriter->endElement();\n$xmlWriter->endElement();\necho $xmlWriter->outputMemory(true);\n?>")).toMatchSnapshot();
  });
});
