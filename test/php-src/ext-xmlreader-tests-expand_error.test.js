// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/expand_error.phpt
  it("XMLReader: Expand Error", function () {
    expect(parser.parseCode("<?php\n$xmlstring = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<books><book>new book</book></books>';\n$reader = new XMLReader();\ntry {\n    $reader->expand();\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$reader->close();\n$reader = new XMLReader();\n$reader->XML($xmlstring);\nvar_dump($reader->expand());\n$reader->close();\n?>")).toMatchSnapshot();
  });
});
