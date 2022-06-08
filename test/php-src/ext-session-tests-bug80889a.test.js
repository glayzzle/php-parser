// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug80889a.phpt
  it("Bug #80889 (Cannot set save handler when save_handler is invalid)", function () {
    expect(parser.parseCode("<?php\n$initHandler = ini_get('session.save_handler');\nsession_set_save_handler(\n    function ($savePath, $sessionName) {\n        return true;\n    },\n    function () {\n        return true;\n    },\n    function ($id) {\n        return '';\n    },\n    function ($id, $data) {\n        return true;\n    },\n    function ($id) {\n        return true;\n    },\n    function ($maxlifetime) {\n        return true;\n    }\n);\n$setHandler = ini_get('session.save_handler');\nvar_dump($initHandler, $setHandler);\n?>")).toMatchSnapshot();
  });
});
