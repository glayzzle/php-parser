// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gettext/tests/gettext_bind_textdomain_codeset-retval.phpt
  it("test if bind_textdomain_codeset() returns correct value", function () {
    expect(parser.parseCode("<?php\n    var_dump(bind_textdomain_codeset(false,false));\n    var_dump(bind_textdomain_codeset('messages', \"UTF-8\"));\n    echo \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
