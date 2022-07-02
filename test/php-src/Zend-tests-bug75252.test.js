// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug75252.phpt
  it("Bug #75252: Incorrect token formatting on two parse errors in one request", function () {
    expect(parser.parseCode("<?php\n$code = <<<'CODE'\nfunction test_missing_semicolon() : string {\n     $x = []\n     FOO\n}\nCODE;\ntry {\n    eval($code);\n} catch (ParseError $e) {\n    var_dump($e->getMessage());\n}\ntry {\n    eval($code);\n} catch (ParseError $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
