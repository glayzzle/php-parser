const parser = require("../main");
//
describe("classpropertyhooks", () => {
  const test_parser = parser.create({
    parser: {
      version: "8.4",
    },
  });

  it("not supported in php < 8.4", () => {
    expect(() => {
      parser.parseEval(
        `class BookViewModel {
            public string $credits {
              get => 'mailto:' . $this->email;
            }
        }`,
        {
          parser: {
            version: "8.3",
          },
        },
      );
    }).toThrowErrorMatchingSnapshot();
  });

  describe("getter", () => {
    it("arrow function", () => {
      expect(
        test_parser.parseEval(
          `class BookViewModel {
            public string $credits {
              get => 'mailto:' . $this->email;
            }
        }`,
        ),
      ).toMatchSnapshot();
    });

    it("block", () => {
      expect(
        test_parser.parseEval(
          `class BookViewModel {
          public string $credits {
            get {
              'mailto:' . $this->email;
            }
          }
        }`,
        ),
      ).toMatchSnapshot();
    });
  });

  describe("setter", () => {
    describe("expression form", () => {
      it("with implicit $value", () => {
        expect(
          test_parser.parseEval(
            `class BookViewModel {
          public string $credits {
            set => $this->credits = $value;
          }
        }`,
          ),
        ).toMatchSnapshot();
      });

      it("with explicit untyped $value", () => {
        expect(
          test_parser.parseEval(
            `class Person {
            public $name {
              set($new_name) => $this->name = strtolower($new_name);
            }
          }`,
          ),
        ).toMatchSnapshot();
      });

      it("with explicit typed $value", () => {
        expect(
          test_parser.parseEval(
            `class Person {
            public string $name {
              set(string $new_name) => $this->name = strtolower($new_name);
            }
          }`,
          ),
        ).toMatchSnapshot();
      });
    });

    describe("block form", () => {
      it("with implicit $value", () => {
        expect(
          test_parser.parseEval(
            `class BookViewModel {
          public string $credits {
            set {
                $tmp = $this->credits + 1;
              $this->propertyName = $value + $tmp;
            }
          }
        }`,
          ),
        ).toMatchSnapshot();
      });

      it("with explicit untyped $value", () => {
        expect(
          test_parser.parseEval(
            `class BookViewModel {
          public $credits {
            set ($value) {
                $tmp = $this->credits + 1;
              $this->propertyName = $value + $tmp;
            }
          }
        }`,
          ),
        ).toMatchSnapshot();
      });

      it("with explicit typed $value", () => {
        expect(
          test_parser.parseEval(
            `class BookViewModel {
          public int $credits {
            set (int $value) {
                $tmp = $this->credits + 1;
              $this->propertyName = $value + $tmp;
            }
          }
        }`,
          ),
        ).toMatchSnapshot();
      });
    });
  });

  it("support default value", () => {
    expect(
      test_parser.parseEval(
        `class Example {
    public string $foo = 'default value' {
        get => $this->foo ;
    }
}`,
      ),
    ).toMatchSnapshot();
  });

  [
    `class Example {
    private bool $modified = false;
    public string $foo = 'default value' {
        get => $this->foo . ($this->modified ? ' (modified)' : '');
        set(string $value) {
            $this->foo = strtolower($value);
            $this->modified = true;
        }
    }
}`,
    `class Example
{
    private bool $modified = false;

    public string $foo = 'default value' {
        get => $this->foo . ($this->modified ? ' (modified)' : '');

        set {
            $this->foo = strtolower($value);
            $this->modified = true;
        }
    }
}`,
    `class Example
{
    public string $foo = 'default value' {
        get => $this->foo . ($this->modified ? ' (modified)' : '');
        set => strtolower($value);
    }
}`,
  ].forEach((code) => {
    it("support setter + getter", () => {
      expect(test_parser.parseEval(code)).toMatchSnapshot();
    });
  });

  it("can be access by reference", () => {
    expect(
      test_parser.parseEval(`class Foo
{
    private string $_baz;

    public string $baz {
        &get => $this->_baz;
        set {
            $this->_baz = strtoupper($value);
        }
    }
}`),
    ).toMatchSnapshot();
  });

  it("support final on the hook itself", () => {
    expect(
      test_parser.parseEval(`class StandardUser
{
    public string $email {
        final set {
           if (! filter_var($value, FILTER_VALIDATE_EMAIL, FILTER_FLAG_EMAIL_UNICODE)) {
               throw new InvalidArgumentException('Invalid email');
           }
           $this->email = $value;
        }
    }
}`),
    ).toMatchSnapshot();
  });
});
