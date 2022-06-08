// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug80268_2.phpt
  it("Bug #80268 (loadHTML() truncates at NUL bytes)", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument;\n$doc->loadHTML(\"<p>foo\\0bar</p>\");\n$html = $doc->saveHTML();\nvar_dump(strpos($html, '<p>foo</p>') !== false);\nfile_put_contents(__DIR__ . '/80268.html', \"<p>foo\\0bar</p>\");\n$doc = new DOMDocument;\n$doc->loadHTMLFile(__DIR__ . '/80268.html');\n$html = $doc->saveHTML();\nvar_dump(strpos($html, '<p>foo</p>') !== false);\n?>")).toMatchSnapshot();
  });
});
