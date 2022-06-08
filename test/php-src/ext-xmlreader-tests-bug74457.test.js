// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/bug74457.phpt
  it("XMLReader: Bug #74457 Wrong reflection on XMLReader::expand", function () {
    expect(parser.parseCode("<?php\n$rm = new ReflectionMethod(XMLReader::class, 'expand');\nvar_dump($rm->getNumberOfParameters());\nvar_dump($rm->getNumberOfRequiredParameters());\n?>")).toMatchSnapshot();
  });
});
