// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79862.phpt
  it("Bug #79862: Public non-static property in child should take priority over private static", function () {
    expect(parser.parseCode("<?php\nclass a {\n    private static $prop1;\n    private static $prop2;\n    private $prop3;\n    private $prop4;\n    private static $prop5;\n    private static $prop6;\n    public function __construct() {\n        $this->prop1 = 1;\n        $this->prop2 = 2;\n        $this->prop3 = 3;\n        $this->prop4 = 4;\n        $this->prop5 = 5;\n        $this->prop6 = 6;\n        var_dump(self::$prop1);\n        var_dump(self::$prop2);\n        var_dump(self::$prop5);\n        var_dump(self::$prop6);\n        var_dump($this);\n    }\n}\nclass c extends a {\n    public $prop1;\n    protected $prop2;\n    public static $prop3;\n    protected static $prop4;\n    public static $prop5;\n    protected static $prop6;\n}\n$c = new c;\n?>")).toMatchSnapshot();
  });
});
