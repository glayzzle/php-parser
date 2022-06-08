// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/009b.phpt
  it("SimpleXML: foreach", function () {
    expect(parser.parseCode("<?php\n$sxe = simplexml_load_string(<<<EOF\n<?xml version='1.0'?>\n<!DOCTYPE sxe SYSTEM \"notfound.dtd\">\n<sxe id=\"elem1\">\n Plain text.\n <elem1 attr1='first'>Bla bla 1.<!-- comment --><elem2>\n   Here we have some text data.\n  </elem2></elem1>\n <elem11 attr2='second'>Bla bla 2.</elem11>\n</sxe>\nEOF\n);\nvar_dump($sxe->children());\n?>")).toMatchSnapshot();
  });
});
