  // const newText = textToCount.replaceAll('’', ' ').split(' ').split('\n')
  const cleanStr = str => str.replaceAll('’', ' ').split(' ')
  // .split('\n')

function charNumber(textToCount) {
  let count = 0
  const cleanedText = textToCount.split(' ')
  cleanedText.forEach(word => count += word.length)
  return count

}


/**
 * 
 * @param {string} textToCount 
 */
function wordsNumber(textToCount) {
  let count = 0
  const cleanedText = cleanStr(textToCount)
  cleanedText.forEach(wordsArray => {
    count += wordsArray.split(' ').length
    console.log(count)
  })
  return count
}

function wordsCount(textToCount) {
  let result = {}
  // const newText = textToCount.replaceAll('’', ' ')
  // newText.split(' ').forEach(word => console.log(word.split('\n')))
  const semiCleanedArrayOfStr = cleanStr(textToCount)

  console.log(semiCleanedArrayOfStr.forEach(word => console.log(word.split('\n'))))
}


function wordsNumberRgx(textToCount) {
  const rgx = /\p{L}gu/
  console.log(textToCount.math(rgx))
  return true
}


const script = `Quel ramo del lago di Como, che volge a mezzogiorno, tra due catene non interrotte di monti, tutto a seni e a golfi, a seconda
dello sporgere e del rientrare di quelli, vien, quasi a un tratto, a ristringersi, e a prender corso e figura di fiume, tra un
promontorio a destra, e un’ampia costiera dall’altra parte; e il ponte, che ivi congiunge le due rive, par che renda ancor più
sensibile all’occhio questa trasformazione, e segni il punto in cui il lago cessa, e l’Adda rincomincia, per ripigliar poi nome di lago
dove le rive, allontanandosi di nuovo, lascian l’acqua distendersi e rallentarsi in nuovi golfi e in nuovi seni. La costiera, formata dal deposito di tre grossi torrenti,
scende appoggiata a due monti contigui, l’uno detto di san Martino, l’altro, con voce lombarda, il Resegone, dai molti suoi cocuzzoli in fila, che in vero lo fanno
somigliare a una sega: talchè non è chi, al primo vederlo, purchè sia di fronte, come per esempio di su le mura di Milano che guardano a settentrione, non lo
discerna tosto, a un tal contrassegno, in quella lunga e vasta giogaia, dagli altri monti di nome più oscuro e di forma più comune. Per un buon pezzo, la costa sale
con un pendìo lento e continuo; poi si rompe in poggi e in valloncelli, in erte e in ispianate, secondo l’ossatura de’ due monti, e il lavoro dell’acque. Il lembo
estremo, tagliato dalle foci de’ torrenti, è quasi tutto ghiaia e ciottoloni; il resto,
campi e vigne, sparse di terre, di ville, di casali; in qualche parte boschi, che si
prolungano su per la montagna. Lecco, la principale di quelle terre, e che dà nome
al territorio, giace poco discosto dal ponte, alla riva del lago, anzi viene in parte a
trovarsi nel lago stesso, quando questo ingrossa: un gran borgo al giorno d’oggi, e
che s’incammina a diventar città. Ai tempi in cui accaddero i fatti che prendiamo
a raccontare, quel borgo, già considerabile, era anche un castello, e aveva perciò
l’onore d’alloggiare un comandante, e il vantaggio di possedere una stabile
guarnigione di soldati spagnoli, che insegnavan la modestia alle fanciulle e alle
donne del paese, accarezzavan di tempo in tempo le spalle a qualche marito, a
qualche padre; e, sul finir dell’estate, non mancavan mai di spandersi nelle vigne,
per diradar l’uve, e alleggerire a’ contadini le fatiche della vendemmia`

const cNum = charNumber(script) // num
console.log(cNum, 'il numero di char is')

const wNum = wordsNumber(script) // num
console.log('the number of words is: ', wNum)

wordsNumberRgx(script)

// const wcount = wordsCount(script) // Object
