// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/bug71092.phpt
  it("Bug #71092 (Segmentation fault with return type hinting)", function () {
    expect(parser.parseCode("<?php\nfunction boom(): array {\n    $data = [['id']];\n    switch ($data[0]) {\n    case ['id']:\n        return null;\n    }\n}\nboom();\n?>")).toMatchSnapshot();
  });
});
