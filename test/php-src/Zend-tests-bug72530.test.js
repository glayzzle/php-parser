// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72530.phpt
  it("Bug #72530: Use After Free in GC with Certain Destructors", function () {
    expect(parser.parseCode("<?php\nclass ryat {\n    var $ryat;\n    var $chtg;\n    function __destruct() {\n        $this->chtg = $this->ryat;\n        $this->ryat = 1;\n    }\n}\n$o = new ryat;\n$o->ryat = $o;\n$x =& $o->chtg;\nunset($o);\ngc_collect_cycles();\nvar_dump($x);\n?>")).toMatchSnapshot();
  });
});
