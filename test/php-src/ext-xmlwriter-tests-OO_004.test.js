// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/OO_004.phpt
  it("XMLWriter: libxml2 XML Writer, file buffer, flush", function () {
    expect(parser.parseCode("<?php\n$doc_dest = 'OO_004.xml';\n$xw = new XMLWriter();\n$xw->openUri($doc_dest);\n$xw->startDocument('1.0', 'UTF-8');\n$xw->startElement(\"tag1\");\n$xw->startPi(\"PHP\");\n$xw->text('echo $a;');\n$xw->endPi();\n$xw->endDocument();\n// Force to write and empty the buffer\n$xw->flush(true);\n$md5_out = md5_file($doc_dest);\n$md5_res = md5('<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<tag1><?PHP echo $a;?></tag1>\n');\nunset($xw);\nunlink($doc_dest);\nif ($md5_out != $md5_res) {\n    echo \"failed: $md5_res != $md5_out\\n\";\n} else {\n    echo \"ok.\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
