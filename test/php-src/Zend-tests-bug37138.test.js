// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug37138.phpt
  it("Bug #37138 (autoloader tries to load callback'ed self and parent)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($CN) { var_dump ($CN); });\nclass st {\n    public static function e () {echo (\"EHLO\\n\");}\n    public static function e2 () {call_user_func (array ('self', 'e'));}\n}\nclass stch extends st {\n    public static function g () {call_user_func (array ('parent', 'e'));}\n}\nst::e ();\nst::e2 ();\nstch::g ();\n?>")).toMatchSnapshot();
  });
});
