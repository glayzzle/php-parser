// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_014.phpt
  it("Exceptions on improper access to static class properties", function () {
    expect(parser.parseCode("<?php\nclass C {\n    private $p = 0;\n}\n$x = new C;\ntry {\n    var_dump($x->p);\n} catch (Error $e) {\n    echo \"\\nException: \" . $e->getMessage() . \" in \" , $e->getFile() . \" on line \" . $e->getLine() . \"\\n\";\n}\nvar_dump($x->p);\n?>")).toMatchSnapshot();
  });
});
