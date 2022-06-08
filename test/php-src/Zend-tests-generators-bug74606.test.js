// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/bug74606.phpt
  it("Bug #74606 (Segfault within try/catch/finally nesting in Generators)", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    $array = [\"foo\"];\n    $array[] = \"bar\";\n    foreach ($array as $item) {\n        try {\n            try {\n                yield;\n            } finally {\n                echo \"fin $item\\n\";\n            }\n        } catch (\\Exception $e) {\n            echo \"catch\\n\";\n            continue;\n        }\n    }\n}\ngen()->throw(new Exception);\n?>")).toMatchSnapshot();
  });
});
