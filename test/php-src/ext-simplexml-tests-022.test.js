// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/022.phpt
  it("SimpleXML: Attributes inside foreach", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<?xml version='1.0'?>\n<pres><content><file glob=\"slide_*.xml\"/></content></pres>\nEOF;\n$sxe = simplexml_load_string($xml);\necho \"===CONTENT===\\n\";\nvar_dump($sxe->content);\necho \"===FILE===\\n\";\nvar_dump($sxe->content->file);\necho \"===FOREACH===\\n\";\nforeach($sxe->content->file as $file)\n{\n    var_dump($file);\n    var_dump($file['glob']);\n}\n?>")).toMatchSnapshot();
  });
});
