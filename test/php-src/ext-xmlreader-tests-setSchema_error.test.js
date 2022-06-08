// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/setSchema_error.phpt
  it("XMLReader: setSchema Error", function () {
    expect(parser.parseCode("<?php\n$reader = new XMLReader();\ntry {\n    $reader->setSchema('');\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$reader->close();\n$reader = new XMLReader();\ntry {\n    $reader->setSchema('schema-missing-file.xsd');\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$reader->close();\n$reader = new XMLReader();\ntry {\n    $reader->setSchema('schema-empty.xsd');\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$reader = new XMLReader();\n$reader->XML(<<<EOF\n<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<foo/>\nEOF);\nvar_dump(@$reader->setSchema('schema-bad.xsd'));\n$reader->close();\n?>")).toMatchSnapshot();
  });
});
