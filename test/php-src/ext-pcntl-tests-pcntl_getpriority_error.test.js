// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_getpriority_error.phpt
  it("pcntl_getpriority() - Wrong process identifier", function () {
    expect(parser.parseCode("<?php\ntry {\n    pcntl_getpriority(null, 42);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
