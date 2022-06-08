// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug72663_3.phpt
  it("Bug #72663 (3): If unserialization fails, don't initialize the session with the result", function () {
    expect(parser.parseCode("<?php\nsession_start();\n$sess = 'O:9:\"Exception\":2:{s:7:\"'.\"\\0\".'*'.\"\\0\".'file\";s:0:\"\";}';\nsession_decode($sess);\nvar_dump($_SESSION);\n?>")).toMatchSnapshot();
  });
});
