// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug53629.phpt
  it("Bug #53629 (memory leak inside highlight_string())", function () {
    expect(parser.parseCode("<?php\n$str = '\n<?php\nclass foo {\n    public $bar = <<<EOT\nbar\n    EOT;\n}\n?>\n';\n$str2 = '\n<?php\nvar_dump(array(<<<EOD\nfoobar!\nEOD\n));\n?>\n';\nhighlight_string($str, true);\nhighlight_string($str2, true);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
