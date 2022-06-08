// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/bug39504.phpt
  it("Bug #39504 (xmlwriter_write_dtd_entity() creates Attlist tag, not enity)", function () {
    expect(parser.parseCode("<?php\n$xw = xmlwriter_open_memory();\nxmlwriter_start_document($xw, NULL, \"UTF-8\");\nxmlwriter_start_dtd($xw, \"root\");\nxmlwriter_write_dtd_entity($xw, \"ent2\", \"val2\");\nxmlwriter_end_dtd($xw);\nxmlwriter_start_element($xw, \"root\");\nxmlwriter_end_document($xw);\nprint xmlwriter_flush($xw, true);\nprint \"\\n\";\n$xw = new XMLWriter();\n$xw->openMemory();\n$xw->startDocument(NULL, \"UTF-8\");\n$xw->startDtd(\"root\");\n$xw->writeDtdEntity(\"c\", \"\", 0, \"-//W3C//TEXT copyright//EN\", \"http://www.w3.org/xmlspec/copyright.xml\");\n$xw->endDtd();\n$xw->startElement(\"root\");\n$xw->endDocument();\nprint $xw->flush(true);\n?>")).toMatchSnapshot();
  });
});
