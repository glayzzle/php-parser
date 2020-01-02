const parser = require("../main");

describe("constantstatement", () => {
  it("simple", () => {
    expect(
      parser.parseEval('const CONSTANT = "Hello world!";')
    ).toMatchSnapshot();
  });
  it("multiple", () => {
    expect(
      parser.parseEval(
        'const CONSTANT = "Hello world!", OTHER_CONSTANT = "Other hello world!";'
      )
    ).toMatchSnapshot();
  });
});
