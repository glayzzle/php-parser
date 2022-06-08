// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug67972.phpt
  it("Bug #67972: SessionHandler Invalid memory read create_sid()", function () {
    expect(parser.parseCode("<?php\ntry {\n    (new SessionHandler)->create_sid();\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
