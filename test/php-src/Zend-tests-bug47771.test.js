// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug47771.phpt
  it("Bug #47771 (Exception during object construction from arg call calls object's destructor)", function () {
    expect(parser.parseCode("<?php\nfunction throw_exc() {\n  throw new Exception('TEST_EXCEPTION');\n}\nclass Test {\n  public function __construct() {\n    echo 'Constr' .\"\\n\";\n  }\n  public function __destruct() {\n    echo 'Destr' .\"\\n\";\n  }\n}\ntry {\n  $T =new Test(throw_exc());\n} catch( Exception $e) {\n  echo 'Exception: ' . $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
