// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_save_handler_type_error.phpt
  it("Test session_set_save_handler() function: interface wrong", function () {
    expect(parser.parseCode("<?php\n$validCallback = function () { return true; };\n$deprecatedCallback = function () { return 0; };\n$exceptionCallback = function () { return []; };\nob_start();\ntry {\n    $ret = session_set_save_handler($exceptionCallback, $validCallback, $validCallback, $validCallback, $validCallback, $validCallback);\n    session_start();\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    $ret = session_set_save_handler($deprecatedCallback, $validCallback, $validCallback, $validCallback, $validCallback, $validCallback);\n    session_start();\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    $ret = session_set_save_handler($validCallback, $exceptionCallback, $validCallback, $validCallback, $validCallback, $validCallback);\n    session_start();\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    $ret = session_set_save_handler($validCallback, $deprecatedCallback, $exceptionCallback, $validCallback, $validCallback, $validCallback);\n    session_start();\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
