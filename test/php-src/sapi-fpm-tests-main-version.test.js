// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/main-version.phpt
  it("FPM: version string", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$php = \\FPM\\Tester::findExecutable();\nvar_dump(`$php -n -v`);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
