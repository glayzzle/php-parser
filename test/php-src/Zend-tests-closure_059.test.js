// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_059.phpt
  it("Closure 059: Closure type declaration", function () {
    expect(parser.parseCode("<?php\nclass A {\n}\nclass B {\n}\n$a = new A;\n$b = new B;\n$f = function (A $a){};\n$f($a);\n$f->__invoke($a);\ncall_user_func(array($f,\"__invoke\"), $a);\ntry {\n    $f($b);\n} catch (Error $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\ntry {\n    $f->__invoke($b);\n} catch (Error $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\ntry {\n    call_user_func(array($f,\"__invoke\"), $b);\n} catch (Error $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
