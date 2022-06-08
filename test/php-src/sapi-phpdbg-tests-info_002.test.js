// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/info_002.phpt
  it("info constants test", function () {
    expect(parser.parseCode("<?php\nconst A = 10;\nconst B = C::D * A;\nclass C {\n\tconst D = 10;\n}\nprint B;\n")).toMatchSnapshot();
  });
});
