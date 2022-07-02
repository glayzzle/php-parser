// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/this_in_extract.phpt
  it("$this re-assign in extract()", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    try {\n        extract([\"this\"=>42, \"a\"=>24]);\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    var_dump($a);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
