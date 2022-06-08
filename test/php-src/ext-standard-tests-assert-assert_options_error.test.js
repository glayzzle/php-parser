// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/assert/assert_options_error.phpt
  it("assert_options() - unknown assert option.", function () {
    expect(parser.parseCode("<?php\ntry {\n    assert_options(1000);\n} catch (\\ValueError $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
