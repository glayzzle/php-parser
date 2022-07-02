// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug74862.phpt
  it("Bug #74862 (Unable to clone instance when private __clone defined)", function () {
    expect(parser.parseCode("<?php\nclass a {\n    private function __clone()\n    {\n    }\n    private function __construct()\n    {\n    }\n    public static function getInstance()\n    {\n        return new static();\n    }\n    public function cloneIt()\n    {\n        $a = clone $this;\n        return $a;\n    }\n}\nclass c extends a {\n}\n// private constructor\n$d = c::getInstance();\n// private clone\n$e = $d->cloneIt();\nvar_dump($e);\n?>")).toMatchSnapshot();
  });
});
