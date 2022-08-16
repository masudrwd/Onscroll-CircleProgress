var waypoint = new Waypoint({
  element: document.getElementById('Progress'),
  handler: function(direction) {
    let circleProgressBar = {
      startAngle: -1.55,
      size: 180,
      value: 0.70,
      thickness: 5,
      fill: {color: "red"}
    }
    
    $('.circle .bar').circleProgress(circleProgressBar).on('circle-animation-progress', function (event, progress, stepValue) {
      $(this).parent().find('span').text(String(stepValue.toFixed(2).substr(2)) + "%")
    })
    
    $('.css .bar').circleProgress({
      value: 0.60
    })
    
    $('.js .bar').circleProgress({
      value: 0.90
    })
  }, offset: "90%"
})