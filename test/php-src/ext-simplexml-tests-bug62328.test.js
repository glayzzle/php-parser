// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug62328.phpt
  it("Bug #62328 (implementing __toString and a cast to string fails)", function () {
    expect(parser.parseCode("<?php\nclass UberSimpleXML extends SimpleXMLElement {\n    public function __toString() {\n        return 'stringification';\n    }\n}\n$xml = new UberSimpleXML('<xml/>');\nvar_dump((string) $xml);\nvar_dump($xml->__toString());\n?>")).toMatchSnapshot();
  });
});
