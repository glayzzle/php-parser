// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/020.phpt
  it("SimpleXML: Attribute compared to string", function () {
    expect(parser.parseCode("<?php\n$doc = simplexml_load_string('<root><name attr=\"foo\">bar</name></root>');\nprint $doc->name[\"attr\"];\nprint \"\\n\";\nif ($doc->name[\"attr\"] == \"foo\") {\n         print \"Works\\n\";\n} else {\n         print \"Error\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
