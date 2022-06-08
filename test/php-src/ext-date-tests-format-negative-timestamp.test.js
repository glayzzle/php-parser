// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/format-negative-timestamp.phpt
  it("strtotime() - Format: @timestamps", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"GMT\");\n$i = 5;\n$max = getrandmax();\n$max_2 = $max / 2;\nwhile($i--) {\n    $new_tm = rand(1, $max);\n    if ($new_tm > $max_2)\n        $new_tm *= -1;\n    if (strtotime(\"@$new_tm\") != $new_tm) {\n        echo \"Error when parsing: @$new_tm\\n\";\n    }\n}\necho \"done!\";\n?>")).toMatchSnapshot();
  });
});
