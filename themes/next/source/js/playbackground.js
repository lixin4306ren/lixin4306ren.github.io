function playBackground(imgNum) {
  // vegas config
  // add slide image
  var slides = [];
  
  if(slides.length === 0) {
    var endWith = '';
    var greyscale = '';
    if(unsplashConfig) {
      if(unsplashConfig.gravity) {
        endWith = '&gravity=' + unsplashConfig.gravity;
      }
      if(unsplashConfig.blur) {
        endWith += '&blur=1';
      }
      if(unsplashConfig.greyscale) {
        greyscale = '/g';
      }
    }

    for(var i = 1; i <= imgNum; i++) {
      slides.push({
        src: ['https://unsplash.it', greyscale, '/', window.screen.availWidth, '/',window.screen.availHeight, '?random&t=', i, endWith].join('')
      });
    }
  }
  // check vegas config
  if('object' !== typeof vegasConfig) {
    vegasConfig = {
      shuffle: true
    };
  }
  vegasConfig.slides = slides;
  $('body').vegas(vegasConfig);
}
