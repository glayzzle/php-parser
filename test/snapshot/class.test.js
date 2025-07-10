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
    `),
    ).toMatchSnapshot();
  });

  it("Implement typed_properties_v2 / php74", function () {
    expect(
      parser.parseEval(`
    class Test {
      public ?int $prop = null;
      protected static float|string $y;
    }
    `),
    ).toMatchSnapshot();
  });

  it("Implement readonly property", function () {
    expect(
      parser.parseEval(
        `
    class User {
      public readonly int $uid;
    }
    `,
        {
          parser: {
            version: "8.1",
          },
        },
      ),
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
      }`),
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
        },
      ),
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
        },
      ),
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
      }`),
    ).toMatchSnapshot();
  });

  it("Test promoted class properties php 8", function () {
    const ast = parser.parseEval(
      `
      class __proto__ {
        public function constructor(public int $id, private $name, int $c, protected ServerRequestInterface $req) {}
      }`,
      {
        parser: {
          version: "8.0",
          suppressErrors: true,
        },
      },
    );
    expect(ast).toMatchSnapshot();
  });

  it("Test promoted readonly class properties", function () {
    const ast = parser.parseEval(
      `
      class Bob {
        public function __construct(public readonly int $id) {}
      }
      class Bob2 {
        public function __construct(readonly public int $id) {}
      }
`,
      {
        parser: {
          version: "8.1",
        },
      },
    );
    expect(ast).toMatchSnapshot();
  });

  it("Test that readonly method parameters are throwing errors", function () {
    const ast = parser.parseEval(
      `
      class Bob {
        public function foo(public readonly int $id) {}
      }`,
      {
        parser: {
          version: "8.1",
          suppressErrors: true,
        },
      },
    );
    expect(ast).toMatchSnapshot();
  });

  it("Test promoted nullable properties php 8", function () {
    const ast = parser.parseEval(
      `
      class __proto__ {
        public function constructor(public ?string $maybe, private ?int $opt) {}
      }`,
      {
        parser: {
          version: "8.0",
          suppressErrors: true,
        },
      },
    );
    expect(ast).toMatchSnapshot();
  });

  describe("readonly class in PHP8.2", function () {
    [
      "readonly",
      "readonly abstract",
      "abstract readonly",
      "final readonly",
      "readonly final",
    ].forEach(function (token) {
      it("should support " + token, function () {
        expect(
          parser.parseEval(`
      ${token} class Foo {
      }
    `),
        ).toMatchSnapshot();
      });
    });
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
      }),
    ).toMatchSnapshot();
  });

  it("abstract and final", function () {
    expect(
      parser.parseEval(`abstract final class foo {}`, {
        parser: { suppressErrors: true },
      }),
    ).toMatchSnapshot();
  });

  it("8.4 allow new without parenthesis", () => {
    const code = `new People()->name();`;
    const test_parser = parser.create({
      parser: {
        version: "8.4",
      },
    });
    expect(test_parser.parseEval(code)).toMatchSnapshot();
  });

  it("8.4 new without parenthesis with array lookup", () => {
    const code = `new People()[0];`;
    const test_parser = parser.create({
      parser: {
        version: "8.4",
      },
    });
    expect(test_parser.parseEval(code)).toMatchSnapshot();
  });

  it("new without parenthesis throw errors in PHP < 8.4", () => {
    const code = `new People()->name();`;
    const test_parser = parser.create({
      parser: {
        version: "8.3",
      },
    });
    expect(() => {
      test_parser.parseEval(code);
    }).toThrowErrorMatchingSnapshot();
  });

  it("knows where a function definiton starts", function () {
    const phpCode = `
class b { 
  // prettier-ignore
  public static function a() {}
}
    `;
    const ast = parser.parseEval(phpCode, {
      ast: {
        withPositions: true,
        withSource: true,
      },
    });
    const funcStart = ast.children[0].body[0].loc.start.offset;
    const funcEnd = ast.children[0].body[0].loc.end.offset;
    expect(phpCode.substr(funcStart, funcEnd - funcStart)).toEqual(
      "public static function a() {}",
    );
    expect(ast.children[0].body[0].loc.source).toEqual(
      "public static function a()",
    );
  });

  it("handles property types with a leading \\", function () {
    expect(
      parser.parseEval(`
      class Foo {
        public \\Bar $baz;
      }
    `),
    ).toMatchSnapshot();
  });
});
