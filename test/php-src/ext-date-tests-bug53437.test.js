// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug53437.phpt
  it("Bug #53437 (Crash when using unserialized DatePeriod instance), variation 1", function () {
    expect(parser.parseCode("<?php\n$dp = new DatePeriod(new DateTime('2010-01-01 UTC'), new DateInterval('P1D'), 2);\necho \"Original:\\r\\n\";\nforeach($dp as $dt) {\n        echo $dt->format('Y-m-d H:i:s').\"\\r\\n\";\n}\necho \"\\r\\n\";\nvar_dump($dp);\n$ser = serialize($dp); // $ser is: O:10:\"DatePeriod\":0:{}\n// Create dangerous instance\n$dpu = unserialize($ser); // $dpu has invalid values???\nvar_dump($dpu);\necho \"Unserialized:\\r\\n\";\nforeach($dpu as $dt) {\n        echo $dt->format('Y-m-d H:i:s').\"\\r\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
