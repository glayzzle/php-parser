// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug32086.phpt
  it("Bug #32086 (strtotime don't work in DST)", function () {
    expect(parser.parseCode("<?php\necho $g = strtotime(\"2004-11-01\"), \"\\n\";\necho $i = strtotime(\"2004-11-01 +1 day\"), \"\\n\";\necho $j = strtotime(\"+1 day\", $g), \"\\n\";\necho $k = strtotime(\"2004-11-02\"), \"\\n\";\necho $l = strtotime(\"2004-11-03\"), \"\\n\";\necho date(\"Y-m-d H:i:s T\\n\", $g);\necho date(\"Y-m-d H:i:s T\\n\", $i);\necho date(\"Y-m-d H:i:s T\\n\", $j);\necho date(\"Y-m-d H:i:s T\\n\", $k);\necho date(\"Y-m-d H:i:s T\\n\", $l);\necho $g = strtotime(\"2005-02-19\"), \"\\n\";\necho $i = strtotime(\"2005-02-19 +1 day\"), \"\\n\";\necho $j = strtotime(\"+1 day\", $g), \"\\n\";\necho $k = strtotime(\"2005-02-20\"), \"\\n\";\necho $l = strtotime(\"2005-02-21\"), \"\\n\";\necho date(\"Y-m-d H:i:s T\\n\", $g);\necho date(\"Y-m-d H:i:s T\\n\", $i);\necho date(\"Y-m-d H:i:s T\\n\", $j);\necho date(\"Y-m-d H:i:s T\\n\", $k);\necho date(\"Y-m-d H:i:s T\\n\", $l);\n?>")).toMatchSnapshot();
  });
});
