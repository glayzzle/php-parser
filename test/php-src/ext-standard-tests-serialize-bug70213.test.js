// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug70213.phpt
  it("Bug #70213: Unserialize context shared on double class lookup", function () {
    expect(parser.parseCode("<?php\nini_set('unserialize_callback_func', 'evil');\nfunction evil() {\n    spl_autoload_register(function ($arg) {\n        var_dump(unserialize('R:1;'));\n    });\n}\nvar_dump(unserialize('a:2:{i:0;i:42;i:1;O:4:\"evil\":0:{}}'));\n?>")).toMatchSnapshot();
  });
});
