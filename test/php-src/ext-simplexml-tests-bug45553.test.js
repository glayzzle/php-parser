// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug45553.phpt
  it("Bug #45553 (Using XPath to return values for attributes with a namespace does not work)", function () {
    expect(parser.parseCode("<?php\n$xml =<<<XML\n<xml xmlns:a=\"http://a\">\n    <data a:label=\"I am A\" label=\"I am Nothing\">test1</data>\n    <a:data a:label=\"I am a:A\" label=\"I am a:Nothing\">test2</a:data>\n</xml>\nXML;\n$x = simplexml_load_string($xml);\n$x->registerXPathNamespace(\"a\", \"http://a\");\n$atts = $x->xpath(\"/xml/data/@a:label\");\necho $atts[0] . \"\\n\";\n$atts = $x->xpath(\"/xml/a:data\");\necho $atts[0]->attributes() . \"\\n\";\n$atts = $x->xpath(\"/xml/a:data/@a:label\");\necho $atts[0] . \"\\n\";\n$atts = $x->xpath(\"/xml/a:data/@label\");\necho $atts[0] . \"\\n\";\n$atts = $x->xpath(\"/xml/data/@label\");\necho $atts[0] . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
