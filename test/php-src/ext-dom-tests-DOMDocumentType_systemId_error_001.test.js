// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocumentType_systemId_error_001.phpt
  it("DOMDocumentType::systemId with invalid state.", function () {
    expect(parser.parseCode("<?php\n$doctype = new DOMDocumentType();\ntry {\n    $systemId = $doctype->systemId;\n} catch (DOMException $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
