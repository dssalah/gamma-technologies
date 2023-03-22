/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/index.js":
/*!*****************************!*\
  !*** ./assets/src/index.js ***!
  \*****************************/
/***/ (() => {

eval("\n\nconst canvas = document.getElementById(\"canvas\");\nconst ctx = canvas.getContext(\"2d\");\n\n//Set H & W of canvas to match viewport\ncanvas.width = innerWidth;\ncanvas.height = innerHeight;\n//Get access to the sprite sheet\nconst answerbot = new Image();\nanswerbot.src = \"assets/images/Robots.png\";\nanswerbot.onload = loadImages;\n//NEW CHARACTER (cow)\nconst cow = new Image();\ncow.src = \"assets/images/cow-char3.png\";\ncow.onload = loadImages;\n// 8 columns 1 row\nlet cols = 8;\nlet rows = 1;\n// slices\nlet answerbotWidth = answerbot.width / cols;\nlet answerbotHeight = answerbot.height / rows;\n// NEW CHAR\nlet cowWidth = cow.width / cols;\nlet cowHeight = cow.height / rows;\n\n\n// AND ACTION (so animation PLAYS)\nlet totalFrames = 8; //number of framers \nlet currentFrame = 0;\n// Updates position\nlet srcX = 0;\nlet srcY = 0;\nlet cowPosX = srcX;\nlet cowPosY = srcY;\n\n//Records number of invocations of animate\nlet framesDrawn = 0;\n\n// Increased image retains resolution\nctx.webkitImageSmoothingEnabled = false;\nctx.imageSmoothingEnabled = false;\n\n\nfunction resizeImage(imageWidth, imageHeight) {\n  let scaleFactor = 4;\n  let midXPos = innerWidth / 2 - (imageWidth * scaleFactor) / 2;\n  let midYPos = innerHeight / 2 - (imageHeight * scaleFactor) / 2;\n  ctx.translate(midXPos, midYPos);\n  ctx.scale(scaleFactor, scaleFactor);\n}\n\n\nfunction animate() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height); //Clears contents of previous frame\n  requestAnimationFrame(animate); //each new canvas frame will call this function\n\n  currentFrame = currentFrame % totalFrames; // sets cycle & loops animation\n  srcX = currentFrame * answerbotWidth; //Src postion\n  cowPosX = currentFrame * cowWidth;\n\n  ctx.save();\n  resizeImage(answerbotHeight, answerbotWidth);\n  //Starting point ----> Ending point\n  // image, scrX, srcY, srcWidth, srcHeight, destX, destY, destWidth, destHeight\n  ctx.drawImage(answerbot, srcX, srcY, answerbotWidth, answerbotHeight, 10, -72, answerbotWidth, answerbotHeight);\n  //ctx.globalAlpha = 0.5;\n\n  ctx.drawImage(cow, cowPosX, cowPosY, cowWidth, cowHeight, -171, -11, cowWidth, cowHeight);\n  ctx.restore();\n\n  framesDrawn++;\n  if (framesDrawn >= 15) {\n    currentFrame++; //increments frame so new one is displayed\n    framesDrawn = 0;\n\n  }\n\n\n}\n\n\n//So the canvas can't be rendered before the image\nlet numOfImages = 2;\nfunction loadImages() {\n  if (--numOfImages > 0) return;\n  animate();\n}\n\nloadImages(); // Call the loadImages function to start loading images\n\n\n\n\n\nconst playButtonImg = document.getElementById(\"play-button\");\nconst messageImg = document.getElementById(\"message\");\n\nplayButtonImg.addEventListener(\"click\", function () {\n  // Hide the button\n  playButtonImg.style.display = \"none\";\n\n\n  // Show the welcome image\n  messageImg.style.display = \"inline-block\";\n  messageImg.style.top = \"-150px\"; // Adjust top property to position the image\n  messageImg.style.left = \"0px\"; // Adjust left property to position the image\n\n  // Delay for 5 seconds and then hide the welcome image\n  setTimeout(() => {\n    messageImg.style.display = \"none\";\n\n    // Insert first image after the welcome image\n    const img1 = document.createElement(\"img\");\n    img1.src = \"assets/images/3.png\";\n    img1.alt = \"Image 3\";\n    img1.style.position = \"relative\"; // Set position to relative\n    img1.style.zIndex = \"6\"; // Set z-index of image 1\n    img1.style.top = \"-250px\"; // Adjust top property to position the image\n    img1.style.left = \"-50px\"; // Adjust left property to position the image\n    img1.style.display = \"inline-block\"\n\n    messageImg.after(img1);\n\n    // Delay for 1 second and then insert second image\n    setTimeout(() => {\n      const img2 = document.createElement(\"img\");\n      img2.src = \"assets/images/1.png\";\n      img2.alt = \"Image 1\";\n      img2.style.position = \"relative\"; // Set position to relative\n      img2.style.zIndex = \"6\"; // Set z-index of image 1\n      img2.style.top = \"-210px\"; // Adjust top property to position the image\n      img2.style.left = \"-50px\"; // Adjust left property to position the image\n      img1.style.display = \"inline-block\"\n\n      img1.after(img2);\n      img1.remove();\n\n\n\n      // Delay for 1 second and then start the game\n      setTimeout(() => {\n        const gameContainer = document.getElementById(\"game\");\n        gameContainer.style.visibility = \"visible\";\n        const gamecontainer = document.getElementById(\"game-info\");\n        gamecontainer.style.visibility = \"visible\";\n\n        img2.remove();\n       \n\n\n\n      }, 3000);\n    }, 3000);\n  }, 3000);\n\n\n});\n\n\n\n\n\ndocument.getElementById(\"canvas\").classList.add(\"neon-border\");\n\n\n//# sourceURL=webpack://k-math-game/./assets/src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/src/index.js"]();
/******/ 	
/******/ })()
;