// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug66608.phpt
  it("Bug #66608 (Incorrect behavior with nested \"finally\" blocks)", function () {
    expect(parser.parseCode("<?php\nfunction bar() {\n    try {\n        echo \"1\\n\";\n        try {\n        } finally {\n            try {\n            } finally {\n            }\n            echo \"2\\n\";\n        }\n    } finally {\n        try {\n            throw new Exception (\"\");\n        } catch (Exception $ab) {\n            echo \"3\\n\";\n        } finally {\n            try {\n            } finally {\n                echo \"4\\n\";\n                try  {\n                } finally {\n                }\n                echo \"5\\n\";\n            }\n        }\n        echo \"6\\n\";\n        try {\n        } finally {\n            while (1) {\n                try {\n                    echo \"7\\n\";\n                    break;\n                } finally {\n                    echo \"8\\n\";\n                }\n                echo \"bad\";\n            }\n            echo \"9\\n\";\n            while (1) {\n                try {\n                    throw new Exception(\"\");\n                } catch(Exception $e) {\n                    echo \"10\\n\";\n                    break;\n                } finally {\n                    echo \"11\\n\";\n                }\n                echo \"bak\\n\";\n            }\n        }\n        echo \"12\\n\";\n    }\n    echo \"13\\n\";\n}\nbar();\n?>")).toMatchSnapshot();
  });
});
