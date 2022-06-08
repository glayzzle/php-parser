// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug41209.phpt
  it("Bug #41209 (Segmentation fault with ArrayAccess, set_error_handler and undefined var)", function () {
    expect(parser.parseCode("<?php\nclass env\n{\n    public function __construct()\n    {\n        set_error_handler(array(__CLASS__, 'errorHandler'));\n    }\n    public static function errorHandler($errno, $errstr, $errfile, $errline)\n    {\n        throw new ErrorException($errstr, 0, $errno, $errfile, $errline);\n    }\n}\nclass cache implements ArrayAccess\n{\n    private $container = array();\n    public function offsetGet($id): mixed {}\n    public function offsetSet($id, $value): void {}\n    public function offsetUnset($id): void {}\n    public function offsetExists($id): bool\n    {\n        return isset($this->containers[(string) $id]);\n    }\n}\n$env = new env();\n$cache = new cache();\nvar_dump(isset($cache[$id]));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
