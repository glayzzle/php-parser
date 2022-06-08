// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/bug27504.phpt
  it("Bug #27504 (call_user_func_array allows calling of private/protected methods)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    function __construct () {\n        $this->bar('1');\n    }\n    private function bar ( $param ) {\n        echo 'Called function foo:bar('.$param.')'.\"\\n\";\n    }\n}\n$foo = new foo();\ntry {\n    call_user_func_array( array( $foo , 'bar' ) , array( '2' ) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $foo->bar('3');\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
