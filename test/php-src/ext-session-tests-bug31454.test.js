// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug31454.phpt
  it("Bug #31454 (session_set_save_handler crashes PHP when supplied non-existent object ref)", function () {
    expect(parser.parseCode("<?php\ntry {\n    session_set_save_handler(\n        array(&$arf, 'open'),\n        array(&$arf, 'close'),\n        array(&$arf, 'read'),\n        array(&$arf, 'write'),\n        array(&$arf, 'destroy'),\n        array(&$arf, 'gc')\n    );\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
