// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_057.phpt
  it("057: Usage of 'namespace' in compound names (inside namespace)", function () {
    expect(parser.parseCode("<?php\nnamespace Test\\ns1;\nconst C = \"const ok\\n\";\nfunction foo() {\n    return \"func ok\\n\";\n}\nclass foo {\n    const C = \"const ok\\n\";\n    const C2 = namespace\\C;\n    static $var = \"var ok\\n\";\n    function __construct() {\n        echo \"class ok\\n\";\n    }\n    static function bar() {\n        return \"method ok\\n\";\n    }\n}\nfunction f1($x=namespace\\C) {\n    return $x;\n}\nfunction f2($x=namespace\\foo::C) {\n    return $x;\n}\nfunction f3(namespace\\foo $x) {\n    return \"ok\\n\";\n}\necho namespace\\C;\necho namespace\\foo();\necho namespace\\foo::C;\necho namespace\\foo::C2;\necho namespace\\foo::$var;\necho namespace\\foo::bar();\necho namespace\\f1();\necho namespace\\f2();\necho namespace\\f3(new namespace\\foo());\necho namespace\\unknown;\n?>")).toMatchSnapshot();
  });
});
