// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug77339.phpt
  it("Bug #77339 (__callStatic may get incorrect arguments)", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    static function __callStatic($name, $arguments) {\n       if ($name === 'get') {\n            if (!isset($arguments[0])) {\n                var_dump(['getSomeWhat']);\n                var_dump($arguments);\n                exit;\n            }\n        }\n        echo \"OK\\n\";\n    }\n    protected function get ($key) {\n        echo \"BUG!!!\\n\";\n    }\n}\nclass Bar\n{\n    static function __callStatic($name, $arguments) {\n        echo Foo::get('getSomeWhat');\n    }\n}\nBar::someUndefinedStaticFunction();\n?>")).toMatchSnapshot();
  });
});
