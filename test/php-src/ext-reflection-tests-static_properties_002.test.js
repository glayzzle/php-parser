// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/static_properties_002.phpt
  it("Reflection and inheriting static properties", function () {
    expect(parser.parseCode("<?php\nclass base {\n    static protected $prop = 2;\n    static function show() {\n        echo __METHOD__ . '(' . self::$prop . \")\\n\";\n    }\n    static function inc() {\n        base::$prop++;\n        echo __METHOD__ . \"()\\n\";\n    }\n}\nclass derived extends base {\n    static public $prop = 2;\n    static function show() {\n        echo __METHOD__ . '(' . self::$prop . \")\\n\";\n    }\n    static function inc() {\n        derived::$prop++;\n        echo __METHOD__ . \"()\\n\";\n    }\n}\nbase::show();\nderived::show();\nbase::inc();\nbase::show();\nderived::show();\nderived::inc();\nbase::show();\nderived::show();\n$r = new ReflectionClass('derived');\necho 'Number of properties: '. count($r->getStaticProperties()) . \"\\n\";\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
