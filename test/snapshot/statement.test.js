const parser = require('../main');

describe("Test statements", function() {
  it("test goto label", function() {
    expect(parser.parseEval(`
      start:
        $i++;
      goto start;
    `)).toMatchSnapshot();
  });

  it("test global", function() {
    expect(parser.parseEval(`
      function foo() {
        global $a, $b;
      }
    `)).toMatchSnapshot();
  });

  describe('halt statements', function() {
    it("test halt statement", function() {
      expect(parser.parseEval(`
        $a = 1;
        __halt_compiler();
        $b = 1;
      `, {
        parser: { debug: false }
      })).toMatchSnapshot();
    });

    it("test inner error", function() {
      expect(() => {
        parser.parseEval(`
          if (true) {
            __halt_compiler();
          }
        `)
      }).toThrow();
    });

    it("test fallback", function() {
      expect(parser.parseEval(`
        if (true) {
          __halt_compiler();
        }
        $b = 1;
      `, {
        parser: { suppressErrors: true }
      })).toMatchSnapshot();
    });
  });

  it("test static", function() {
    expect(parser.parseEval(`
      function foo() {
        static $a, $b = 5;
      }
      static $sVar1 = 11;
    `, {
      parser: { debug: false }
    })).toMatchSnapshot();
  });

  it("test declare", function() {
    expect(parser.parseEval(`
      if (true) { declare(ticks=1); }
      $a = 1;
      declare(ticks=2,encoding=ISO-8859-1);
      $b = 1;
      declare(ticks=1) {
        $c = 2;
      }
      declare(encoding="UTF-8"):
        $d = 3;
      enddeclare;
      $e = 4;
    `, {
      parser: { debug: false }
    })).toMatchSnapshot();
  });

  it("test try", function() {
    expect(parser.parseEval(`
      try {
        foo();
      } catch(FooError|BarError $err) {
        var_dump($err);
        throw $err;
      } finally {
        clean();
      }
    `, {
      parser: { debug: false }
    })).toMatchSnapshot();
  });

  it("test inner statements", function() {
    expect(parser.parseEval(`
      if (true) {
        function foo() {}
        abstract class foo {}
        final class foo {}
        class foo {}
        trait foo {}
        interface foo {}
      }
    `, {
      parser: { debug: false }
    })).toMatchSnapshot();
  });
});
