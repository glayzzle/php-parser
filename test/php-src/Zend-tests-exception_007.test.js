// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_007.phpt
  it("Setting previous exception", function () {
    expect(parser.parseCode("<?php\ntry {\n    try {\n        throw new Exception(\"First\", 1, new Exception(\"Another\", 0, NULL));\n    }\n    catch (Exception $e) {\n        throw new Exception(\"Second\", 2, $e);\n    }\n}\ncatch (Exception $e) {\n    throw new Exception(\"Third\", 3, $e);\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
