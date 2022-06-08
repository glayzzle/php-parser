// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug45186_2.phpt
  it("Bug #45186.2 (__call depends on __callstatic in class scope)", function () {
    expect(parser.parseCode("<?php\nclass bar  {\n    public function __call($a, $b) {\n        print \"__call:\\n\";\n        var_dump($a);\n    }\n    public function test() {\n        self::ABC();\n        bar::ABC();\n        call_user_func(array('BAR', 'xyz'));\n        call_user_func('BAR::www');\n        call_user_func(array('self', 'y'));\n        call_user_func('self::y');\n    }\n    static function x() {\n        print \"ok\\n\";\n    }\n}\n$x = new bar;\n$x->test();\ncall_user_func(array('BAR','x'));\ntry {\n    call_user_func('BAR::www');\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    call_user_func('self::y');\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
