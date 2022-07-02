// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug70667.phpt
  it("Bug #70667 (strtr() causes invalid writes and a crashes)", function () {
    expect(parser.parseCode("<?php\n$a = array(\"{{language_id}}\"=>\"255\", \"{{partner_name}}\"=>\"test1\");\nvar_dump(strtr(\"Sign in to test1\", $a));\n?>")).toMatchSnapshot();
  });
});
