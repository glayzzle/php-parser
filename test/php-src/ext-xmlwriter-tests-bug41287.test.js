// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/bug41287.phpt
  it("Bug #41287 (Namespace functions don't allow xmlns definition to be optional)", function () {
    expect(parser.parseCode("<?php\n$xw = xmlwriter_open_memory();\nxmlwriter_set_indent($xw, true);\nxmlwriter_start_document($xw);\nxmlwriter_start_element_ns($xw, 'test', 'test', 'urn:x-test:');\nxmlwriter_write_element_ns($xw, 'test', 'foo', null, '');\nxmlwriter_write_element_ns($xw, null, 'bar', 'urn:x-test:', '');\nxmlwriter_write_element_ns($xw, null, 'bar', '', '');\nxmlwriter_end_element($xw);\nxmlwriter_end_document($xw);\nprint xmlwriter_flush($xw, true);\nprint \"\\n\";\n$xw = new XMLWriter();\n$xw->openMemory();\n$xw->setIndent(true);\n$xw->startDocument();\n$xw->startElementNS('test', 'test', 'urn:x-test:');\n$xw->writeElementNS('test', 'foo', null, '');\n$xw->writeElementNS(null, 'bar', 'urn:x-test:', '');\n$xw->writeElementNS(null, 'bar', '', '');\n$xw->endElement();\n$xw->endDocument();\nprint $xw->flush(true);\n?>")).toMatchSnapshot();
  });
});
