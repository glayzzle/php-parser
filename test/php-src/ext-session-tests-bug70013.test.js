// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug70013.phpt
  it("Bug #70013 (Reference to $_SESSION is lost after a call to session_regenerate_id())", function () {
    expect(parser.parseCode("<?php\nob_start();\nsession_start();\n$session = &$_SESSION;\n$session['test'] = 1;\nsession_regenerate_id(false);\n$session['test'] = 2;\nvar_dump($session['test'] === $_SESSION['test']);\n$session['test'] = 3;\nsession_regenerate_id(true);\n$session['test'] = 4;\nvar_dump($session['test'] === $_SESSION['test']);\n?>")).toMatchSnapshot();
  });
});
