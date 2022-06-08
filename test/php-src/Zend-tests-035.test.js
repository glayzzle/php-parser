// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/035.phpt
  it("Using 'static' and 'global' in global scope", function () {
    expect(parser.parseCode("<?php\nstatic $var, $var, $var = -1;\nvar_dump($var);\nglobal $var, $var, $var;\nvar_dump($var);\nvar_dump($GLOBALS['var']);\n?>")).toMatchSnapshot();
  });
});
