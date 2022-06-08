// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/049.phpt
  it("filter_var() and doubles with thousend separators", function () {
    expect(parser.parseCode("<?php\n$test = array(\n    '0'\t\t\t\t\t\t\t=> 0.0,\n    '12345678900.1234567165'\t=> 12345678900.1234567165,\n    '1,234,567,890.1234567165'\t=> 1234567890.1234567165,\n    '-1,234,567,890.1234567165'\t=> -1234567890.1234567165,\n    '1234,567,890.1234567165'\t=> false,\n    '1,234,567,89.1234567165'\t=> false,\n    '1,234,567,8900.1234567165'\t=> false,\n    '1.234.567.890.1234567165'\t=> false,\n    '1,234,567,8900.123,456'\t=> false,\n);\nforeach ($test as $src => $dst) {\n    $out = filter_var($src, FILTER_VALIDATE_FLOAT, array(\"flags\"=>FILTER_FLAG_ALLOW_THOUSAND));\n    if ($dst !== $out) {\n        if ($out === false) {\n            echo \"$src -> false != $dst\\n\";\n        } elseif ($dst === false) {\n            echo \"$src -> $out != false\\n\";\n        } else {\n            echo \"$src -> $out != $dst\\n\";\n        }\n    }\n}\necho \"Ok\\n\";\n?>")).toMatchSnapshot();
  });
});
