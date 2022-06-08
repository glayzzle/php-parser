// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug52808.phpt
  it("Bug #52808 (Segfault when specifying interval as two dates)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Europe/Oslo');\n$intervals = array(\n    \"2008-05-11T15:30:00Z/2007-03-01T13:00:00Z\",\n    \"2007-05-11T15:30:00Z/2008-03-01T13:00:00Z\",\n    \"2007-05-11T15:30:00Z 2008-03-01T13:00:00Z\",\n    \"2007-05-11T15:30:00Z/\",\n    \"2007-05-11T15:30:00Z\",\n    \"2007-05-11T15:30:00Z/:00Z\",\n);\nforeach($intervals as $iv) {\n    try\n    {\n        $di = new DateInterval($iv);\n        var_dump($di);\n    }\n    catch ( Exception $e )\n    {\n        echo $e->getMessage(), \"\\n\";\n    }\n}\necho \"==DONE==\\n\";\n?>")).toMatchSnapshot();
  });
});
