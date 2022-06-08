// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/004.phpt
  it("XMLWriter: libxml2 XML Writer, file buffer, flush", function () {
    expect(parser.parseCode("<?php\n$doc_dest = '004.xml';\n$xw = xmlwriter_open_uri($doc_dest);\nxmlwriter_start_document($xw, '1.0', 'UTF-8');\nxmlwriter_start_element($xw, \"tag1\");\nxmlwriter_start_pi($xw, \"PHP\");\nxmlwriter_text($xw, 'echo $a;');\nxmlwriter_end_pi($xw);\nxmlwriter_end_document($xw);\n// Force to write and empty the buffer\n$output_bytes = xmlwriter_flush($xw, true);\n$md5_out = md5_file($doc_dest);\n$md5_res = md5('<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<tag1><?PHP echo $a;?></tag1>\n');\nunset($xw);\nunlink($doc_dest);\nif ($md5_out != $md5_res) {\n    echo \"failed: $md5_res != $md5_out\\n\";\n} else {\n    echo \"ok.\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
