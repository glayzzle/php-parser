// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strpbrk_error.phpt
  it("Test strpbrk() function : error conditions", function () {
    expect(parser.parseCode("<?php\n$haystack = 'This is a Simple text.';\necho \"-- Testing strpbrk() function with empty second argument --\\n\";\ntry {\n    strpbrk($haystack, '');\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
