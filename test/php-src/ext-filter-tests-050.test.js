// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/050.phpt
  it("filter_var() and double overflow/underflow", function () {
    expect(parser.parseCode("<?php\n$test = array(\n    '1e+308'\t\t\t\t\t=> 1e+308,\n    '1e+309'\t\t\t\t\t=> false,\n    '1e-323'\t\t\t\t\t=> 1e-323,\n    '1e-324'\t\t\t\t\t=> false,\n);\nforeach ($test as $src => $dst) {\n    $out = filter_var($src, FILTER_VALIDATE_FLOAT);\n    if ($dst !== $out) {\n        if ($out === false) {\n            echo \"$src -> false != $dst\\n\";\n        } elseif ($dst === false) {\n            echo \"$src -> $out != false\\n\";\n        } else {\n            echo \"$src -> $out != $dst\\n\";\n        }\n    }\n}\necho \"Ok\\n\";\n?>")).toMatchSnapshot();
  });
});
