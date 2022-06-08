// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/tidy_error1.phpt
  it("Notice triggered by invalid configuration options", function () {
    expect(parser.parseCode("<?php\n$buffer = '<html></html>';\n$config = array('bogus' => 'willnotwork');\n$tidy = new tidy();\nvar_dump($tidy->parseString($buffer, $config));\n?>")).toMatchSnapshot();
  });
});
