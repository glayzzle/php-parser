// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/tidy_error.phpt
  it("Ensure tidy_get_status() returns correct status", function () {
    expect(parser.parseCode("<?php\n$html = '<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 3.2//EN\">\n<html>\n<head>\n<title></title>\n</head>\n<body>\n<p>paragraph</p>\n</body>\n</html>';\n$tidy = tidy_parse_string($html);\necho tidy_get_status($tidy);\n// status 0 indicates no errors or warnings\n$html = '<p>paragraph</i>';\n$tidy = tidy_parse_string($html);\necho tidy_get_status($tidy);\n// status 1 indicates warnings\n$html = '<bogus>test</bogus>';\n$tidy = tidy_parse_string($html);\necho tidy_get_status($tidy);\n// status 2 indicates error\n?>")).toMatchSnapshot();
  });
});
