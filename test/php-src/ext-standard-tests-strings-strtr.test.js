// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strtr.phpt
  it("strtr() function", function () {
    expect(parser.parseCode("<?php\n$trans = array(\"hello\"=>\"hi\", \"hi\"=>\"hello\", \"a\"=>\"A\", \"world\"=>\"planet\");\nvar_dump(strtr(\"# hi all, I said hello world! #\", $trans));\n?>")).toMatchSnapshot();
  });
});
