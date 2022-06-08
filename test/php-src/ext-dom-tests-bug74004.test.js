// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug74004.phpt
  it("Bug #74004 (DOMDocument->loadHTML and ->loadHTMLFile do not heed LIBXML_NOWARNING and LIBXML_NOERROR options)", function () {
    expect(parser.parseCode("<?php\n$doc=new DOMDocument();\n$doc->loadHTML(\"<tag-throw></tag-throw>\",LIBXML_NOERROR);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
