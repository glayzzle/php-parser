// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/001.phpt
  it("XMLReader: libxml2 XML Reader, string data", function () {
    expect(parser.parseCode("<?php\n$xmlstring = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<books></books>';\n$reader = new XMLReader();\n$reader->XML($xmlstring);\n// Only go through\nwhile ($reader->read()) {\n    echo $reader->name.\"\\n\";\n}\n$xmlstring = '';\n$reader = new XMLReader();\ntry {\n    $reader->XML($xmlstring);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
