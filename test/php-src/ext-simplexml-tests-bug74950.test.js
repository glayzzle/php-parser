// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug74950.phpt
  it("Bug #74950 (null pointer deref in zim_simplexml_element_getDocNamespaces)", function () {
    expect(parser.parseCode("<?php\n$xml=new SimpleXMLElement(0,9000000000);var_dump($xml->getDocNamespaces())?>\n?>")).toMatchSnapshot();
  });
});
