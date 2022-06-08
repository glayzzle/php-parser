// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/030.phpt
  it("getConfig() method - basic test for getConfig()", function () {
    expect(parser.parseCode("<?php\n$buffer = '<html></html>';\n$config = array(\n  'indent' => true, // AutoBool\n  'indent-attributes' => true, // Boolean\n  'indent-spaces' => 3); // Integer\n$tidy = new tidy();\n$tidy->parseString($buffer, $config);\n$c = $tidy->getConfig();\nvar_dump($c['indent']);\nvar_dump($c['indent-attributes']);\nvar_dump($c['indent-spaces']);\n?>")).toMatchSnapshot();
  });
});
