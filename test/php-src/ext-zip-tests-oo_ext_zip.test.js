// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_ext_zip.phpt
  it("Extending Zip class and array property", function () {
    expect(parser.parseCode("<?php\nclass myZip extends ZipArchive {\n    private $test = 0;\n    public $testp = 1;\n    private $testarray = array();\n    public function __construct() {\n        $this->testarray[] = 1;\n        var_dump($this->testarray);\n    }\n}\n$z = new myZip;\n?>")).toMatchSnapshot();
  });
});
