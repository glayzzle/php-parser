// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69212.phpt
  it("Bug #69212: Leaking VIA_HANDLER func when exception thrown in __call/... arg passing", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public static function __callStatic($method, $args) {}\n    public function __call($method, $args) {}\n}\nfunction do_throw() { throw new Exception; }\ntry {\n    Test::foo(do_throw());\n} catch (Exception $e) {\n    echo \"Caught!\\n\";\n}\ntry {\n    (new Test)->bar(do_throw());\n} catch (Exception $e) {\n    echo \"Caught!\\n\";\n}\ntry {\n    $f = function () {};\n    $f->__invoke(do_throw());\n} catch (Exception $e) {\n    echo \"Caught!\\n\";\n}\ntry {\n    $t = new Test;\n    $f->__invoke($t->bar(Test::foo(do_throw())));\n} catch (Exception $e) {\n    echo \"Caught!\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
