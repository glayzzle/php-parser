var parser = require("../../src/index");

describe("Test graceful mode", function() {
  describe("to suppress errors", function() {
    var test = parser.create({
      parser: {
        suppressErrors: true
      }
    });

    it("should contain 2 errors", function() {
      expect(test.parseEval([
        "$var = ", // 1.
        "function() {", // 2.
        "$foo = ", // 3. <-- missing expr
        "}", // 4.
        "}" // 5. <-- extra '}' token here
      ].join("\n"))).toMatchSnapshot();
    });

    it("test expr", function() {
      expect(test.parseEval("$a = $b -; $foo = $a;")).toMatchSnapshot();
    });

    it("test class", function() {
      expect(test.parseEval("class foo { foo const A = 1 ")).toMatchSnapshot();
    });

    it("test flags", function() {
      expect(test.parseEval(`
        final final interface foo {
          abstract function func()
      `)).toMatchSnapshot();
    });

    it("test function arguments", function() {
      expect(test.parseEval(`
        $foo->bar($arg, );
        $foo = new bar($baz, ,$foo);
      `)).toMatchSnapshot();
    });

    it("test method chains", function() {
      expect(test.parseEval(`
        $controller->expects($this->once())
        ->
      `)).toMatchSnapshot();
    });
  });
});
