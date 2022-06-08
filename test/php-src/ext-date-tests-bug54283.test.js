// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug54283.phpt
  it("Bug #54283 (new DatePeriod(NULL) causes crash)", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(new DatePeriod(NULL));\n} catch (Exception $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
