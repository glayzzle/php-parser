// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78182.phpt
  it("Bug #78182: Segmentation fault during by-reference property assignment", function () {
    expect(parser.parseCode("<?php\n$varName = 'var';\n$propName = 'prop';\ntry {\n    $$varName->$propName =& $$varName;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($var);\n?>")).toMatchSnapshot();
  });
});
