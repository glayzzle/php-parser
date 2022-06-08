// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/006.phpt
  it("XMLReader: libxml2 XML Reader, moveToElement", function () {
    expect(parser.parseCode("<?php\n$xmlstring = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<books><book num=\"1\"></book><test /></books>';\n$reader = new XMLReader();\n$reader->XML($xmlstring);\n// 2 read to get on the 2nd node\n$reader->read();\n$reader->read();\nif ($reader->nodeType != XMLREADER::END_ELEMENT) {\n    if ($reader->nodeType == XMLREADER::ELEMENT && $reader->hasAttributes) {\n        $attr = $reader->moveToFirstAttribute();\n        if ($reader->moveToElement()) {\n            if ($reader->name == 'book') {\n                echo \"ok\\n\";\n            }\n        }\n    }\n}\n$reader->close();\n?>")).toMatchSnapshot();
  });
});
