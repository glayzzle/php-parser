// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/002.phpt
  it("XMLReader: libxml2 XML Reader, file data", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . '/_002.xml';\n$xmlstring = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<books></books>';\nfile_put_contents($filename, $xmlstring);\n$reader = new XMLReader();\ntry {\n    $reader->open('');\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$reader = new XMLReader();\nif (!$reader->open($filename)) {\n    $reader->close();\n    exit();\n}\n// Only go through\nwhile ($reader->read()) {\n    echo $reader->name.\"\\n\";\n}\n$reader->close();\nunlink($filename);\ntouch($filename);\n$reader = new XMLReader();\n$reader->open($filename);\n$reader->close();\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
