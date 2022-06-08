// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_createAttribute_error.phpt
  it("Test DOMDocument::createAttribute() for expected exception thrown when wrong parameter passed", function () {
    expect(parser.parseCode("<?php\n$dom = new DOMDocument();\ntry {\n    $attr = $dom->createAttribute(0);\n}\ncatch(DOMException $e) {\n    $code = $e->getCode();\n    if(DOM_INVALID_CHARACTER_ERR === $code) {\n        echo \"PASS\";\n    }\n    else {\n        echo 'Wrong exception code';\n    }\n}\ncatch(Exception $e) {\n    echo 'Wrong exception thrown';\n}\n?>")).toMatchSnapshot();
  });
});
