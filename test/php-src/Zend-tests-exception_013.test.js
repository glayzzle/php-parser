// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_013.phpt
  it("Exceptions on improper access to static class properties", function () {
    expect(parser.parseCode("<?php\nclass C {\n    static private $p = 0;\n}\ntry {\n    var_dump(C::$a);\n} catch (Error $e) {\n    echo \"\\nException: \" . $e->getMessage() . \" in \" , $e->getFile() . \" on line \" . $e->getLine() . \"\\n\";\n}\ntry {\n    var_dump(C::$p);\n} catch (Error $e) {\n    echo \"\\nException: \" . $e->getMessage() . \" in \" , $e->getFile() . \" on line \" . $e->getLine() . \"\\n\";\n}\ntry {\n    unset(C::$a);\n} catch (Error $e) {\n    echo \"\\nException: \" . $e->getMessage() . \" in \" , $e->getFile() . \" on line \" . $e->getLine() . \"\\n\";\n}\nvar_dump(C::$a);\n?>")).toMatchSnapshot();
  });
});
