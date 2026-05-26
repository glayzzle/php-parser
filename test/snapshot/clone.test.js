const parser = require("../main");

function filterKey(fn, obj) {
  if (Array.isArray(obj)) {
    return obj.map((e) => filterKey(fn, e));
  }

  if (typeof obj === "object" && obj !== null) {
    return Object.keys(obj)
      .filter(fn)
      .reduce(
        (result, key) => ({
          ...result,
          [key]: filterKey(fn, obj[key]),
        }),
        {},
      );
  }

  return obj;
}

function shouldBeSame(a, b) {
  const fn = (key) => key !== "parenthesizedExpression";
  expect(filterKey(fn, parser.parseEval(a))).toEqual(
    filterKey(fn, parser.parseEval(b)),
  );
}

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

describe("clone precedence comparison", function () {
  it("clone $obj + 1 should be same as (clone $obj) + 1", function () {
    shouldBeSame("clone $obj + 1", "(clone $obj) + 1");
  });
  it("clone $obj * 2 should be same as (clone $obj) * 2", function () {
    shouldBeSame("clone $obj * 2", "(clone $obj) * 2");
  });
  it("clone $obj - 1 should be same as (clone $obj) - 1", function () {
    shouldBeSame("clone $obj - 1", "(clone $obj) - 1");
  });
  it("clone $obj / 2 should be same as (clone $obj) / 2", function () {
    shouldBeSame("clone $obj / 2", "(clone $obj) / 2");
  });
  it("clone $obj->prop + 1 should be same as (clone $obj->prop) + 1", function () {
    shouldBeSame("clone $obj->prop + 1", "(clone $obj->prop) + 1");
  });
  it("clone $obj->method() * 2 should be same as (clone $obj->method()) * 2", function () {
    shouldBeSame("clone $obj->method() * 2", "(clone $obj->method()) * 2");
  });
  it("clone $obj[0] + 1 should be same as (clone $obj[0]) + 1", function () {
    shouldBeSame("clone $obj[0] + 1", "(clone $obj[0]) + 1");
  });
  it("-clone $obj should be same as -(clone $obj)", function () {
    shouldBeSame("-clone $obj", "-(clone $obj)");
  });
  it("!clone $obj should be same as !(clone $obj)", function () {
    shouldBeSame("!clone $obj", "!(clone $obj)");
  });
});
