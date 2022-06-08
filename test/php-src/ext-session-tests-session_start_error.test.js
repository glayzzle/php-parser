// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_start_error.phpt
  it("Test session_start() errors", function () {
    expect(parser.parseCode("<?php\nob_start();\ntry {\n    session_start(['option' => new stdClass()]);\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump(session_start(['option' => false]));\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
