// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_timestamp_get.phpt
  it("Test the basics to function date_timestamp_get().", function () {
    expect(parser.parseCode("<?php\n$beginDtObj = date_create('1970-01-01T00:00:00UTC');\n$beginTimestamp = date_timestamp_get($beginDtObj);\nvar_dump($beginTimestamp);\n// Test the DateTime feature alias in function date_timestamp_get().\n$dateTimeTz = (new DateTime('1970-01-01T00:00:00UTC'))->getTimeStamp();\nvar_dump($dateTimeTz === $beginTimestamp);\n?>")).toMatchSnapshot();
  });
});
