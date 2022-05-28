const parser = require("../main");

describe("Test enums", function () {
  it("empty", function () {
    expect(parser.parseEval("enum Foo {}")).toMatchSnapshot();
  });

  it("non-empty", function () {
    expect(
      parser.parseEval(`
        enum Suit {
          case Hearts;
          case Diamonds;
          case Clubs;
          case Spades;
        }
      `)
    ).toMatchSnapshot();
  });

  it("may have a backing type", function () {
    expect(
      parser.parseEval(`
        enum Suit: string {
          case Hearts = 'H';
          case Diamonds = 'D';
          case Clubs = 'C';
          case Spades = 'S';
        }
      `)
    ).toMatchSnapshot();
  });

  it("can alias cases", function () {
    expect(
      parser.parseEval(`
        enum Foo {
          case Bar;
          public const Baz = self::Bar;
        }
      `)
    ).toMatchSnapshot();
  });

  it("can implement interfaces", function () {
    expect(
      parser.parseEval(`
        enum Foo implements Bar, Baz {}
      `)
    ).toMatchSnapshot();
  });

  it("can use traits", function () {
    expect(
      parser.parseEval(`
        enum Foo {
          use Bar, Baz {
            Baz::hello insteadof Bar;
            Baz::world as earth;
          }
          use Bax;
        }
      `)
    ).toMatchSnapshot();
  });

  it("can have functions", function () {
    expect(
      parser.parseEval(`
        enum Foo: int {
          case MyCase = 1;

          public function bar(): void {}

          protected static function baz() {
            echo self::MyCase->value;
          }
        }
      `)
    ).toMatchSnapshot();
  });

  it("cannot have properties", function () {
    expect(() => {
      parser.parseEval(`
        enum Foo {
          public int $bar;
          protected $baz;
        }
      `);
    }).toThrowErrorMatchingSnapshot();
  });

  it("doesn't cause problems when used as identifier", function () {
    expect(
      parser.parseEval(`
      class Enum { function enum () {} }
      interface Enum {}
      trait Enum  {}
      function enum() {}
    `)
    ).toMatchSnapshot();
  });

  it("can't be parsed with PHP < 8", function () {
    expect(() => {
      parser.parseEval("enum Foo {}", { parser: { version: "8.0" } });
    }).toThrowErrorMatchingSnapshot();
  });
});
