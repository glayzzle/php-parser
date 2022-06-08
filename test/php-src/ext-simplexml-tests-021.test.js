// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/021.phpt
  it("SimpleXML: Element check", function () {
    expect(parser.parseCode("<?php\n$ok = 1;\n$doc = simplexml_load_string('<root><exists>foo</exists></root>');\nif(!isset($doc->exists)) {\n    $ok *= 0;\n}\nif(isset($doc->doesnotexist)) {\n    $ok *= 0;\n}\nif ($ok) {\n         print \"Works\\n\";\n} else {\n         print \"Error\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
