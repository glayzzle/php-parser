const parser = require("../main");

describe("Test classes", function () {
  it("Implement #183 : static keyword as identifier", function () {
    expect(
      parser.parseEval(`
    class A {
      public static function test() {
        parent::foo();
        self::bar();
        static::baz();
        A::fooBar();
        $this->fooBaz();
      }
    }
    `)
    ).toMatchSnapshot();
  });

  it("Implement typed_properties_v2 / php74", function () {
    expect(
      parser.parseEval(`
    class Test {
      public ?int $prop = null;
      protected static float|string $y;
    }
    `)
    ).toMatchSnapshot();
  });

  it("Validate usual declarations", function () {
    expect(
      parser.parseEval(`
      final class foo extends bar implements
        bim, bam, boum {
        const FOO = "azerty";
        public static $var;
        public function __construct(array $data = null) {
          $this->data = $data;
        }
        const list = "bar";
        public function new($foo = self::list) {
          return $this::list;
        }
        protected $foo;
        private $bar;
        function foobar() {}
      }
      abstract class bar {
        use A, B {
          B::smallTalk insteadof A;
          A::bigTalk insteadof B, C;
          B::bigTalk as public talk;
          B::bigTalk as protected talk;
          B::bigTalk as private talk;
          A::new as list;
          list as new;
        }
        /**
         * Some informations
         */
        abstract protected function &foo() : bar;
      }`)
    ).toMatchSnapshot();
  });

  it("Advanced tests", function () {
    expect(
      parser.parseEval(
        `
      class foo implements boo {
        use A;
        use B { foo as bar; }
        // comment
        /* boo */
        /** doc
         * data
           foo
         */
        var $var = true;
        final function __construct() { }
        private function boo() { }
      }
      interface boo extends something {
        // some doc
        const A = 1.5;
        /** foo */
        protected function foo();
      }
      trait line {
        // some doc
        const A = 1.5;
        abstract protected function foo();
      }
    `,
        {
          parser: { extractDoc: true },
        }
      )
    ).toMatchSnapshot();
  });

  it("Test of silent mode", function () {
    expect(
      parser.parseEval(
        `
      class foo {
        use A
        use B { foo };
      }`,
        {
          parser: { suppressErrors: true },
        }
      )
    ).toMatchSnapshot();
  });

  it("Test js properties", function () {
    expect(
      parser.parseEval(`
      class __proto__ {
        static $constructor;
        public function constructor() {}
        public function __proto__() {
          $this->constructor = null;
          self::$constructor = null;
        }
      }`)
    ).toMatchSnapshot();
  });

  it("empty", function () {
    expect(parser.parseEval("class Foo {}")).toMatchSnapshot();
  });

  it("class name as identifier", function () {
    expect(parser.parseEval("class A {}")).toMatchSnapshot();
  });

  it("final and abstract", function () {
    expect(
      parser.parseEval(`final abstract class foo {}`, {
        parser: { suppressErrors: true },
      })
    ).toMatchSnapshot();
  });

  it("abstract and final", function () {
    expect(
      parser.parseEval(`abstract final class foo {}`, {
        parser: { suppressErrors: true },
      })
    ).toMatchSnapshot();
  });
});
