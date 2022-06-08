// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_unshare_04.phpt
  it("pcntl_unshare() with wrong flag", function () {
    expect(parser.parseCode("<?php\ntry {\n    pcntl_unshare(42);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
