// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug64695.phpt
  it("Bug #64695 JSON_NUMERIC_CHECK has issues with strings that are numbers plus the letter e", function () {
    expect(parser.parseCode("<?php\n$t = array('test' => '123343e871700');\nvar_dump(json_encode($t, JSON_NUMERIC_CHECK));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
