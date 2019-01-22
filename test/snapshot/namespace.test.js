const parser = require('../main');

describe("Test namespace statements", function() {
  it("fix #246 - doesn't work properly for `FULL_QUALIFIED_NAME`", function() {
    expect(parser.parseEval(`
      $obj = new \\Foo();
    `)).toMatchSnapshot();
  });
  it("allow trailing comma for grouped namespaces #177", function() {
    expect(parser.parseEval(`
    use Foo\\Bar\\ {
      Foo,
      Bar,
      Baz,
    };`)).toMatchSnapshot();
  });
  it("test single namespace", function() {
    expect(parser.parseEval(`
      namespace foo;
        use bar\\baz as barBaz;
        use const bar\\baz as barBaz, baz\\boo as bazBoo;
        use function bar\\baz as barBaz, baz\\boo as bazBoo;
        use bar\\baz {
           const FOO as BAZ_FOO,
           function BOO as BAZ_BOO
        };
        use const azerty {
           A as AZERTY_A,
           B as AZERTY_B
        };
        $a = namespace\\barBaz;
        $b = \\barBaz;
        $c = barBaz\\foo;
        $d = barBaz;
    `, {
      parser: {
        debug: false
      }
    })).toMatchSnapshot();
  });

  it("test multiple namespace", function() {
    expect(parser.parseEval(`
      namespace \\foo {
        $i++;
      }
      namespace {
        $b++;
      }
    `, {
      parser: {
        debug: false
      }
    })).toMatchSnapshot();
  });

  it("test namespace keyword", function() {
    expect(parser.parseEval(`
      namespace\\foo();
      $var = namespace\\bar;
    `, {
      parser: {
        debug: false
      }
    })).toMatchSnapshot();
  });

  it("test namespace error", function() {
    expect(parser.parseEval(`
      namespace $var = true;
    `, {
      parser: {
        debug: false,
        suppressErrors: true
      }
    })).toMatchSnapshot();
  });

  it("check namespace", function() {
    // @todo
  });

  it("check use", function() {
    // @todo
  });

  it("check resolution", function() {
    // @todo
  });

  it("check silent mode", function() {
    expect(parser.parseEval(`
      namespace $var = true;
    `, {
      parser: {
        debug: false,
        suppressErrors: true
      }
    })).toMatchSnapshot();
  });

  it("work with declare statement", function() {
    expect(parser.parseEval(`
      declare(strict_types=1);
      namespace foo;
      class bar {}
    `)).toMatchSnapshot();
  });

  describe("read usegroup location correctly", function() {
    const testString = `
      namespace Test\\test\\test;

      use Some\\other\\test;

      /**
       * @property \\Test\\test $test
       */
      class Foo extends Bar implements Baz, Buzz {
        public $test;

        function test() {
          return true;
        }

        public function &passByReferenceTest() {
          $a = 1;
          return $a;
        }
      }
    `;

    it("without docs", function() {
      expect(parser.parseEval(testString, {
        ast: {
          withPositions: true
        }
      })).toMatchSnapshot()
    });

    it("with docs", function() {
      expect(parser.parseEval(testString, {
        ast: {
          withPositions: true
        },
        parser: {
          extractDoc: true
        }
      })).toMatchSnapshot()
    });
  });
});
