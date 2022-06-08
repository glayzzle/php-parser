// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/statpage.phpt
  it("getlastmod() and others", function () {
    expect(parser.parseCode("<?php\nvar_dump(getlastmod());\nvar_dump(getmyinode());\nvar_dump(getmyuid());\nvar_dump(getmypid());\nvar_dump(getmygid());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
