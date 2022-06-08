// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/OO_003.phpt
  it("XMLWriter: libxml2 XML Writer, membuffer, flush, text, attribute", function () {
    expect(parser.parseCode("<?php\n$xw = new XMLWriter();\n$xw->openMemory();\n$xw->startDocument('1.0', 'UTF-8');\n$xw->startElement(\"tag1\");\n$res = $xw->startAttribute('attr1');\n$xw->text(\"attr1_value\");\n$xw->endAttribute();\n$res = $xw->startAttribute('attr2');\n$xw->text(\"attr2_value\");\n$xw->endAttribute();\n$xw->text(\"Test text for tag1\");\n$res = $xw->startElement('tag2');\nif ($res < 1) {\n    echo \"StartElement context validation failed\\n\";\n    exit();\n}\n$xw->endDocument();\n// Force to write and empty the buffer\necho $xw->flush(true);\n?>")).toMatchSnapshot();
  });
});
