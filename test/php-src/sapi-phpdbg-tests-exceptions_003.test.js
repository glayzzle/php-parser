// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/exceptions_003.phpt
  it("Test breaks on HANDLE_EXCEPTION", function () {
    expect(parser.parseCode("<?php\ntry {\n\ttry {\n\t\tx();\n\t} finally {\n\t\tprint \"ok\\n\";\n\t}\n} catch (Error $e) {\n\tprint \"caught\\n\";\n}\n?>\n")).toMatchSnapshot();
  });
});
