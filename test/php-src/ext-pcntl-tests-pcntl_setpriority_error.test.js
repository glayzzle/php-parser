// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_setpriority_error.phpt
  it("pcntl_setpriority() - Wrong process identifier", function () {
    expect(parser.parseCode("<?php\ntry {\n    pcntl_setpriority(0, null, 42);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
