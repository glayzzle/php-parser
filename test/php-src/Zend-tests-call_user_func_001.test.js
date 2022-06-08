// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_user_func_001.phpt
  it("Testing call_user_func inside namespace", function () {
    expect(parser.parseCode("<?php\nnamespace testing {\n    function foobar($str) {\n        var_dump($str);\n    }\n    abstract class bar {\n        protected function prot($str) {\n            print \"Shouldn't be called!\\n\";\n        }\n    }\n    class foo extends bar {\n        private function priv($str) {\n            print \"Shouldn't be called!\\n\";\n        }\n    }\n    call_user_func(__NAMESPACE__ .'\\foobar', 'foobar');\n    $class =  __NAMESPACE__ .'\\foo';\n    try {\n        call_user_func(array(new $class, 'priv'), 'foobar');\n    } catch (\\TypeError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    try {\n        call_user_func(array(new $class, 'prot'), 'foobar');\n    } catch (\\TypeError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
