// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/015-get-errors.phpt
  it("XMLReader: libxml2 XML Reader, Move cursor to a named attribute within a namespace, with invalid arguments", function () {
    expect(parser.parseCode("<?php\n// Set up test data in a new file\n$xmlstring = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<books xmlns:ns1=\"http://www.ns1.namespace.org/\" xmlns:ns2=\"http://www.ns2.namespace.org/\"><book ns1:num=\"1\" ns2:idx=\"2\" ns1:idx=\"3\" ns2:isbn=\"4\">book1</book></books>';\n$filename = __DIR__ . '/015-get-errors.xml';\nfile_put_contents($filename, $xmlstring);\n// Load test data into a new XML Reader\n$reader = new XMLReader();\nif (!$reader->open($filename)) {\n    exit('XML could not be read');\n}\n// Parse the data\nwhile ($reader->read()) {\n    if ($reader->nodeType != XMLREADER::END_ELEMENT) {\n        // Find the book node\n        if ($reader->nodeType == XMLREADER::ELEMENT && $reader->name == 'book') {\n            $attr = $reader->moveToNextAttribute();\n            // Test for missing namespace argument\n            try {\n                $attr = $reader->getAttributeNs('idx', null);\n            } catch (ValueError $exception) {\n                echo $exception->getMessage() . \"\\n\";\n            }\n            echo $reader->name . \": \";\n            echo $reader->value . \"\\n\";\n        }\n    }\n}\n// clean up\n$reader->close();\n?>")).toMatchSnapshot();
  });
});
