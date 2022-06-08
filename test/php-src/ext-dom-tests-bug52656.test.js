// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug52656.phpt
  it("Bug #52656 (DOMCdataSection does not work with splitText).", function () {
    expect(parser.parseCode("<?php\n$CData = new DOMCdataSection('splithere!');\n$CDataSplit = $CData->splitText(5);\necho get_class($CDataSplit), \"\\n\";\nvar_dump($CDataSplit->data);\n?>")).toMatchSnapshot();
  });
});
