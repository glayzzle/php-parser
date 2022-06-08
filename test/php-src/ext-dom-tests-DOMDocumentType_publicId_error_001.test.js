// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocumentType_publicId_error_001.phpt
  it("DOMDocumentType::publicId with invalid state.", function () {
    expect(parser.parseCode("<?php\n$doctype = new DOMDocumentType();\ntry {\n    $publicId = $doctype->publicId;\n} catch (DOMException $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
