// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/jdtounix_error1.phpt
  it("Test jdtounix() function : error conditions", function () {
    expect(parser.parseCode("<?php\ntry {\n    jdtounix(2440579);\n} catch (ValueError $ex) {\n    echo $ex->getMessage(), PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
