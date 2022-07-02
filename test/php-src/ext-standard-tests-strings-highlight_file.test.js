// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/highlight_file.phpt
  it("highlight_file() tests", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__.\"/highlight_file.dat\";\nvar_dump(highlight_file($filename));\nvar_dump(highlight_file('data:,<?php echo \"test\"; ?>'));\nvar_dump(highlight_file('data:,<?php echo \"test ?>'));\n$data = '\n<?php\nclass test {\n    public $var = 1;\n    private function foo() { echo \"foo\"; }\n    public function bar() { var_dump(test::foo()); }\n}\n?>';\nfile_put_contents($filename, $data);\nvar_dump(highlight_file($filename));\n@unlink($filename);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
