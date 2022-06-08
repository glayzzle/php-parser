// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/bug79344.phpt
  it("FR #79344 (xmlwriter_write_attribute_ns: $prefix should be nullable)", function () {
    expect(parser.parseCode("<?php\n$writer = new XMLWriter;\n$writer->openMemory();\n$writer->setIndent(true);\n$writer->startElement('foo');\n$writer->writeAttributeNS(null, 'test1', null, 'test1');\n$writer->startAttributeNS(null, 'test2', null);\n$writer->text('test2');\n$writer->endAttribute();\n$writer->endElement();\necho $writer->outputMemory();\n?>")).toMatchSnapshot();
  });
});
