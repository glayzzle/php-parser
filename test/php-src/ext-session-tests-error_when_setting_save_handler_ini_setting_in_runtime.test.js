// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/error_when_setting_save_handler_ini_setting_in_runtime.phpt
  it("Error when setting session.save_handler to user via ini_set", function () {
    expect(parser.parseCode("<?php\nini_set('session.save_handler', 'user');\n?>")).toMatchSnapshot();
  });
});
