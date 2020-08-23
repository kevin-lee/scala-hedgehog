(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{60:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return c})),a.d(n,"metadata",(function(){return l})),a.d(n,"rightToc",(function(){return o})),a.d(n,"default",(function(){return s}));var t=a(2),r=a(6),i=(a(0),a(75)),c={title:"Migration From ScalaCheck",sidebar_label:"Migration From ScalaCheck",slug:"/guides-migration-from-scalacheck"},l={unversionedId:"guides/migration-scalacheck",id:"guides/migration-scalacheck",isDocsHomePage:!1,title:"Migration From ScalaCheck",description:"Migration From ScalaCheck",source:"@site/../generated-docs/target/mdoc/guides/migration-scalacheck.md",permalink:"/scala-hedgehog/docs/guides-migration-from-scalacheck",sidebar_label:"Migration From ScalaCheck",sidebar:"docs",previous:{title:"State-Based Property Testing Tutorial (Part 2 - Vars)",permalink:"/scala-hedgehog/docs/guides-state-tutorial-vars"},next:{title:"Differences to Haskell Hedgehog",permalink:"/scala-hedgehog/docs/guides-haskell-differences"}},o=[{value:"Migration From ScalaCheck",id:"migration-from-scalacheck",children:[]},{value:"Properties",id:"properties",children:[{value:"ScalaCheck",id:"scalacheck",children:[]},{value:"Hedgehog",id:"hedgehog",children:[]}]},{value:"Gen",id:"gen",children:[{value:"ScalaCheck",id:"scalacheck-1",children:[]},{value:"Hedgehog",id:"hedgehog-1",children:[]}]},{value:"Arbitrary",id:"arbitrary",children:[{value:"ScalaCheck",id:"scalacheck-2",children:[]}]},{value:"Shrink",id:"shrink",children:[{value:"ScalaCheck",id:"scalacheck-3",children:[]},{value:"Hedgehog",id:"hedgehog-2",children:[]}]}],b={rightToc:o};function s(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},b,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"migration-from-scalacheck"},"Migration From ScalaCheck"),Object(i.b)("p",null,"For many cases migrating from ScalaCheck to Hedgehog should be ",Object(i.b)("em",{parentName:"p"},"fairly"),"\nstraight forward, as the general principals are quite similar, and the changes\nare largely syntactic."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"#properties"}),"Properties")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"#arbitary"}),"Arbitrary")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"#gen"}),"Gen"))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("p",null,"Some basic rules:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Replace ",Object(i.b)("inlineCode",{parentName:"p"},'Properties("...")')," with just ",Object(i.b)("inlineCode",{parentName:"p"},"Properties"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Replace ",Object(i.b)("inlineCode",{parentName:"p"},"Prop.forAll")," with a call to ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/hedgehogqa/scala-hedgehog/search?q=%22def+forAll%22&unscoped_q=%22def+forAll%22"}),"forAll")," on a specific ",Object(i.b)("inlineCode",{parentName:"p"},"Gen")," instance"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If you have previously been relying on ",Object(i.b)("inlineCode",{parentName:"p"},"Arbitrary")," instances these ",Object(i.b)("em",{parentName:"p"},"have"),"\nto be replaced with calls to functions that return an instance of ",Object(i.b)("inlineCode",{parentName:"p"},"Gen"),"."),Object(i.b)("p",{parentName:"li"},"See the ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/hedgehogqa/scala-hedgehog/tree/master/core/src/main/scala/hedgehog/extra"}),"extra")," package for some stand Scala data type combinators."),Object(i.b)("p",{parentName:"li"},"For more information see the section on ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"#gen"}),"Gen"),".")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"flatMap")," over the result of your ",Object(i.b)("inlineCode",{parentName:"p"},"genFoo.forAll"),", or use a ",Object(i.b)("inlineCode",{parentName:"p"},"for"),"\ncomprehension.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Return your ",Object(i.b)("inlineCode",{parentName:"p"},"Prop")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Boolean")," assetions with ",Object(i.b)("inlineCode",{parentName:"p"},"Result.assert(...)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Replace ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/rickynils/scalacheck/search?q=%22def+label%22&unscoped_q=%22def+label%22"}),"label")," or ",Object(i.b)("inlineCode",{parentName:"p"},":|")," with  ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/hedgehogqa/scala-hedgehog/search?q=%22def+log%22&unscoped_q=%22def+log%22"}),"Result.log(...)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Replace equality assertions like ",Object(i.b)("inlineCode",{parentName:"p"},"?=")," with ",Object(i.b)("inlineCode",{parentName:"p"},"====")))),Object(i.b)("h3",{id:"scalacheck"},"ScalaCheck"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-scala"}),'import org.scalacheck._\n\nobject StringSpecification extends Properties("String") {\n\n  property("startsWith") =\n    Prop.forAll { (a: String, b: String) =>\n      (a+b).startsWith(a)\n    }\n}\n')),Object(i.b)("h3",{id:"hedgehog"},"Hedgehog"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-scala"}),'import hedgehog._\nimport hedgehog.runner._\n\nobject StringSpecification extends Properties {\n\n  override def tests: List[Test] = List(\n    property("startsWith", for {\n      a <- Gen.string(Gen.unicode, Range.linear(0, 100)).forAll\n      b <- Gen.string(Gen.unicode, Range.linear(0, 100)).forAll\n      } yield Result.assert((a+b).startsWith(a))\n    )\n  )\n}\n')),Object(i.b)("h2",{id:"gen"},"Gen"),Object(i.b)("p",null,"Some basic rules:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Gen.list")," and ",Object(i.b)("inlineCode",{parentName:"li"},"Gen.listOfN")," can be replaced with a call to\n",Object(i.b)("inlineCode",{parentName:"li"},"list(Range.linear(0, n))")," on a specific ",Object(i.b)("inlineCode",{parentName:"li"},"Gen")," instance."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Gen.const")," is now ",Object(i.b)("inlineCode",{parentName:"li"},"Gen.constant")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Arbitrary.arbitrary[Int]")," is now ",Object(i.b)("inlineCode",{parentName:"li"},"Gen.int(Range.linear(min, max))")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Gen.oneOf")," is now ",Object(i.b)("inlineCode",{parentName:"li"},"Gen.choice1"))),Object(i.b)("p",null,'It\'s important to note that there are no more "default" ',Object(i.b)("inlineCode",{parentName:"p"},"Arbitrary")," instances\nto summon. You ",Object(i.b)("em",{parentName:"p"},"must")," decided what kind of ",Object(i.b)("inlineCode",{parentName:"p"},"int")," or ",Object(i.b)("inlineCode",{parentName:"p"},"String")," you want to\ngenerate, and what their ",Object(i.b)("inlineCode",{parentName:"p"},"Range")," is."),Object(i.b)("h3",{id:"scalacheck-1"},"ScalaCheck"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-scala"}),"val genLeaf = Gen.const(Leaf)\n\nval genNode = for {\n  v <- arbitrary[Int]\n  left <- genTree\n  right <- genTree\n} yield Node(left, right, v)\n\ndef genTree: Gen[Tree] = Gen.oneOf(genLeaf, genNode)\n")),Object(i.b)("h3",{id:"hedgehog-1"},"Hedgehog"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-scala"}),"val genLeaf = Gen.constant(Leaf)\n\nval genNode = for {\n  v <- Gen.int(Range.linear(Integer.MaxValue, Integer.MinValue))\n  left <- genTree\n  right <- genTree\n} yield Node(left, right, v)\n\ndef genTree: Gen[Tree] = Gen.choice1(genLeaf, genNode)\n")),Object(i.b)("h2",{id:"arbitrary"},"Arbitrary"),Object(i.b)("p",null,"Some basic rules:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Replace ",Object(i.b)("inlineCode",{parentName:"li"},"implict def")," functions that return ",Object(i.b)("inlineCode",{parentName:"li"},"Arbitrary")," to a function\nthat returns the ",Object(i.b)("inlineCode",{parentName:"li"},"Gen")," directly.")),Object(i.b)("h3",{id:"scalacheck-2"},"ScalaCheck"),Object(i.b)("p",null,"This example was taken from the ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/rickynils/scalacheck/blob/master/doc/UserGuide.md#the-arbitrary-generator"}),"ScalaCheck Guide"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-scala"}),"implicit def arbTree[T](implicit a: Arbitrary[T]): Arbitrary[Tree[T]] = Arbitrary {\n\n  val genLeaf = for(e <- Arbitrary.arbitrary[T]) yield Leaf(e)\n\n  def genInternal(sz: Int): Gen[Tree[T]] = for {\n    n <- Gen.choose(sz/3, sz/2)\n    c <- Gen.listOfN(n, sizedTree(sz/2))\n  } yield Internal(c)\n\n  def sizedTree(sz: Int) =\n    if(sz <= 0) genLeaf\n    else Gen.frequency((1, genLeaf), (3, genInternal(sz)))\n\n  Gen.sized(sz => sizedTree(sz))\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-scala"}),"def genTree[T](g: Gen[T]): Gen[Tree[T]] = {\n\n  val genLeaf = for(e <- g) yield Leaf(e)\n\n  def genInternal(sz: Size): Gen[Tree[T]] = for {\n    n <- Gen.choose(sz.value/3, sz.value/2)\n    c <- sizedTree(sz.value/2).list(Range.linear(0, n))\n  } yield Internal(c)\n\n  def sizedTree(sz: Size) =\n    if(sz.value <= 0) genLeaf\n    else Gen.frequency1((1, genLeaf), (3, genInternal(sz)))\n\n  Gen.sized(sz => sizedTree(sz))\n}\n")),Object(i.b)("h2",{id:"shrink"},"Shrink"),Object(i.b)("p",null,"This is assuming you're even writing them in the first place..."),Object(i.b)("h3",{id:"scalacheck-3"},"ScalaCheck"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-scala"}),"case class Data(a: String, i: Int)\n\nimplicit def arbData: Arbitrary[Data] =\n  Arbitrary[Data] {\n    for {\n      s <- arbitrary[String]\n      i <- arbitrary[Int]\n    } yield Data(a, i)\n  }\n\nimplicit def shrink: Shrink[Data] =\n  Shrink[Data] { case Data(a, i) =>\n    shrink(a).map(a2 => Data(a2, i)) append\n    shrink(i).map(i2 => Data(a, i2))\n  }\n")),Object(i.b)("h3",{id:"hedgehog-2"},"Hedgehog"),Object(i.b)("p",null,"Good news, you don't need to do anything! Just write your generators."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-scala"}),"def genData: Gen[Data] =\n  for {\n    s <- Gen.string(Gen.unicode, Range.linear(0, 100))\n    i <- Gen.int(Range.linear(-100, 100))\n  } yield Data(a, i)\n")))}s.isMDXComponent=!0},75:function(e,n,a){"use strict";a.d(n,"a",(function(){return p})),a.d(n,"b",(function(){return h}));var t=a(0),r=a.n(t);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var n=r.a.useContext(b),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=s(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},g=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=s(a),g=t,h=p["".concat(c,".").concat(g)]||p[g]||d[g]||i;return a?r.a.createElement(h,l(l({ref:n},b),{},{components:a})):r.a.createElement(h,l({ref:n},b))}));function h(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,c=new Array(i);c[0]=g;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:t,c[1]=l;for(var b=2;b<i;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"}}]);