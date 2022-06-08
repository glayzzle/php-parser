// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/bug81521.phpt
  it("Bug #81521: XMLReader::getParserProperty may throw with a valid property", function () {
    expect(parser.parseCode("<?php\n$reader = new XMLReader();\ntry {\n    var_dump($reader->setParserProperty(XMLReader::LOADDTD, 1));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump($reader->getParserProperty(XMLReader::LOADDTD));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
