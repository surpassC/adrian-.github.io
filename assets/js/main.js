// let data = null
// $(document).ready(function () {
//   $.get('./assets/data/map.json', function (res) {
//     data = res
//     addEvent()
//   })
// })

function addEvent() {
  data.forEach((ele, index) => {
    if (index == 0) {
      ele.children.map(item => {
        region.options.add(new Option(item.name, item.name))
      })
    }
    province.options.add(new Option(ele.name, ele.name))
  })
  $(province).on('change', function (e) {
    const filterResult = data.filter(ele => ele.name == $(this).val())[0]
    region.innerHTML = ''
    filterResult.children.forEach(ele => {
      region.options.add(new Option(ele.name, ele.name))
    })
  })
}

$('#Question').on('input', function (e) {
  $(wages).show()
})
$('#Comment').on('input', function (e){
  $(wages).hide()
})
$('#Hiring').on('input', function (e){
  $(wages).hide()
})