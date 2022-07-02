// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug72663_2.phpt
  it("Bug #72663: Create an Unexpected Object and Don't Invoke __wakeup() in Deserialization", function () {
    expect(parser.parseCode("<?php\nini_set('session.serialize_handler', 'php_serialize');\nsession_start();\n$sess = 'O:9:\"Exception\":2:{s:7:\"'.\"\\0\".'*'.\"\\0\".'file\";s:0:\"\";}';\nsession_decode($sess);\nvar_dump($_SESSION);\n?>\nDONE")).toMatchSnapshot();
  });
});
