// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/bug75236.phpt
  it("Bug #75236: infinite loop when printing an error-message", function () {
    expect(parser.parseCode("<?php\n    ini_set('html_errors', true);\n    ini_set('default_charset', 'ISO-8859-2');\n    printf (\"before getfilecontent\\n\");\n    file_get_contents ('no/suchfile');\n    printf (\"after getfilecontent\\n\");\n?>")).toMatchSnapshot();
  });
});
