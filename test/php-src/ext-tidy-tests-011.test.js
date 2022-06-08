// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/011.phpt
  it("Accessing attributes of a node", function () {
    expect(parser.parseCode("<?php\n        $a = tidy_parse_string(\"<HTML><BODY BGCOLOR=#FFFFFF ALINK=#000000></BODY></HTML>\");\n        $body = $a->body();\n        var_dump($body->attribute);\n        foreach($body->attribute as $key=>$val) {\n            echo \"Attrib '$key': $val\\n\";\n        }\n?>")).toMatchSnapshot();
  });
});
