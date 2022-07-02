// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/006.phpt
  it("Nested If/ElseIf/Else Test", function () {
    expect(parser.parseCode("<?php\n$a=1;\n$b=2;\nif($a==0) {\n    echo \"bad\";\n} elseif($a==3) {\n    echo \"bad\";\n} else {\n    if($b==1) {\n        echo \"bad\";\n    } elseif($b==2) {\n        echo \"good\";\n    } else {\n        echo \"bad\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
