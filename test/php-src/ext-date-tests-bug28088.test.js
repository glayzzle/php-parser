// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug28088.phpt
  it("Bug #28088 (strtotime() cannot convert 00 hours\")", function () {
    expect(parser.parseCode("<?php\necho \"The following line rightly shows the correct date time:\\n\";\necho gmdate(\"m/d/y Hi\", strtotime(\"04/04/04 2345\")), \"\\n\";\necho \"But the following line fails to show the correct date time:\\n\";\necho gmdate(\"m/d/y Hi\", strtotime(\"04/04/04 0045\")).\"\\r\\n\";\n?>")).toMatchSnapshot();
  });
});
