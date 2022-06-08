// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug55688.phpt
  it("Bug #55688 (Crash when calling SessionHandler::gc())", function () {
    expect(parser.parseCode("<?php\nini_set('session.save_handler', 'files');\n$x = new SessionHandler;\ntry {\n    $x->gc(1);\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
