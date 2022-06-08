// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMEntityReference_error1.phpt
  it("DOMEntityReference - DOM_INVALID_CHARACTER_ERR raised if name contains an invalid character", function () {
    expect(parser.parseCode("<?php\ntry {\n    new DOMEntityReference('!');\n} catch (DOMException $e) {\n    var_dump($e->getCode() === DOM_INVALID_CHARACTER_ERR);\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
