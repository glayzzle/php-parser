const parser = require("../main");

describe("Parse Pipeline Operator", () => {
  it("can parse basic pipeline operator task", () => {
    const parser8_5 = parser.create({
      parser: {
        version: "8.5",
      },
    });
    expect(
      parser8_5.parseEval(`
    $c = $a 
      |> (fn ($s) => explode(",", $s))
      |> array_filter(...) |> 'array_last' ;
    `),
    ).toMatchSnapshot();
  });

  it("requires parentheses around arrow functions in a pipe chain", () => {
    const parser8_5 = parser.create({
      parser: {
        version: "8.5",
      },
    });

    expect(() =>
      parser8_5.parseEval(`
    $c = $a
      |> fn ($s) => explode(",", $s)
      |> array_filter(...);
    `),
    ).toThrowErrorMatchingSnapshot();
  });
});
