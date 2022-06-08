// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_isSubclassOf_error2.phpt
  it("ReflectionClass::isSubclassOf() - fixed crash for unbound anonymous class", function () {
    expect(parser.parseCode("<?php\nclass X {\n    public static function main() {\n        return new class() extends Base {};\n    }\n}\nclass Base {}\n$check = function () {\n    $base = Base::class;\n    foreach (get_declared_classes() as $class) {\n        if (strpos($class, '@anonymous') === false) {\n            continue;\n        }\n        echo \"Checking for $class\\n\";\n        flush();\n        $rc = new ReflectionClass($class);\n        var_export($rc->isSubclassOf($base));\n        echo \"\\n\";\n    }\n};\n// Should not show up in get_declared_classes until the anonymous class is bound.\n$check();\necho \"After first check\\n\";\nX::main();\n$check();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
