// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug33957.phpt
  it("Bug #33957 (gmdate('W')/date('W') sometimes returns wrong week number)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set(\"UTC\");\nfor ($i = 14; $i <= 31; $i++) {\n    echo \"1992-12-$i  \", date(\"W\", strtotime(\"1992-12-$i\")), \"\\n\";\n}\nfor ($i = 1; $i <= 8; $i++) {\n    echo \"1993-01-$i  \", date(\"W\", strtotime(\"1993-01-$i\")), \"\\n\";\n}\necho \"----\\n\";\necho \"             \";\nforeach (range(1992, 2019) as $year) {\n    echo \"$year     \";\n}\necho \"\\n\";\nfor ($i = 14; $i <= 31; $i++) {\n    echo \"   (12-$i) \";\n    foreach (range(1992, 2019) as $year) {\n        echo sprintf(\" %02d-\", date(\"W\", strtotime(\"$year-12-$i\")));\n        echo sprintf(\"%04d \", date(\"o\", strtotime(\"$year-12-$i\")));\n    }\n    echo \"\\n\";\n}\nfor ($i = 1; $i <= 18; $i++) {\n    printf(\"+1 (01-%02d) \", $i);\n    foreach (range(1993, 2020) as $year) {\n        echo sprintf(\" %02d-\", date(\"W\", strtotime(\"$year-1-$i\")));\n        echo sprintf(\"%04d \", date(\"o\", strtotime(\"$year-1-$i\")));\n    }\n    echo \"\\n\";\n}\necho \"----\\n\";\n?>")).toMatchSnapshot();
  });
});
