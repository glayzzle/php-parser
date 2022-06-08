// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/037.phpt
  it("SimpleXML: implement Countable", function () {
    expect(parser.parseCode("<?php\n$str = '<xml></xml>';\n$sxe = new SimpleXmlElement($str);\nvar_dump($sxe instanceof Countable);\n?>")).toMatchSnapshot();
  });
});
