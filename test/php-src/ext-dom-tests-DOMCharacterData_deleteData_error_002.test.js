// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMCharacterData_deleteData_error_002.phpt
  it("DOMCharacterData::deleteData() with offset exceeding string size.", function () {
    expect(parser.parseCode("<?php\n$document = new DOMDocument;\n$root = $document->createElement('root');\n$document->appendChild($root);\n$cdata = $document->createCDATASection('test');\n$root->appendChild($cdata);\ntry {\n    $cdata->deleteData(5, 1);\n} catch (DOMException $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
