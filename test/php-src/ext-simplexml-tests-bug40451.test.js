// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug40451.phpt
  it("Bug #40451 (addAttribute() may crash when used with non-existent child node)", function () {
    expect(parser.parseCode("<?php\n$string = <<<XML\n<?xml version=\"1.0\"?>\n    <Host enable=\"true\">\n     <Name>host.server.com</Name>\n     </Host>\nXML;\n$xml = simplexml_load_string($string);\n$add = $xml->addChild('Host');\n$add->Host->addAttribute('enable', 'true');\n?>")).toMatchSnapshot();
  });
});
