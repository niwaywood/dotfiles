// https://github.com/kasper/phoenix

// window management keybinds based off https://github.com/nb/dotfiles/blob/master/phoenix.js
Phoenix.set({
  daemon: true,
  openAtLogin: true
});

const MOD1 = ['cmd', 'ctrl', 'alt'];
const MOD2 = ['alt', 'shift'];

const debugMode = true;

function debug(message) {
  if (debugMode) Phoenix.log(message);
}

function centerWindowInFrame(window, targetFrame) {
  const windowFrame = window.frame(),
    targetFrameCenter = {
      x: targetFrame.x + targetFrame.width / 2,
      y: targetFrame.y + targetFrame.height / 2,
    };
  window.setTopLeft({
    x: targetFrameCenter.x - windowFrame.width / 2,
    y: targetFrameCenter.y - windowFrame.height / 2,
  });
}

function maximizeWindowInFrame(window, targetFrame) {
  window.setFrame(targetFrame);
}

function windowFitsInFrame(window, targetFrame) {
  const windowFrame = window.frame();
  return (
    windowFrame.width <= targetFrame.width &&
    windowFrame.height <= targetFrame.height
  );
}

function frameOfNextScreen(window) {
  if (!window || !window.screen().next()) {
    return;
  }
  return window.screen().next().flippedVisibleFrame();
}


Key.on("j", MOD1, function () {
  debug("Centering in screen");
  const window = Window.focused(),
    nextScreenFrame = window.screen().flippedVisibleFrame();
  centerWindowInFrame(window, nextScreenFrame);
});

Key.on("k", MOD1, function () {
  debug("Maximizing current window");
  Window.focused().maximize();
});

Key.on("n", MOD1, function () {
  debug("Center in next screen");
  const window = Window.focused();
  const nextScreenFrame = frameOfNextScreen(window);
  if (!window || !nextScreenFrame) {
    return;
  }
  if (windowFitsInFrame(window, nextScreenFrame)) {
    centerWindowInFrame(window, nextScreenFrame);
  } else {
    maximizeWindowInFrame(window, nextScreenFrame);
  }
});

// Key.on("w", triple, function () {
//   debug("Moving to top-left");
//   const window = Window.focused();
//   const screenFrame = window.screen().flippedVisibleFrame();
//   window.setTopLeft({ x: screenFrame.x, y: screenFrame.y });
// });

Key.on("h", MOD1, function () {
  debug("Moving to left-half");
  const window = Window.focused(),
    screenFrame = window.screen().flippedVisibleFrame();
  window.setFrame({
    x: screenFrame.x,
    y: screenFrame.y,
    width: screenFrame.width / 2,
    height: screenFrame.height,
  });
});

Key.on("l", MOD1, function () {
  debug("Moving to right-half");
  const window = Window.focused();
  const screenFrame = window.screen().flippedVisibleFrame();
  window.setFrame({
    x: screenFrame.x + screenFrame.width / 2,
    y: screenFrame.y,
    width: screenFrame.width / 2,
    height: screenFrame.height,
  });
});

// Key.on("u", triple, function () {
//   debug("Moving to upper-half");
//   const window = Window.focused();
//   const screenFrame = window.screen().flippedVisibleFrame();
//   window.setFrame({
//     x: screenFrame.x,
//     y: screenFrame.y,
//     width: screenFrame.width,
//     height: screenFrame.height / 2,
//   });
// });

// Key.on("d", triple, function () {
//   debug("Moving to lower-half");
//   const window = Window.focused();
//   const screenFrame = window.screen().flippedVisibleFrame();
//   window.setFrame({
//     x: screenFrame.x,
//     y: screenFrame.y + screenFrame.height / 2,
//     width: screenFrame.width,
//     height: screenFrame.height / 2,
//   });
// });

Key.on('t', MOD2, function() {
    App.launch("Kitty").focus();
});

Key.on('s', MOD2, function() {
    App.launch("Slack").focus();
});

Key.on('c', MOD2, function(){
  App.launch('Google Chrome').focus();
});

Key.on('f', MOD2, function(){
  App.launch('Firefox').focus();
});

Key.on('e', MOD2, function(){
  App.launch('Visual Studio Code').focus();
});

Key.on('z', MOD2, function(){
  App.launch('zoom.us').focus();
});

Key.on('b', MOD2, function(){
  App.launch('Bear').focus();
});

Key.on('o', MOD2, function(){
  App.launch('Obsidian').focus();
});
