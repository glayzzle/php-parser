// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocumentType_internalSubset_error_001.phpt
  it("DOMDocumentType::internalSubset with invalid state.", function () {
    expect(parser.parseCode("<?php\n$doctype = new DOMDocumentType();\ntry {\n    $doctype->internalSubset;\n} catch (DOMException $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
