// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/bug51936.phpt
  it("Bug #51936 (Crash with clone XMLReader)", function () {
    expect(parser.parseCode("<?php\necho \"Test\\n\";\n$xmlreader = new XMLReader();\n$xmlreader->xml(\"<a><b/></a>\");\n$xmlreader->next();\n$xmlreader2 = clone $xmlreader;\n$xmlreader2->next();\n?>\nDone")).toMatchSnapshot();
  });
});
