// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_in_finally_cleanup.phpt
  it("Free pending exceptions / return values on clone on yield in finally", function () {
    expect(parser.parseCode("<?php\nfunction gen1() {\n    try {\n        throw new Exception();\n    } finally {\n        yield;\n    }\n}\nfunction gen2() {\n    try {\n        $bar = \"bar\";\n        return \"foo\" . $bar;\n    } finally {\n        yield;\n    }\n}\nfunction gen3() {\n    try {\n        throw new Exception();\n    } finally {\n        try {\n            $bar = \"bar\";\n            return \"foo\" . $bar;\n        } finally {\n            yield;\n        }\n    }\n}\nfunction gen4() {\n    try {\n        try {\n            $bar = \"bar\";\n            return \"foo\" . $bar;\n        } finally {\n            yield;\n        }\n    } finally {\n    }\n}\ngen1()->rewind();\ngen2()->rewind();\ngen3()->rewind();\ngen4()->rewind();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
