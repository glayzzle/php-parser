// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug80255.phpt
  it("Bug #80255: Opcache bug (bad condition result) in 8.0.0rc1", function () {
    expect(parser.parseCode("<?php\nfunction test($a, $b, $c) {\n    do {\n        if ($a && !$b) {\n            break;\n        } else if ($b) {\n            echo \"foo\\n\";\n        }\n        echo \"bar\\n\";\n    } while ($c);\n    echo \"baz\\n\";\n}\ntest(true, true, false);\n?>")).toMatchSnapshot();
  });
});
