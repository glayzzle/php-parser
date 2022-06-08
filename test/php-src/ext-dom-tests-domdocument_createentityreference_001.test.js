// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/domdocument_createentityreference_001.phpt
  it("DomDocument::CreateEntityReference() - Creates an entity reference with the appropriate name", function () {
    expect(parser.parseCode("<?php\n    $objDoc = new DomDocument();\n    $objRef = $objDoc->createEntityReference('Test');\n    echo $objRef->nodeName . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
