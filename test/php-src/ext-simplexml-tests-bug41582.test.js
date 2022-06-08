// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug41582.phpt
  it("Bug #41582 (SimpleXML crashes when accessing newly created element)", function () {
    expect(parser.parseCode("<?php\n$xml = new SimpleXMLElement('<?xml version=\"1.0\" standalone=\"yes\"?>\n<collection></collection>');\n$xml->movie[]->characters->character[0]->name = 'Miss Coder';\necho($xml->asXml());\n?>")).toMatchSnapshot();
  });
});
