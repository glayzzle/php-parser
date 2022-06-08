// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/bug27908.phpt
  it("Bug #27908 (default handler not being called)", function () {
    expect(parser.parseCode("<?php\nfunction x_default_handler($xp,$data)\n{\n    echo \"x_default_handler $data\\n\";\n}\n$xp = xml_parser_create();\nxml_set_default_handler($xp,'x_default_handler');\nxml_parse($xp, '<root></root>',TRUE);\nxml_parser_free($xp);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
