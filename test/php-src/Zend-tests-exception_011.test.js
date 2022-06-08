// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_011.phpt
  it("Test exception doesn't cause RSHUTDOWN bypass, variation 0", function () {
    expect(parser.parseCode("<?php\ndefine (\"XXXXX\", 1);\ntry {\n    assert(false);\n} catch (AssertionError $error) {\n    echo \"Caught\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
