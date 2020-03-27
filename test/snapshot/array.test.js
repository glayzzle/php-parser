const parser = require("../main");

describe("Array without keys", () => {
  it("deference array", () => {
    expect(
      parser.parseEval(
        ["$a = [", '"a", "b"', "]($foo)[$foo->bar()[1]]->foo()"].join("\r")
      )
    ).toMatchSnapshot();
  });

  it("of strings", () => {
    expect(
      parser.parseEval('array("item1", "item2", "item3")')
    ).toMatchSnapshot();
  });

  it("of numbers", () => {
    expect(parser.parseEval("array(1, 2.5, 0x1000)")).toMatchSnapshot();
  });

  it("of strings and numbers", () => {
    expect(parser.parseEval('array(1, "item2", 3, "item4")')).toMatchSnapshot();
  });

  it("of variables", () => {
    expect(parser.parseEval("array($obj1, $obj2, $obj3)")).toMatchSnapshot();
  });

  it("of objects", () => {
    expect(
      parser.parseEval("[new foo(), new stdClass(), new bar()]")
    ).toMatchSnapshot();
  });

  it("of arrays", () => {
    expect(
      parser.parseEval(`
        array(
          array("item1", "item2"),
          array("item3", "item4"),
          array("item5", "item6")
        )`)
    ).toMatchSnapshot();
  });

  describe("mixed tests / coverage", function () {
    it("test empty array", function () {
      expect(parser.parseEval("$a = []; $b = array();")).toMatchSnapshot();
    });
    it("test short form / keys", function () {
      expect(
        parser.parseEval('[0 => &$foo, $bar => "foobar"];')
      ).toMatchSnapshot();
    });
  });

  it("single and empty", () => {
    expect(parser.parseEval("array()")).toMatchSnapshot();
  });

  it("single and empty (short form)", () => {
    expect(parser.parseEval("[]")).toMatchSnapshot();
  });

  it("array without trailing commas", () => {
    expect(parser.parseEval("['foo', 'bar']")).toMatchSnapshot();
  });

  it("array without trailing commas #2", () => {
    expect(parser.parseEval("['foo', 'bar']")).toMatchSnapshot();
  });

  it("array with trailing commas #3", () => {
    expect(parser.parseEval("['foo', 'bar',]")).toMatchSnapshot();
  });

  it("array with trailing commas #4", () => {
    expect(parser.parseEval("['foo', 'bar'   ,]")).toMatchSnapshot();
  });

  it("array with trailing commas #5", () => {
    expect(parser.parseEval("['foo', 'bar'   ,   ]")).toMatchSnapshot();
  });

  it("array with multiple trailing commas", () => {
    expect(parser.parseEval("['foo', 'bar',,]")).toMatchSnapshot();
  });

  it("array with multiple trailing commas #2", () => {
    expect(parser.parseEval("['foo', 'bar',,,,,]")).toMatchSnapshot();
  });

  it("array with empty values", () => {
    expect(parser.parseEval("[,,,'foo',,, 'bar',,,'baz']")).toMatchSnapshot();
  });

  it("array with empty values #2", () => {
    expect(parser.parseEval("[,,,'foo',,, 'bar',,,'baz',]")).toMatchSnapshot();
  });

  it("array with empty values #3", () => {
    expect(parser.parseEval("[,,,'foo',,, 'bar',,,'baz',,]")).toMatchSnapshot();
  });

  it("non empty array", () => {
    expect(
      parser.parseEval(
        "$var = [true, 1, 1.1, 'test', \"test\", [1, 2, 3], new Foo(), call(), null];"
      )
    ).toMatchSnapshot();
  });

  it("spread operator", () => {
    expect(
      parser.parseEval(`
$var = ['banana', 'orange', ...$parts, 'watermelon'];
$var = [...$arr1];
$var = [0, ...$arr1];
$var = array(...$arr1, ...$arr2, 111);
$var = [...$arr1, ...$arr1];
$var = [...getArr(), 'c'];
$var = [...new ArrayIterator(['a', 'b', 'c'])];
`)
    ).toMatchSnapshot();
  });

  it("spread operator with reference", function () {
    const astErr = parser.parseEval(`$var = [...&$arr];`, {
      parser: {
        suppressErrors: true,
      },
    });
    expect(astErr).toMatchSnapshot();
  });

  it("byRef", () => {
    expect(
      parser.parseEval(`
$var = [1, 'test', &$var, 'test' => &$var];
`)
    ).toMatchSnapshot();
  });
});
