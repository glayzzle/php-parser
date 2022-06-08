// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug73273.phpt
  it("Bug #73273: session_unset() empties values from all variables in which is $_session stored", function () {
    expect(parser.parseCode("<?php\nsession_start();\n$_SESSION['test'] = true;\n$var = $_SESSION;\nsession_unset();\nvar_dump($var);\n?>")).toMatchSnapshot();
  });
});
