// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/004.phpt
  it("XMLReader: libxml2 XML Reader, attributes test", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . '/_004.xml';\n$xmlstring = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<books><book num=\"1\" idx=\"2\">book1</book></books>';\nfile_put_contents($filename, $xmlstring);\n$reader = new XMLReader();\nif (!$reader->open($filename)) {\n    exit();\n}\nwhile ($reader->read()) {\n    if ($reader->nodeType != XMLREADER::END_ELEMENT) {\n        echo $reader->name.\"\\n\";\n        if ($reader->nodeType == XMLREADER::ELEMENT && $reader->hasAttributes) {\n            $attr = $reader->moveToFirstAttribute();\n            while ($attr) {\n                echo \"   Attribute Name: \".$reader->name.\"\\n\";\n                echo \"   Attribute Value: \".$reader->value.\"\\n\";\n                $attr = $reader->moveToNextAttribute();\n            }\n        }\n    }\n}\n$reader->close();\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
