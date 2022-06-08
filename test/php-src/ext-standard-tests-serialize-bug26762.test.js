// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug26762.phpt
  it("Bug #26762 (unserialize() produces lowercase classnames)", function () {
    expect(parser.parseCode("<?php\nini_set('unserialize_callback_func','check');\nfunction check($name) {\n    var_dump($name);\n    throw new exception;\n}\ntry {\n    @unserialize('O:3:\"FOO\":0:{}');\n}\ncatch (Exception $e) {\n    /* ignore */\n}\n?>")).toMatchSnapshot();
  });
});
