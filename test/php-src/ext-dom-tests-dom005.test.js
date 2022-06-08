// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/dom005.phpt
  it("Test 5: HTML Test", function () {
    expect(parser.parseCode("<?php\n$dom = new domdocument;\n$dom->loadHTMLFile(__DIR__.\"/test.html\", LIBXML_NOBLANKS);\nprint  \"--- save as XML\\n\";\nprint adjustDoctype($dom->saveXML());\nprint  \"--- save as HTML\\n\";\nprint adjustDoctype($dom->saveHTML());\nfunction adjustDoctype($xml) {\n    return str_replace(array(\"DOCTYPE HTML\",'<p>','</p>'),array(\"DOCTYPE html\",'',''),$xml);\n}\n?>")).toMatchSnapshot();
  });
});
