// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug79221.phpt
  it("Null Pointer Dereference in PHP Session Upload Progress", function () {
    expect(parser.parseCode("<?php\nsession_start();\nvar_dump($_SESSION);\nsession_destroy();\n?>")).toMatchSnapshot();
  });
});
