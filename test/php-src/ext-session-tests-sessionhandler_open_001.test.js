// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/sessionhandler_open_001.phpt
  it("Testing repated SessionHandler::open() calls", function () {
    expect(parser.parseCode("<?php\nini_set('session.save_handler', 'files');\n$x = new SessionHandler;\ntry {\n    $x->open('','');\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    $x->open('','');\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    $x->open('','');\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    $x->open('','');\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nprint \"Done!\\n\";\n?>")).toMatchSnapshot();
  });
});
