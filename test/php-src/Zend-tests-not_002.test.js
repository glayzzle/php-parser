// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/not_002.phpt
  it("bitwise NOT and arrays", function () {
    expect(parser.parseCode("<?php\n$a = array(1,2,3);\n$b = array(1,2);\ntry {\n    var_dump(~$b);\n} catch (Error $e) {\n    echo \"\\nException: \" . $e->getMessage() . \"\\n\";\n}\n$a = ~$b;\nvar_dump($a);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
