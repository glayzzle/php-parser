// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/OO_008.phpt
  it("XMLWriter: libxml2 XML Writer DTD Element & Attlist", function () {
    expect(parser.parseCode("<?php\n$xw = new XMLWriter();\n$xw->openMemory();\n$xw->setIndent(TRUE);\n$xw->startDocument(NULL, \"UTF-8\");\n$xw->writeDtdElement('sxe', '(elem1+, elem11, elem22*)');\n$xw->writeDtdAttlist('sxe', 'id     CDATA  #implied');\n$xw->startDtdElement('elem1');\n$xw->text('elem2*');\n$xw->endDtdElement();\n$xw->startDtdAttlist('elem1');\n$xw->text(\"attr1  CDATA  #required\\n\");\n$xw->text('attr2  CDATA  #implied');\n$xw->endDtdAttlist();\n$xw->endDocument();\n// Force to write and empty the buffer\n$output = $xw->flush(true);\nprint $output;\n?>")).toMatchSnapshot();
  });
});
