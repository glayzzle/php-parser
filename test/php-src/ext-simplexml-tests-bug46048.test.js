// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug46048.phpt
  it("Bug #46048 (SimpleXML top-level @attributes not part of iterator)", function () {
    expect(parser.parseCode("<?php\n$xml = '\n<data id=\"1\">\n    <key>value</key>\n</data>\n';\n$obj = simplexml_load_string($xml);\nprint_r(get_object_vars($obj));\n?>")).toMatchSnapshot();
  });
});
