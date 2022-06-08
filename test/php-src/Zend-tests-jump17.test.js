// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/jump17.phpt
  it("jump 17: goto into try/catch with finally", function () {
    expect(parser.parseCode("<?php\ngoto b;\ntry {\n    echo \"1\";\na:\n    echo \"2\";\n    throw new Exception();\n} catch (Exception $e) {\n    echo \"3\";\nb:\n    echo \"4\";\n} finally {\n    echo \"5\";\nc:\n    echo \"6\";\n}\necho \"7\\n\";\n?>")).toMatchSnapshot();
  });
});
