// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/short_tags.001.phpt
  it("short_open_tag: On", function () {
    expect(parser.parseCode("<?\necho \"Used a short tag\\n\";\n?>\nFinished")).toMatchSnapshot();
  });
});
