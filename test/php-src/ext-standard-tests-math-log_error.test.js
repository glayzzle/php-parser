// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/log_error.phpt
  it("Test log() - wrong params test log()", function () {
    expect(parser.parseCode("<?php\ntry {\n    log(36, -4);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
