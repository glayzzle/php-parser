// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug69111.phpt
  it("Bug #69111 Crash in SessionHandler::read()", function () {
    expect(parser.parseCode("<?php\n$sh = new SessionHandler;\nsession_set_save_handler($sh);\n$savePath = ini_get('session.save_path');\n$sessionName = ini_get('session.name');\n// session_start(); // Uncommenting this makes it not crash when reading the session (see below), but it will not return any data.\ntry {\n    $sh->open($savePath, $sessionName);\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    $sh->write(\"foo\", \"bar\");\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    $sh->read(\"\");\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
