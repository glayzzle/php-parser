// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/unset_cv05.phpt
  it("unset() CV 5 (indirect unset() of global variable in session_start())", function () {
    expect(parser.parseCode("<?php\n$_SESSION = \"ok\\n\";\nsession_start();\necho $_SESSION;\necho \"\\nok\\n\";\n?>")).toMatchSnapshot();
  });
});
