// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/001-mb.phpt
  it("SimpleXML: Simple document", function () {
    expect(parser.parseCode("<?php\nvar_dump(simplexml_load_file(__DIR__.'/sxe私はガラスを食べられます.xml'));\n?>")).toMatchSnapshot();
  });
});
