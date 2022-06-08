// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/026.phpt
  it("tidy.clean_output test", function () {
    expect(parser.parseCode("<html>\n<?php\necho '<p>xpto</p>';\n?>\n</html>")).toMatchSnapshot();
  });
});
