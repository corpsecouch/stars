$(function(){
  var gn = new GyroNorm();

  gn.init().then(function(){
    var alphaElem = $('#alpha');
    var betaElem = $('#beta');
    var gammaElem = $('#gamma');
    var absoluteElem = $('#absolute');


    gn.start(function(data){
      // Process:
      // data.do.alpha    ( deviceorientation event alpha value )
      alphaElem.text(data.do.alpha);
      // data.do.beta     ( deviceorientation event beta value )
      betaElem.text(data.do.beta);
      // data.do.gamma    ( deviceorientation event gamma value )
      gammaElem.text(data.do.gamma);
      // data.do.absolute ( deviceorientation event absolute value )
      absoluteElem.text(data.do.absolute);

      // data.dm.x        ( devicemotion event acceleration x value )
      // data.dm.y        ( devicemotion event acceleration y value )
      // data.dm.z        ( devicemotion event acceleration z value )

      // data.dm.gx       ( devicemotion event accelerationIncludingGravity x value )
      // data.dm.gy       ( devicemotion event accelerationIncludingGravity y value )
      // data.dm.gz       ( devicemotion event accelerationIncludingGravity z value )

      // data.dm.alpha    ( devicemotion event rotationRate alpha value )
      // data.dm.beta     ( devicemotion event rotationRate beta value )
      // data.dm.gamma    ( devicemotion event rotationRate gamma value )
    });
  }).catch(function(e){
    // Catch if the DeviceOrientation or DeviceMotion is not supported by the browser or device
  });
});
