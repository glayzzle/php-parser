// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/unset_cv06.phpt
  it("unset() CV 6 (indirect unset() of global variable in session_unset())", function () {
    expect(parser.parseCode("<?php\nsession_start();\n$_SESSION['x'] = \"1\\n\";\necho $_SESSION['x'];\nsession_unset();\necho $_SESSION['x'];\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
