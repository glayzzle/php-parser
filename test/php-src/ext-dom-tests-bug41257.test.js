// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug41257.phpt
  it("Bug #41257 (lookupNamespaceURI does not work as expected)", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument();\n$doc->load(__DIR__.\"/nsdoc.xml\");\n$root = $doc->documentElement;\n$duri = $doc->lookupNamespaceURI(\"ns2\").\"\\n\";\n$euri = $root->lookupNamespaceURI(\"ns2\").\"\\n\";\nvar_dump($duri == $euri);\n$dpref = $doc->lookupPrefix(\"http://ns2\").\"\\n\";\n$epref = $root->lookupPrefix(\"http://ns2\").\"\\n\";\nvar_dump($dpref == $epref);\n$disdef = $doc->isDefaultNamespace(\"http://ns\").\"\\n\";\n$eisdef = $root->isDefaultNamespace(\"http://ns\").\"\\n\";\nvar_dump($dpref === $epref);\n?>")).toMatchSnapshot();
  });
});
