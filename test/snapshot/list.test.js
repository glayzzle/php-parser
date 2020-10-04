const parser = require("../main");

describe("Test list expressions", function () {
  it("test list statements", function () {
    const ast = parser.parseEval(`list($a => list($c,$d,,$e,), $b) = [1, 2];`, {
      ast: {
        withPositions: true,
      },
    });
    expect(ast).toMatchSnapshot();
  });

  it("test short list", function () {
    expect(
      parser.parseEval(
        `[$a => [$c,$d,,$e,], $b] = [1 => [5, 6, 7, 8, 9,], 2];`,
        {
          ast: {
            withPositions: true,
          },
        }
      )
    ).toMatchSnapshot();
  });

  it("fix #150", function () {
    const ast = parser.parseEval("list('foo' => $bar) = ['foo' => 'bar'];");
    expect(ast).toMatchSnapshot();
  });

  it("fix #137", function () {
    const ast = parser.parseEval("list(,,$a,,$b) = [null, 1, null, 2];", {
      ast: {
        withPositions: true,
      },
    });
    expect(ast).toMatchSnapshot();
  });

  it("handles nested shorthand lists (fix #512)", () => {
    expect(parser.parseEval("[$a, [$b, $c]] = [1,[2,3]]")).toMatchSnapshot();
  });

  it("handles comments in nested shorthand lists", () => {
    expect(
      parser.parseEval(
        "[/*a*/$a/*b*/, /*c*/ [/*d*/$b/*e*/, /*f*/$c/*g*/]/*h*/]/*i*/ = [1,[2,3]] /*j*/",
        {
          parser: { extractDoc: true },
        }
      )
    ).toMatchSnapshot();
  });

  it("list without trailing commas", () => {
    expect(parser.parseEval("['foo', 'bar'] = $a")).toMatchSnapshot();
  });

  it("array without trailing commas", () => {
    expect(parser.parseEval("['foo', 'bar'] = $a")).toMatchSnapshot();
  });

  it("array with trailing commas", () => {
    expect(parser.parseEval("['foo', 'bar',] = $a")).toMatchSnapshot();
  });

  it("array with trailing commas #2", () => {
    expect(parser.parseEval("['foo', 'bar'   ,] = $a")).toMatchSnapshot();
  });

  it("array with trailing commas #3", () => {
    expect(parser.parseEval("['foo', 'bar'   ,   ] = $a")).toMatchSnapshot();
  });

  it("array with multiple trailing commas", () => {
    expect(parser.parseEval("['foo', 'bar',,] = $a")).toMatchSnapshot();
  });

  it("array with multiple trailing commas #2", () => {
    expect(parser.parseEval("['foo', 'bar',,,,,] = $a")).toMatchSnapshot();
  });

  it("array with empty values", () => {
    expect(
      parser.parseEval("[,,,'foo',,, 'bar',,,'baz'] = $a")
    ).toMatchSnapshot();
  });

  it("array with empty values #2", () => {
    expect(
      parser.parseEval("[,,,'foo',,, 'bar',,,'baz',] = $a")
    ).toMatchSnapshot();
  });

  it("array with empty values #3", () => {
    expect(
      parser.parseEval("[,,,'foo',,, 'bar',,,'baz',,] = $a")
    ).toMatchSnapshot();
  });
});
