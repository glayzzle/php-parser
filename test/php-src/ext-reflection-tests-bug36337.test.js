// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug36337.phpt
  it("Reflection Bug #36337 (ReflectionProperty fails to return correct visibility)", function () {
    expect(parser.parseCode("<?php\nabstract class enum_ {\n    protected $_values;\n    public function __construct() {\n        $property = new ReflectionProperty(get_class($this),'_values');\n        var_dump($property->isProtected());\n    }\n}\nfinal class myEnum extends enum_ {\n    public $_values = array(\n           0 => 'No value',\n       );\n}\n$x = new myEnum();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
