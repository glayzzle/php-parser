// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/short_tags.002.phpt
  it("short_open_tag: Off", function () {
    expect(parser.parseCode("<?\necho \"Used a short tag\\n\";\n?>\nFinished")).toMatchSnapshot();
  });
});
