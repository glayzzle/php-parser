// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_057.phpt
  it("Closure 057: segfault in leave helper", function () {
    expect(parser.parseCode("<?php\nclass A {\n}\nfunction getfunc() {\n    $b = function() {\n        $a = function() {\n        };\n        $a();\n    };\n    return $b->bindTo(new A());\n}\ncall_user_func(getfunc());\necho \"okey\";\n?>")).toMatchSnapshot();
  });
});
