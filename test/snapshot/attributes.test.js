const parser = require("../main");

describe("Parse Attributes", () => {
  it("can parse class attributes", () => {
    expect(
      parser.parseEval(`
    #[Deprecated]
    #[replace("use NewClass")]
    class DepClass {}
    `)
    ).toMatchSnapshot();
  });
  it("can parse method attributes", () => {
    expect(
      parser.parseEval(`
    class Test {
      #[Pure]
      function m() {}
    }
    `)
    ).toMatchSnapshot();
  });
  it("can parse param attributes", () => {
    expect(
      parser.parseEval(`
    function f(
    #[Unsigned]
     int $n) {}
    `)
    ).toMatchSnapshot();
  });
  it("can parse params with comments", () => {
    expect(
      parser.parseEval(
        `// Line 1
    #[ Pure ( ) /* Pure */ ]
    // Line 3
    #[
      // Try using b
      Deprecated
    ]
    function a(#[ Unsigned ] $a) {}
    `,
        {
          parser: {
            extractDoc: true,
          },
        }
      )
    ).toMatchSnapshot();
  });
  it("can parse parms with array values", () => {
    expect(
      parser.parseEval(`
    #[List(["a"=>1, 'b' => Test::class, 'c'=>[]])]
    function a() {}
    `)
    ).toMatchSnapshot();
  });
  it("can parse params with argument labels", () => {
    expect(
      parser.parseEval(`
    #[MyAttribute(value: 1234)]
    function a() {}
    `)
    ).toMatchSnapshot();
  });
  it("can parse params with mathematical expressions", () => {
    expect(
      parser.parseEval(
        `
        #[Att1(-20 * (+10 / 5) % 2 + 8 ** 2 - +-2)]
        class A {}
        `,
        { parser: { extractDoc: true } }
      )
    ).toMatchSnapshot();
  });
  it("can parse params with bitwise operations", () => {
    expect(
      parser.parseEval(
        `
        #[Att1(Att1::FOO | Att1::BAR)]
        #[Att2(Att2::FOO & Att2::BAR)]
        #[Att3(Att3::FOO ^ Att3::BAR)]
        #[Att4(~ Att4::BAR)]
        #[Att5(Att5::BAR >> 1)]
        #[Att6(Att6::BAR << 1)]
        class A {}
        `,
        { parser: { extractDoc: true } }
      )
    ).toMatchSnapshot();
  });
  it("can parse params with logical operations", () => {
    expect(
      parser.parseEval(
        `
        #[Att1(Att1::FOO || Att1::BAR)]
        #[Att2(Att2::FOO && Att2::BAR)]
        #[Att3(Att3::FOO or Att3::BAR)]
        #[Att4(Att4::FOO and Att4::BAR)]
        #[Att5(Att5::FOO xor Att5::BAR)]
        #[Att6(!Att6::FOO)]
        class A {}
        `,
        { parser: { extractDoc: true } }
      )
    ).toMatchSnapshot();
  });
  it("can parse params with end characters", () => {
    expect(
      parser.parseEval(`
    #[End(["])}>"])]
    class End {}
    `)
    ).toMatchSnapshot();
  });
  it("can parse multi-line attributes", () => {
    expect(
      parser.parseEval(`
    #[
      One(),
      Two(),
      Three()
    ]
    #[Four]
    class Multi {}
    `)
    ).toMatchSnapshot();
  });
  it("can parse anonymous function attributes", () => {
    expect(
      parser.parseEval(`
    $a = #[Pure] fn() => true;
    $b = #[A] function() {};
    `)
    ).toMatchSnapshot();
  });
  it("can't parse anonymous function attributes in PHP < 8", () => {
    expect(() =>
      parser.parseEval(
        `
        $a = #[Pure] fn() => true;
        `,
        {
          parser: {
            version: "7.4",
          },
        }
      )
    ).toThrow(SyntaxError);
  });
  it("can parse class property attributes", () => {
    expect(
      parser.parseEval(`
      class A {
        #[B]
        public B $b;
        #[C]
        private C $c;
        #[D]
        protected $d;
      }
      `)
    ).toMatchSnapshot();
  });
  it("can parse class const attributes", () => {
    expect(
      parser.parseEval(`
      class A {
        #[B]
        const B = 1;
      }
      `)
    ).toMatchSnapshot();
  });
  it("can parse anon-class attributes", () => {
    expect(parser.parseEval(`$a = new #[T] class {};`)).toMatchSnapshot();
  });
  it("can't parse anon-class attributes in PHP < 8", () => {
    expect(() =>
      parser.parseEval(`$a = new #[T] class {};`, {
        parser: {
          version: "7.4",
        },
      })
    ).toThrow(SyntaxError);
  });
  it("can parse interface attributes", () => {
    expect(
      parser.parseEval(`
    #[A]
    interface b {
      #[C]
      const D = 0;
      #[E]
      public function f();
    }
    `)
    ).toMatchSnapshot();
  });
  it("can parse attributes in inner statements", () => {
    expect(
      parser.parseEval(`
    namespace A {
      function b() {
        return #[C] fn() => #[Pure] function() {};
      }
    }`)
    ).toMatchSnapshot();
  });
  it("can parse attributes with namespace", () => {
    expect(
      parser.parseEval(`
      #[\\JetBrains\\PhpStorm\\Pure]
      function b() {} 
    `)
    ).toMatchSnapshot();
  });

  it("doesnt repeat attributes from previous function", () => {
    expect(
      parser.parseEval(`
      class a {
        #[Att1]
        function b(){}
        function c(){}
        function d(){}
        }
    `)
    ).toMatchSnapshot();
  });

  it("parses attributes as comments for PHP < 8", () => {
    expect(
      parser.parseEval(
        `
        #[Att1]
        class a {
          #[Att2]
          function b(){}
        }
        `,
        {
          parser: {
            version: "7.4",
            extractDoc: true,
          },
        }
      )
    ).toMatchSnapshot();
  });

  it("doesnt parse attributes for assignments", () => {
    expect(
      parser.parseEval(
        `
        #[Att1]
        $a = 1;
        `,
        { parser: { extractDoc: true } }
      )
    ).toMatchSnapshot();
  });
});
