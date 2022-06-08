// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/setParserProperty_error.phpt
  it("XMLReader: setParserProperty Error", function () {
    expect(parser.parseCode("<?php\n$xml = '<?xml version=\"1.0\" encoding=\"UTF-8\"?><books><book>new book</book></books>';\n$invalidProperty = -1;\n$reader = new XMLReader();\n$reader->XML($xml);\ntry {\n    $reader->setParserProperty(-1, true);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$reader->close();\n?>")).toMatchSnapshot();
  });
});
