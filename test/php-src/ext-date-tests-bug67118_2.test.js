// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug67118_2.phpt
  it("Regression introduce in fix for Bug #67118 - Invalid code", function () {
    expect(parser.parseCode("<?php\nclass Foo extends DateTime {\n    public function __construct($time = null) {\n        $tz = new DateTimeZone('UTC');\n        try {\n            echo \"First try\\n\";\n            parent::__construct($time, $tz);\n            return;\n        } catch (Exception $e) {\n            echo \"Second try\\n\";\n            parent::__construct($time.'C', $tz);\n        }\n    }\n}\n$date = '12 Sep 2007 15:49:12 UT';\nvar_dump(new Foo($date));\n?>\nDone")).toMatchSnapshot();
  });
});
