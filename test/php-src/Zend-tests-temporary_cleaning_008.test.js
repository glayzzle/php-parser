// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/temporary_cleaning_008.phpt
  it("Optimization of constant switch expression", function () {
    expect(parser.parseCode("<?php\ntry {\n    switch (\"1\" . (int)2) {\n        case 12:\n            throw new Exception();\n    }\n} catch (Exception $e) {\n    echo \"exception\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
