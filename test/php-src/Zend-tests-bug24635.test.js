// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug24635.phpt
  it("Bug #24635 (crash on dtor calling other functions)", function () {
    expect(parser.parseCode("<?php\nclass SiteClass {\n    function __construct()\t{ $this->page = new PageClass(); }\n}\nclass PageClass {\n    function Display() {\n        $section = new SectionClass(\"PageClass::Display\");\n    }\n}\nclass SectionClass {\n    function __construct($comment) {\n        $this->Comment = $comment;\n    }\n    function __destruct() {\n        out($this->Comment); // this line doesn't crash PHP\n        out(\"\\n<!-- End Section: \" . $this->Comment . \"-->\"); // this line\n    }\n}\nfunction out($code) { return; }\n$site = new SiteClass();\n$site->page->Display();\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
