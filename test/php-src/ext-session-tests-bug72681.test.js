// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug72681.phpt
  it("Bug #72681: PHP Session Data Injection Vulnerability", function () {
    expect(parser.parseCode("<?php\nini_set('session.serialize_handler', 'php');\nsession_start();\n$GLOBALS['ryat'] = $_SESSION;\n$_SESSION['ryat'] = 'ryat|O:8:\"stdClass\":0:{}';\nsession_write_close();\nsession_start();\nvar_dump($ryat);\nvar_dump($_SESSION);\n?>")).toMatchSnapshot();
  });
});
