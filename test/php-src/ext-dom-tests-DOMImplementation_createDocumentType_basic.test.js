// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMImplementation_createDocumentType_basic.phpt
  it("DOMImplementation::createDocumentType()", function () {
    expect(parser.parseCode("<?php\n$imp = new DOMImplementation();\n$doctype = $imp->createDocumentType(\"html\",\n    \"-//W3C//DTD XHTML 1.0 Strict//EN\",\n    \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\");\n$doc = $imp->createDocument(null, 'html', $doctype);\necho $doc->saveHTML();\n$doctype = $imp->createDocumentType(\"html\");\n$doc = $imp->createDocument(null, 'html', $doctype);\necho $doc->saveHTML();\n$doctype = $imp->createDocumentType(\"html\", \"\", \"\");\n$doc = $imp->createDocument(null, 'html', $doctype);\necho $doc->saveHTML();\n?>")).toMatchSnapshot();
  });
});
