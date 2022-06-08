// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_f.phpt
  it("sprintf %f", function () {
    expect(parser.parseCode("<?php\nvar_dump(sprintf(\"%3.2f\", 1.2));\nvar_dump(sprintf(\"%-3.2f\", 1.2));\nvar_dump(sprintf(\"%03.2f\", 1.2));\nvar_dump(sprintf(\"%-03.2f\", 1.2));\necho \"\\n\";\nvar_dump(sprintf(\"%5.2f\", 3.4));\nvar_dump(sprintf(\"%-5.2f\", 3.4));\nvar_dump(sprintf(\"%05.2f\", 3.4));\nvar_dump(sprintf(\"%-05.2f\", 3.4));\necho \"\\n\";\nvar_dump(sprintf(\"%7.2f\", -5.6));\nvar_dump(sprintf(\"%-7.2f\", -5.6));\nvar_dump(sprintf(\"%07.2f\", -5.6));\nvar_dump(sprintf(\"%-07.2f\", -5.6));\necho \"\\n\";\nvar_dump(sprintf(\"%3.4f\", 1.2345678e99));\n?>")).toMatchSnapshot();
  });
});
