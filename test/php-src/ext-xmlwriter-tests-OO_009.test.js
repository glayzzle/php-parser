// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/OO_009.phpt
  it("XMLWriter: PI, Comment, CDATA", function () {
    expect(parser.parseCode("<?php\n/*\nLibxml 2.6.24 and up adds a new line after a processing instruction (PI)\n*/\n$xw = new XMLWriter();\n$xw->openMemory();\n$xw->setIndent(TRUE);\n$xw->startDocument(\"1.0\", \"UTF-8\");\n$xw->startElement('root');\n$xw->writeAttribute('id', 'elem1');\n$xw->startElement('elem1');\n$xw->writeAttribute('attr1', 'first');\n$xw->writeComment('start PI');\n$xw->startElement('pi');\n$xw->writePi('php', 'echo \"hello world\"; ');\n$xw->endElement();\n$xw->startElement('cdata');\n$xw->startCdata();\n$xw->text('<>&\"');\n$xw->endCdata();\n$xw->endElement();\n$xw->endElement();\n$xw->endElement();\n$xw->endDocument();\n// Force to write and empty the buffer\n$output = $xw->flush(true);\nprint $output;\n?>")).toMatchSnapshot();
  });
});
