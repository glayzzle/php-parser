// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/sys_getloadavg.phpt
  it("sys_getloadavg() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(sys_getloadavg());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
