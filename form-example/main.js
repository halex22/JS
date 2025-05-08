function sForm(e) {
  console.log(e)
  const data = new FormData(e.target)
  const dataEvent = new FormDataEvent()
  console.log(data)
}