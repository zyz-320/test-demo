window.onload = function () {
  let box = document.getElementsByClassName('box')[0]
  box.addEventListener(
    'click',
    () => {
      alert('box被点击了！')
    },
    false
  )
}
