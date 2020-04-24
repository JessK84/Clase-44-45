mocha.setup("bdd") // inicialización test behaviour driven development
const expect = chai.expect //abreviar expect

describe("toCamelCase(str)", () => {
    it("debe pasar de un string de clase dash-case a uno de clase camelCase", () => {
      const arr1 = "nueva-funcion"
      const arr2 = "que-insoportable-hacer-testeo"
      const resultado = toCamelCase(arr1)
      const resultado2 = toCamelCase(arr2)
 
      expect(resultado).to.equal("nuevaFuncion") // aserción
      expect(resultado2).to.equal("queInsoportableHacerTesteo") // aserción
    })
  })

describe("getShortestWords(text)", () => {
    it("deben mostrar las palabras más cortas del string, puede haber más de una pero que tengan la cantidad mínima de caractéres", () => {
      const text = "Hoy es jueves, terminé la clase de gym, estoy muerta"
      const text1 = "No veo la hora que sea viernes 1° de mayo para comer locro. Espero encontrar en algún lugar"
      const resultado = getShortestWords(text)
      const resultado1 = getShortestWords(text1)
 
      expect(resultado).to.eql(["es", "la", "de"]) // aserción
      expect(resultado1).to.eql(["No", "la", "1°", "de", "en"]) // aserción
    })
  })


describe("getTallestSkyscraper(number)", () => {
  it("debe mostrar el edificio más alto (cantidad de 1 dispuestos verticamente de manera consecutiva) dentro de un array 2D", () => {
  const skyline = 
[
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 1, 0],
  [1, 1, 1, 1]
]
  const resultado = getTallestSkyscraper(skyline)

    expect(resultado).to.equal(3) // aserción
  })
})


describe("isPalindrome(text)", () => {
  it("Chequea si un string es palíndromo (capicúa), es decir, si puede ser leído de igual manera de izquierda a derecha y derecha a izquierda", () => {
    const text1 = "chasda la biroma"
    const text2 = "aib la birra"
    const text3 = "ana lava lana"
    const resultado1 = isPalindrome(text1)
    const resultado2 = isPalindrome(text2)
    const resultado3 = isPalindrome(text3)

    expect(resultado1).to.equal(false) // aserción
    expect(resultado2).to.equal(false) // aserción
    expect(resultado3).to.equal(true) // aserción

  })
})


describe("getNextPalindrome(number)", () => {
  it("Devuelve el siguiente número palíndromo de un número x", () => {
    const number = 103
    // const text2 = "aib la birra"
    // const text3 = "ana lava lana"
    const resultado = getNextPalindrome(number)


    expect(resultado).to.equal(111) // aserción
    // expect(resultado2).to.equal(false) // aserción
    // expect(resultado3).to.equal(true) // aserción

  })
})





