// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/012.phpt
  it("Accessing children nodes", function () {
    expect(parser.parseCode("<?php\n        function dump_nodes(tidyNode $node) {\n            var_dump($node->hasChildren());\n            if($node->hasChildren()) {\n                foreach($node->child as $c) {\n                    var_dump($c);\n                    if($c->hasChildren()) {\n                        dump_nodes($c);\n                    }\n                }\n            }\n        }\n        $a = tidy_parse_string(\"<HTML><BODY BGCOLOR=#FFFFFF ALINK=#000000><B>Hi</B><I>Bye<U>Test</U></I></BODY></HTML>\", array('newline' => 'LF'));\n        $html = $a->html();\n        dump_nodes($html);\n?>")).toMatchSnapshot();
  });
});
