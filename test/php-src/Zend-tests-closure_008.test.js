// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_008.phpt
  it("Closure 008: Use in preg_replace_callback()", function () {
    expect(parser.parseCode("<?php\nfunction replace_spaces($text) {\n    $lambda = function ($matches) {\n        return str_replace(' ', '&nbsp;', $matches[1]).' ';\n    };\n    return preg_replace_callback('/( +) /', $lambda, $text);\n}\necho replace_spaces(\"1 2 3\\n\");\necho replace_spaces(\"1  2  3\\n\");\necho replace_spaces(\"1   2   3\\n\");\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
