// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/versioning/version_compare_invalid_operator.phpt
  it("Ensures an exception is thrown if versions are compared with an invalid operator", function () {
    expect(parser.parseCode("<?php\ntry {\n    version_compare('1.2', '2.1', '??');\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
