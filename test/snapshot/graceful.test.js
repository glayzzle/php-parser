const parser = require("../main");

describe("Test graceful mode", function () {
  describe("to suppress errors", function () {
    const test = parser.create({
      parser: {
        suppressErrors: true,
      },
    });

    it("should contain 2 errors", function () {
      expect(
        test.parseEval(
          [
            "$var = ", // 1.
            "function() {", // 2.
            "$foo = ", // 3. <-- missing expr
            "}", // 4.
            "}", // 5. <-- extra '}' token here
          ].join("\n")
        )
      ).toMatchSnapshot();
    });

    it("test expr", function () {
      expect(test.parseEval("$a = $b -; $foo = $a;")).toMatchSnapshot();
    });

    it("test class", function () {
      expect(test.parseEval("class foo { foo const A = 1 ")).toMatchSnapshot();
    });

    it("test flags", function () {
      expect(
        test.parseEval(`
        final final interface foo {
          abstract function func()
      `)
      ).toMatchSnapshot();
    });

    it("test flags (2)", function () {
      expect(
        test.parseEval(`
        final final class foo {
          abstract function func()
      `)
      ).toMatchSnapshot();
    });

    it("test flags (3)", function () {
      expect(
        test.parseEval(`
        final final trait foo {
          abstract function func()
      `)
      ).toMatchSnapshot();
    });

    it("interface", function () {
      expect(
        test.parseEval("interface foo implement baz {}")
      ).toMatchSnapshot();
    });

    it("trait", function () {
      expect(
        test.parseEval("trait foo extends bar implement baz {}")
      ).toMatchSnapshot();
    });

    it("test function arguments", function () {
      expect(
        test.parseEval(`
        $foo->bar($arg, );
        $foo = new bar($baz, ,$foo);
      `)
      ).toMatchSnapshot();
    });

    it("test method chains", function () {
      expect(
        test.parseEval(`
        $controller->expects($this->once())
        ->
      `)
      ).toMatchSnapshot();
    });

    it("staticlookup", function () {
      expect(test.parseEval("Order::{call()};")).toMatchSnapshot();
    });

    it("should fail !", function () {
      expect(test.parseEval("new Foo::{call()}();")).toMatchSnapshot();
    });

    it("should fail with '{' and ']'", function () {
      expect(test.parseEval("$obj{$foo];")).toMatchSnapshot();
    });

    it("should fail with '[' and '}'", function () {
      expect(test.parseEval("$obj[$bar};")).toMatchSnapshot();
    });
  });
});
