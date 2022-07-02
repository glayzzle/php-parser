// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/jump16.phpt
  it("jump 16: goto into try/catch", function () {
    expect(parser.parseCode("<?php\ngoto a;\ntry {\n    echo \"1\";\na:\n    echo \"2\";\n    throw new Exception();\n} catch (Exception $e) {\n    echo \"3\";\n}\necho \"4\";\ngoto b;\ntry {\n    echo \"5\";\n    throw new Exception();\n} catch (Exception $e) {\n    echo \"6\";\nb:\n    echo \"7\";\n}\necho \"8\\n\";\n?>")).toMatchSnapshot();
  });
});
