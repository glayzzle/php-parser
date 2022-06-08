// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug35785.phpt
  it("Bug #35785 (SimpleXML memory read error)", function () {
    expect(parser.parseCode("<?php\n$xml = simplexml_load_string(\"<root></root>\");\n$xml->bla->posts->name = \"FooBar\";\necho $xml->asXML();\n$xml = simplexml_load_string(\"<root></root>\");\nvar_dump(isset($xml->bla->posts));\n$xml->bla->posts[0]->name = \"FooBar\";\necho $xml->asXML();\n$xml = simplexml_load_string(\"<root></root>\");\n$xml->bla->posts[]->name = \"FooBar\";\necho $xml->asXML();\n?>")).toMatchSnapshot();
  });
});
