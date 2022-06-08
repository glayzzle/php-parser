// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug35673.phpt
  it("Bug #35673 (formatOutput does not work with saveHTML).", function () {
    expect(parser.parseCode("<?php\n$html = '<html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n<title>This is the title</title></head></html>';\n$htmldoc = new DOMDocument();\n$htmldoc->loadHTML($html);\n$htmldoc->formatOutput = true;\necho $htmldoc->saveHTML();\n?>")).toMatchSnapshot();
  });
});
