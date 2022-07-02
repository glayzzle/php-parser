// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/bug70557.phpt
  it("Bug #70557 (Memleak on return type verifying failed).", function () {
    expect(parser.parseCode("<?php\nfunction getNumber() : int {\n    return \"foo\";\n}\ntry {\n    getNumber();\n} catch (TypeError $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
