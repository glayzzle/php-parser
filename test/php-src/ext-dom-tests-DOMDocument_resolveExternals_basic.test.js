// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_resolveExternals_basic.phpt
  it("Tests DOMDocument::resoleExternals get and set", function () {
    expect(parser.parseCode("<?php\n// create dom document\n$dom = new DOMDocument;\n$xml = '<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\"\n \"http://www.w3.org/TR/html4/strict.dtd\">\n<h1>&quot;Foo&quot;</h1>';\n$dom->loadXML($xml);\nif(!$dom) {\n  echo \"Error while parsing the document\\n\";\n  exit;\n}\necho \"DOMDocument with external entities created\\n\";\n$test = $dom->resolveExternals;\necho \"Read initial resolveExternals:\\n\";\nvar_dump( $test );\n$dom->resolveExternals = TRUE;\n$test = $dom->resolveExternals;\necho \"Set resolveExternals to TRUE, reading again:\\n\";\nvar_dump( $test );\n/**\n * Don't bother testing the resolveExternals functionality here, it throws warnings on html dtd\n *\necho \"Reloading xml with resolveExternals turned on\\n\";\n$dom->loadXML($xml);\n$test = $dom->saveXML();\nvar_dump( $test );\n */\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
