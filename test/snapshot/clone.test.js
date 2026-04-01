const parser = require("../main");

describe("clone", function () {
  it("simple", function () {
    expect(parser.parseEval("clone $obj;")).toMatchSnapshot();
  });
  it("assign", function () {
    expect(parser.parseEval("$var = clone $obj;")).toMatchSnapshot();
  });
  it("with property overrides", function () {
    expect(
      parser.parseEval(
        '$var = clone($obj, ["name" => $name, "id" => getId(...)]);',
        {
          parser: {
            version: "8.5",
          },
        },
      ),
    ).toMatchSnapshot();
  });
});
