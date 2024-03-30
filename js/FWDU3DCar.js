;(function (e) {
  var t = function () {
    var o = this,
      r = t.prototype
    ;(o.main_do = null),
      (o.init = function () {
        o.setupScreen(), (e.onerror = o.showError), (o.screen.style.zIndex = 100000009), setTimeout(o.addConsoleToDom, 100), setInterval(o.position, 100)
      }),
      (o.position = function () {
        var e = FWDU3DCarUtils.getScrollOffsets()
        o.setX(e.x), o.setY(e.y)
      }),
      (o.addConsoleToDom = function () {
        ;-1 == navigator.userAgent.toLowerCase().indexOf("msie 7") ? document.documentElement.appendChild(o.screen) : document.getElementsByTagName("body")[0].appendChild(o.screen)
      }),
      (o.setupScreen = function () {
        ;(o.main_do = new FWDU3DCarDO("div", "absolute")),
          o.main_do.setOverflow("auto"),
          o.main_do.setWidth(200),
          o.main_do.setHeight(300),
          o.setWidth(200),
          o.setHeight(300),
          o.main_do.setBkColor("#FFFFFF"),
          (o.main_do.style().color = "#000"),
          o.addChild(o.main_do)
      }),
      (o.showError = function (e, t, r) {
        var s = o.main_do.getInnerHTML() + "<br>JavaScript error: " + e + " on line " + r + " for " + t
        o.main_do.setInnerHTML(s), (o.main_do.screen.scrollTop = o.main_do.screen.scrollHeight)
      }),
      (o.log = function (e) {
        var t = o.main_do.getInnerHTML() + "<br>" + e
        o.main_do.setInnerHTML(t), (o.main_do.getScreen().scrollTop = 1e4)
      }),
      o.init()
  }
  ;(t.setPrototype = function () {
    t.prototype = new FWDU3DCarDO("div", "absolute")
  }),
    (t.prototype = null),
    (e.FWDConsole = t)
})(window),
  (function (t) {
    var o = function (e) {
      "use strict"
      var r = this
      ;(r.instCountId = o.cars.length),
        o.cars.push(r),
        (r.scale = 1),
        (r.listeners = { events_ar: [] }),
        (r.orientationChangeComplete = !0),
        (r.isMobile = FWDU3DCarUtils.isMobile),
        (r.mainFolderPath = e.mainFolderPath),
        r.mainFolderPath.lastIndexOf("/") + 1 != r.mainFolderPath.length && (r.mainFolderPath += "/"),
        (r.skinPath_str = e.skinPath),
        r.skinPath_str.lastIndexOf("/") + 1 != r.skinPath_str.length && (r.skinPath_str += "/"),
        (r.warningIconPath_str = r.mainFolderPath + r.skinPath_str + "warning.png"),
        (r.init = function () {
          return (FWDU3DCarUtils.checkIfHasTransofrms(), FWDTweenLite.ticker.useRAF(!0), (r.props = e), !r.props)
            ? void alert("Ultimate 3D Carousel properties object is undefined!")
            : ((r.instName = r.props.instanceName), !r.instName)
            ? void alert("Ultimate 3D Carousel instance name is required in the settings parameters!")
            : ((t[r.instName] = r), !r.props.displayType)
            ? void alert("Display type is not specified!")
            : ((r.displayType = e.displayType.toLowerCase()), (r.body = document.getElementsByTagName("body")[0]), !r.props.carouselHolderDivId)
            ? void alert("Property carouselHolderDivId is not defined in the Ultimate 3D Carousel object settings!")
            : FWDU3DCarUtils.getChildById(r.props.carouselHolderDivId)
            ? r.props.carouselWidth
              ? ((r.stageContainer = FWDU3DCarUtils.getChildById(r.props.carouselHolderDivId)),
                (r.originalWidth = r.props.carouselWidth),
                (r.carouselYRadius = r.props.carouselYRadius || 0),
                (r.carouselOffsetHeight = r.props.carouselOffsetHeight),
                null == r.carouselYRadius && (r.carouselOffsetHeight = 200),
                (r.thumbnailResizeOffest = r.props.thumbnailResizeOffest),
                null == r.thumbnailResizeOffest && (r.thumbnailResizeOffest = 200),
                (r.thumbWidth = r.props.thumbnailWidth || 400),
                (r.thumbHeight = r.props.thumbnailHeight || 266),
                (r.preloaderBackgroundColor = r.props.preloaderBackgroundColor || "#000000"),
                (r.preloaderFillColor = r.props.preloaderFillColor || "#FFFFFF"),
                (r.rootElement = FWDU3DCarUtils.getChildById(r.props.carouselDataListDivId)),
                !r.rootElement)
                ? void alert("Please make sure that the div with the id " + r.props.carouselDataListDivId + " exists, this represents the carousel categories markup.")
                : ((r.dataListAr = FWDU3DCarUtils.getChildrenFromAttribute(r.rootElement, "data-cat")),
                  r.dataListAr
                    ? void ((r.totalDataLists = r.dataListAr.length),
                      (r.startAtCategory = r.props.startAtCategory || 1),
                      isNaN(r.startAtCategory) && (r.startAtCategory = 1),
                      0 >= r.startAtCategory && (r.startAtCategory = 1),
                      r.startAtCategory > r.totalDataLists && (r.startAtCategory = r.totalDataLists),
                      (r.startAtCategory -= 1),
                      (r.captionPosition = r.props.captionPosition || "out"),
                      (r.captionH = 0),
                      (r.initializeOnlyWhenVisible_bl = r.props.initializeOnlyWhenVisible),
                      (r.initializeOnlyWhenVisible_bl = "yes" == r.initializeOnlyWhenVisible_bl),
                      r.displayType == o.FLUID_WIDTH && (r.initializeOnlyWhenVisible_bl = !1),
                      (r.bkImage = r.props.backgroundImage),
                      (r.bkImageRepeat = r.props.backgroundImageRepeat || "repeat"),
                      (r.bkImageSize = r.props.backgroundImageSize || "auto"),
                      r.setupMainDO(),
                      r.initializeOnlyWhenVisible_bl ? (t.addEventListener("scroll", r.onInitlalizeScrollHandler), setTimeout(r.onInitlalizeScrollHandler, 200)) : r.setupCarousel())
                    : void alert("At least one datalist ul tag with the attribute <font color='#FF0000'>data-cat</font> must be defined."))
              : void alert("The carousel width is not defined, plese make sure that the carouselWidth property is definded in the Ultimate 3D Carousel settings!")
            : void alert("Ultimate 3D Carousel holder div is not found, please make sure that the div exists and the id is correct! " + r.props.carouselHolderDivId)
        }),
        (r.onInitlalizeScrollHandler = function () {
          var e = FWDU3DCarUtils.getScrollOffsets()
          ;(r.pageXOffset = e.x),
            (r.pageYOffset = e.y),
            (r.ws = r.vwSize = FWDU3DCarUtils.getViewportSize()),
            r.stageContainer.getBoundingClientRect().top < r.ws.h && (t.removeEventListener("scroll", r.onInitlalizeScrollHandler), r.setupCarousel())
        }),
        (r.setupCarousel = function () {
          r.init_ || ((r.init_ = !0), r.setupData(), r.setupInfo(), r.startResizeHandler())
        }),
        (r.setupMainDO = function () {
          if (
            ((r.mainDO = new FWDU3DCarDO("div", "relative")),
            (r.stageHeight = 100),
            (r.mainDO.screen.className = "fwdu3dcar"),
            r.isMobile || r.mainDO.setSelectable(!1),
            (r.mainDO.hasT3D = !1),
            (r.mainDO.hasT2D = !1),
            r.bkImage)
          ) {
            ;(r.bkDO = new FWDU3DCarDO("div")),
              (r.bkDO.style().width = "100%"),
              (r.bkDO.style().height = "100%"),
              r.bkDO.setAlpha(0),
              (r.bkDO.style().backgroundPosition = "center"),
              (r.bkDO.style().backgroundImage = 'url("' + r.bkImage + '")'),
              (r.bkDO.style().backgroundRepeat = r.bkImageRepeat),
              (r.bkDO.style().backgroundSize = r.bkImageSize),
              r.mainDO.addChild(r.bkDO)
            var e = new Image()
            ;(e.src = r.bkImage),
              (e.onload = function () {
                FWDAnimation.to(r.bkDO, 1.5, { alpha: 1 })
              })
          }
          r.mainDO.setBkColor(r.props.backgroundColor),
            (r.mainDO.style().msTouchAction = "none"),
            r.displayType == o.FLUID_WIDTH
              ? ((r.mainDO.style().position = "absolute"),
                document.body.appendChild(r.mainDO.screen),
                r.props.zIndex && (r.mainDO.screen.style.zIndex = r.props.zIndex),
                (r.mainDO.screen.id = r.props.carouselHolderDivId + "-fluidwidth"))
              : r.stageContainer.appendChild(r.mainDO.screen)
        }),
        (r.getCaptionHeight = function () {
          var e
          if (
            ((r.captionH = 0),
            r.textDO ||
              ((r.textDO = new FWDU3DCarDO("div")),
              (r.textDO.style().width = "100%"),
              r.textDO.setVisible(!1),
              r.textDO.setX(-1e4),
              (r.textDO.screen.className = "fwdu3dcar-caption out"),
              r.mainDO.addChild(r.textDO)),
            r.thumbsManagerDO)
          )
            (r.curDataListAr = r.thumbsManagerDO.curDataListAr), (e = r.thumbsManagerDO.curId)
          else {
            if (((r.curDataListAr = r._d.dataListAr[r.startAtCategory]), (r.totalThumbs = r.curDataListAr.length), (r.startPos = r._d.carouselStartPosition), "number" == typeof r.startPos))
              (r.startPos = Math.floor(r.startPos) - 1),
                0 > r.startPos ? (r.startPos = Math.floor((r.totalThumbs - 1) / 2)) : r.startPos > r.totalThumbs - 1 && (r.startPos = Math.floor((r.totalThumbs - 1) / 2)),
                (e = r.startPos)
            else
              switch (r.startPos) {
                case "left":
                  e = 0
                  break
                case "right":
                  e = r.totalThumbs - 1
                  break
                case "random":
                  e = Math.floor(r.totalThumbs * Math.random())
                  break
                default:
                  e = Math.floor((r.totalThumbs - 1) / 2)
              }
            r.startAtCategory
          }
          r.curDataListAr[e] && r.curDataListAr[e].thumbText && ((r.caption = r.curDataListAr[e].thumbText), r.textDO.setInnerHTML(r.caption), (r.captionH = r.textDO.getHeight() - 5))
        }),
        (r.setupInfo = function () {
          FWDU3DCarInfo.setPrototype(), (r.infoDO = new FWDU3DCarInfo(r, r.warningIconPath_str))
        }),
        (r.removeInfoDO = function () {
          r.mainDO.contains(r.infoDO) && r.mainDO.removeChild(r.infoDO)
        }),
        (r.showInfo = function (e) {
          r.mainDO.addChild(r.infoDO), r.infoDO.showText(e)
        }),
        (r.startResizeHandler = function () {
          t.addEventListener("resize", r.onResizeHandler),
            t.addEventListener("scroll", r.onScrollHandler),
            t.addEventListener("orientationchange", r.orientationChange),
            r.resizeHandler(),
            (r.resizeHandlerId_to = setTimeout(r.scrollHandler, 50)),
            r.displayType == o.FLUID_WIDTH &&
              ((r.ctY = Math.round(r.stageContainer.getBoundingClientRect().top + r.pageYOffset)),
              r.mainDO.setY(r.ctY),
              setTimeout(function () {
                ;(r.ctY = Math.round(r.stageContainer.getBoundingClientRect().top + r.pageYOffset)), r.mainDO.setY(r.ctY)
              }, 500))
        }),
        (r.stopResizeHandler = function () {
          t.removeEventListener("resize", r.onResizeHandler), t.removeEventListener("scroll", r.onScrollHandler), t.removeEventListener("orientationchange", r.orientationChange)
        }),
        (r.onResizeHandler = function () {
          r.resizeHandler(), (r.resizeHandlerId2 = setTimeout(r.resizeHandler, 200))
        }),
        (r.onScrollHandler = function () {
          r.displayType == o.FLUID_WIDTH && r.scrollHandler(), (r.rect = r.mainDO.screen.getBoundingClientRect())
        }),
        (r.orientationChange = function () {
          r.displayType == o.FLUID_WIDTH &&
            ((r.orientationChangeComplete = !1),
            clearTimeout(r.scrollEndId),
            clearTimeout(r.resizeHandlerId2),
            clearTimeout(r.orientationChangeId),
            (r.orientationChangeId = setTimeout(function () {
              ;(r.orientationChangeComplete = !0), r.resizeHandler()
            }, 1e3)),
            r.mainDO.setX(0),
            r.mainDO.setWidth(0))
        }),
        (r.scrollHandler = function () {
          if (r.orientationChangeComplete) {
            var e = FWDU3DCarUtils.getScrollOffsets()
            ;(r.pageXOffset = e.x),
              (r.pageYOffset = e.y),
              r.displayType == o.FLUID_WIDTH &&
                (r.isMobile ? (clearTimeout(r.scrollEndId), (r.scrollEndId = setTimeout(r.resizeHandler, 200))) : r.mainDO.setX(r.pageXOffset),
                r.mainDO.setY(Math.round(r.stageContainer.getBoundingClientRect().top + r.pageYOffset)))
          }
        }),
        (r.resizeHandler = function (e) {
          if (r.orientationChangeComplete) {
            var t = FWDU3DCarUtils.getScrollOffsets(),
              s = (r.vwSize = FWDU3DCarUtils.getViewportSize())
            ;(r.ws = s),
              (r.dW = 0),
              (r.dH = 0),
              (r.viewportWidth = parseInt(s.w)),
              (r.viewportHeight = parseInt(s.h)),
              (r.pageXOffset = parseInt(t.x)),
              (r.pageYOffset = parseInt(t.y)),
              r.displayType == o.FLUID_WIDTH
                ? ((r.stageWidth = s.w),
                  (r.stageHeight = Math.round(r.scale * r.thumbHeight) + 2 * r.carouselOffsetHeight),
                  (r.scale = Math.min(r.stageWidth / (r.thumbWidth + 2 * r.thumbnailResizeOffest), 1)),
                  (r.stageHeight = Math.round(r.scale * r.thumbHeight) + 2 * r.carouselOffsetHeight),
                  (r.stageContainer.style.height = r.stageHeight + "px"),
                  r.scrollHandler())
                : r.displayType == o.RESPONSIVE &&
                  ((r.stageContainer.style.width = "100%"),
                  (r.stageWidth = r.stageContainer.offsetWidth),
                  r.stageWidth > r.originalWidth && ((r.stageWidth = r.originalWidth), (r.stageContainer.style.width = r.originalWidth + "px")),
                  (r.scale = Math.min(r.stageWidth / (r.thumbWidth + 2 * r.thumbnailResizeOffest), 1)),
                  (r.stageHeight = Math.round(r.scale * r.thumbHeight) + 2 * r.carouselOffsetHeight),
                  (r.stageContainer.style.height = r.stageHeight + "px"),
                  r.mainDO.setX(0),
                  r.mainDO.setY(0)),
              r.mainDO.setWidth(r.stageWidth),
              r.mainDO.setHeight(r.stageHeight),
              (r.rect = r.mainDO.screen.getBoundingClientRect()),
              r.positionPreloader(),
              r.thumbsManagerDO && (r.thumbsManagerDO.resizeHandler(e), !r.thumbsManagerDO.allowToSwitchCat && (r.disableDO.setWidth(r.stageWidth), r.disableDO.setHeight(r.stageHeight))),
              r.menuDO && r.menuDO.position(),
              r.addOffsetTextHeight(),
              r.prevSW != r.stageWidth && r.prevSH != r.stageHeight && r.dispatchEvent(o.RESIZE),
              (r.prevSW = r.stageWidth),
              (r.prevSH = r.stageHeight)
          }
        }),
        (r.addOffsetTextHeight = function (e) {
          if ("in" != r.captionPosition) {
            r.getCaptionHeight()
            var t = Math.round(r.stageHeight + r.captionH + r.carouselYRadius * r.scale)
            e
              ? (FWDAnimation.to(r.mainDO, 0.8, { h: t, ease: Quint.easeOut }), FWDAnimation.to(r.stageContainer, 0.8, { css: { height: t + "px" }, ease: Quint.easeOut }))
              : (FWDAnimation.killTweensOf(r.mainDO), FWDAnimation.killTweensOf(r.stageContainer), (r.stageContainer.style.height = t + "px"), r.mainDO.setHeight(t))
          }
        }),
        (r.setupContextMenu = function () {
          r.customContextMenuDO = new FWDRLU3DCContextMenu(r.mainDO, r._d.rightClickContextMenu)
        }),
        (r.setupData = function () {
          FWDU3DCarData.setPrototype(),
            (r._d = new FWDU3DCarData(r.props, r)),
            r._d.addListener(FWDU3DCarData.PRELOADER_LOAD_DONE, r.onPreloaderLoadDone),
            r._d.addListener(FWDU3DCarData.LOAD_ERROR, r.dataLoadError),
            r._d.addListener(FWDU3DCarData.LOAD_DONE, r.dataLoadComplete),
            (r._d.showCaptionUnderThumbnail_bl = r.props.showCaptionUnderThumbnail),
            (r._d.showCaptionUnderThumbnail_bl = !("yes" != r._d.showCaptionUnderThumbnail_bl))
        }),
        (r.onPreloaderLoadDone = function () {
          r.setupPreloader(), r.positionPreloader(), r.isMobile || r.setupContextMenu(), (r.preloaderLoaded = !0), r.resizeHandler()
        }),
        (r.dataLoadError = function (t) {
          r.showInfo(t.text)
        }),
        (r.dataLoadComplete = function () {
          r._d.showDisplay2DAlways && (FWDU3DCarUtils.hasTransform3d = !1),
            r.preloaderDO.hide(!0),
            r.setupLightBox(),
            r.setupThumbsManager(),
            r._d.showMenu && r.setupMenu(),
            r.setupDisable(),
            r.dispatchEvent(o.DATA_LOADED)
        }),
        (r.setupPreloader = function () {
          FWDU3DCarPreloader.setPrototype(),
            (r.preloaderDO = new FWDU3DCarPreloader(r, "center", 10, r.preloaderBackgroundColor, r.preloaderFillColor, 3, 0.8)),
            r.mainDO.addChild(r.preloaderDO),
            r.preloaderDO.show()
        }),
        (r.positionPreloader = function () {
          if (r.preloaderDO) {
            var e = Math.round((r.stageWidth - r.preloaderDO.getWidth()) / 2),
              t = Math.round((r.stageHeight - r.preloaderDO.getHeight() + r.captionH) / 2)
            r.thumbsManagerDO &&
              ((e = Math.round(r.thumbsManagerDO.centerThumbX + (r.thumbsManagerDO.centerThumbW - r.preloaderDO.w) / 2)),
              (t = Math.round(r.thumbsManagerDO.centerThumbY + (r.thumbsManagerDO.centerThumbH - r.preloaderDO.h) / 2))),
              r.preloaderDO.setX(e),
              r.preloaderDO.setY(t)
          }
        }),
        (r.showPreloader = function () {
          r.mainDO.addChild(r.preloaderDO), r.preloaderDO.show(), r.positionPreloader()
        }),
        (r.setupThumbsManager = function () {
          FWDU3DCarThumbsManager.setPrototype(),
            (r.thumbsManagerDO = new FWDU3DCarThumbsManager(r._d, r)),
            r.thumbsManagerDO.addListener(FWDU3DCarThumbsManager.THUMB_CLICK, r.onThumbsManagerThumbClick),
            r.thumbsManagerDO.addListener(FWDU3DCarThumbsManager.LOAD_ERROR, r.onThumbsManagerLoadError),
            r.thumbsManagerDO.addListener(FWDU3DCarThumbsManager.THUMBS_INTRO_FINISH, r.onThumbsManagerIntroFinish),
            r.thumbsManagerDO.addListener(FWDU3DCarThumbsManager.THUMB_CHANGE, r.onThumbsManagerThumbChange),
            r.mainDO.addChild(r.thumbsManagerDO),
            r.stageWidth && r.thumbsManagerDO.resizeHandler(r.scale),
            r.dispatchEvent(o.INTRO_START)
        }),
        (r.onThumbsManagerThumbClick = function (o) {
          if (r.rl) {
            var e = "fwdu3dcar" + o.playlistId + "_"
            ;(t[e] = r._d.lightboxAr[o.playlistId]), r.rl.show(e, o.thumbId)
          }
        }),
        (r.onThumbsManagerLoadError = function (t) {
          r.showInfo(t.text)
        }),
        (r.onThumbsManagerIntroFinish = function () {
          r.enableAll(),
            r.dispatchEvent(o.INTRO_FINISH),
            (r.apiReady = !0),
            r.apiReadyFirstTime || ((r.apiReadyFirstTime = !0), r.dispatchEvent(o.IS_API_READY)),
            r.dispatchEvent(o.CATEGORY_CHANGE, { id: r.thumbsManagerDO.dataListId })
        }),
        (r.onThumbsManagerThumbChange = function (t) {
          r.dispatchEvent(o.THUMB_CHANGE, { id: t.id })
        }),
        (r.update = function (t) {
          r.thumbsManagerDO.update(t)
        }),
        (r.setupMenu = function () {
          FWDU3DCarMenu.setPrototype(),
            (r.menuDO = new FWDU3DCarMenu(r, {
              arrowNImg: r._d.comboboxArrowIconN_img,
              arrowN_str: r._d.comboboxArrowIconN_str,
              selectorLineColor: r._d.selectorLineColor,
              categories_ar: r._d.categoriesAr,
              selectorLabel: r._d.selectLabel,
              position: r._d.menuPosition,
              startAtCategory: r.startAtCategory,
              comboBoxHorizontalMargins: r._d.comboBoxHorizontalMargins,
              comboBoxVerticalMargins: r._d.comboBoxVerticalMargins,
              comboBoxCornerRadius: r._d.comboBoxCornerRadius,
              selectorBackgroundColor: r._d.selectorBackgroundColor,
              selectorTextNormalColor: r._d.selectorTextNormalColor,
              selectorTextSelectedColor: r._d.selectorTextSelectedColor,
              buttonBackgroundColor: r._d.buttonBackgroundColor,
              buttonTextNormalColor: r._d.buttonTextNormalColor,
              buttonTextSelectedColor: r._d.buttonTextSelectedColor,
              shadowColor: r._d.comboBoxShadowColor,
            })),
            r.menuDO.addListener(FWDU3DCarMenu.BUTTON_PRESSED, r.onComboboxButtonPressHandler),
            r.mainDO.addChild(r.menuDO)
        }),
        (r.onComboboxButtonPressHandler = function (t) {
          r.thumbsManagerDO.allowToSwitchCat && (r.disableAll(), r.thumbsManagerDO.showCurrentCat(t.id), r.dispatchEvent(o.INTRO_START), (r.apiReady = !1))
        }),
        (r.setupLightBox = function () {
          if (r._d.useLightbox) {
            var e = FWDU3DCarUtils.getHashParam("rlinst"),
              s = !!e && e.match(/fwdu3dcar/)
            e && (e = e.match(/\d+/g)[1])
            var n = FWDU3DCarUtils.getHashParam("rlguid"),
              i = !!n && n.match(/fwdu3dcar/)
            if (
              (e
                ? n && e == r.instCountId && s && ((r.startAtCategory = n.match(/\d+/g)[1]), (t["fwdu3dcar" + r.startAtCategory + "_"] = r._d.lightboxAr[r.startAtCategory]))
                : n && i && ((r.startAtCategory = n.match(/\d+/g)[1]), (t["fwdu3dcar" + r.startAtCategory + "_"] = r._d.lightboxAr[r.startAtCategory])),
              !o.hasLoadRL && !t.FWDRL)
            ) {
              var a = document.createElement("script")
              ;(a.src = r._d.mainFolderPath + "FWDRL.js"), document.head.appendChild(a), (a.onerror = r.rlLoadError), (a.onload = r.rlLoadDone)
            }
            ;(r.rl_it = setInterval(function () {
              ;(o.hasRL || t.FWDRL) && (r.initializeRL(), clearInterval(r.rl_it))
            }, 5)),
              (o.hasLoadRL = !0)
          }
        }),
        (r.rlLoadError = function () {
          clearInterval(r.rl_it), r.showInfo("Error loading Revolution Lightbox!")
        }),
        (r.rlLoadDone = function () {
          o.hasRL = !0
        }),
        (r.initializeRL = function () {
          new FWDRL({
            instanceName: r.instName + "_rl",
            mainFolderPath: r.mainFolderPath,
            cls: "fwdu3dcar-rl",
            fontIcon: "fwdu3dcar-icon",
            rightClickContextMenu: r._d.rightClickContextMenu,
            useDeepLinking: r._d.rlUseDeepLinking,
            useVectorIcons: r._d.useVectorIcons,
            buttonsAlignment: r._d.rlButtonsAlignment,
            mediaLazyLoading: r._d.rlMediaLazyLoading,
            useDrag: r._d.rlUseDrag,
            useAsModal: r._d.rlUseAsModal,
            showSlideShowButton: r._d.rlShowSlideShowButton,
            showSlideShowAnimation: r._d.rlShowSlideShowAnimation,
            slideShowAutoPlay: r._d.rlSlideShowAutoPlay,
            slideShowAutoStop: r._d.rlSlideShowAutoStop,
            slideShowDelay: r._d.rlSlideShowDelay,
            slideShowBkColor: r._d.rlSlideShowBkColor,
            slideShowFillColor: r._d.rlSlideShowFillColor,
            useKeyboard: r._d.rlUseKeyboard,
            useDoubleClick: r._d.rlUseDoubleClick,
            showCloseButton: r._d.rlShowCloseButton,
            showFullscreenButton: r._d.rlShowFullscreenButton,
            showZoomButton: r._d.rlShowZoomButton,
            showCounter: r._d.rlShowCounter,
            showNextAndPrevBtns: r._d.rlShowNextAndPrevBtns,
            maxZoom: r._d.rlMaxZoom,
            buttonsHideDelay: r._d.rlButtonsHideDelay,
            defaultItemWidth: r._d.rlDefaultItemWidth,
            defaultItemHeight: r._d.rlDefaultItemHeight,
            itemOffsetHeight: r._d.rlItemOffsetHeight,
            itemOffsetHeightButtonsTop: r._d.rlItemOffsetHeightButtonsTop,
            spaceBetweenBtns: r._d.rlSpaceBetweenBtns,
            buttonsOffsetIn: r._d.rlButtonsOffsetIn,
            buttonsOffsetOut: r._d.rlButtonsOffsetOut,
            itemBorderSize: r._d.rlItemBorderSize,
            itemBackgroundColor: r._d.rlItemBackgroundColor,
            itemBorderColor: r._d.rlItemBorderColor,
            preloaderBkColor: r._d.rlPreloaderBkColor,
            preloaderFillColor: r._d.rlPreloaderFillColor,
            backgroundColor: r._d.rlBackgroundColor,
            shareButtons: r._d.rlShareButtons,
            shareText: r._d.rlShareText,
            sharedURL: r._d.rlSharedURL,
            shareMainBackgroundColor: r._d.rlShareMainBackgroundColor,
            shareBackgroundColor: r._d.rlShareBackgroundColor,
            showThumbnails: r._d.rlShowThumbnails,
            showThumbnailsIcon: r._d.rlShowThumbnailsIcon,
            thumbnailsHeight: r._d.rlThumbnailsHeight,
            thumbnailsOverlayColor: r._d.rlThumbnailsOverlayColor,
            thumbnailsBorderSize: r._d.rlThumbnailsBorderSize,
            thumbnailsBorderColor: r._d.rlThumbnailsBorderColor,
            spaceBetweenThumbnailsAndItem: r._d.rlSpaceBetweenThumbnailsAndItem,
            thumbnailsOffsetBottom: r._d.rlThumbnailsOffsetBottom,
            spaceBetweenThumbnails: r._d.rlSpaceBetweenThumbnails,
            caption: r._d.rlShowCaption,
            captionPosition: r._d.rlCaptionPosition,
            showCaptionOnSmallScreens: r._d.rlShowCaptionOnSmallScreens,
            captionAnimationType: r._d.rlCaptionAnimationType,
            useVideo: r._d.rlUseVideo,
            fillEntireScreenWithPoster: r._d.rlFillEntireScreenWithPoster,
            volume: r._d.rlVolume,
            videoAutoPlay: r._d.rlVideoAutoPlay,
            nextVideoAutoPlay: r._d.rlNextVideoAutoPlay,
            videoAutoPlayText: r._d.rlVideoAutoPlayText,
            showLogo: r._d.rlShowLogo,
            logoPath: r._d.rlLogoPath,
            logoLink: r._d.rlLogoLink,
            showControllerWhenVideoIsStopped: r._d.rlShowControllerWhenVideoIsStopped,
            showDefaultControllerForVimeo: r._d.rlShowDefaultControllerForVimeo,
            showScrubberWhenControllerIsHidden: r._d.rlShowScrubberWhenControllerIsHidden,
            showRewindButton: r._d.rlShowRewindButton,
            showVolumeButton: r._d.rlShowVolumeButton,
            showTime: r._d.rlShowTime,
            timeColor: r._d.rlTimeColor,
            showChromecastButton: r._d.rlShowChromecastButton,
            showPlaybackRateButton: r._d.rlShowPlaybackRateButton,
            showQualityButton: r._d.rlShowQualityButton,
            showFullScreenButton: r._d.rlShowFullScreenButton,
            showScrubberToolTipLabel: r._d.rlShowScrubberToolTipLabel,
            youtubeQualityButtonNormalColor: r._d.rlYoutubeQualityButtonNormalColor,
            youtubeQualityButtonSelectedColor: r._d.rlYoutubeQualityButtonSelectedColor,
            scrubbersToolTipLabelBackgroundColor: r._d.rlScrubbersToolTipLabelBackgroundColor,
            scrubbersToolTipLabelFontColor: r._d.rlScrubbersToolTipLabelFontColor,
            audioVisualizerLinesColor: r._d.rlAudioVisualizerLinesColor,
            audioVisualizerCircleColor: r._d.rlAudioVisualizerCircleColor,
            thumbnailsPreviewWidth: r._d.rlThumbnailsPreviewWidth,
            thumbnailsPreviewBackgroundColor: r._d.rlThumbnailsPreviewBackgroundColor,
            thumbnailsPreviewBorderColor: r._d.rlThumbnailsPreviewBorderColor,
            thumbnailsPreviewLabelBackgroundColor: r._d.rlThumbnailsPreviewLabelBackgroundColor,
            thumbnailsPreviewLabelFontColor: r._d.rlThumbnailsPreviewLabelFontColor,
            skipToVideoText: r._d.rlSkipToVideoText,
            skipToVideoButtonText: r._d.rlSkipToVideoButtonText,
          }),
            (r.rl = t[r.instName + "_rl"]),
            r.rl.addListener(FWDRL.SHOW_START, function () {
              ;(o.rlShowed = !0), r.dispatchEvent(o.RL_SHOW_START)
            }),
            r.rl.addListener(FWDRL.HIDE_COMPLETE, function () {
              ;(o.rlShowed = !1), r.dispatchEvent(o.RL_HIDE_COMPLETE)
            })
        }),
        (r.setupDisable = function () {
          ;(r.disableDO = new FWDU3DCarDO3D("div")),
            r.disableDO.setZ(3e5),
            FWDU3DCarUtils.isIE && (r.disableDO.setBkColor("#000000"), r.disableDO.setAlpha(0.001)),
            r.mainDO.addChild(r.disableDO),
            r.disableAll()
        }),
        (r.disableAll = function () {
          r.disableDO.setWidth(r.stageWidth), r.disableDO.setHeight(r.stageHeight)
        }),
        (r.enableAll = function () {
          r.disableDO.setWidth(0), r.disableDO.setHeight(0)
        }),
        (r.isAPIReady = function () {
          return r.apiReady
        }),
        (r.getCurrentCategoryId = function () {
          if (r.apiReady) return r.thumbsManagerDO.dataListId
        }),
        (r.switchCategory = function (e) {
          r.apiReady &&
            0 <= e &&
            e < r._d.dataListAr.length &&
            (r.disableAll(), r.thumbsManagerDO.showCurrentCat(e), r.dispatchEvent(o.INTRO_START), r.menuDO && r.menuDO.setValue(e), (r.apiReady = !1))
        }),
        (r.getCurrentThumbId = function () {
          if (r.apiReady) return r.thumbsManagerDO.curId
        }),
        (r.goToThumb = function (e) {
          r.apiReady &&
            e != r.thumbsManagerDO.curId &&
            (0 > e && (e = r.thumbsManagerDO.totalThumbs - 1), e > r.thumbsManagerDO.totalThumbs - 1 && (e = 0), (r.thumbsManagerDO.curId = e), r.thumbsManagerDO.goToThumb())
        }),
        (r.isSlideshowPlaying = function () {
          return r.thumbsManagerDO.isPlaying
        }),
        (r.startSlideshow = function () {
          r.apiReady && r.thumbsManagerDO.startSlideshow()
        }),
        (r.stopSlideshow = function () {
          r.apiReady && r.thumbsManagerDO.stopSlideshow()
        }),
        (r.addListener = function (e, t) {
          if (e == null) throw Error("type is required.")
          if ("object" == typeof e) throw Error("type must be of type String.")
          if ("function" != typeof t) throw Error("listener must be of type Function.")
          var o = {}
          ;(o.type = e), (o.listener = t), (o.target = r), r.listeners.events_ar.push(o)
        }),
        (r.dispatchEvent = function (e, t) {
          if (e == null) throw Error("type is required.")
          if ("object" == typeof e) throw Error("type must be of type String.")
          for (var o = 0, s = r.listeners.events_ar.length; o < s; o++)
            if (r.listeners.events_ar[o].target === r && r.listeners.events_ar[o].type === e) {
              if (t) for (var n in t) r.listeners.events_ar[o][n] = t[n]
              r.listeners.events_ar[o].listener.call(r, r.listeners.events_ar[o])
            }
        }),
        (r.removeListener = function (e, t) {
          if (e == null) throw Error("type is required.")
          if ("object" == typeof e) throw Error("type must be of type String.")
          if ("function" != typeof t) throw Error("listener must be of type Function." + e)
          for (var o = 0, s = r.listeners.events_ar.length; o < s; o++)
            if (r.listeners.events_ar[o].target === r && r.listeners.events_ar[o].type === e && r.listeners.events_ar[o].listener === t) {
              r.listeners.events_ar.splice(o, 1)
              break
            }
        }),
        r.init()
    }
    ;(o.RESIZE = "resize"),
      (o.FLUID_WIDTH = "fluidwidth"),
      (o.RESPONSIVE = "responsive"),
      (o.IMAGE = "image"),
      (o.VIDEO = "video"),
      (o.YOUTUBE = "youtube"),
      (o.VIMEO = "vimeo"),
      (o.AUDIO = "audio"),
      (o.HTML = "html"),
      (o.IFRAME = "iframe"),
      (o.INTRO_START = "onsIntroStart"),
      (o.INTRO_FINISH = "onsIntroFinish"),
      (o.DATA_LOADED = "onDataLoaded"),
      (o.IS_API_READY = "isAPIReady"),
      (o.CATEGORY_CHANGE = "categoryChanged"),
      (o.THUMB_CHANGE = "thumbChanged"),
      (o.RL_SHOW_START = "rlShowStart"),
      (o.RL_HIDE_COMPLETE = "rlHideComplete"),
      (o.GO_FULLSCREEN = "goFullScreen"),
      (o.GO_NORMALSCREEN = "goNormalScreen"),
      (o.cars = []),
      (t.FWDU3DCar = o)
  })(window),
  (function (e) {
    var t = function (e, o, r, s, n) {
      "use strict"
      var i = this,
        a = t.prototype
      ;(i.id = e),
        (i.normalColor = o),
        (i.selectedColor = r),
        (i.normalWidth = 2 * s),
        (i.selectedWidth = 2 * n),
        (i.totalWidthAndHeight = i.totalHeight = Math.max(i.normalWidth, i.selectedWidth)),
        (i.isShowed_bl = !0),
        (i.isMobile_bl = FWDU3DCarUtils.isMobile),
        (i.init = function () {
          i.setupMainContainers(), i.setWidth(i.totalWidthAndHeight), i.setHeight(i.totalWidthAndHeight), i.setButtonMode(!0), i.setNormalState()
        }),
        (i.setupMainContainers = function () {
          ;(i.screen.id = "fwdu3dcar_bullet_" + i.id),
            (i.screen.className = "fwdu3dcar-bullet"),
            (i.n_sdo = new FWDU3DCarDO("div")),
            i.n_sdo.setWidth(i.normalWidth),
            i.n_sdo.setHeight(i.normalWidth),
            i.n_sdo.setBkColor(i.normalColor),
            (i.n_sdo.style().borderRadius = "100%"),
            i.n_sdo.setX(parseInt((i.totalWidthAndHeight - i.normalWidth) / 2)),
            i.n_sdo.setY(i.n_sdo.x),
            i.addChild(i.n_sdo),
            (i.s_sdo = new FWDU3DCarDO("div")),
            i.s_sdo.setWidth(i.selectedWidth),
            i.s_sdo.setHeight(i.selectedWidth),
            i.s_sdo.setX(parseInt((i.totalWidthAndHeight - i.selectedWidth) / 2)),
            i.s_sdo.setY(i.s_sdo.x),
            (i.s_sdo.style().borderRadius = "100%"),
            (i.s_sdo.style().boxSizing = "border-box"),
            (i.s_sdo.style().border = "solid 1px " + i.selectedColor),
            i.addChild(i.s_sdo),
            (i.dumy_do = new FWDU3DCarDO("div")),
            (i.dumy_do.style().width = "100%"),
            (i.dumy_do.style().height = "100%"),
            i.addChild(i.dumy_do),
            i.setWidth(i.totalWidth),
            i.setHeight(i.totalHeight),
            (i.screen.style.yellowOverlayPointerEvents = "none"),
            i.isMobile_bl
              ? i.hasPointerEvent_bl
                ? (i.screen.addEventListener("pointerup", i.onMouseUp), i.screen.addEventListener("pointerover", i.onMouseOver), i.screen.addEventListener("pointerout", i.onMouseOut))
                : i.screen.addEventListener("touchend", i.onMouseUp)
              : (i.screen.addEventListener("mouseover", i.onMouseOver), i.screen.addEventListener("mouseout", i.onMouseOut), i.screen.addEventListener("mouseup", i.onMouseUp))
        }),
        (i.onMouseOver = function (o) {
          if ((i.dispatchEvent(t.SHOW_TOOLTIP, { e: o }), !i.isDisabledForGood_bl) && (!o.pointerType || o.pointerType == o.MSPOINTER_TYPE_MOUSE || "mouse" == o.pointerType)) {
            if (i.isDisabled_bl || i.isSelectedFinal_bl) return
            i.dispatchEvent(t.MOUSE_OVER, { e: o, id: i.id }), i.setSelectedState()
          }
        }),
        (i.onMouseOut = function (o) {
          if (!i.isDisabledForGood_bl && (!o.pointerType || o.pointerType == o.MSPOINTER_TYPE_MOUSE || "mouse" == o.pointerType)) {
            if (i.isDisabled_bl || i.isSelectedFinal_bl) return
            i.dispatchEvent(t.MOUSE_OUT, { e: o }), i.setNormalState()
          }
        }),
        (i.onMouseUp = function (o) {
          i.isDisabledForGood_bl || (o.preventDefault && o.preventDefault(), i.isDisabled_bl || 2 == o.button || i.dispatchEvent(t.MOUSE_UP, { id: i.id }))
        }),
        (i.setSelected = function () {
          i.isSelectedFinal_bl = !0
          i.s_sdo && (FWDAnimation.killTweensOf(i.s_sdo), FWDAnimation.to(i.s_sdo, 0.8, { alpha: 1, ease: Expo.easeOut }))
        }),
        (i.setUnselected = function () {
          i.isSelectedFinal_bl = !1
          i.s_sdo && FWDAnimation.to(i.s_sdo, 0.8, { alpha: 0, delay: 0.1, ease: Expo.easeOut })
        }),
        (i.setNormalState = function () {
          i.s_sdo &&
            (FWDAnimation.killTweensOf(i.s_sdo),
            FWDAnimation.killTweensOf(i.n_sdo.screen),
            FWDAnimation.to(i.n_sdo.screen, 0.6, { css: { backgroundColor: i.normalColor }, ease: Expo.easeOut }),
            FWDAnimation.to(i.s_sdo, 0.6, { alpha: 0, ease: Expo.easeOut }))
        }),
        (i.setSelectedState = function () {
          i.s_sdo &&
            (FWDAnimation.killTweensOf(i.s_sdo),
            FWDAnimation.killTweensOf(i.n_sdo.screen),
            FWDAnimation.to(i.n_sdo.screen, 0.6, { css: { backgroundColor: i.selectedColor }, ease: Expo.easeOut }),
            FWDAnimation.to(i.s_sdo, 0.6, { alpha: 1, delay: 0.1, ease: Expo.easeOut }))
        }),
        (i.setDisabledState = function () {
          i.isSetToDisabledState_bl || ((i.isSetToDisabledState_bl = !0), i.d_sdo && i.d_sdo.setX(0))
        }),
        (i.setEnabledState = function () {
          i.isSetToDisabledState_bl && ((i.isSetToDisabledState_bl = !1), i.d_sdo && i.d_sdo.setX(-100))
        }),
        (i.disable = function (e) {
          i.isDisabledForGood_bl || i.isDisabled_bl || ((i.isDisabled_bl = !0), i.setButtonMode(!1), !e && i.setNormalState())
        }),
        (i.enable = function () {
          i.isDisabledForGood_bl || !i.isDisabled_bl || ((i.isDisabled_bl = !1), i.setButtonMode(!0))
        }),
        (i.disableForGood = function () {
          ;(i.isDisabledForGood_bl = !0), i.setButtonMode(!1)
        }),
        (i.showDisabledState = function () {
          0 != i.d_sdo.x && i.d_sdo.setX(0)
        }),
        (i.hideDisabledState = function () {
          ;-100 != i.d_sdo.x && i.d_sdo.setX(-100)
        }),
        (i.show = function (e) {
          i.isShowed_bl ||
            ((i.isShowed_bl = !0),
            FWDAnimation.killTweensOf(i),
            FWDU3DCarUtils.isIEAndLessThen9
              ? FWDU3DCarUtils.isIEAndLessThen9 && i.setVisible(!0)
              : (i.setAlpha(0),
                FWDAnimation.to(i, 0.8, {
                  alpha: 1,
                  delay: e,
                  onStart: function () {
                    i.setVisible(!0)
                  },
                  ease: Expo.easeOut,
                })))
        }),
        (i.hide = function (e) {
          i.isShowed_bl &&
            ((i.isShowed_bl = !1),
            FWDAnimation.killTweensOf(i),
            FWDAnimation.killTweensOf(i.n_sdo),
            e ? (FWDU3DCarUtils.isIEAndLessThen9 ? FWDU3DCarUtils.isIEAndLessThen9 && i.setVisible(!1) : FWDAnimation.to(i, 0.8, { alpha: 0, ease: Expo.easeOut })) : i.setVisible(!1))
        }),
        (i.destroy = function () {
          FWDAnimation.killTweensOf(i.n_sdo), FWDAnimation.killTweensOf(i), i.setInnerHTML(""), a.destroy(), (i = null), (a = null), (t.prototype = null)
        }),
        i.init()
    }
    ;(t.setPrototype = function (e) {
      ;(t.prototype = null), (t.prototype = e ? new FWDU3DCarTransformDisplayObject("div") : new FWDU3DCarDO("div"))
    }),
      (t.CLICK = "onClick"),
      (t.MOUSE_OVER = "onMouseOver"),
      (t.SHOW_TOOLTIP = "showTooltip"),
      (t.MOUSE_OUT = "onMouseOut"),
      (t.MOUSE_UP = "onMouseDown"),
      (t.prototype = null),
      (e.FWDU3DCarBullet = t)
  })(window),
  (function (e) {
    var t = function (o, r, s) {
      "use strict"
      var n = this,
        e = t.prototype
      ;(n.bulletsNormalColor = o.bulletsNormalColor),
        (n.bulletsSelectedColor = o.bulletsSelectedColor),
        (n.bulletsNormalRadius = 2 * o.bulletsNormalRadius),
        (n.bulletsSelectedRadius = 2 * o.bulletsSelectedRadius),
        n.mainHolder_do,
        (n.totalItems = r),
        (n.curItemId = s),
        (n.prevCurItemId = 0),
        (n.totalWidth = 0),
        (n.totalHeight = Math.max(n.bulletsNormalRadius, n.bulletsSelectedRadius)),
        (n.mouseX = 0),
        (n.mouseY = 0),
        (n.spaceBetweenBullets = o.spaceBetweenBullets),
        n.bullets_ar,
        (n.isPressed = !1),
        (n.isMobile = FWDU3DCarUtils.isMobile),
        (n.hasPointerEvent = FWDU3DCarUtils.hasPointerEvent),
        (n.init = function () {
          ;(n.mainHolder_do = new FWDU3DCarDO("div", "absolute", "visible")),
            n.addChild(n.mainHolder_do),
            n.setHeight(n.totalHeight),
            n.setWidth(n.totalWidth),
            n.createBullets(),
            o.infiniteLoop && n.updateInininteBullets()
        }),
        (n.resize = function (e) {
          n.stageWidth = e
        }),
        (n.updateBullets = function (e) {
          n.curItemId = e
          var t
          if (!o.infiniteLoop) {
            for (var r = 0; r < n.totalItems; r++) (t = n.bullets_ar[r]), r == n.curItemId ? (t.disable(), t.setSelectedState(!0)) : (t.enable(), t.setNormalState(!0))
            n.prevCurItemId = n.curItemId
          }
        }),
        (n.updateInininteBullets = function (e) {
          ;(n.curItemId = Math.round(n.totalItems / 2) - 1), e === void 0 && (e = n.curItemId)
          for (var t = 0; t < n.totalItems; t++) (bullet = n.bullets_ar[t]), t == e ? bullet.setSelectedState(!0) : bullet.setNormalState(!0)
        }),
        (n.createBullets = function () {
          var e
          ;(n.bullets_ar = []), (n.totalWidth = 0), o.infiniteLoop && (n.totalItems = 2 * o.nrThumbsToDisplay + 1)
          for (var t = 0; t < n.totalItems; t++)
            FWDU3DCarBullet.setPrototype(),
              (e = new FWDU3DCarBullet(t, o.bulletsNormalColor, o.bulletsSelectedColor, o.bulletsNormalRadius, o.bulletsSelectedRadius)),
              e.addListener(FWDU3DCarBullet.MOUSE_UP, n.bulletMouseUpHanlder),
              o.infiniteLoop && (e.addListener(FWDU3DCarBullet.MOUSE_OVER, n.bulletMouseOverHanlder), e.addListener(FWDU3DCarBullet.MOUSE_OUT, n.bulletMouseOutHanlder)),
              (n.totalWidth += e.w + n.spaceBetweenBullets),
              e.setX((e.w + n.spaceBetweenBullets) * t),
              e.hide(),
              n.mainHolder_do.addChild(e),
              (n.bullets_ar[t] = e)
          ;(n.totalWidth -= n.spaceBetweenBullets),
            n.setWidth(n.totalWidth),
            n.updateBullets(n.curItemId),
            clearTimeout(n.showBulletsId_to),
            o.infiniteLoop && n.updateInininteBullets(),
            (n.showBulletsId_to = setTimeout(n.show, 1e3))
        }),
        (n.bulletMouseUpHanlder = function (r) {
          var e = r.id
          o.infiniteLoop && ((n.curItemId = Math.round(n.totalItems / 2) - 1), (e -= n.curItemId)), n.dispatchEvent(t.BULLET_CLICK, { id: e })
        }),
        (n.bulletMouseOverHanlder = function (t) {
          clearTimeout(n.upd), n.updateInininteBullets(t.id)
        }),
        (n.bulletMouseOutHanlder = function () {
          clearTimeout(n.upd), (n.upd = setTimeout(n.updateInininteBullets, 500))
        }),
        (n.hideBullets = function () {
          clearTimeout(n.showBulletsId_to)
          for (var e = 0, t; e < n.totalItems; e++) (t = n.bullets_ar[e]), t.hide(!0)
          clearTimeout(n.hideBulletsId_to), (n.hideBulletsId_to = setTimeout(n.destroyBullets, 800))
        }),
        (n.destroyBullets = function () {
          clearTimeout(n.showBulletsId_to)
          for (var e = 0, t; e < n.totalItems; e++) (t = n.bullets_ar[e]), n.mainHolder_do.removeChild(t), t.destroy()
        }),
        (n.show = function () {
          var e = 0.1,
            t = n.curItemId / 10,
            r
          o.infiniteLoop && ((n.curItemId = Math.round(n.totalItems / 2) - 1), (t = n.curItemId / 10))
          var r = n.bullets_ar[n.curItemId]
          r && r.show(0)
          for (var s = n.curItemId; s < n.totalItems; s++) (r = n.bullets_ar[s]), r.show(e), (e += 0.1)
          for (var s = 0; s < n.totalItems; s++) (r = n.bullets_ar[s]), r.show(t), (t -= 0.1)
        }),
        (n.destroy = function () {
          clearTimeout(n.showBulletsId_to), clearTimeout(n.hideBulletsId_to), n.main_do.destroy(), (n.main_do = null), n.setInnerHTML(""), e.destroy(), (n = null), (e = null), (t.prototype = null)
        }),
        n.init()
    }
    ;(t.setPrototype = function () {
      t.prototype = new FWDU3DCarDO("div")
    }),
      (t.BULLET_CLICK = "bulletClick"),
      (t.prototype = null),
      (e.FWDU3DCarBulletsNavigation = t)
  })(window),
  (function () {
    var e = function (t, o) {
      "use strict"
      var r = this
      ;(r.prt = t),
        (r.url = "http://www.webdesign-flash.ro"),
        (r.menu_do = null),
        (r.normalMenu_do = null),
        (r.selectedMenu_do = null),
        (r.over_do = null),
        (r.isDisabled_bl = !1),
        (r.init = function () {
          r.updateParent(r.prt)
        }),
        (r.updateParent = function (e) {
          r.prt && (r.prt.screen.addEventListener ? r.prt.screen.removeEventListener("contextmenu", r.contextMenuHandler) : r.prt.screen.detachEvent("oncontextmenu", r.contextMenuHandler)),
            (r.prt = e),
            r.prt.screen.addEventListener ? r.prt.screen.addEventListener("contextmenu", r.contextMenuHandler) : r.prt.screen.attachEvent("oncontextmenu", r.contextMenuHandler)
        }),
        (r.contextMenuHandler = function (t) {
          if (!r.isDisabled_bl)
            return "disabled" == o
              ? !!t.preventDefault && void t.preventDefault()
              : "default" == o || -1 == r.url.indexOf("sh.r")
              ? void 0
              : (r.setupMenus(),
                r.prt.addChild(r.menu_do),
                r.menu_do.setVisible(!0),
                r.positionButtons(t),
                window.addEventListener
                  ? window.addEventListener("mousedown", r.contextMenuWindowOnMouseDownHandler)
                  : document.documentElement.attachEvent("onclick", r.contextMenuWindowOnMouseDownHandler),
                !!t.preventDefault && void t.preventDefault())
        }),
        (r.contextMenuWindowOnMouseDownHandler = function (t) {
          var e = FWDU3DCarUtils.getViewportMouseCoordinates(t),
            o = e.screenX,
            s = e.screenY
          FWDU3DCarUtils.hitTest(r.menu_do.screen, o, s) ||
            (window.removeEventListener
              ? window.removeEventListener("mousedown", r.contextMenuWindowOnMouseDownHandler)
              : document.documentElement.detachEvent("onclick", r.contextMenuWindowOnMouseDownHandler),
            r.menu_do.setX(-500))
        }),
        (r.setupMenus = function () {
          r.menu_do ||
            ((r.menu_do = new FWDU3DCarDO("div")),
            r.menu_do.setX(-500),
            (r.menu_do.style().width = "100%"),
            (r.normalMenu_do = new FWDU3DCarDO("div")),
            (r.normalMenu_do.style().fontFamily = "Arial, Helvetica, sans-serif"),
            (r.normalMenu_do.style().padding = "4px"),
            (r.normalMenu_do.style().fontSize = "12px"),
            (r.normalMenu_do.style().color = "#000000"),
            r.normalMenu_do.setInnerHTML("&#0169; made by FWD"),
            r.normalMenu_do.setBkColor("#FFFFFF"),
            (r.selectedMenu_do = new FWDU3DCarDO("div")),
            (r.selectedMenu_do.style().fontFamily = "Arial, Helvetica, sans-serif"),
            (r.selectedMenu_do.style().padding = "4px"),
            (r.selectedMenu_do.style().fontSize = "12px"),
            (r.selectedMenu_do.style().color = "#FFFFFF"),
            r.selectedMenu_do.setInnerHTML("&#0169; made by FWD"),
            r.selectedMenu_do.setBkColor("#000000"),
            r.selectedMenu_do.setAlpha(0),
            (r.over_do = new FWDU3DCarDO("div")),
            r.over_do.setBkColor("#FF0000"),
            r.over_do.setAlpha(0),
            r.menu_do.addChild(r.normalMenu_do),
            r.menu_do.addChild(r.selectedMenu_do),
            r.menu_do.addChild(r.over_do),
            r.prt.addChild(r.menu_do),
            r.over_do.setWidth(r.selectedMenu_do.getWidth()),
            r.menu_do.setWidth(r.selectedMenu_do.getWidth()),
            r.over_do.setHeight(r.selectedMenu_do.getHeight()),
            r.menu_do.setHeight(r.selectedMenu_do.getHeight()),
            r.menu_do.setVisible(!1),
            r.menu_do.setButtonMode(!0),
            (r.menu_do.screen.onmouseover = r.mouseOverHandler),
            (r.menu_do.screen.onmouseout = r.mouseOutHandler),
            (r.menu_do.screen.onclick = r.onClickHandler))
        }),
        (r.mouseOverHandler = function () {
          ;-1 == r.url.indexOf("w.we") && (r.menu_do.visible = !1),
            FWDAnimation.to(r.normalMenu_do, 0.8, { alpha: 0, ease: Expo.easeOut }),
            FWDAnimation.to(r.selectedMenu_do, 0.8, { alpha: 1, ease: Expo.easeOut })
        }),
        (r.mouseOutHandler = function () {
          FWDAnimation.to(r.normalMenu_do, 0.8, { alpha: 1, ease: Expo.easeOut }), FWDAnimation.to(r.selectedMenu_do, 0.8, { alpha: 0, ease: Expo.easeOut })
        }),
        (r.onClickHandler = function () {
          window.open(r.url, "_blank")
        }),
        (r.positionButtons = function (t) {
          var e = FWDU3DCarUtils.getViewportMouseCoordinates(t),
            o = e.screenX - r.prt.getGlobalX(),
            s = e.screenY - r.prt.getGlobalY(),
            n = o + 2,
            i = s + 2
          n > r.prt.getWidth() - r.menu_do.getWidth() - 2 && (n = o - r.menu_do.getWidth() - 2),
            i > r.prt.getHeight() - r.menu_do.getHeight() - 2 && (i = s - r.menu_do.getHeight() - 2),
            r.menu_do.setX(n),
            r.menu_do.setY(i)
        }),
        (r.disable = function () {
          r.isDisabled_bl = !0
        }),
        (r.enable = function () {
          r.isDisabled_bl = !1
        }),
        r.init()
    }
    ;(e.prototype = null), (window.FWDRLU3DCContextMenu = e)
  })(window),
  (function (t) {
    var o = function (e, r) {
      "use strict"
      var s = this,
        n = o.prototype
      ;(s.props = e),
        (s.graphicsPathsAr = []),
        (s.imagesAr = []),
        (s.dataListAr = []),
        (s.categoriesAr = []),
        (s.lightboxAr = []),
        (s.countLoadedGraphics = 0),
        (s.init = function () {
          s.parseProperties()
        }),
        (s.parseProperties = function () {
          var e
          if (!s.props.carouselDataListDivId) return (e = "Carousel _d list id is not defined in FWDU3DCar constructor function!"), void s.dispatchEvent(o.LOAD_ERROR, { text: e })
          if (((s.rootElement = r.rootElement), (s.mainFolderPath = s.props.mainFolderPath), !s.mainFolderPath))
            return void setTimeout(function () {
              null == s ||
                ((errorMessage_str = "The <font color='#FF0000'>mainFolderPath</font> property is not defined in the constructor function!"), s.dispatchEvent(o.LOAD_ERROR, { text: errorMessage_str }))
            }, 50)
          if ((s.mainFolderPath.lastIndexOf("/") + 1 != s.mainFolderPath.length && (s.mainFolderPath += "/"), (s.skinPath_str = s.props.skinPath), !s.skinPath_str))
            return void setTimeout(function () {
              null == s ||
                ((errorMessage_str = "The <font color='#FF0000'>skinPath</font> property is not defined in the constructor function!"), s.dispatchEvent(o.LOAD_ERROR, { text: errorMessage_str }))
            }, 50)
          s.skinPath_str.lastIndexOf("/") + 1 != s.skinPath_str.length && (s.skinPath_str += "/"),
            (s.lightboxSkinPath_str = s.skinPath_str),
            (s.skinPath_str = s.mainFolderPath + s.skinPath_str),
            -1 != s.skinPath_str.indexOf("white") && (s.isSkinWhite = !0),
            (s.handIconPath_str = s.skinPath_str + "/hand.cur"),
            (s.grabIconPath_str = s.skinPath_str + "/grab.cur"),
            (s.useDragAndSwipe_bl = s.props.useDragAndSwipe),
            (s.useDragAndSwipe_bl = "yes" == s.useDragAndSwipe_bl),
            (s.backgroundColor = s.props.backgroundColor || "transparent"),
            (s.carRadiusX = s.props.carouselXRadius || 0),
            (s.carRadiusY = s.props.carouselYRadius || 0),
            (s.carouselTopology = s.props.carouselTopology),
            (s.carouselXRotation = s.props.carouselXRotation),
            (s.carouselYOffset = s.props.carouselYOffset || 0),
            (s.rightClickContextMenu = s.props.rightClickContextMenu),
            (s.addKeyboardSupport = "yes" == s.props.addKeyboardSupport),
            (s.showCenterImg = "yes" == s.props.showCenterImage),
            (s.useVectorIcons = "yes" == s.props.useVectorIcons),
            (s.centerImgPath = s.props.centerImagePath),
            (s.centerImgYOffset = s.props.centerImageYOffset || 0),
            (s.thumbWidth = s.props.thumbnailWidth || 400),
            (s.thumbHeight = s.props.thumbnailHeight || 266),
            (s.thumbBorderSize = s.props.thumbnailBorderSize || 0),
            (s.thumbMinAlpha = s.props.thumbnailMinimumAlpha),
            null == s.thumbMinAlpha && (s.thumbMinAlpha = 0.3),
            (s.thumbBackgroundColor = s.props.thumbnailBackgroundColor || "transparent"),
            (s.thumbBorderColor1 = s.props.thumbnailBorderColor1 || "transparent"),
            (s.thumbBorderColor2 = s.props.thumbnailBorderColor2 || "transparent"),
            (s.transparentImages = "yes" == s.props.transparentImages),
            (s.showGradient = "yes" == s.props.showThumbnailsGradient),
            (s.showCaption = "yes" == s.props.showCaption),
            (s.showCaptionOnTap = "yes" == s.props.showCaptionOnTap),
            (s.captionPosition = s.props.captionPosition || "out"),
            (s.captionAnimationType = s.props.captionAnimationType || "opacity"),
            (s.showFullCaption = "yes" == s.props.showFullCaption),
            (s.showDisplay2DAlways = "yes" == s.props.showDisplay2DAlways),
            (s.carouselStartPosition = s.props.carouselStartPosition)
          var t = (s.carouselStartPosition + "").match(/([0-9])/)
          t && (s.carouselStartPosition = parseInt(t[1])),
            (s.useVideo = "yes" == s.props.useVideo),
            (s.videoAutoPlay = "yes" == s.props.videoAutoPlay),
            (s.nextVideoAutoPlay = "yes" == s.props.nextVideoAutoPlay),
            (s.videoAutoPlayText = s.props.videoAutoPlayText || "Click to unmute"),
            (s.volume = s.props.volume),
            void 0 === s.volume && (s.volume = 1),
            (s.showLogo = "yes" == s.props.showLogo),
            (s.logoPath = s.props.logoPath || "content/rl/content/evp/skin/logo.png"),
            (s.hideLogoWithController = "yes" == s.props.hideLogoWithController),
            (s.logoLink = s.props.logoLink || ""),
            (s.showDefaultControllerForVimeo = "yes" == s.props.showDefaultControllerForVimeo),
            (s.showScrubberWhenControllerIsHidden = "yes" == s.props.showScrubberWhenControllerIsHidden),
            (s.showVolumeButton = "yes" == s.props.showVolumeButton),
            (s.showScrubberToolTipLabel = "yes" == s.props.showScrubberToolTipLabel),
            (s.showTime = "yes" == s.props.showTime),
            (s.showRewindButton = "yes" == s.props.showRewindButton),
            (s.showQualityButton = "yes" == s.props.showQualityButton),
            (s.showChromecastButton = "yes" == s.props.showChromecastButton),
            (s.showFullScreenButton = "yes" == s.props.showFullScreenButton),
            (s.showScrubberToolTipLabel = "yes" == s.props.showScrubberToolTipLabel),
            (s.fillEntireVideoScreen = "yes" == s.props.fillEntireVideoScreen),
            (s.videoControllerHideDelay = s.props.videoControllerHideDelay),
            void 0 === s.videoControllerHideDelay && (s.videoControllerHideDelay = 3e3),
            (s.videoControllerHideDelay /= 1e3),
            (s.timeColor = s.props.timeColor || "#B9B9B9"),
            (s.youtubeQualityButtonNormalColor = s.props.youtubeQualityButtonNormalColor || "#B9B9B9"),
            (s.youtubeQualityButtonSelectedColor = s.props.youtubeQualityButtonSelectedColor || "#FFFFFF"),
            (s.scrubbersToolTipLabelBackgroundColor = s.props.scrubbersToolTipLabelBackgroundColor || "#FFFFFF"),
            (s.scrubbersToolTipLabelFontColor = s.props.scrubbersToolTipLabelFontColor || "#5a5a5a"),
            (s.showPlaybackRateButton = "yes" == s.props.showPlaybackRateButton),
            (s.audioVisualizerLinesColor = s.props.audioVisualizerLinesColor || "#570AB8"),
            (s.audioVisualizerCircleColor = s.props.audioVisualizerCircleColor || "#b9b9b9"),
            (s.thumbnailsPreviewWidth = s.props.thumbnailsPreviewWidth || 196),
            (s.thumbnailsPreviewBackgroundColor = s.props.thumbnailsPreviewBackgroundColor || "#2e2e2e"),
            (s.thumbnailsPreviewBorderColor = s.props.thumbnailsPreviewBorderColor || "#414141"),
            (s.thumbnailsPreviewLabelBackgroundColor = s.props.thumbnailsPreviewLabelBackgroundColor || "#414141"),
            (s.thumbnailsPreviewLabelFontColor = s.props.thumbnailsPreviewLabelFontColor || "#CCCCCC"),
            (s.skipToVideoText = s.props.skipToVideoText || "You can skip to video in: "),
            (s.skipToVideoButtonText = s.props.skipToVideoButtonText || "Skip Ad"),
            (s.rlLogoLink = s.props.rlLogoLink || ""),
            (s.rlShowControllerWhenVideoIsStopped = "yes" == s.props.rlShowControllerWhenVideoIsStopped),
            (s.rlShowDefaultControllerForVimeo = "yes" == s.props.rlShowDefaultControllerForVimeo),
            (s.rlShowScrubberWhenControllerIsHidden = "yes" == s.props.rlShowScrubberWhenControllerIsHidden),
            (s.rlShowRewindButton = "yes" == s.props.rlShowRewindButton),
            (s.rlShowVolumeButton = "yes" == s.props.rlShowVolumeButton),
            (s.rlShowTime = "yes" == s.props.rlShowTime),
            (s.rlTimeColor = s.props.rlTimeColor || "#B9B9B9"),
            (s.rlShowChromecastButton = "yes" == s.props.rlShowChromecastButton),
            (s.rlShowPlaybackRateButton = "yes" == s.props.rlShowPlaybackRateButton),
            (s.rlShowQualityButton = "yes" == s.props.rlShowQualityButton),
            (s.rlShowFullScreenButton = "yes" == s.props.rlShowFullScreenButton),
            (s.rlShowScrubberToolTipLabel = "yes" == s.props.rlShowScrubberToolTipLabel),
            (s.rlYoutubeQualityButtonNormalColor = s.props.rlYoutubeQualityButtonNormalColor || "#B9B9B9"),
            (s.rlYoutubeQualityButtonSelectedColor = s.props.rlYoutubeQualityButtonSelectedColor || "#FFFFFF"),
            (s.rlScrubbersToolTipLabelBackgroundColor = s.props.rlScrubbersToolTipLabelBackgroundColor || "#FFFFFF"),
            (s.rlScrubbersToolTipLabelFontColor = s.props.rlScrubbersToolTipLabelFontColor || "#5a5a5a"),
            (s.rlAudioVisualizerLinesColor = s.props.rlAudioVisualizerLinesColor || "#570AB8"),
            (s.rlAudioVisualizerCircleColor = s.props.rlAudioVisualizerCircleColor || "#b9b9b9"),
            s.transparentImages && (s.thumbBorderSize = 0),
            (s.thumbWidth += 2 * s.thumbBorderSize),
            (s.thumbHeight += 2 * s.thumbBorderSize),
            (s.showLargeNextAndPrevButtons = "yes" == s.props.showLargeNextAndPrevButtons),
            (s.largeNextAndPrevButtonsMaxWidthPos = s.props.largeNextAndPrevButtonsMaxWidthPos || 0),
            (s.nextAndPrevButtonsOffsetX = s.props.nextAndPrevButtonsOffsetX || 20),
            (s.showNextAndPrevButtonsOnMobile_str = s.props.showNextAndPrevButtonsOnMobile),
            (s.showScrollbar = "yes" == s.props.showScrollbar),
            (s.showScrollbarOnMobile = "yes" == s.props.showScrollbarOnMobile),
            (s.showNextAndPrevButtonsOnMobile = "yes" == s.props.showNextAndPrevButtonsOnMobile),
            (s.enableMouseWheelScroll = "yes" == s.props.enableMouseWheelScroll),
            (s.controlsMaxWidth = s.props.controlsMaxWidth || 800),
            (s.controlsOffset = parseInt(s.props.controlsOffset)),
            (s.handlerWidth = s.props.scrollbarHandlerWidth || 300),
            (s.scrollbarTextColorNormal = s.props.scrollbarTextColorNormal || "#777777"),
            (s.scrollbarTextColorSelected = s.props.scrollbarTextColorSelected || "#FF0000"),
            (s.slideshowDelay = s.props.slideshowDelay || 5),
            (s.slideshowDelay *= 1e3),
            (s.slideshowPreloaderBackgroundColor = s.props.slideshowPreloaderBackgroundColor || "#333333"),
            (s.slideshowPreloaderFillColor = s.props.slideshowPreloaderFillColor || "#FFFFFF"),
            (s.slideshowAutoplay = "yes" == s.props.slideshowAutoplay),
            (s.showNextAndPrevButtons = "yes" == s.props.showNextAndPrevButtons),
            (s.showSlideshowButton = "yes" == s.props.showSlideshowButton),
            (s.slideshowTimerColor = s.props.slideshowTimerColor || "#777777"),
            (s.controlsPos = "top" == s.props.controlsPosition),
            (s.showBulletsNavigation = s.props.showBulletsNavigation),
            (s.showBulletsNavigation = "yes" == s.showBulletsNavigation),
            s.showBulletsNavigation && ((s.showNextAndPrevButtons = !1), (s.showScrollbar = !1), (s.showNextAndPrevButtons = !1), (s.showSlideshowButton = !1)),
            (s.bulletsNormalColor = s.props.bulletsNormalColor || "#333333"),
            (s.bulletsSelectedColor = s.props.bulletsSelectedColor || "#FFFFFF"),
            (s.bulletsNormalRadius = s.props.bulletsNormalRadius || 6),
            (s.bulletsSelectedRadius = s.props.bulletsSelectedRadius || 6),
            (s.spaceBetweenBullets = s.props.spaceBetweenBullets || 6),
            (s.showRefl = "yes" == s.props.showReflection),
            (s.reflHeight = s.props.reflectionHeight || 100),
            (s.reflDist = s.props.reflectionDistance || 0),
            (s.reflAlpha = s.props.reflectionOpacity || 0.5),
            (s.showMenu = "yes" == s.props.showMenu),
            (s.showAllCategories = "yes" == s.props.showAllCategories),
            (s.allCategoriesLabel = s.props.allCategoriesLabel || null),
            (s.selectLabel = s.props.selectLabel || "not defined!"),
            (s.selectorLineColor = s.props.selectorLineColor),
            (s.selectorBackgroundColor = s.props.selectorBackgroundColor),
            (s.buttonBackgroundColor = s.props.buttonBackgroundColor),
            (s.selectorTextNormalColor = s.props.selectorTextNormalColor),
            (s.selectorTextSelectedColor = s.props.selectorTextSelectedColor),
            (s.buttonBackgroundNormalColor1 = s.props.buttonBackgroundNormalColor1),
            (s.buttonTextNormalColor = s.props.buttonTextNormalColor),
            (s.buttonTextSelectedColor = s.props.buttonTextSelectedColor),
            (s.comboBoxHorizontalMargins = s.props.menuHorizontalMargins || 0),
            (s.comboBoxVerticalMargins = s.props.menuVerticalMargins || 0),
            (s.menuPosition = "topleft" == s.props.menuPosition || "topright" == s.props.menuPosition ? FWDU3DCarUtils.trim(s.props.menuPosition).toLowerCase() : "topleft"),
            (s.useLightbox = "yes" == s.props.useLightbox),
            (s.rlUseDeepLinking = "yes" == s.props.rlUseDeepLinking),
            (s.rlButtonsAlignment = s.props.rlButtonsAlignment),
            (s.rlMediaLazyLoading = "yes" == s.props.rlMediaLazyLoading),
            (s.rlUseDrag = "yes" == s.props.rlUseDrag),
            (s.rlUseAsModal = "yes" == s.props.rlUseAsModal),
            (s.rlShowSlideShowButton = "yes" == s.props.rlShowSlideShowButton),
            (s.rlShowSlideShowAnimation = "yes" == s.props.rlShowSlideShowAnimation),
            (s.rlSlideShowAutoPlay = "yes" == s.props.rlSlideShowAutoPlay),
            (s.rlSlideShowAutoStop = "yes" == s.props.rlSlideShowAutoStop),
            (s.rlSlideShowDelay = s.props.rlSlideShowDelay || 6),
            (s.rlSlideShowBkColor = s.props.rlSlideShowBkColor || "#2e2e2e"),
            (s.rlSlideShowFillColor = s.props.rlSlideShowFillColor || "#FFFFFF"),
            (s.rlUseKeyboard = "yes" == s.props.rlUseKeyboard),
            (s.rlUseDoubleClick = "yes" == s.props.rlUseDoubleClick),
            (s.rlShowCloseButton = "yes" == s.props.rlShowCloseButton),
            (s.rlShowFullscreenButton = "yes" == s.props.rlShowFullscreenButton),
            (s.rlShowZoomButton = "yes" == s.props.rlShowZoomButton),
            (s.rlShowCounter = "yes" == s.props.rlShowCounter),
            (s.rlShowNextAndPrevBtns = "yes" == s.props.rlShowNextAndPrevBtns),
            (s.rlMaxZoom = s.props.rlMaxZoom || 6),
            (s.rlButtonsHideDelay = s.props.rlButtonsHideDelay || 5),
            (s.rlDefaultItemWidth = s.props.rlDefaultItemWidth || 1527),
            (s.rlDefaultItemHeight = s.props.rlDefaultItemHeight || 859),
            (s.rlItemOffsetHeight = s.props.rlItemOffsetHeight || 37),
            (s.rlItemOffsetHeightButtonsTop = s.props.rlItemOffsetHeightButtonsTop || 47),
            (s.rlSpaceBetweenBtns = s.props.rlSpaceBetweenBtns || 8),
            (s.rlButtonsOffsetIn = s.props.rlButtonsOffsetIn || 10),
            (s.rlButtonsOffsetOut = s.props.rlButtonsOffsetOut || 10),
            (s.rlItemBorderSize = s.props.rlItemBorderSize || 0),
            (s.rlItemBackgroundColor = s.props.rlItemBackgroundColor || "#212121"),
            (s.rlItemBorderColor = s.props.rlItemBorderColor || "#FFFFFF"),
            (s.rlPreloaderBkColor = s.props.rlPreloaderBkColor || "#2e2e2e"),
            (s.rlPreloaderFillColor = s.props.rlPreloaderFillColor || "#FFFFFF"),
            (s.rlBackgroundColor = s.props.rlBackgroundColor || "rgba(0,0,0,.99)"),
            (s.rlShareButtons = s.props.rlShareButtons || ["facebook", "twitter", "linkedin", "tumblr", "pinterest", "reddit", "buffer", "digg", "blogger"]),
            (s.rlShareText = s.props.rlShareText || "Share on"),
            (s.rlSharedURL = s.props.rlSharedURL || "deeplink"),
            (s.rlShareMainBackgroundColor = s.props.rlShareMainBackgroundColor || "rgba(0,0,0,.4)"),
            (s.rlShareBackgroundColor = s.props.rlShareBackgroundColor || "#FFFFFF"),
            (s.rlShowThumbnails = "yes" == s.props.rlShowThumbnails),
            (s.rlShowThumbnailsIcon = "yes" == s.props.rlShowThumbnailsIcon),
            (s.rlThumbnailsHeight = s.props.rlThumbnailsHeight || 80),
            (s.rlThumbnailsOverlayColor = s.props.rlThumbnailsOverlayColor || "rgba(0,0,0,.4)"),
            (s.rlThumbnailsBorderSize = s.props.rlThumbnailsBorderSize),
            null == s.rlThumbnailsBorderSize && (s.rlThumbnailsBorderSize = 2),
            (s.rlThumbnailsBorderColor = s.props.rlThumbnailsBorderColor || "#FFFFFF"),
            (s.rlSpaceBetweenThumbnailsAndItem = s.props.rlSpaceBetweenThumbnailsAndItem),
            null == s.rlSpaceBetweenThumbnailsAndItem && (s.rlSpaceBetweenThumbnailsAndItem = 10),
            (s.rlThumbnailsOffsetBottom = s.props.rlThumbnailsOffsetBottom),
            null == s.rlThumbnailsOffsetBottom && (s.rlThumbnailsOffsetBottom = 10),
            (s.rlSpaceBetweenThumbnails = s.props.rlSpaceBetweenThumbnails),
            null == s.rlSpaceBetweenThumbnails && (s.rlSpaceBetweenThumbnails = 5),
            (s.rlShowCaption = "yes" == s.props.rlShowCaption),
            (s.rlCaptionPosition = s.props.rlCaptionPosition || "bottomout"),
            (s.rlShowCaptionOnSmallScreens = "yes" == s.props.rlShowCaptionOnSmallScreens),
            (s.rlCaptionAnimationType = s.props.rlCaptionAnimationType || "motion"),
            (s.rlUseVideo = "yes" == s.props.rlUseVideo),
            (s.rlFillEntireScreenWithPoster = "yes" == s.props.rlFillEntireScreenWithPoster),
            (s.rlVolume = s.props.rlVolume),
            void 0 === s.rlVolume && (s.rlVolume = 1),
            (s.rlVideoAutoPlay = "yes" == s.props.rlVideoAutoPlay),
            (s.rlNextVideoAutoPlay = "yes" == s.props.rlNextVideoAutoPlay),
            (s.rlVideoAutoPlayText = s.props.rlVideoAutoPlayText || "Click to unmute"),
            (s.rlShowLogo = "yes" == s.props.rlShowLogo),
            (s.rlLogoPath = s.props.rlLogoPath || "content/rl/content/evp/skin/logo.png"),
            (s.rlThumbnailsPreviewWidth = s.props.rlThumbnailsPreviewWidth || 196),
            (s.rlThumbnailsPreviewBackgroundColor = s.props.rlThumbnailsPreviewBackgroundColor || "#2e2e2e"),
            (s.rlThumbnailsPreviewBorderColor = s.props.rlThumbnailsPreviewBorderColor || "#414141"),
            (s.rlThumbnailsPreviewLabelBackgroundColor = s.props.rlThumbnailsPreviewLabelBackgroundColor || "#414141"),
            (s.rlThumbnailsPreviewLabelFontColor = s.props.rlThumbnailsPreviewLabelFontColor || "#CCCCCC"),
            (s.rlSkipToVideoText = s.props.rlSkipToVideoText || "You can skip to video in: "),
            (s.rlSkipToVideoButtonText = s.rlSkipToVideoButtonText || "Skip Ad")
          var n = r.dataListAr
          s.totalDataLists = n.length
          for (var a = [], l = 0, d, u, h, c, p, m, g, b, _, f, O, y; l < s.totalDataLists; l++) {
            ;(y = []), (c = n[l]), (u = []), (d = []), (g = FWDU3DCarUtils.getChildren(c)), (p = g.length)
            for (var v = 0; v < p; v++) {
              var D = {},
                w = g[v],
                h = FWDU3DCarUtils.getChildren(w)
              ;(f = l + 1), (O = v + 1), (m = h.length)
              for (var T = !0, C = 0; C < m; C++)
                if (((_ = "data-thumb-src"), FWDU3DCarUtils.hasAttribute(h[C], "data-thumb-src"))) {
                  ;(T = !1), (D.thumbSrc = FWDU3DCarUtils.trim(FWDU3DCarUtils.getAttributeValue(h[C], "data-thumb-src")))
                  break
                }
              if (
                ((D.thumbVideoSrc = FWDU3DCarUtils.getAttributeValue(h[C], "data-thumb-video-src")),
                (D.password = FWDU3DCarUtils.getAttributeValue(h[C], "data-thumb-password")),
                (D.subtitleSrc = FWDU3DCarUtils.getAttributeValue(h[C], "data-thumb-subtitle-src")),
                (D.thumbPreviewSrc = FWDU3DCarUtils.getAttributeValue(h[C], "data-thumb-preview-src")),
                (D.thumbVastSrc = FWDU3DCarUtils.getAttributeValue(h[C], "data-thumb-vast-src")),
                T)
              )
                return (
                  (e =
                    "Element with attribute <font color='#FF0000'>" +
                    _ +
                    "</font> is not defined in the datalist number - <font color='#FF0000'>" +
                    f +
                    "</font> at position - <font color='#FF0000'>" +
                    O +
                    "</font> in the datalist ul element."),
                  void s.dispatchEvent(o.LOAD_ERROR, { text: e })
                )
              if (s.showCaption) {
                for (var C = 0; C < m; C++)
                  if (FWDU3DCarUtils.hasAttribute(h[C], "data-thumb-caption")) {
                    ;(D.thumbText = h[C].innerHTML), (b = h[C])
                    break
                  }
                ;(D.captionOffset = 0),
                  b &&
                    FWDU3DCarUtils.getAttributeValue(b, "data-thumb-caption-offset") &&
                    (D.captionOffset = parseInt(FWDU3DCarUtils.trim(FWDU3DCarUtils.getAttributeValue(b, "data-thumb-caption-offset"))))
              }
              D.type = "none"
              for (var C = 0, S; C < m; C++)
                if (((S = void 0), FWDU3DCarUtils.hasAttribute(h[C], "data-rl-src"))) {
                  S = h[C]
                  break
                }
              var x = void 0
              if (S) {
                ;(x = {}), (x.type = "none"), (x.src = FWDU3DCarUtils.getAttributeValue(S, "data-rl-src") + ""), (x.thumbSrc = D.thumbSrc)
                var P = FWDU3DCarUtils.getAttributeValue(S, "data-rl-target")
                x.target = P ? P : "_blank"
                var I = FWDU3DCarUtils.getAttributeValue(S, "data-rl-poster-src")
                I && (x.posterSrc = I)
                var H = FWDU3DCarUtils.getAttributeValue(S, "data-rl-password")
                H && (x.password = H)
                var B = FWDU3DCarUtils.getAttributeValue(S, "data-rl-subtitle-src")
                B && (x.subtitleSrc = B)
                var L = FWDU3DCarUtils.getAttributeValue(S, "data-rl-preview-src")
                L && (x.thumbnailsPreviewSrc = L)
                var A = FWDU3DCarUtils.getAttributeValue(S, "data-rl-vast-src")
                A && (x.vastSrc = A)
                var M = FWDU3DCarUtils.getAttributeValue(S, "data-rl-width")
                M && (x.width = M)
                var E = FWDU3DCarUtils.getAttributeValue(S, "data-rl-height")
                E && (x.height = E)
                for (var C = 0; C < m; C++)
                  if (FWDU3DCarUtils.hasAttribute(h[C], "data-rl-caption")) {
                    x.caption = h[C].innerHTML
                    break
                  }
                ;/link:/i.test(x.src) ? ((x.src = x.src.substr(5)), (x.type = "link"), (D.type = "link")) : /none/i.test(x.src) && ((x.src = x.src.substr(5)), (x.type = "none"), (D.type = "none")),
                  (D.secondObj = x)
              }
              s.setItemType(D, D.thumbVideoSrc), x && "link" != x.type && s.setItemType(x, x.src), x && "link" != x.type && "none" != x.type && !D.thumbVideoSrc && y.push(x), (u[v] = D), a.push(D)
            }
            ;(s.categoriesAr[l] = FWDU3DCarUtils.getAttributeValue(c, "data-cat") || "not defined!"), (s.dataListAr[l] = u), (s.lightboxAr[l] = { playlistItems: y })
          }
          return (
            s.showAllCategories && (s.categoriesAr.unshift(s.allCategoriesLabel), s.dataListAr.unshift(a), s.totalDataLists++),
            1 >= s.totalDataLists && (s.showMenu = !1),
            s.skinPath_str
              ? void ((s.skinPaths_ar = [
                  { img: (s.largePlayNImg = new Image()), src: s.skinPath_str + "large-play.png" },
                  { img: (s.prevButtonNImg = new Image()), src: s.skinPath_str + "prev-button.png" },
                  { img: (s.comboboxArrowIconN_img = new Image()), src: s.skinPath_str + "menuIcon.png" },
                  { img: (s.nextButtonNImg = new Image()), src: s.skinPath_str + "next-button.png" },
                  { img: (s.pauseButtonImg = new Image()), src: s.skinPath_str + "pause-button.png" },
                  { img: (s.playButtonNImg = new Image()), src: s.skinPath_str + "play-button.png" },
                  { img: (s.largeNextButton_img = new Image()), src: s.skinPath_str + "next-button-large-normal.png" },
                  { img: (s.largePrevButton_img = new Image()), src: s.skinPath_str + "prev-button-large-normal.png" },
                  { img: (s.handlerLeftNImg = new Image()), src: s.skinPath_str + "handler-left-normal.png" },
                  { img: (s.handlerLeftSImg = new Image()), src: s.skinPath_str + "handler-left-selected.png" },
                  { img: (s.handlerRightNImg = new Image()), src: s.skinPath_str + "handler-right-normal.png" },
                  { img: (s.handlerRightSImg = new Image()), src: s.skinPath_str + "handler-right-selected.png" },
                  { img: (s.trackLeftImg = new Image()), src: s.skinPath_str + "trackLeft.png" },
                  { img: (s.trackCenterImg = new Image()), src: s.skinPath_str + "trackCenter.png" },
                  { img: (s.trackRightImg = new Image()), src: s.skinPath_str + "trackRight.png" },
                ]),
                (s.largePlaySPath = s.skinPath_str + "large-play-over.png"),
                (s.playButtonSPath = s.skinPath_str + "play-button-over.png"),
                (s.nextButtonSPath = s.skinPath_str + "next-button-over.png"),
                (s.prevButtonSPath = s.skinPath_str + "prev-button-over.png"),
                (s.circleBK = s.skinPath_str + "slideshow-background.png"),
                (s.preloaderPath = s.skinPath_str + "preloader.png"),
                (s.mainPreloaderImg = new Image()),
                (s.largeNextButtonSPath_str = s.skinPath_str + "next-button-large-selected.png"),
                (s.largePrevButtonSPath_str = s.skinPath_str + "prev-button-large-selected.png"),
                (s.comboboxArrowIconN_str = s.skinPath_str + "menuIcon.png"),
                (s.handlerCenterNPath = s.skinPath_str + "handler-center-normal.png"),
                (s.handlerCenterSPath = s.skinPath_str + "handler-center-selected.png"),
                (s.trackCenterPath = s.skinPath_str + "/trackCenter.png"),
                (s.thumbGradientLeftPath = s.skinPath_str + "gradientLeft.png"),
                (s.thumbGradientRightPath = s.skinPath_str + "gradientRight.png"),
                (s.thumbTitleGradientPath = s.skinPath_str + "textGradient.png"),
                (s.totalGraphics = s.skinPaths_ar.length),
                (s.countLoadedSkinImages = 0),
                setTimeout(function () {
                  s.dispatchEvent(o.PRELOADER_LOAD_DONE), s.useVectorIcons ? (s.useVideo ? s.loadVideoPlayer() : s.doneLoading()) : s.loadSkin()
                }, 50))
              : void s.dispatchEvent(o.LOAD_ERROR, { text: "Carousel graphics skin path is not defined in FWDU3DCar constructor function!" })
          )
        }),
        (s.setItemType = function (e, t) {
          ;/\.jpg|\.jpeg|\.png|\.bmp|\.gif|\.tif|\.tiff|\.jfi|\.jfif|\.exif|\.svg/i.test(t)
            ? (e.type = FWDU3DCar.IMAGE)
            : /\.mp4|\.m3u8|\.mpd/i.test(t)
            ? (e.type = FWDU3DCar.VIDEO)
            : /youtube\./i.test(t)
            ? (e.type = FWDU3DCar.YOUTUBE)
            : /vimeo\./i.test(t)
            ? (e.type = FWDU3DCar.VIMEO)
            : /\.mp3/i.test(t)
            ? (e.type = FWDU3DCar.AUDIO)
            : /https:|http:|\.pdf/i.test(t)
            ? (e.type = FWDU3DCar.IFRAME)
            : document.getElementById(t) && (e.type = FWDU3DCar.HTML)
        }),
        (s.loadSkin = function () {
          for (var e = 0, t, o; e < s.totalGraphics; e++)
            (t = s.skinPaths_ar[e].img), (o = s.skinPaths_ar[e].src), (t.onload = s.onSkinLoadHandler), (t.onerror = s.onSkinLoadErrorHandler), (t.src = o)
        }),
        (s.onSkinLoadHandler = function () {
          s.countLoadedSkinImages++, s.countLoadedSkinImages == s.totalGraphics && (s.useVideo ? s.loadVideoPlayer() : s.doneLoading())
        }),
        (s.doneLoading = function () {
          s.dispatchEvent(o.LOAD_DONE)
        }),
        (s.onSkinLoadErrorHandler = function (r) {
          if (FWDU3DCarUtils.isIEAndLessThen9) var e = "Graphics image not found!"
          else var e = "The skin icon with label <font color='#ff0000'>" + r.target.src + "</font> can't be loaded, check path!"
          t.console && console.log(r)
          var n = { text: e }
          setTimeout(function () {
            s && s.dispatchEvent(o.LOAD_ERROR, n)
          }, 50)
        }),
        (s.loadVideoPlayer = function () {
          if (!FWDU3DCar.hasLoadEVP && !t.FWDEVPlayer) {
            var e = document.createElement("script")
            ;(e.src = s.mainFolderPath + "FWDEVPlayer.js"), document.head.appendChild(e), (e.onload = s.videoLoadDone), (e.onerror = s.onVidLoadError)
          }
          ;(s.evp_it = setInterval(function () {
            ;(FWDU3DCar.hasEVP || t.FWDEVPlayer) && (s.doneLoading(), clearInterval(s.evp_it))
          }, 5)),
            (FWDU3DCar.hasLoadEVP = !0)
        }),
        (s.onVidLoadError = function () {
          clearInterval(s.evp_it)
          s.dispatchEvent(o.LOAD_ERROR, { text: "Error loading video player!" })
        }),
        (s.videoLoadDone = function () {
          FWDU3DCar.hasEVP = !0
        }),
        (s.checkForAttribute = function (t, e) {
          var r = FWDU3DCarUtils.getChildFromNodeListFromAttribute(t, e)
          return (
            (r = r ? FWDU3DCarUtils.trim(FWDU3DCarUtils.getAttributeValue(r, e)) : void 0),
            r ? r : void s.dispatchEvent(o.LOAD_ERROR, { text: "Element  with attribute <font color='#FF0000'>" + e + "</font> is not defined." })
          )
        }),
        s.init()
    }
    ;(o.setPrototype = function () {
      o.prototype = new FWDU3DCarEventDispatcher()
    }),
      (o.prototype = null),
      (o.PRELOADER_LOAD_DONE = "onPreloaderLoadDone"),
      (o.LOAD_DONE = "onLoadDone"),
      (o.LOAD_ERROR = "onLoadError"),
      (t.FWDU3DCarData = o)
  })(window),
  (function (e) {
    e.FWDU3DCarDO = function (e, t, o, r) {
      "use strict"
      var s = this
      if (((s.listeners = { events_ar: [] }), "div" == e || "img" == e || "canvas" == e)) s.type = e
      else throw Error("Type is not valid! " + e)
      ;(s.children_ar = []),
        (s.position = t || "absolute"),
        (s.overflow = o || "hidden"),
        (s.display = r || "inline-block"),
        (s.visible = !0),
        s.buttonMode,
        (s.x = 0),
        (s.y = 0),
        (s.w = 0),
        (s.h = 0),
        s.rect,
        (s.alpha = 1),
        (s.hasT3D = FWDU3DCarUtils.hasTransform3d),
        (s.hasT2D = FWDU3DCarUtils.hasTransform2d),
        (FWDU3DCarUtils.isIE || (FWDU3DCarUtils.isIE11 && !FWDU3DCarUtils.isMobile)) && ((s.hasT3D = !1), (s.hasT2D = !1)),
        (s.hasBeenSetSelectable_bl = !1),
        (s.init = function () {
          s.setScreen()
        }),
        (s.getTransform = function () {
          for (var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"], t; (t = e.shift()); ) if ("undefined" != typeof s.screen.style[t]) return t
          return !1
        }),
        (s.setScreen = function (e) {
          "img" == s.type && e ? ((s.screen = e), s.setMainProperties()) : ((s.screen = document.createElement(s.type)), s.setMainProperties())
        }),
        (s.setMainProperties = function () {
          ;(s.transform = s.getTransform()),
            s.setPosition(s.position),
            s.setOverflow(s.overflow),
            (s.isHtml5_bl = !0),
            (s.screen.style.left = "0px"),
            (s.screen.style.top = "0px"),
            (s.screen.style.margin = "0px"),
            (s.screen.style.padding = "0px"),
            (s.screen.style.maxWidth = "none"),
            (s.screen.style.maxHeight = "none"),
            (s.screen.style.border = "none"),
            (s.screen.style.lineHeight = "1"),
            (s.screen.style.backgroundColor = "transparent"),
            (s.screen.style.transition = "none"),
            "img" == e && (s.setWidth(s.screen.width), s.setHeight(s.screen.height))
        }),
        (s.setBackfaceVisibility = function () {
          ;(s.screen.style.backfaceVisibility = "visible"), (s.screen.style.webkitBackfaceVisibility = "visible"), (s.screen.style.MozBackfaceVisibility = "visible")
        }),
        (s.getGlobalX = function () {
          return s.getRect().left
        }),
        (s.getGlobalY = function () {
          return s.getRect().top
        }),
        (s.setSelectable = function (e) {
          e ||
            ((s.screen.style.userSelect = "none"),
            (s.screen.style.MozUserSelect = "none"),
            (s.screen.style.webkitUserSelect = "none"),
            (s.screen.style.khtmlUserSelect = "none"),
            (s.screen.style.oUserSelect = "none"),
            (s.screen.style.msUserSelect = "none"),
            (s.screen.msUserSelect = "none"),
            (s.screen.ondragstart = function () {
              return !1
            }),
            (s.screen.onselectstart = function () {
              return !1
            }),
            (s.screen.ontouchstart = function () {
              return !1
            }),
            (s.screen.style.webkitTouchCallout = "none"),
            (s.hasBeenSetSelectable_bl = !0))
        }),
        (s.getScreen = function () {
          return s.screen
        }),
        (s.setVisible = function (e) {
          ;(s.visible = e), (s.screen.style.visibility = !0 == s.visible ? "visible" : "hidden")
        }),
        (s.getVisible = function () {
          return s.visible
        }),
        (s.setResizableSizeAfterParent = function () {
          ;(s.screen.style.width = "100%"), (s.screen.style.height = "100%")
        }),
        (s.style = function () {
          return s.screen.style
        }),
        (s.setOverflow = function (e) {
          ;(s.overflow = e), (s.screen.style.overflow = s.overflow)
        }),
        (s.setPosition = function (e) {
          ;(s.position = e), (s.screen.style.position = s.position)
        }),
        (s.setDisplay = function (e) {
          ;(s.display = e), (s.screen.style.display = s.display)
        }),
        (s.setButtonMode = function (e) {
          ;(s.buttonMode = e), (s.screen.style.cursor = !0 == s.buttonMode ? "pointer" : "default")
        }),
        (s.setBkColor = function (e) {
          s.screen.style.backgroundColor = e
        }),
        (s.setInnerHTML = function (e) {
          ;(s.innerHTML = e), (s.screen.innerHTML = s.innerHTML)
        }),
        (s.getInnerHTML = function () {
          return s.innerHTML
        }),
        (s.getRect = function () {
          return s.screen.getBoundingClientRect()
        }),
        (s.setAlpha = function (e) {
          ;(s.alpha = e), (s.screen.style.opacity = s.alpha)
        }),
        (s.getAlpha = function () {
          return s.alpha
        }),
        (s.getRect = function () {
          return s.screen.getBoundingClientRect()
        }),
        (s.getGlobalX = function () {
          return s.getRect().left
        }),
        (s.getGlobalY = function () {
          return s.getRect().top
        }),
        (s.setX = function (e) {
          ;(s.x = e),
            s.hasT3D
              ? (s.screen.style[s.transform] = "translate3d(" + s.x + "px," + s.y + "px,0)")
              : s.hasT2D
              ? (s.screen.style[s.transform] = "translate(" + s.x + "px," + s.y + "px)")
              : (s.screen.style.left = s.x + "px")
        }),
        (s.getX = function () {
          return s.x
        }),
        (s.setY = function (e) {
          ;(s.y = e),
            s.hasT3D
              ? (s.screen.style[s.transform] = "translate3d(" + s.x + "px," + s.y + "px,0)")
              : s.hasT2D
              ? (s.screen.style[s.transform] = "translate(" + s.x + "px," + s.y + "px)")
              : (s.screen.style.top = s.y + "px")
        }),
        (s.getY = function () {
          return s.y
        }),
        (s.setWidth = function (e) {
          ;(s.w = e), "img" == s.type && (s.screen.width = s.w), (s.screen.style.width = s.w + "px")
        }),
        (s.getWidth = function () {
          return "div" == s.type
            ? 0 == s.screen.offsetWidth
              ? s.w
              : s.screen.offsetWidth
            : "img" == s.type
            ? 0 == s.screen.offsetWidth
              ? 0 == s.screen.width
                ? s._w
                : s.screen.width
              : s.screen.offsetWidth
            : "canvas" == s.type
            ? 0 == s.screen.offsetWidth
              ? s.w
              : s.screen.offsetWidth
            : void 0
        }),
        (s.setHeight = function (e) {
          ;(s.h = e), "img" == s.type && (s.screen.height = s.h), (s.screen.style.height = s.h + "px")
        }),
        (s.getHeight = function () {
          return "div" == s.type
            ? 0 == s.screen.offsetHeight
              ? s.h
              : s.screen.offsetHeight
            : "img" == s.type
            ? 0 == s.screen.offsetHeight
              ? 0 == s.screen.height
                ? s.h
                : s.screen.height
              : s.screen.offsetHeight
            : "canvas" == s.type
            ? 0 == s.screen.offsetHeight
              ? s.h
              : s.screen.offsetHeight
            : void 0
        }),
        (s.setCSSGradient = function (e, t) {
          FWDU3DCarUtils.isIEAndLessThen10
            ? s.setBkColor(e)
            : ((s.screen.style.backgroundImage = "-webkit-linear-gradient(top, " + e + ", " + t + ")"),
              (s.screen.style.backgroundImage = "-moz-linear-gradient(top, " + e + ", " + t + ")"),
              (s.screen.style.backgroundImage = "-ms-linear-gradient(top, " + e + ", " + t + ")"),
              (s.screen.style.backgroundImage = "-o-linear-gradient(top, " + e + ", " + t + ")"))
        }),
        (s.addChild = function (t) {
          s.contains(t)
            ? (s.children_ar.splice(FWDU3DCarUtils.indexOfArray(s.children_ar, t), 1), s.children_ar.push(t), s.screen.appendChild(t.screen))
            : (s.children_ar.push(t), s.screen.appendChild(t.screen))
        }),
        (s.removeChild = function (t) {
          if (s.contains(t)) s.children_ar.splice(FWDU3DCarUtils.indexOfArray(s.children_ar, t), 1), s.screen.removeChild(t.screen)
          else throw Error("##removeChild()## Child dose't exist, it can't be removed!")
        }),
        (s.contains = function (t) {
          return -1 != FWDU3DCarUtils.indexOfArray(s.children_ar, t)
        }),
        (s.addChildAt = function (t, e) {
          if (0 == s.getNumChildren()) s.children_ar.push(t), s.screen.appendChild(t.screen)
          else if (1 == e)
            s.screen.insertBefore(t.screen, s.children_ar[0].screen),
              s.screen.insertBefore(s.children_ar[0].screen, t.screen),
              s.contains(t) ? s.children_ar.splice(FWDU3DCarUtils.indexOfArray(s.children_ar, t), 1, t) : s.children_ar.splice(FWDU3DCarUtils.indexOfArray(s.children_ar, t), 0, t)
          else {
            if (0 > e || e > s.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!")
            s.screen.insertBefore(t.screen, s.children_ar[e].screen),
              s.contains(t) ? s.children_ar.splice(FWDU3DCarUtils.indexOfArray(s.children_ar, t), 1, t) : s.children_ar.splice(FWDU3DCarUtils.indexOfArray(s.children_ar, t), 0, t)
          }
        }),
        (s.getChildAt = function (e) {
          if (0 > e || e > s.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!")
          if (0 == s.getNumChildren()) throw Errror("##getChildAt## Child dose not exist!")
          return s.children_ar[e]
        }),
        (s.removeChildAtZero = function () {
          s.screen.removeChild(s.children_ar[0].screen), s.children_ar.shift()
        }),
        (s.getNumChildren = function () {
          return s.children_ar.length
        }),
        (this.addListener = function (e, t) {
          if (null == e) throw Error("type is required.")
          if ("object" == typeof e) throw Error("type must be of type String.")
          if ("function" != typeof t) throw Error("listener must be of type Function.")
          var o = {}
          ;(o.type = e), (o.listener = t), (o.target = this), this.listeners.events_ar.push(o)
        }),
        (this.dispatchEvent = function (e, t) {
          if (null != this.listeners) {
            if (null == e) throw Error("type is required.")
            if ("object" == typeof e) throw Error("type must be of type String.")
            for (var o = 0, r = this.listeners.events_ar.length; o < r; o++)
              if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e) {
                if (t) for (var s in t) this.listeners.events_ar[o][s] = t[s]
                this.listeners.events_ar[o].listener.call(this, this.listeners.events_ar[o])
              }
          }
        }),
        (this.removeListener = function (e, t) {
          if (null == e) throw Error("type is required.")
          if ("object" == typeof e) throw Error("type must be of type String.")
          if ("function" != typeof t) throw Error("listener must be of type Function." + e)
          for (var o = 0, r = this.listeners.events_ar.length; o < r; o++)
            if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e && this.listeners.events_ar[o].listener === t) {
              this.listeners.events_ar.splice(o, 1)
              break
            }
        }),
        (s.disposeImage = function () {
          "img" == s.type && (s.screen.src = "")
        }),
        (s.destroy = function () {
          try {
            s.screen.parentNode.removeChild(s.screen)
          } catch (t) {}
          s.hasBeenSetSelectable_bl && ((s.screen.ondragstart = null), (s.screen.onselectstart = null), (s.screen.ontouchstart = null)),
            s.screen.removeAttribute("style"),
            (s.listeners = null),
            (s.listeners = null),
            (s.children_ar = null),
            (s.children_ar = null),
            (s.style = null),
            (s.screen = null),
            (s.transform = null),
            (s.position = null),
            (s.overflow = null),
            (s.display = null),
            (s.visible = null),
            (s.buttonMode = null),
            (s.x = null),
            (s.y = null),
            (s.w = null),
            (s.h = null),
            (s.rect = null),
            (s.alpha = null),
            (s.innerHTML = null),
            (s.isHtml5_bl = null),
            (s.hasT3D = null),
            (s.hasT2D = null),
            (s = null)
        }),
        s.init()
    }
  })(window),
  (function (e) {
    e.FWDU3DCarDO3D = function (e, t, o, r) {
      "use strict"
      var s = this
      if (((s.listeners = { events_ar: [] }), "div" == e || "img" == e || "canvas" == e)) s.type = e
      else throw Error("Type is not valid! " + e)
      ;(s.children_ar = []),
        (s.position = t || "absolute"),
        (s.overflow = o || "hidden"),
        (s.display = r || "block"),
        (s.visible = !0),
        (s.x = 0),
        (s.y = 0),
        (s.z = 0),
        (s.angleX = 0),
        (s.angleY = 0),
        (s.angleZ = 0),
        (s.perspective = 0),
        (s.zIndex = 0),
        (s.scale = 1),
        (s.w = 0),
        (s.h = 0),
        s.rect,
        (s.alpha = 1),
        (s.innerHTML = ""),
        (s.isHtml5_bl = !1),
        (s.hasT3D = FWDU3DCarUtils.hasTransform3d),
        (s.hasT2D = FWDU3DCarUtils.hasTransform2d),
        (s.init = function () {
          s.setScreen()
        }),
        (s.getTransform = function () {
          for (var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"], t; (t = e.shift()); ) if ("undefined" != typeof s.screen.style[t]) return t
          return !1
        }),
        (s.setScreen = function (e) {
          "img" == s.type && e ? ((s.screen = e), s.setMainProperties()) : ((s.screen = document.createElement(s.type)), s.setMainProperties())
        }),
        (s.setMainProperties = function () {
          ;(s.transform = s.getTransform()),
            s.setPosition(s.position),
            s.setDisplay(s.display),
            s.setOverflow(s.overflow),
            (s.screen.style.left = "0px"),
            (s.screen.style.top = "0px"),
            (s.screen.style.margin = "0px"),
            (s.screen.style.padding = "0px"),
            (s.screen.style.maxWidth = "none"),
            (s.screen.style.maxHeight = "none"),
            (s.screen.style.border = "none"),
            (s.screen.style.lineHeight = "1"),
            "img" == e &&
              (s.setWidth(s.screen.width),
              s.setHeight(s.screen.height),
              (s.screen.onmousedown = function () {
                return !1
              }))
        }),
        (s.setBackfaceVisibility = function () {
          ;(s.screen.style.backfaceVisibility = "visible"), (s.screen.style.webkitBackfaceVisibility = "visible"), (s.screen.style.MozBackfaceVisibility = "visible")
        }),
        (s.removeBackfaceVisibility = function () {
          ;(s.screen.style.backfaceVisibility = "hidden"), (s.screen.style.webkitBackfaceVisibility = "hidden"), (s.screen.style.MozBackfaceVisibility = "hidden")
        }),
        (s.setSelectable = function (e) {
          if (!e) {
            try {
              s.screen.style.userSelect = "none"
            } catch (t) {}
            try {
              s.screen.style.MozUserSelect = "none"
            } catch (t) {}
            try {
              s.screen.style.webkitUserSelect = "none"
            } catch (t) {}
            try {
              s.screen.style.khtmlUserSelect = "none"
            } catch (t) {}
            try {
              s.screen.style.oUserSelect = "none"
            } catch (t) {}
            try {
              s.screen.style.msUserSelect = "none"
            } catch (t) {}
            try {
              s.screen.msUserSelect = "none"
            } catch (t) {}
            ;(s.screen.ondragstart = function () {
              return !1
            }),
              (s.screen.onselectstart = function () {
                return !1
              }),
              (s.screen.style.webkitTouchCallout = "none")
          }
        }),
        (s.getScreen = function () {
          return s.screen
        }),
        (s.setVisible = function (e) {
          ;(s.visible = e), (s.screen.style.visibility = !0 == s.visible ? "visible" : "hidden")
        }),
        (s.getVisible = function () {
          return s.visible
        }),
        (s.setResizableSizeAfterParent = function () {
          ;(s.screen.style.width = "100%"), (s.screen.style.height = "100%")
        }),
        (s.style = function () {
          return s.screen.style
        }),
        (s.setOverflow = function (e) {
          ;(s.overflow = e), (s.screen.style.overflow = s.overflow)
        }),
        (s.setPosition = function (e) {
          ;(s.position = e), (s.screen.style.position = s.position)
        }),
        (s.setDisplay = function (e) {
          ;(s.display = e), (s.screen.style.display = s.display)
        }),
        (s.setButtonMode = function (e) {
          ;(s.buttonMode = e), (s.screen.style.cursor = !0 == s.buttonMode ? "pointer" : "default")
        }),
        (s.setBkColor = function (e) {
          s.screen.style.backgroundColor = e
        }),
        (s.setInnerHTML = function (e) {
          ;(s.innerHTML = e), (s.screen.innerHTML = s.innerHTML)
        }),
        (s.getInnerHTML = function () {
          return s.innerHTML
        }),
        (s.getRect = function () {
          return s.screen.getBoundingClientRect()
        }),
        (s.setAlpha = function (e) {
          ;(s.alpha = e), (s.screen.style.opacity = s.alpha)
        }),
        (s.getAlpha = function () {
          return s.alpha
        }),
        (s.getRect = function () {
          return s.screen.getBoundingClientRect()
        }),
        (s.getGlobalX = function () {
          return s.getRect().left
        }),
        (s.getGlobalY = function () {
          return s.getRect().top
        }),
        (s.setX = function (e) {
          ;(s.x = e),
            s.hasT3D
              ? (s.screen.style[s.transform] =
                  "translate3d(" +
                  s.x +
                  "px," +
                  s.y +
                  "px," +
                  s.z +
                  "px) rotateX(" +
                  s.angleX +
                  "deg) rotateY(" +
                  s.angleY +
                  "deg) rotateZ(" +
                  s.angleZ +
                  "deg) scale3d(" +
                  s.scale +
                  ", " +
                  s.scale +
                  ", " +
                  s.scale +
                  ")")
              : s.hasT2D
              ? (s.screen.style[s.transform] = "translate(" + s.x + "px," + s.y + "px) scale(" + s.scale + ", " + s.scale + ")")
              : (s.screen.style.left = s.x + "px")
        }),
        (s.getX = function () {
          return s.x
        }),
        (s.setY = function (e) {
          ;(s.y = e),
            s.hasT3D
              ? (s.screen.style[s.transform] =
                  "translate3d(" +
                  s.x +
                  "px," +
                  s.y +
                  "px," +
                  s.z +
                  "px) rotateX(" +
                  s.angleX +
                  "deg) rotateY(" +
                  s.angleY +
                  "deg) rotateZ(" +
                  s.angleZ +
                  "deg) scale3d(" +
                  s.scale +
                  ", " +
                  s.scale +
                  ", " +
                  s.scale +
                  ")")
              : s.hasT2D
              ? (s.screen.style[s.transform] = "translate(" + s.x + "px," + s.y + "px) scale(" + s.scale + ", " + s.scale + ")")
              : (s.screen.style.top = s.y + "px")
        }),
        (s.getY = function () {
          return s.y
        }),
        (s.setZ = function (e) {
          ;(s.z = e),
            s.hasT3D &&
              (s.screen.style[s.transform] =
                "translate3d(" +
                s.x +
                "px," +
                s.y +
                "px," +
                s.z +
                "px) rotateX(" +
                s.angleX +
                "deg) rotateY(" +
                s.angleY +
                "deg) rotateZ(" +
                s.angleZ +
                "deg) scale3d(" +
                s.scale +
                ", " +
                s.scale +
                ", " +
                s.scale +
                ")")
        }),
        (s.getZ = function () {
          return s.z
        }),
        (s.setAngleX = function (e) {
          ;(s.angleX = e),
            s.hasT3D &&
              (s.screen.style[s.transform] =
                "translate3d(" +
                s.x +
                "px," +
                s.y +
                "px," +
                s.z +
                "px) rotateX(" +
                s.angleX +
                "deg) rotateY(" +
                s.angleY +
                "deg) rotateZ(" +
                s.angleZ +
                "deg) scale3d(" +
                s.scale +
                ", " +
                s.scale +
                ", " +
                s.scale +
                ")")
        }),
        (s.getAngleX = function () {
          return s.angleX
        }),
        (s.setAngleY = function (e) {
          ;(s.angleY = e),
            s.hasT3D &&
              (s.screen.style[s.transform] =
                "translate3d(" +
                s.x +
                "px," +
                s.y +
                "px," +
                s.z +
                "px) rotateX(" +
                s.angleX +
                "deg) rotateY(" +
                s.angleY +
                "deg) rotateZ(" +
                s.angleZ +
                "deg) scale3d(" +
                s.scale +
                ", " +
                s.scale +
                ", " +
                s.scale +
                ")")
        }),
        (s.getAngleY = function () {
          return s.angleY
        }),
        (s.setAngleZ = function (e) {
          ;(s.angleZ = e),
            s.hasT3D &&
              (s.screen.style[s.transform] =
                "translate3d(" +
                s.x +
                "px," +
                s.y +
                "px," +
                s.z +
                "px) rotateX(" +
                s.angleX +
                "deg) rotateY(" +
                s.angleY +
                "deg) rotateZ(" +
                s.angleZ +
                "deg) scale3d(" +
                s.scale +
                ", " +
                s.scale +
                ", " +
                s.scale +
                ")")
        }),
        (s.getAngleZ = function () {
          return s.angleZ
        }),
        (s.setScale2 = function (e) {
          ;(s.scale = e),
            s.hasT3D
              ? (s.screen.style[s.transform] = "translate3d(" + s.x + "px," + s.y + "px," + s.z + "px) scale(" + s.scale + ", " + s.scale + ")")
              : s.hasT2D && (s.screen.style[s.transform] = "translate(" + s.x + "px," + s.y + "px) scale(" + s.scale + ", " + s.scale + ")")
        }),
        (s.setScale3D = function (e) {
          ;(s.scale = e),
            s.hasT3D
              ? (s.screen.style[s.transform] =
                  "translate3d(" +
                  s.x +
                  "px," +
                  s.y +
                  "px," +
                  s.z +
                  "px) rotateX(" +
                  s.angleX +
                  "deg) rotateY(" +
                  s.angleY +
                  "deg) rotateZ(" +
                  s.angleZ +
                  "deg) scale3d(" +
                  s.scale +
                  ", " +
                  s.scale +
                  ", " +
                  s.scale +
                  ")")
              : s.hasT2D && (s.screen.style[s.transform] = "translate(" + s.x + "px," + s.y + "px) scale(" + s.scale + ", " + s.scale + ")")
        }),
        (s.getScale = function () {
          return s.scale
        }),
        (s.setPerspective = function (e) {
          ;(s.perspective = e),
            (s.screen.style.perspective = s.perspective + "px"),
            (s.screen.style.WebkitPerspective = s.perspective + "px"),
            (s.screen.style.MozPerspective = s.perspective + "px"),
            (s.screen.style.msPerspective = s.perspective + "px"),
            (s.screen.style.OPerspective = s.perspective + "px")
        }),
        (s.setPreserve3D = function () {
          ;(s.screen.style.transformStyle = "preserve-3d"),
            (s.screen.style.WebkitTransformStyle = "preserve-3d"),
            (s.screen.style.MozTransformStyle = "preserve-3d"),
            (s.screen.style.msTransformStyle = "preserve-3d"),
            (s.screen.style.OTransformStyle = "preserve-3d")
        }),
        (s.setZIndex = function (e) {
          ;(s.zIndex = e), (s.screen.style.zIndex = s.zIndex)
        }),
        (s.getZIndex = function () {
          return s.zIndex
        }),
        (s.setWidth = function (e) {
          ;(s.w = e), "img" == s.type && (s.screen.width = s.w), (s.screen.style.width = s.w + "px")
        }),
        (s.getWidth = function () {
          return "div" == s.type
            ? 0 == s.screen.offsetWidth
              ? s.w
              : s.screen.offsetWidth
            : "img" == s.type
            ? 0 == s.screen.offsetWidth
              ? 0 == s.screen.width
                ? s._w
                : s.screen.width
              : s.screen.offsetWidth
            : "canvas" == s.type
            ? 0 == s.screen.offsetWidth
              ? s.w
              : s.screen.offsetWidth
            : void 0
        }),
        (s.setHeight = function (e) {
          ;(s.h = e), "img" == s.type && (s.screen.height = s.h), (s.screen.style.height = s.h + "px")
        }),
        (s.getHeight = function () {
          return "div" == s.type
            ? 0 == s.screen.offsetHeight
              ? s.h
              : s.screen.offsetHeight
            : "img" == s.type
            ? 0 == s.screen.offsetHeight
              ? 0 == s.screen.height
                ? s.h
                : s.screen.height
              : s.screen.offsetHeight
            : "canvas" == s.type
            ? 0 == s.screen.offsetHeight
              ? s.h
              : s.screen.offsetHeight
            : void 0
        }),
        (s.getNumChildren = function () {
          return s.children_ar.length
        }),
        (s.setCSSGradient = function (e, t) {
          FWDU3DCarUtils.isIEAndLessThen10
            ? s.setBkColor(e)
            : ((s.screen.style.backgroundImage = "-webkit-linear-gradient(top, " + e + ", " + t + ")"),
              (s.screen.style.backgroundImage = "-moz-linear-gradient(top, " + e + ", " + t + ")"),
              (s.screen.style.backgroundImage = "-ms-linear-gradient(top, " + e + ", " + t + ")"),
              (s.screen.style.backgroundImage = "-o-linear-gradient(top, " + e + ", " + t + ")"))
        }),
        (s.addChild = function (t) {
          s.contains(t)
            ? (s.children_ar.splice(FWDU3DCarUtils.indexOfArray(s.children_ar, t), 1), s.children_ar.push(t), s.screen.appendChild(t.screen))
            : (s.children_ar.push(t), s.screen.appendChild(t.screen))
        }),
        (s.removeChild = function (t) {
          if (s.contains(t)) s.children_ar.splice(FWDU3DCarUtils.indexOfArray(s.children_ar, t), 1), s.screen.removeChild(t.screen)
          else throw Error("##removeChild()## Child doesn't exist, it can't be removed!")
        }),
        (s.contains = function (t) {
          return -1 != FWDU3DCarUtils.indexOfArray(s.children_ar, t)
        }),
        (s.addChildAtZero = function (t) {
          0 == s.numChildren
            ? (s.children_ar.push(t), s.screen.appendChild(t.screen))
            : (s.screen.insertBefore(t.screen, s.children_ar[0].screen), s.contains(t) && s.children_ar.splice(FWDU3DCarUtils.indexOfArray(s.children_ar, t), 1), s.children_ar.unshift(t))
        }),
        (s.getChildAt = function (e) {
          if (0 > e || e > s.numChildren - 1) throw Error("##getChildAt()## Index out of bounds!")
          if (0 == s.numChildren) throw Errror("##getChildAt## Child dose not exist!")
          return s.children_ar[e]
        }),
        (s.removeChildAtZero = function () {
          s.screen.removeChild(s.children_ar[0].screen), s.children_ar.shift()
        }),
        (s.addListener = function (e, t) {
          if (null == e) throw Error("type is required.")
          if ("object" == typeof e) throw Error("type must be of type String.")
          if ("function" != typeof t) throw Error("listener must be of type Function.")
          var o = {}
          ;(o.type = e), (o.listener = t), (o.target = s), s.listeners.events_ar.push(o)
        }),
        (s.dispatchEvent = function (e, t) {
          if (null == e) throw Error("type is required.")
          if ("object" == typeof e) throw Error("type must be of type String.")
          for (var o = 0, r = s.listeners.events_ar.length; o < r; o++)
            if (s.listeners.events_ar[o].target === s && s.listeners.events_ar[o].type === e) {
              if (t) for (var n in t) s.listeners.events_ar[o][n] = t[n]
              s.listeners.events_ar[o].listener.call(s, s.listeners.events_ar[o])
              break
            }
        }),
        (s.removeListener = function (e, t) {
          if (null == e) throw Error("type is required.")
          if ("object" == typeof e) throw Error("type must be of type String.")
          if ("function" != typeof t) throw Error("listener must be of type Function." + e)
          for (var o = 0, r = s.listeners.events_ar.length; o < r; o++)
            if (s.listeners.events_ar[o].target === s && s.listeners.events_ar[o].type === e && s.listeners.events_ar[o].listener === t) {
              s.listeners.events_ar.splice(o, 1)
              break
            }
        }),
        (s.disposeImage = function () {
          "img" == s.type && (s.screen.src = "")
        }),
        (s.destroy = function () {
          try {
            s.screen.parentNode.removeChild(s.screen)
          } catch (t) {}
          ;(s.screen.onselectstart = null),
            (s.screen.ondragstart = null),
            (s.screen.ontouchstart = null),
            (s.screen.ontouchmove = null),
            (s.screen.ontouchend = null),
            (s.screen.onmouseover = null),
            (s.screen.onmouseout = null),
            (s.screen.onmouseup = null),
            (s.screen.onmousedown = null),
            (s.screen.onmousemove = null),
            (s.screen.onclick = null),
            (s.children_ar = null),
            (s.style = null),
            (s.screen = null),
            (s.numChildren = null),
            (s.transform = null),
            (s.position = null),
            (s.overflow = null),
            (s.display = null),
            (s.visible = null),
            (s.buttonMode = null),
            (s.globalX = null),
            (s.globalY = null),
            (s.x = null),
            (s.y = null),
            (s.w = null),
            (s.h = null),
            (s.rect = null),
            (s.alpha = null),
            (s.innerHTML = null),
            (s.isHtml5_bl = null),
            (s.hasT3D = null),
            (s.hasT2D = null),
            (s = null)
        }),
        s.init()
    }
  })(window),
  (function () {
    window.FWDU3DCarEventDispatcher = function () {
      "use strict"
      ;(this.listeners = { events_ar: [] }),
        (this.addListener = function (e, t) {
          if (e == null) throw Error("type is required.")
          if ("object" == typeof e) throw Error("type must be of type String.")
          if ("function" != typeof t) throw Error("listener must be of type Function.")
          var o = {}
          ;(o.type = e), (o.listener = t), (o.target = this), this.listeners.events_ar.push(o)
        }),
        (this.dispatchEvent = function (e, t) {
          if (null != this.listeners) {
            if (null == e) throw Error("type is required.")
            if ("object" == typeof e) throw Error("type must be of type String.")
            for (var o = 0, r = this.listeners.events_ar.length; o < r; o++)
              if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e) {
                if (t) for (var s in t) this.listeners.events_ar[o][s] = t[s]
                this.listeners.events_ar[o].listener.call(this, this.listeners.events_ar[o])
              }
          }
        }),
        (this.removeListener = function (e, t) {
          if (e == null) throw Error("type is required.")
          if ("object" == typeof e) throw Error("type must be of type String.")
          if ("function" != typeof t) throw Error("listener must be of type Function." + e)
          for (var o = 0, r = this.listeners.events_ar.length; o < r; o++)
            if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e && this.listeners.events_ar[o].listener === t) {
              this.listeners.events_ar.splice(o, 1)
              break
            }
        }),
        (this.destroy = function () {
          ;(this.listeners = null), (this.addListener = null), (this.dispatchEvent = null), (this.removeListener = null)
        })
    }
  })(window),
  (function (e) {
    var t = function (e, t) {
      "use strict"
      var o = this
      ;(o.allowToRemove_bl = !0),
        (o.init = function () {
          o.setResizableSizeAfterParent(),
            (o.style().width = "80%"),
            (o.screen.className = "fwdu3dcar-info-window"),
            (o.textHolder_do = new FWDU3DCarDO("div")),
            FWDU3DCarUtils.isIEAndLessThen9 || (o.textHolder_do.style().font = "Arial"),
            (o.textHolder_do.style().wordWrap = "break-word"),
            (o.textHolder_do.style().padding = "10px"),
            (o.textHolder_do.style().paddingLeft = "42px"),
            (o.textHolder_do.style().lineHeight = "18px"),
            o.textHolder_do.setBkColor("#EEEEEE")
          var e = new Image()
          ;(e.src = t), (o.img_do = new FWDU3DCarDO("img")), o.img_do.setScreen(e), o.img_do.setWidth(28), o.img_do.setHeight(28), o.addChild(o.textHolder_do), o.addChild(o.img_do)
        }),
        (o.showText = function (e) {
          o.isShowedOnce_bl || (o.screen.addEventListener("mousedown", o.closeWindow), (o.isShowedOnce_bl = !0)), o.textHolder_do.setInnerHTML(e), clearTimeout(o.show_to), o.show()
        }),
        (o.show = function () {
          ;(o.isShowed = !0),
            o.setVisible(!0),
            setTimeout(function () {
              o.positionAndResize()
            }, 60)
        }),
        (o.positionAndResize = function () {
          o.setHeight(o.textHolder_do.getHeight()), o.img_do.setX(6), o.img_do.setY(parseInt((o.h - o.img_do.h) / 2))
        }),
        (o.closeWindow = function () {
          if (o.allowToRemove_bl) {
            ;(o.isShowed = !1), clearTimeout(o.show_to)
            try {
              e.main_do.removeChild(o)
            } catch (t) {}
          }
        }),
        o.init()
    }
    ;(t.setPrototype = function () {
      t.prototype = new FWDU3DCarDO("div", "relative")
    }),
      (t.prototype = null),
      (e.FWDU3DCarInfo = t)
  })(window),
  (function (t) {
    var o = function (e, r) {
      "use strict"
      var s = this,
        n = o.prototype
      ;(s.categories_ar = r.categories_ar),
        (s.buttons_ar = []),
        (s.grabC = "url(" + e._d.grabIconPath_str + "), default"),
        (s.handC = "url(" + e._d.handIconPath_str + "), default"),
        (s.arrowNImg = r.arrowNImg),
        (s.arrowN_str = r.arrowN_str),
        (s.selectorLineColor = r.selectorLineColor),
        (s.selectorLabel_str = r.selectorLabel),
        (s.selectorBkColorN_str1 = r.selectorBackgroundColor),
        (s.selectorTextColorN_str = r.selectorTextNormalColor),
        (s.selectorTextColorS_str = r.selectorTextSelectedColor),
        (s.itemBkColorN_str1 = r.buttonBackgroundColor),
        (s.itemTextColorN_str = r.buttonTextNormalColor),
        (s.itemTextColorS_str = r.buttonTextSelectedColor),
        (s.position_str = r.position),
        s.finalY,
        (s.tt = s.categories_ar.length),
        5 < s.tt && (s.hasScroll = !0),
        (s.curId = r.startAtCategory),
        (s.horizontalMargins = r.comboBoxHorizontalMargins),
        (s.verticalMargins = r.comboBoxVerticalMargins),
        (s.buttonsHolderWidth = 0),
        (s.buttonsHolderHeight = 0),
        (s.totalWidth = 0),
        (s.buttonH = 32),
        s.selectorH,
        (s.totalButtonsHeight = 0),
        (s.sapaceBetweenButtons = 0),
        (s.curId = e.startAtCategory),
        s.hideMenuTimeOutId_to,
        s.getMaxWidthResizeAndPositionId_to,
        (s.friction = 0.9),
        (s.isShowed_bl = !1),
        (s.isOpened_bl = !1),
        (s.hasPointerEvent_bl = FWDU3DCarUtils.hasPointerEvent),
        (s.isMobile_bl = FWDU3DCarUtils.isMobile),
        (s.init = function () {
          s.setVisible(!1),
            s.setZ(9999999999),
            s.setupMainContainers(),
            (s.getMaxWidthResizeAndPositionId_to = setTimeout(function () {
              s.getMaxWidthResizeAndPosition(), s.setButtonsState(), s.position()
            }, 200)),
            (s.screen.className = "fwdu3dcar-menu")
        }),
        (s.setupMainContainers = function () {
          var t
          ;(s.mainHolder_do = new FWDU3DCarDO("div")),
            s.mainHolder_do.setOverflow("visible"),
            s.addChild(s.mainHolder_do),
            (s.mainButtonsHolder_do = new FWDU3DCarDO("div")),
            s.mainButtonsHolder_do.setBkColor(s.itemBkColorN_str1),
            s.mainHolder_do.addChild(s.mainButtonsHolder_do),
            (s.buttonsHolder_do = new FWDU3DCarDO("div")),
            s.buttonsHolder_do.setBkColor(s.itemBkColorN_str1),
            s.mainButtonsHolder_do.addChild(s.buttonsHolder_do)
          var o = s.categories_ar[s.curId],
            r
          e._d.useVectorIcons && (r = '<span class="fwdu3dcar-icon fwdu3dcar-icon-menu-icon"></span>'),
            FWDU3DCarMenuSelector.setPrototype(),
            (s.selector_do = new FWDU3DCarMenuSelector(
              s.arrowNImg,
              s.arrowN_str,
              s.selectorLineColor,
              o,
              s.selectorBkColorN_str1,
              s.selectorTextColorN_str,
              s.selectorTextColorS_str,
              r,
              e._d.isSkinWhite
            )),
            s.mainHolder_do.addChild(s.selector_do),
            s.selector_do.setNormalState(!1),
            s.selector_do.addListener(FWDU3DCarMenuSelector.CLICK, s.openMenuHandler)
          for (var n = 0; n < s.tt; n++)
            FWDU3DCarMenuButton.setPrototype(),
              (t = new FWDU3DCarMenuButton(s.categories_ar[n], s.itemBkColorN_str1, s.itemTextColorN_str, s.itemTextColorS_str, n, s.buttonH)),
              (s.buttons_ar[n] = t),
              t.addListener(FWDU3DCarMenuButton.CLICK, s.buttonOnMouseDownHandler),
              s.buttonsHolder_do.addChild(t)
          0 != s.borderRadius && ((t.bk_sdo.style().borderBottomLeftRadius = s.borderRadius + "px"), (t.bk_sdo.style().borderBottomRightRadius = s.borderRadius + "px")),
            (s.grabbed_do = new FWDU3DCarDO("div")),
            (s.grabbed_do.style().width = "100%"),
            (s.grabbed_do.style().cursor = s.grabC),
            s.mainButtonsHolder_do.addChild(s.grabbed_do)
        }),
        (s.buttonOnMouseDownHandler = function (r) {
          ;(s.curId = r.target.id),
            s.setButtonsState(),
            clearTimeout(s.hideMenuTimeOutId_to),
            s.hide(!0),
            s.selector_do.enable(),
            s.setValue(s.curId),
            s.isMobile_bl
              ? s.hasPointerEvent_bl
                ? t.removeEventListener("MSPointerDown", s.checkOpenedMenu)
                : t.removeEventListener("touchstart", s.checkOpenedMenu)
              : t.removeEventListener("mousemove", s.checkOpenedMenu),
            s.dispatchEvent(o.BUTTON_PRESSED, { id: s.curId })
        }),
        (s.openMenuHandler = function () {
          s.isShowed_bl || (s.selector_do.disable(), s.show(!0), s.startToCheckOpenedMenu(), s.dispatchEvent(o.OPEN))
        }),
        (s.setValue = function (e) {
          ;(s.curId = e), s.selector_do.setText(s.categories_ar[s.curId]), s.setButtonsState()
        }),
        (s.startToCheckOpenedMenu = function () {
          s.isMobile_bl
            ? s.hasPointerEvent_bl
              ? t.addEventListener("MSPointerDown", s.checkOpenedMenu)
              : t.addEventListener("touchstart", s.checkOpenedMenu)
            : (t.addEventListener("mousemove", s.checkOpenedMenu), t.addEventListener("mousedown", s.checkOpenedMenuOnMD))
        }),
        (s.checkOpenedMenuOnMD = function (t) {
          s.checkOpenedMenu(t, !0)
        }),
        (s.checkOpenedMenu = function (o, e) {
          if (!s.isDragging) {
            var r = FWDU3DCarUtils.getViewportMouseCoordinates(o)
            FWDU3DCarUtils.hitTest(s.screen, r.screenX, r.screenY)
              ? clearTimeout(s.hideMenuTimeOutId_to)
              : (s.isMobile_bl || e
                  ? (s.hide(!0), s.selector_do.enable(), t.removeEventListener("mousedown", s.checkOpenedMenuOnMD))
                  : (clearTimeout(s.hideMenuTimeOutId_to),
                    (s.hideMenuTimeOutId_to = setTimeout(function () {
                      s.hide(!0), s.selector_do.enable()
                    }, 1e3))),
                s.isMobile_bl
                  ? s.hasPointerEvent_bl
                    ? t.removeEventListener("MSPointerDown", s.checkOpenedMenu)
                    : t.removeEventListener("touchstart", s.checkOpenedMenu)
                  : t.removeEventListener("mousemove", s.checkOpenedMenu))
          }
        }),
        (s.getMaxWidthResizeAndPosition = function () {
          var e
          ;(s.selectorH = s.selector_do.getMaxHeight()), (s.totalWidth = 0), (s.totalButtonsHeight = 0), (s.totalButtonsScroll = 0), (s.totalWidth = s.selector_do.getMaxWidth())
          for (var t = 0; t < s.tt; t++) (e = s.buttons_ar[t]), e.getMaxWidth() > s.totalWidth && (s.totalWidth = e.getMaxWidth())
          ;(s.buttons_ar[0].text_sdo.screen.className = "fwdu3dcar-menu-button first-button"), (s.buttons_ar[s.tt - 1].text_sdo.screen.className = "fwdu3dcar-menu-button last-button")
          for (var t = 0; t < s.tt; t++)
            (e = s.buttons_ar[t]),
              e.setWidth(s.totalWidth),
              e.setHeight(e.getMaxHeight()),
              s.prevButton ? e.setY(s.prevButton.y + s.prevButton.h) : e.setY(0),
              (e.totalWidth = s.totalWidth),
              (s.prevButton = e),
              s.hasScroll
                ? 5 > t && (4 > t ? (s.totalButtonsHeight += e.h) : ((e = s.buttons_ar[s.tt - 1]), e.setHeight(e.getMaxHeight()), (s.totalButtonsHeight += e.h)))
                : (s.totalButtonsHeight += e.h),
              s.hasScroll && s.activateScroll(),
              s.hasScroll ? (t == s.tt - 1 ? ((e = s.buttons_ar[1]), (s.totalButtonsScroll += e.h)) : (s.totalButtonsScroll += e.h)) : (s.totalButtonsScroll += e.h)
          s.setWidth(s.totalWidth),
            s.mainButtonsHolder_do.setWidth(s.totalWidth),
            (s.selector_do.totalWidth = s.totalWidth),
            s.selector_do.setWidth(s.totalWidth),
            s.selector_do.setHeight(s.selectorH),
            s.buttonsHolder_do.setWidth(s.totalWidth),
            s.buttonsHolder_do.setHeight(s.totalButtonsScroll),
            s.hide(!1, !0)
        }),
        (s.activateScroll = function () {
          s.buttonsHolder_do.screen.addEventListener("mousedown", s.onMaxScrollStart),
            t.addEventListener("mouseup", s.onMaxScrollEnd),
            s.buttonsHolder_do.screen.addEventListener("touchstart", s.onMaxScrollStart),
            t.addEventListener("touchend", s.onMaxScrollEnd)
        }),
        (s.removeMaxItemScroll = function () {
          s.buttonsHolder_do.screen.removeEventListener("mousedown", s.onMaxScrollStart),
            t.removeEventListener("mouseup", s.onMaxScrollEnd),
            t.removeEventListener("mousemove", s.onMaxScrollMove),
            s.buttonsHolder_do.screen.removeEventListener("touchstart", s.onMaxScrollStart),
            t.removeEventListener("touchend", s.onMaxScrollEnd),
            t.removeEventListener("touchmove", s.onMaxScrollMove),
            (s.isDragging = !1),
            cancelAnimationFrame(s.updateMax_af)
        }),
        (s.onMaxScrollStart = function (o) {
          if (!(o.button && 2 == o.button)) {
            s.setButtonsState(!0)
            var e = FWDU3DCarUtils.getViewportMouseCoordinates(o)
            t.addEventListener("mousemove", s.onMaxScrollMove),
              t.addEventListener("touchmove", s.onMaxScrollMove, { passive: !1 }),
              (s.isDragging = !0),
              (s.maxItemY = s.lastFinalY = s.buttonsHolder_do.y),
              (s.lastPresedY = e.screenY),
              s.startToUpdateDrag()
          }
        }),
        (s.onMaxScrollEnd = function () {
          t.removeEventListener("mousemove", s.onMaxScrollMove),
            t.removeEventListener("touchmove", s.onMaxScrollMove),
            (s.grabId_to = setTimeout(function () {
              ;(s.grabbed_do.style().height = "0%"), (s.isGrabbed = !1)
            }, 50)),
            s.setButtonsState(),
            (s.isDragging = !1)
        }),
        (s.onMaxScrollMove = function (t) {
          t.preventDefault && t.preventDefault()
          var e = FWDU3DCarUtils.getViewportMouseCoordinates(t),
            o = e.screenY - s.lastPresedY
          ;(s.maxItemY += o),
            (s.maxItemY = Math.round(s.maxItemY)),
            (s.lastPresedY = e.screenY),
            s.buttonsHolder_do.setY(s.maxItemY),
            1 <= Math.abs(o) && ((s.grabbed_do.style().height = "100%"), (s.isGrabbed = !0))
        }),
        (s.stopToUpdateDrag = function () {
          cancelAnimationFrame(s.updateMax_af)
        }),
        (s.startToUpdateDrag = function () {
          s.stopToUpdateDrag(), s.updateMax()
        }),
        (s.updateMax = function () {
          ;(s.updateMax_af = requestAnimationFrame(s.updateMax)),
            (s.stageH = s.totalButtonsHeight),
            s.isDragging
              ? ((s.vy = s.maxItemY - s.lastFinalY), (s.lastFinalY = s.maxItemY))
              : ((s.vy *= s.friction),
                (s.maxItemY += s.vy),
                s.stageH <= s.buttonsHolder_do.h
                  ? 0 <= s.maxItemY
                    ? ((s.vy2 = 0.3 * (0 - s.maxItemY)), (s.vy *= s.friction), (s.maxItemY += s.vy2))
                    : s.maxItemY <= s.stageH - s.buttonsHolder_do.h && ((s.vy2 = 0.3 * (s.stageH - s.buttonsHolder_do.h - s.maxItemY)), (s.vy *= s.friction), (s.maxItemY += s.vy2))
                  : ((s.vy2 = 0.3 * ((s.stageH - s.buttonsHolder_do.h) / 2 - s.maxItemY)), (s.vy *= s.friction), (s.maxItemY += s.vy2)),
                (s.maxItemY = parseFloat(s.maxItemY.toFixed(2))),
                s.prevMaxItemY == s.maxItemY && (s.stopToUpdateDrag(), (s.maxItemY = Math.round(s.maxItemY))),
                s.buttonsHolder_do.setY(s.maxItemY),
                (s.prevMaxItemY = s.maxItemY))
        }),
        (s.setButtonsState = function (e) {
          for (var t = 0, o; t < s.tt; t++)
            (o = s.buttons_ar[t]),
              t == s.curId ? ((o.isDisabled_bl = !0), o.setButtonMode(!1), o.setSelectedState(!0)) : ((o.isDisabled_bl = !1), o.setButtonMode(!0), o.setNormalState(!0)),
              s.hasScroll && (e ? (o.style().cursor = s.grabC) : (o.style().cursor = s.handC))
        }),
        (s.position = function () {
          "topleft" == s.position_str
            ? ((s.finalX = Math.max((e.stageWidth - e.originalWidth) / 2 + s.horizontalMargins, s.horizontalMargins)), (s.finalY = s.verticalMargins + 1))
            : "topright" == s.position_str &&
              ((s.finalX = Math.min((e.originalWidth - e.stageWidth) / 2 + e.stageWidth - s.totalWidth - s.horizontalMargins, e.stageWidth - s.totalWidth - s.horizontalMargins)),
              (s.finalY = s.verticalMargins + 1)),
            s.setX(Math.floor(s.finalX)),
            s.setY(Math.floor(s.finalY)),
            e.thumbsManagerDO && e.thumbsManagerDO.isEvpFS && s.setY(-500)
        }),
        (s.showFirstTime = function () {
          s.showFirstTimeDone ||
            ((s.showFirstTimeDone = !0),
            s.setVisible(!0),
            s.setAlpha(0),
            s.mainButtonsHolder_do.setY(s.selectorH),
            ("topleft" == s.position_str || "topright" == s.position_str) && s.setY(-(s.finalY + s.selectorH / 2)),
            FWDAnimation.to(s, 0.8, { y: s.finalY, alpha: 1, ease: Expo.easeInOut }))
        }),
        (s.hide = function (e, t) {
          ;(s.isShowed_bl || t) &&
            ((s.isShowed_bl = !1),
            e
              ? (FWDAnimation.to(s.mainButtonsHolder_do, 0.6, { h: 0, ease: Expo.easeInOut }), FWDAnimation.to(s, 0.6, { h: s.selectorH, ease: Expo.easeInOut }))
              : (FWDAnimation.killTweensOf(s),
                FWDAnimation.killTweensOf(s.buttonsHolder_do),
                FWDAnimation.killTweensOf(s.mainButtonsHolder_do),
                s.buttonsHolder_do.setY(s.selectorH - s.totalButtonsHeight),
                s.mainButtonsHolder_do.setHeight(0),
                s.setHeight(s.selectorH)))
        }),
        (s.show = function (e, t) {
          ;(s.isShowed_bl && !t) ||
            ((s.isShowed_bl = !0),
            clearTimeout(s.hideMenuTimeOutId_to),
            e
              ? (!FWDAnimation.isTweening(s) && s.buttonsHolder_do.setY(-s.selectorH),
                FWDAnimation.to(s.buttonsHolder_do, 0.6, { y: 0, ease: Expo.easeInOut }),
                FWDAnimation.to(s.mainButtonsHolder_do, 0.6, { h: s.totalButtonsHeight + s.selectorH, ease: Expo.easeInOut }),
                FWDAnimation.to(s, 0.6, { h: s.totalButtonsHeight + s.selectorH, ease: Expo.easeInOut }))
              : (FWDAnimation.killTweensOf(s),
                FWDAnimation.killTweensOf(s.mainButtonsHolder_do),
                FWDAnimation.killTweensOf(s.buttonsHolder_do),
                s.mainButtonsHolder_do.setHeight(s.selectorH + s._s.selectorH),
                s.buttonsHolder_do.setY(0),
                s.setHeight(s.selectorH)))
        }),
        s.init()
    }
    ;(o.setPrototype = function () {
      o.prototype = new FWDU3DCarDO3D("div")
    }),
      (o.OPEN = "open"),
      (o.HIDE_COMPLETE = "infoWindowHideComplete"),
      (o.BUTTON_PRESSED = "buttonPressed"),
      (o.prototype = null),
      (t.FWDU3DCarMenu = o)
  })(window),
  (function () {
    var t = function (e, o, r, s, n) {
      "use strict"
      var i = this,
        a = t.prototype
      ;(i.label1_str = e),
        (i.backgroundNormalColor_str1 = o),
        (i.textNormalColor_str = r),
        (i.textSelectedColor_str = s),
        (i.totalWidth = 400),
        (i.id = n),
        (i.hasPointerEvent_bl = FWDU3DCarUtils.hasPointerEvent),
        (i.isMobile_bl = FWDU3DCarUtils.isMobile),
        (i.isDisabled_bl = !1),
        (i.init = function () {
          i.setBackfaceVisibility(), i.setupMainContainers()
        }),
        (i.setupMainContainers = function () {
          ;(i.bk_sdo = new FWDU3DCarDO("div")),
            (i.bk_sdo.style().width = "100%"),
            (i.bk_sdo.style().height = "100%"),
            i.bk_sdo.setBkColor(i.backgroundNormalColor_str1),
            i.addChild(i.bk_sdo),
            (i.text_sdo = new FWDU3DCarDO("div")),
            (i.text_sdo.screen.className = "fwdu3dcar-menu-button"),
            (i.text_sdo.style().whiteSpace = "nowrap"),
            i.text_sdo.setBackfaceVisibility(),
            i.text_sdo.setDisplay("inline-block"),
            (i.text_sdo.style().boxSizing = "border-box"),
            (i.text_sdo.style().color = i.normalColor_str),
            i.text_sdo.setInnerHTML(i.label1_str),
            i.addChild(i.text_sdo),
            (i.dumy_sdo = new FWDU3DCarDO("div")),
            FWDU3DCarUtils.isIE && (i.dumy_sdo.setBkColor("#FF0000"), i.dumy_sdo.setAlpha(0))
          ;(i.dumy_sdo.style().width = "100%"),
            (i.dumy_sdo.style().height = "100%"),
            i.addChild(i.dumy_sdo),
            i.isMobile_bl
              ? i.hasPointerEvent_bl
                ? (i.screen.addEventListener("MSPointerOver", i.onMouseOver),
                  i.screen.addEventListener("MSPointerOut", i.onMouseOut),
                  i.screen.addEventListener("MSPointerDown", i.onMouseDown),
                  i.screen.addEventListener("MSPointerUp", i.onClick))
                : i.screen.addEventListener("click", i.onClick)
              : i.screen.addEventListener && (i.screen.addEventListener("mouseover", i.onMouseOver), i.screen.addEventListener("mouseout", i.onMouseOut), i.screen.addEventListener("click", i.onClick))
        }),
        (i.onMouseOver = function (o) {
          i.isDisabled_bl || ((!o.pointerType || o.pointerType == o.MSPOINTER_TYPE_MOUSE) && (FWDAnimation.killTweensOf(i.text_sdo), i.setSelectedState(!0), i.dispatchEvent(t.MOUSE_OVER)))
        }),
        (i.onMouseOut = function (o) {
          i.isDisabled_bl || ((!o.pointerType || o.pointerType == o.MSPOINTER_TYPE_MOUSE) && (FWDAnimation.killTweensOf(i.text_sdo), i.setNormalState(!0), i.dispatchEvent(t.MOUSE_OUT)))
        }),
        (i.onClick = function (o) {
          i.isDisabled_bl || (o.preventDefault && o.preventDefault(), i.dispatchEvent(t.CLICK, { e: o }))
        }),
        (i.setSelectedState = function (e) {
          e
            ? FWDAnimation.to(i.text_sdo.screen, 0.6, { css: { color: i.textSelectedColor_str }, ease: Quart.easeOut })
            : (i.bk_sdo.setCSSGradient(i.backgroundSelectedColor_str, i.backgroundNormalColor_str), (i.text_sdo.style().color = i.textSelectedColor_str))
        }),
        (i.setNormalState = function (e) {
          e
            ? FWDAnimation.to(i.text_sdo.screen, 0.6, { css: { color: i.textNormalColor_str }, ease: Quart.easeOut })
            : (i.bk_sdo.setCSSGradient(i.backgroundNormalColor_str, i.backgroundSelectedColor_str), (i.text_sdo.style().color = i.textNormalColor_str))
        }),
        (i.getMaxWidth = function () {
          return i.text_sdo.getWidth()
        }),
        (i.getMaxHeight = function () {
          return i.text_sdo.getHeight()
        }),
        i.init()
    }
    ;(t.setPrototype = function () {
      t.prototype = new FWDU3DCarDO("div")
    }),
      (t.FIRST_BUTTON_CLICK = "onFirstClick"),
      (t.SECOND_BUTTON_CLICK = "secondButtonOnClick"),
      (t.MOUSE_OVER = "onMouseOver"),
      (t.MOUSE_OUT = "onMouseOut"),
      (t.MOUSE_DOWN = "onMouseDown"),
      (t.CLICK = "onClick"),
      (t.prototype = null),
      (window.FWDU3DCarMenuButton = t)
  })(window),
  (function () {
    var t = function (e, o, r, s, n, i, a, l, d) {
      "use strict"
      var u = this,
        h = t.prototype
      ;(u.arrowN_str = o),
        (u.selectorLineColor = r),
        (u.label1_str = s),
        (u.backgroundNormalColor_str1 = n),
        (u.textNormalColor_str = i),
        (u.textSelectedColor_str = a),
        (u.totalWidth = 400),
        l || ((u.arrowWidth = e.width), (u.arrowHeight = e.height)),
        (u.hasPointerEvent_bl = FWDU3DCarUtils.hasPointerEvent),
        (u.isMobile_bl = FWDU3DCarUtils.isMobile),
        (u.isDisabled_bl = !1),
        (u.init = function () {
          u.setBackfaceVisibility(), u.setButtonMode(!0), u.setupMainContainers(), u.setWidth(u.totalWidth)
        }),
        (u.setupMainContainers = function () {
          ;(u.bk_sdo = new FWDU3DCarDO("div")),
            u.bk_sdo.setBkColor(u.backgroundNormalColor_str1),
            (u.bk_sdo.style().width = "100%"),
            (u.bk_sdo.style().height = "100%"),
            u.addChild(u.bk_sdo),
            (u.text_sdo = new FWDU3DCarDO("div")),
            (u.text_sdo.screen.className = "fwdu3dcar-menu-selector"),
            (u.text_sdo.style().whiteSpace = "nowrap"),
            u.text_sdo.setBackfaceVisibility(),
            u.text_sdo.setOverflow("visible"),
            u.text_sdo.setDisplay("inline-block"),
            (u.text_sdo.style().color = u.normalColor_str),
            u.setText(u.label1_str),
            u.addChild(u.text_sdo),
            (u.arrowN_sdo = new FWDU3DCarDO("div")),
            u.addChild(u.arrowN_sdo),
            u.arrowN_sdo.setAlpha(0.5),
            l
              ? ((u.arrowN_sdo.screen.className = "fwdu3dcar-menu-icon vector"),
                d && (u.arrowN_sdo.screen.className = "fwdu3dcar-menu-icon white vector"),
                u.arrowN_sdo.setInnerHTML(l),
                setTimeout(function () {
                  ;(u.arrowWidth = parseInt(getComputedStyle(u.arrowN_sdo.screen).getPropertyValue("height"))),
                    (u.arrowHeight = parseInt(getComputedStyle(u.arrowN_sdo.screen).getPropertyValue("width")))
                }, 5))
              : ((u.arrowN_sdo.screen.className = "fwdu3dcar-menu-icon"),
                d && (u.arrowN_sdo.screen.className = "fwdu3dcar-menu-icon white"),
                (u.arrowN_sdo.screen.style.backgroundImage = "url(" + u.arrowN_str + ")")),
            setTimeout(function () {
              u.arrowN_sdo.setWidth(u.arrowWidth), u.arrowN_sdo.setHeight(u.arrowHeight), u.arrowN_sdo.setY(Math.round((u.h - u.arrowN_sdo.h) / 2) - 1)
            }, 350),
            (u.line_do = new FWDU3DCarDO("div")),
            (u.line_do.screen.className = "fwdu3dcar-menu-line"),
            (u.line_do.style().background = u.selectorLineColor),
            u.line_do.setAlpha(0),
            u.addChild(u.line_do),
            (u.dumy_sdo = new FWDU3DCarDO("div")),
            (u.dumy_sdo.style().width = "100%"),
            (u.dumy_sdo.style().height = "100%"),
            FWDU3DCarUtils.isIE && (u.dumy_sdo.setBkColor("#FF0000"), u.dumy_sdo.setAlpha(0))
          u.addChild(u.dumy_sdo), u.screen.addEventListener("mouseover", u.onMouseOver), u.screen.addEventListener("mouseout", u.onMouseOut), u.screen.addEventListener("click", u.onClick)
        }),
        (u.onMouseOver = function (o) {
          u.isDisabled_bl || ((!o.pointerType || o.pointerType == o.MSPOINTER_TYPE_MOUSE) && (FWDAnimation.killTweensOf(u.text_sdo), u.setSelectedState(!0), u.dispatchEvent(t.MOUSE_OVER)))
        }),
        (u.onMouseOut = function (o) {
          u.isDisabled_bl || ((!o.pointerType || o.pointerType == o.MSPOINTER_TYPE_MOUSE) && (FWDAnimation.killTweensOf(u.text_sdo), u.setNormalState(!0), u.dispatchEvent(t.MOUSE_OUT)))
        }),
        (u.onClick = function () {
          u.isDisabled_bl || u.dispatchEvent(t.CLICK)
        }),
        (u.setSelectedState = function (e) {
          e
            ? (FWDAnimation.to(u.text_sdo.screen, 0.6, { css: { color: u.textSelectedColor_str }, ease: Quart.easeOut }), FWDAnimation.to(u.arrowN_sdo, 0.6, { alpha: 1, ease: Quart.easeOut }))
            : (u.bk_sdo.setCSSGradient(u.backgroundSelectedColor_str, u.backgroundNormalColor_str), (u.text_sdo.style().color = u.textSelectedColor_str), (u.arrowN_sdo.alpha = 1))
        }),
        (u.setNormalState = function (e) {
          e
            ? (FWDAnimation.to(u.text_sdo.screen, 0.6, { css: { color: u.textNormalColor_str }, ease: Quart.easeOut }), FWDAnimation.to(u.arrowN_sdo, 0.6, { alpha: 0.4, ease: Quart.easeOut }))
            : (u.bk_sdo.setCSSGradient(u.backgroundNormalColor_str, u.backgroundSelectedColor_str), (u.text_sdo.style().color = u.textNormalColor_str), (u.arrowN_sdo.alpha = 0.4))
        }),
        (u.getMaxWidth = function () {
          return u.text_sdo.getWidth()
        }),
        (u.getMaxHeight = function () {
          return u.text_sdo.getHeight()
        }),
        (u.disable = function () {
          ;(u.isDisabled_bl = !0), u.setSelectedState(!0), u.setButtonMode(!1), FWDAnimation.to(u.line_do, 0.6, { alpha: 1, ease: Quart.easeOut })
        }),
        (u.enable = function () {
          ;(u.isDisabled_bl = !1), u.setNormalState(!0), u.setButtonMode(!0), FWDAnimation.to(u.line_do, 0.6, { alpha: 0, ease: Quart.easeOut })
        }),
        (u.setText = function (e) {
          u.text_sdo.setInnerHTML(e)
        }),
        u.init()
    }
    ;(t.setPrototype = function () {
      t.prototype = new FWDU3DCarDO("div")
    }),
      (t.FIRST_BUTTON_CLICK = "onFirstClick"),
      (t.SECOND_BUTTON_CLICK = "secondButtonOnClick"),
      (t.MOUSE_OVER = "onMouseOver"),
      (t.MOUSE_OUT = "onMouseOut"),
      (t.MOUSE_DOWN = "onMouseDown"),
      (t.CLICK = "onClick"),
      (t.prototype = null),
      (window.FWDU3DCarMenuSelector = t)
  })(window),
  (function (e) {
    var t = function (e, o, r, s, n, i, a) {
      "use strict"
      var l = this,
        d = t.prototype
      l.main_do,
        (l.preloaderPostion = o),
        (l.backgroundColor = s),
        (l.fillColor = n),
        (l.radius = r),
        (l.strokeSize = i),
        (l.animDur = a || 300),
        (l.strtAngle = 270),
        (l.isShowed_bl = !0),
        (l.angle = { n: 0 }),
        (l.init = function () {
          ;(l.mm_do = new FWDU3DCarDO("div")),
            l.mm_do.setOverflow("visible"),
            (l.main_do = new FWDU3DCarDO("div")),
            l.main_do.setOverflow("visible"),
            l.main_do.setWidth(2 * l.radius + l.strokeSize),
            l.main_do.setHeight(2 * l.radius + l.strokeSize),
            l.setOverflow("visible"),
            l.setWidth(2 * l.radius + l.strokeSize),
            l.setHeight(2 * l.radius + l.strokeSize),
            l.mm_do.setWidth(l.w),
            l.mm_do.setHeight(l.h),
            (l.bkCanvas = new FWDU3DCarDO("canvas")),
            (l.bkCanvasContext = l.bkCanvas.screen.getContext("2d")),
            (l.fillCircleCanvas = new FWDU3DCarDO("canvas")),
            (l.fillCtx = l.fillCircleCanvas.screen.getContext("2d")),
            (l.main_do.screen.style.transformOrigin = "50% 50%"),
            l.main_do.addChild(l.bkCanvas),
            l.main_do.addChild(l.fillCircleCanvas),
            l.mm_do.addChild(l.main_do),
            l.addChild(l.mm_do),
            l.drawBackground(),
            l.drawFill(),
            l.hide()
        }),
        (l.setFWidth = function (e, t) {
          l.main_do.setX(Math.round(e - l.w) / 2), l.main_do.setY(Math.round(t - l.h) / 2), l.setWidth(e), l.setHeight(t)
        }),
        (l.positionAndResize = function () {
          "bottomleft" == l.preloaderPostion
            ? (l.setX(e.offsetPreloader), l.setY(e.sH - l.h - e.offsetPreloader))
            : "bottomright" == l.preloaderPostion
            ? (l.setX(e.sW - l.w - e.offsetPreloader), l.setY(e.sH - l.h - e.offsetPreloader))
            : "topright" == l.preloaderPostion
            ? (l.setX(e.sW - l.w - e.offsetPreloader), l.setY(e.offsetPreloader))
            : "topleft" == l.preloaderPostion
            ? (l.setX(e.offsetPreloader), l.setY(e.offsetPreloader))
            : "center" == l.preloaderPostion && (l.setX(Math.round(e.sW - l.w) / 2), l.setY(Math.round(Math.min(e.sH, e.viewportSize.h) - l.h) / 2))
        }),
        (l.drawBackground = function () {
          ;(l.bkCanvas.screen.width = 2 * l.radius + 2 * l.strokeSize),
            (l.bkCanvas.screen.height = 2 * l.radius + 2 * l.strokeSize),
            (l.bkCanvasContext.lineWidth = l.thicknessSize),
            l.bkCanvasContext.translate(l.strokeSize / 2, l.strokeSize / 2),
            (l.bkCanvasContext.shadowColor = "#333333"),
            (l.bkCanvasContext.shadowBlur = 1),
            (l.bkCanvasContext.lineWidth = l.strokeSize),
            (l.bkCanvasContext.strokeStyle = l.backgroundColor),
            l.bkCanvasContext.beginPath(),
            l.bkCanvasContext.arc(l.radius, l.radius, l.radius, 0 * (Math.PI / 180), 360 * (Math.PI / 180), !1),
            l.bkCanvasContext.stroke(),
            l.bkCanvasContext.closePath()
        }),
        (l.drawFill = function (e) {
          e && (l.angle.n = Math.round(360 * e)),
            (l.fillCircleCanvas.screen.width = 2 * l.radius + 2 * l.strokeSize),
            (l.fillCircleCanvas.screen.height = 2 * l.radius + 2 * l.strokeSize),
            (l.fillCtx.lineWidth = l.thicknessSize),
            l.fillCtx.translate(l.strokeSize / 2, l.strokeSize / 2),
            (l.fillCtx.lineWidth = l.strokeSize),
            (l.fillCtx.strokeStyle = l.fillColor),
            l.fillCtx.beginPath(),
            l.fillCtx.arc(l.radius, l.radius, l.radius, (Math.PI / 180) * l.strtAngle, (Math.PI / 180) * (l.strtAngle + l.angle.n), !1),
            l.fillCtx.stroke(),
            l.fillCtx.closePath()
        }),
        (l.startSlideshow = function () {
          null == l ||
            self.isSlideShowRun ||
            ((self.isSlideShowRun = !0), FWDAnimation.killTweensOf(l.angle), FWDAnimation.to(l.angle, l.animDur, { n: 360, onUpdate: l.drawFill, onComplete: l.stopSlideshow }))
        }),
        (l.stopSlideshow = function (e) {
          ;(self.isSlideShowRun || e) && ((self.isSlideShowRun = !1), FWDAnimation.killTweensOf(l.angle), FWDAnimation.to(l.angle, 0.8, { n: 0, onUpdate: l.drawFill, ease: Expo.easeInOut }))
        }),
        (l.resetSlideshow = function () {
          FWDAnimation.killTweensOf(l.angle), (l.angle.n = 0), l.drawFill()
        }),
        (l.startPreloader = function () {
          l.stopPreloader(),
            (l.angle = { n: 0 }),
            FWDAnimation.to(l.angle, l.animDur, { n: 360, onUpdate: l.drawFill, repeat: 100, yoyo: !0, ease: Expo.easeInOut }),
            FWDAnimation.to(l.main_do.screen, l.animDur, { rotation: 360, repeat: 100 })
        }),
        (l.stopPreloader = function () {
          FWDAnimation.killTweensOf(l.angle), FWDAnimation.killTweensOf(l.main_do.screen), FWDAnimation.to(l.main_do.screen, 1e-5, { rotation: 0 })
        }),
        (l.show = function () {
          l.isShowed_bl || (l.setVisible(!0), FWDAnimation.killTweensOf(l.mm_do), FWDAnimation.to(l.mm_do, 1, { alpha: 1, delay: 0.2 }), l.stopPreloader(), l.startPreloader(), (l.isShowed_bl = !0))
        }),
        (l.hide = function (e) {
          l.isShowed_bl &&
            (FWDAnimation.killTweensOf(l.mm_do), e ? FWDAnimation.to(l.mm_do, 0.2, { alpha: 0, onComplete: l.onHideComplete }) : (l.setVisible(!1), l.mm_do.setAlpha(0)), (l.isShowed_bl = !1))
        }),
        (l.show2 = function () {
          l.isShowed_bl || ((l.isShowed_bl = !0), l.setVisible(!0), FWDAnimation.killTweensOf(l.mm_do), FWDAnimation.to(l.mm_do, 1, { alpha: 1, ease: Expo.easeOut }))
        }),
        (l.hide2 = function () {
          l.isShowed_bl && ((l.isShowed_bl = !1), FWDAnimation.killTweensOf(l.mm_do), FWDAnimation.to(l.mm_do, 1, { alpha: 0, onComplete: l.onHideComplete, ease: Expo.easeOut }))
        }),
        (l.onHideComplete = function () {
          l.setVisible(!1), l.stopPreloader(), l.dispatchEvent(t.HIDE_COMPLETE)
        }),
        l.init()
    }
    ;(t.setPrototype = function () {
      t.prototype = new FWDU3DCarDO("div")
    }),
      (t.HIDE_COMPLETE = "hideComplete"),
      (t.prototype = null),
      (e.FWDU3DCarPreloader = t)
  })(window),
  (function (t) {
    var o = function (e, r, s, n) {
      "use strict"
      var i = this,
        a = o.prototype
      ;(i.handlerLeftNImg = e.handlerLeftNImg),
        (i.handlerLeftSImg = e.handlerLeftSImg),
        (i.handlerRightNImg = e.handlerRightNImg),
        (i.handlerRightSImg = e.handlerRightSImg),
        (i.trackLeftImg = e.trackLeftImg),
        (i.trackCenterImg = e.trackCenterImg),
        (i.trackRightImg = e.trackRightImg),
        (i.textColorNormal = e.scrollbarTextColorNormal),
        (i.textColorSelected = e.scrollbarTextColorSelected),
        (i.scrollbarMaxWidth = e.controlsMaxWidth),
        (i.handlerWidth = e.handlerWidth),
        (i.trackWidth = e.controlsMaxWidth),
        (i.scrollbarHeight = 0),
        e.useVectorIcons ||
          ((i.scrollbarHeight = e.trackLeftImg.height), (i.trackLeftWidth = e.trackLeftImg.width), (i.handlerLeftWidth = e.handlerLeftNImg.width), (i.handlerLeftSWidth = e.handlerLeftSImg.width)),
        (i.totalItems = r),
        (i.curItemId = s),
        i.prevCurItemId,
        (i.mouseX = 0),
        (i.mouseY = 0),
        (i.offset = 0),
        e.showSlideshowButton && (i.offset = e.playButtonNImg.width),
        (i.isPressed = !1),
        (i.isMobile = FWDU3DCarUtils.isMobile),
        (i.hasPointerEvent = FWDU3DCarUtils.hasPointerEvent),
        (i.init = function () {
          ;(i.screen.className = "fwdu3dcar-scrollbar"), e.isSkinWhite && (i.screen.className = "fwdu3dcar-scrollbar white"), (i.style().backgroundColor = "#FF0000"), i.setupMainContainers()
        }),
        (i.setupMainContainers = function () {
          i.setWidth(i.scrollbarMaxWidth),
            i.setTrack(),
            i.setHandler(),
            1 < n.totalThumbs &&
              (i.isMobile
                ? i.hasPointerEvent
                  ? (i.scrollbarHandlerOverDO.screen.addEventListener("MSPointerOver", i.onScrollMouseOver),
                    i.scrollbarHandlerOverDO.screen.addEventListener("MSPointerOut", i.onScrollMouseOut),
                    i.scrollbarHandlerOverDO.screen.addEventListener("MSPointerDown", i.onScrollMouseDown))
                  : i.scrollbarHandlerOverDO.screen.addEventListener("touchstart", i.onScrollMouseDown)
                : (i.scrollbarHandlerOverDO.setButtonMode(!0),
                  i.screen.addEventListener &&
                    (i.scrollbarHandlerOverDO.screen.addEventListener("mouseover", i.onScrollMouseOver),
                    i.scrollbarHandlerOverDO.screen.addEventListener("mouseout", i.onScrollMouseOut),
                    i.scrollbarHandlerOverDO.screen.addEventListener("mousedown", i.onScrollMouseDown),
                    t.addEventListener("mouseup", i.onScrollMouseUp))))
        }),
        (i.setTrack = function () {
          ;(i.scrollbarTrackDO = new FWDU3DCarDO("div")),
            i.addChild(i.scrollbarTrackDO),
            e.useVectorIcons
              ? ((i.scrollbarTrackDO.screen.className = "fwdu3dcar-scrollbar-track"),
                e.isSkinWhite && (i.scrollbarTrackDO.screen.className = "fwdu3dcar-scrollbar-track white"),
                setTimeout(function () {
                  i.scrollbarHeight = parseInt(getComputedStyle(i.screen).getPropertyValue("height"))
                }, 5))
              : ((i.scrollbarTrackDO.screen.className = "fwdu3dcar-scrollbar-track-"),
                e.isSkinWhite && (i.scrollbarTrackDO.screen.className = "fwdu3dcar-scrollbar-track- white"),
                i.scrollbarTrackDO.setWidth(i.trackWidth),
                i.scrollbarTrackDO.setHeight(i.scrollbarHeight),
                (i.scrollbarTrackLeftDO = new FWDU3DCarDO("img")),
                i.scrollbarTrackLeftDO.setScreen(i.trackLeftImg),
                i.scrollbarTrackDO.addChild(i.scrollbarTrackLeftDO),
                (i.scrollbarTrackCenterDO = new FWDU3DCarDO("div")),
                (i.scrollbarTrackCenterDO.screen.style.backgroundImage = "url(" + e.trackCenterPath + ")"),
                (i.scrollbarTrackCenterDO.screen.style.backgroundRepeat = "repeat-x"),
                i.scrollbarTrackDO.addChild(i.scrollbarTrackCenterDO),
                i.scrollbarTrackCenterDO.setWidth(i.trackWidth - 2 * i.trackLeftWidth),
                i.scrollbarTrackCenterDO.setHeight(i.scrollbarHeight),
                i.scrollbarTrackCenterDO.setX(i.trackLeftWidth),
                (i.scrollbarTrackRightDO = new FWDU3DCarDO("img")),
                i.scrollbarTrackRightDO.setScreen(i.trackRightImg),
                i.scrollbarTrackDO.addChild(i.scrollbarTrackRightDO),
                i.scrollbarTrackRightDO.setX(i.trackWidth - i.trackLeftWidth))
        }),
        (i.setHandler = function () {
          ;(i.scrollbarHandlerDO = new FWDU3DCarDO("div")),
            i.addChild(i.scrollbarHandlerDO),
            e.useVectorIcons
              ? ((i.handlerClass = "fwdu3dcar-scrollbar-handler"), e.isSkinWhite && (i.handlerClass += " white"), (i.scrollbarHandlerDO.screen.className = i.handlerClass))
              : ((i.scrollbarHandlerDO.screen.className = "fwdu3dcar-scrollbar-handler-"),
                (i.scrollbarHandlerLeftNDO = new FWDU3DCarDO("img")),
                i.scrollbarHandlerLeftNDO.setScreen(i.handlerLeftNImg),
                i.scrollbarHandlerDO.addChild(i.scrollbarHandlerLeftNDO),
                (i.scrollbarHandlerCenterNDO = new FWDU3DCarDO("div")),
                (i.scrollbarHandlerCenterNDO.screen.style.backgroundImage = "url(" + e.handlerCenterNPath + ")"),
                (i.scrollbarHandlerCenterNDO.screen.style.backgroundRepeat = "repeat-x"),
                i.scrollbarHandlerDO.addChild(i.scrollbarHandlerCenterNDO),
                i.scrollbarHandlerCenterNDO.setWidth(i.handlerWidth - 2 * i.handlerLeftWidth + 2),
                i.scrollbarHandlerCenterNDO.setHeight(i.scrollbarHeight),
                i.scrollbarHandlerCenterNDO.setX(i.handlerLeftWidth - 1),
                (i.scrollbarHandlerRightNDO = new FWDU3DCarDO("img")),
                i.scrollbarHandlerRightNDO.setScreen(i.handlerRightNImg),
                i.scrollbarHandlerDO.addChild(i.scrollbarHandlerRightNDO),
                i.scrollbarHandlerRightNDO.setX(i.handlerWidth - i.handlerLeftWidth),
                (i.scrollbarHandlerLeftSDO = new FWDU3DCarDO("img")),
                i.scrollbarHandlerLeftSDO.setScreen(i.handlerLeftSImg),
                i.scrollbarHandlerDO.addChild(i.scrollbarHandlerLeftSDO),
                i.scrollbarHandlerLeftSDO.setAlpha(0),
                (i.scrollbarHandlerCenterSDO = new FWDU3DCarDO("div")),
                (i.scrollbarHandlerCenterSDO.screen.style.backgroundImage = "url(" + e.handlerCenterSPath + ")"),
                (i.scrollbarHandlerCenterSDO.screen.style.backgroundRepeat = "repeat-x"),
                i.scrollbarHandlerDO.addChild(i.scrollbarHandlerCenterSDO),
                i.scrollbarHandlerCenterSDO.setWidth(i.handlerWidth - 2 * i.handlerLeftSWidth),
                i.scrollbarHandlerCenterSDO.setHeight(i.scrollbarHeight),
                i.scrollbarHandlerCenterSDO.setX(i.handlerLeftSWidth),
                i.scrollbarHandlerCenterSDO.setAlpha(0),
                (i.scrollbarHandlerRightSDO = new FWDU3DCarDO("img")),
                i.scrollbarHandlerRightSDO.setScreen(i.handlerRightSImg),
                i.scrollbarHandlerDO.addChild(i.scrollbarHandlerRightSDO),
                i.scrollbarHandlerRightSDO.setX(i.handlerWidth - i.handlerLeftSWidth),
                i.scrollbarHandlerRightSDO.setAlpha(0)),
            (i.scrollbarHandlerTextDO = new FWDU3DCarDO("div")),
            (i.scrollbarHandlerTextDO.screen.className = "fwdu3dcar-scrollbar-text"),
            i.scrollbarHandlerDO.addChild(i.scrollbarHandlerTextDO),
            (i.scrollbarHandlerTextDO.style().fontFamily = "Arial, Helvetica, sans-serif"),
            (i.scrollbarHandlerTextDO.style().fontSize = "10px"),
            (i.scrollbarHandlerTextDO.style().color = i.textColorNormal),
            i.scrollbarHandlerTextDO.setInnerHTML(i.curItemId + 1 + "/" + i.totalItems),
            (i.scrollbarHandlerOverDO = new FWDU3DCarDO("div")),
            i.scrollbarHandlerDO.addChild(i.scrollbarHandlerOverDO),
            (i.setTextPositionId = setTimeout(function () {
              ;(i.offset = n.slideshowButtonDO.w),
                e.showSlideshowButton || (i.offset = 0),
                i.setHeight(i.scrollbarHeight),
                i.scrollbarHandlerDO.setWidth(i.handlerWidth),
                i.scrollbarHandlerDO.setHeight(i.scrollbarHeight),
                i.scrollbarHandlerOverDO.setWidth(i.handlerWidth),
                i.scrollbarHandlerOverDO.setHeight(i.scrollbarHeight),
                i.setTextPosition(),
                i.resize(n.stageWidth),
                i.resize(n.stageWidth - 2 * n.nextAndPrevButtonsOffsetX, n.controlsWidth)
            }, 11)),
            FWDU3DCarUtils.isIE && (i.scrollbarHandlerOverDO.setBkColor("#000000"), i.scrollbarHandlerOverDO.setAlpha(0.001))
        }),
        (i.setTextPosition = function () {
          i.scrollbarHandlerTextDO.setX(Math.floor((i.handlerWidth - i.scrollbarHandlerTextDO.getWidth()) / 2)),
            i.scrollbarHandlerTextDO.setY(Math.floor((i.scrollbarHeight - i.scrollbarHandlerTextDO.getHeight()) / 2) + 1)
        }),
        (i.resize = function (e, t) {
          e < t + i.scrollbarMaxWidth
            ? 0.8 * e - t < i.handlerWidth
              ? (i.resizeTrack(0), i.scrollbarHandlerDO.setY(500))
              : (i.resizeTrack(Math.floor(e - t)), i.scrollbarHandlerDO.setY(0))
            : i.getWidth() < i.scrollbarMaxWidth && (i.resizeTrack(Math.floor(i.scrollbarMaxWidth)), i.scrollbarHandlerDO.setY(0)),
            i.prevStageW != e && i.scrollbarHandlerDO.setX(Math.floor((i.curItemId * (i.trackWidth - i.offset - i.handlerWidth)) / (i.totalItems - 1))),
            i.scrollbarHandlerTextDO.setInnerHTML(i.curItemId + 1 + "/" + i.totalItems),
            (i.prevStageW = e)
        }),
        (i.resize2 = function () {
          i.resizeTrack(Math.floor(i.scrollbarMaxWidth))
        }),
        (i.resizeTrack = function (t) {
          ;(i.trackWidth = t),
            i.setWidth(i.trackWidth),
            i.scrollbarTrackDO.setWidth(i.trackWidth),
            e.useVectorIcons ||
              (i.scrollbarTrackCenterDO.setWidth(Math.floor(i.trackWidth - 2 * i.trackLeftWidth)),
              i.scrollbarTrackCenterDO.setX(Math.floor(i.trackLeftWidth)),
              i.scrollbarTrackRightDO.setX(Math.floor(i.trackWidth - i.trackLeftWidth)))
        }),
        (i.onScrollMouseOver = function () {
          ;(i.scrollbarOver = !0),
            e.useVectorIcons
              ? (i.scrollbarHandlerDO.screen.className = i.handlerClass + " selected")
              : (FWDAnimation.to(i.scrollbarHandlerLeftSDO, 0.8, { alpha: 1, ease: Expo.easeOut }),
                FWDAnimation.to(i.scrollbarHandlerCenterSDO, 0.8, { alpha: 1, ease: Expo.easeOut }),
                FWDAnimation.to(i.scrollbarHandlerRightSDO, 0.8, { alpha: 1, ease: Expo.easeOut })),
            FWDAnimation.to(i.scrollbarHandlerTextDO.screen, 0.8, { css: { color: i.textColorSelected }, ease: Expo.easeOut })
        }),
        (i.onScrollMouseOut = function () {
          i.scrollbarOver = !1
          i.isPressed ||
            (e.useVectorIcons
              ? (i.scrollbarHandlerDO.screen.className = i.handlerClass)
              : (FWDAnimation.to(i.scrollbarHandlerLeftSDO, 0.8, { alpha: 0, ease: Expo.easeOut }),
                FWDAnimation.to(i.scrollbarHandlerCenterSDO, 0.8, { alpha: 0, ease: Expo.easeOut }),
                FWDAnimation.to(i.scrollbarHandlerRightSDO, 0.8, { alpha: 0, ease: Expo.easeOut })),
            FWDAnimation.to(i.scrollbarHandlerTextDO.screen, 0.8, { css: { color: i.textColorNormal }, ease: Expo.easeOut }))
        }),
        (i.onScrollMouseDown = function (o) {
          if (!n.isLoading) {
            o.preventDefault && o.preventDefault()
            var e = FWDU3DCarUtils.getViewportMouseCoordinates(o)
            ;(i.mouseX = e.screenX),
              (i.mouseY = e.screenY),
              (i.curScrollX = i.scrollbarHandlerDO.getX()),
              (i.lastPressedX = i.mouseX),
              (i.isPressed = !0),
              FWDAnimation.killTweensOf(i.scrollbarHandlerDO),
              i.isMobile
                ? i.hasPointerEvent
                  ? (t.addEventListener("MSPointerMove", i.onScrollMove), t.addEventListener("MSPointerUp", i.onScrollMouseUp))
                  : (t.addEventListener("touchmove", i.onScrollMove, { passive: !1 }), t.addEventListener("touchend", i.onScrollMouseUp))
                : i.screen.addEventListener
                ? t.addEventListener("mousemove", i.onScrollMove)
                : document.attachEvent("onmousemove", i.onScrollMove)
          }
        }),
        (i.onScrollMove = function (t) {
          var e = FWDU3DCarUtils.getViewportMouseCoordinates(t)
          ;(i.mouseX = e.screenX), (i.mouseY = e.screenY)
          var r = i.mouseX - i.lastPressedX,
            s = i.curScrollX + r
          ;(s = Math.max(s, 0)),
            (s = Math.min(i.trackWidth - i.offset - i.handlerWidth, s)),
            i.scrollbarHandlerDO.setX(Math.floor(s)),
            (i.curItemId = Math.floor((s / (i.trackWidth - i.offset - i.handlerWidth)) * i.totalItems)),
            i.curItemId == i.totalItems && i.curItemId--,
            i.prevCurItemId != i.curItemId && (i.dispatchEvent(o.MOVE, { id: i.curItemId }), i.scrollbarHandlerTextDO.setInnerHTML(i.curItemId + 1 + "/" + i.totalItems)),
            (i.prevCurItemId = i.curItemId)
        }),
        (i.onScrollMouseUp = function () {
          ;(i.isPressed = !1),
            i.isMobile
              ? i.hasPointerEvent
                ? (t.removeEventListener("MSPointerUp", i.onScrollMouseUp), t.removeEventListener("MSPointerMove", i.onScrollMove))
                : (t.removeEventListener("touchend", i.onScrollMouseUp), t.removeEventListener("touchmove", i.onScrollMove))
              : i.screen.addEventListener
              ? t.removeEventListener("mousemove", i.onScrollMove)
              : document.detachEvent("onmousemove", i.onScrollMove),
            i.scrollbarOver || i.isMobile || i.onScrollMouseOut(),
            i.gotoItem2()
        }),
        (i.gotoItem = function (e, t) {
          ;(i.curItemId = e),
            i.prevCurItemId != i.curItemId &&
              (t
                ? (FWDAnimation.killTweensOf(i.scrollbarHandlerDO),
                  FWDAnimation.to(i.scrollbarHandlerDO, 0.8, { x: Math.floor((i.curItemId * (i.trackWidth - i.offset - i.handlerWidth)) / (i.totalItems - 1)), ease: Expo.easeOut }))
                : i.scrollbarHandlerDO.setX(Math.floor((i.curItemId * (i.trackWidth - i.offset - i.handlerWidth)) / (i.totalItems - 1))),
              i.scrollbarHandlerTextDO.setInnerHTML(i.curItemId + 1 + "/" + i.totalItems)),
            (i.prevCurItemId = i.curItemId)
        }),
        (i.gotoItem2 = function () {
          FWDAnimation.killTweensOf(i.scrollbarHandlerDO),
            FWDAnimation.to(i.scrollbarHandlerDO, 0.8, { x: Math.floor((i.curItemId * (i.trackWidth - i.offset - i.handlerWidth)) / (i.totalItems - 1)), ease: Expo.easeOut }),
            i.scrollbarHandlerTextDO.setInnerHTML(i.curItemId + 1 + "/" + i.totalItems)
        }),
        i.init()
    }
    ;(o.setPrototype = function () {
      o.prototype = new FWDU3DCarDO("div")
    }),
      (o.MOVE = "onMove"),
      (o.prototype = null),
      (t.FWDU3DCarScrollbar = o)
  })(window),
  (function (e) {
    var t = function (e, o, r, s, n) {
      "use strict"
      var i = this,
        a = t.prototype
      ;(i.nImg = e),
        (i.sPath = o),
        i.inst,
        (i.html = r),
        (i.nClass = s),
        (i.sClass = n),
        i.nImg && ((i.totalWidth = i.nImg.width), (i.totalHeight = i.nImg.height)),
        (i.isShowed = !0),
        (i.isMbl = FWDU3DCarUtils.isMbl),
        (i.hasPointerEvent_bl = FWDU3DCarUtils.hasPointerEvent),
        (i.init = function () {
          i.setupMainContainers()
        }),
        (i.setupMainContainers = function () {
          if (i.html)
            (i.n_do = new FWDU3DCarDO("div")),
              i.n_do.setInnerHTML(i.html),
              i.setNormalState(),
              i.addChild(i.n_do),
              setTimeout(function () {
                i.setWidth(parseInt(getComputedStyle(i.n_do.screen).getPropertyValue("width"))), i.setHeight(parseInt(getComputedStyle(i.n_do.screen).getPropertyValue("height")))
              }, 5)
          else {
            ;(i.buttonsHolder_do = new FWDU3DCarDO("div")), (i.n_do = new FWDU3DCarDO("img")), i.n_do.setScreen(i.nImg), i.buttonsHolder_do.addChild(i.n_do)
            var e = new Image()
            ;(e.src = i.sPath),
              (i.s_do = new FWDU3DCarDO("img")),
              i.s_do.setScreen(e),
              i.s_do.setWidth(i.totalWidth),
              i.s_do.setHeight(i.totalHeight),
              i.s_do.setAlpha(0),
              i.buttonsHolder_do.addChild(i.s_do),
              i.setWidth(i.totalWidth),
              i.setHeight(i.totalHeight),
              i.buttonsHolder_do.setWidth(i.totalWidth),
              i.buttonsHolder_do.setHeight(i.totalHeight),
              (i.screen.style.yellowOverlayPointerEvents = "none"),
              i.addChild(i.buttonsHolder_do)
          }
          i.setButtonMode(!0),
            i.isMbl
              ? i.hasPointerEvent_bl
                ? (i.screen.addEventListener("pointerup", i.onMouseUp), i.screen.addEventListener("pointerover", i.onMouseOver), i.screen.addEventListener("pointerout", i.onMouseOut))
                : i.screen.addEventListener("touchend", i.onMouseUp)
              : (i.screen.addEventListener("mouseover", i.onMouseOver), i.screen.addEventListener("mouseout", i.onMouseOut), i.screen.addEventListener("mouseup", i.onMouseUp))
        }),
        (i.onMouseOver = function (o) {
          if ((i.dispatchEvent(t.SHOW_TOOLTIP, { e: o }), !i.isDisabledForGood_bl) && (!o.pointerType || o.pointerType == o.MSPOINTER_TYPE_MOUSE || "mouse" == o.pointerType)) {
            if (i.isDisabled_bl || i.isSelectedFinal_bl) return
            i.dispatchEvent(t.MOUSE_OVER, { e: o }), i.setSelectedState(!0)
          }
        }),
        (i.onMouseOut = function (o) {
          if (!i.isDisabledForGood_bl && (!o.pointerType || o.pointerType == o.MSPOINTER_TYPE_MOUSE || "mouse" == o.pointerType)) {
            if (i.isDisabled_bl || i.isSelectedFinal_bl || i.isDisabled2) return
            i.dispatchEvent(t.MOUSE_OUT, { e: o }), i.setNormalState(!0)
          }
        }),
        (i.onMouseUp = function (o) {
          i.isDisabledForGood_bl || (o.preventDefault && o.preventDefault(), i.isDisabled_bl || 2 == o.button || i.dispatchEvent(t.CLICK, { e: o, inst: i.inst }))
        }),
        (i.setNormalState = function () {
          i.html ? (i.n_do.screen.className = i.nClass) : (FWDAnimation.killTweensOf(i.s_do), FWDAnimation.to(i.s_do, 0.5, { alpha: 0, ease: Expo.easeOut }))
        }),
        (i.setSelectedState = function () {
          i.html ? (i.n_do.screen.className = i.nClass + " " + i.sClass) : (FWDAnimation.killTweensOf(i.s_do), FWDAnimation.to(i.s_do, 0.5, { alpha: 1, delay: 0.1, ease: Expo.easeOut }))
        }),
        (i.setDisabledState = function () {
          i.isSetToDisabledState_bl || ((i.isSetToDisabledState_bl = !0), i.d_sdo && i.d_sdo.setX(0))
        }),
        (i.setEnabledState = function () {
          i.isSetToDisabledState_bl && ((i.isSetToDisabledState_bl = !1), i.d_sdo && i.d_sdo.setX(-100))
        }),
        (i.disable = function (e) {
          i.isDisabledForGood_bl || i.isDisabled_bl || ((i.isDisabled_bl = !0), i.setButtonMode(!1), FWDAnimation.to(i, 0.6, { alpha: 0.4 }), !e && i.setNormalState())
        }),
        (i.enable = function () {
          i.isDisabledForGood_bl || !i.isDisabled_bl || ((i.isDisabled_bl = !1), i.setButtonMode(!0), FWDAnimation.to(i, 0.6, { alpha: 1 }))
        }),
        (i.disableForGood = function () {
          ;(i.isDisabledForGood_bl = !0), i.setButtonMode(!1)
        }),
        (i.disable2 = function (e) {
          i.isDisabled2 || ((i.isDisabled2 = !0), FWDAnimation.to(i, 0.6, { alpha: 0.4 }), !e && i.setNormalState())
        }),
        (i.enable2 = function () {
          i.isDisabled2 && ((i.isDisabled2 = !1), FWDAnimation.to(i, 0.6, { alpha: 1 }))
        }),
        (i.show = function (e) {
          i.isShowed_bl ||
            ((i.isShowed_bl = !0),
            FWDAnimation.killTweensOf(i),
            i.setScale2(0),
            e === void 0 && (e = 0.4),
            0 == e
              ? (i.setScale2(1), i.setVisible(!0))
              : FWDAnimation.to(i, 0.8, {
                  scale: 1,
                  delay: e,
                  onStart: function () {
                    i.setVisible(!0)
                  },
                  ease: Elastic.easeOut,
                }))
        }),
        (i.hide = function (e) {
          ;(i.isShowed_bl || e) && ((i.isShowed_bl = !1), FWDAnimation.killTweensOf(i), i.setVisible(!1), i.setScale2(0))
        }),
        (i.setHideDrag = function (e) {
          FWDAnimation.killTweensOf(i.n_do), e ? FWDAnimation.to(i.n_do, 0.4, { alpha: 0.3, delay: 0.4 }) : FWDAnimation.to(i.n_do, 0.4, { alpha: 1 })
        }),
        i.init()
    }
    ;(t.setPrototype = function (e) {
      t.prototype = e ? new FWDU3DCarDO3D("div") : new FWDU3DCarDO("div")
    }),
      (t.CLICK = "onClick"),
      (t.MOUSE_OVER = "onMouseOver"),
      (t.SHOW_TOOLTIP = "showTooltip"),
      (t.MOUSE_OUT = "onMouseOut"),
      (t.CLICK = "onMouseDown"),
      (t.prototype = null),
      (e.FWDU3DCarSimpleButton = t)
  })(window),
  (function (e) {
    var t = function (e, o) {
      "use strict"
      var r = this,
        s = t.prototype
      ;(r.playButtonNImg = o.playButtonNImg),
        (r.playButtonSPath = o.playButtonSPath),
        (r.pauseButtonImg = o.pauseButtonImg),
        r.playButtonDO,
        r.playButtonNDO,
        r.playButtonSDO,
        r.pauseButtonDO,
        (r.delay = o.slideshowDelay),
        (r.autoplay = o.autoplay),
        (r.isStopped = !0),
        o.useVectorIcons || ((r.btnWidth = r.playButtonNImg.width), (r.btnHeight = r.playButtonNImg.height)),
        (r.isMobile = FWDU3DCarUtils.isMobile),
        (r.hasPointerEvent = FWDU3DCarUtils.hasPointerEvent),
        r.animDelayId_to,
        r.timeoutId,
        r.timerIntervalId,
        (r.init = function () {
          r.setupMainContainers()
        }),
        (r.setupMainContainers = function () {
          if ((r.setButtonMode(!0), o.useVectorIcons)) {
            var e = "fwdu3dcar-slideshow-button"
            o.isSkinWhite && (e += " white"),
              (r.screen.className = e),
              setTimeout(function () {
                ;(r.btnHeight = parseInt(getComputedStyle(r.screen).getPropertyValue("height"))), (r.btnWidth = parseInt(getComputedStyle(r.screen).getPropertyValue("width"))), r.initAll()
              }, 5)
          } else r.initAll(), (r.screen.className = "fwdu3dcar-slideshow-button-")
        }),
        (r.initAll = function () {
          r.setWidth(r.btnWidth),
            r.setHeight(r.btnHeight),
            r.setPauseButton(),
            r.setTimerButton(),
            r.setPlayButton(),
            r.isMobile
              ? r.hasPointerEvent
                ? (r.screen.addEventListener("MSPointerOver", r.onMouseOver), r.screen.addEventListener("MSPointerOut", r.onMouseOut), r.screen.addEventListener("MSPointerUp", r.onClick))
                : r.screen.addEventListener("touchend", r.onClick)
              : (r.screen.addEventListener("mouseover", r.onMouseOver), r.screen.addEventListener("mouseout", r.onMouseOut), r.screen.addEventListener("click", r.onClick))
        }),
        (r.setTimerButton = function () {
          if (o.useVectorIcons) {
            var e = "fwdu3dcar-slideshow-button-bk"
            o.isSkinWhite && (e += " white"), (r.slpBk_do = new FWDU3DCarDO("div")), (r.slpBk_do.screen.className = e)
          } else {
            r.slpBk_do = new FWDU3DCarDO("img")
            var t = new Image()
            ;(t.src = o.circleBK), r.slpBk_do.setScreen(t)
          }
          r.slpBk_do.setWidth(r.btnWidth),
            r.slpBk_do.setHeight(r.btnHeight),
            r.slpBk_do.setAlpha(0),
            r.addChild(r.slpBk_do),
            FWDU3DCarPreloader.setPrototype(),
            (r.slp_do = new FWDU3DCarPreloader(r, "none", 8, o.slideshowPreloaderBackgroundColor, o.slideshowPreloaderFillColor, 2.5, r.delay / 1e3)),
            r.slp_do.setX(Math.round((r.w - r.slp_do.w) / 2)),
            r.slp_do.setY(Math.round((r.h - r.slp_do.h) / 2)),
            r.addChild(r.slp_do)
        }),
        (r.setPauseButton = function () {
          if (o.useVectorIcons) {
            var e = "fwdu3dcar-slideshow-pause-button"
            o.isSkinWhite && (e += " white"),
              (r.pauseButtonDO = new FWDU3DCarDO("div")),
              r.pauseButtonDO.setInnerHTML('<span class="fwdu3dcar-icon fwdu3dcar-icon-pause"></span>'),
              (r.pauseButtonDO.screen.className = e)
          } else (r.pauseButtonDO = new FWDU3DCarDO("img")), r.pauseButtonDO.setScreen(r.pauseButtonImg)
          r.pauseButtonDO.setAlpha(0), r.addChild(r.pauseButtonDO), r.pauseButtonDO.setWidth(r.btnWidth), r.pauseButtonDO.setHeight(r.btnHeight)
        }),
        (r.setPlayButton = function () {
          if (((r.playButtonDO = new FWDU3DCarDO("div")), (r.playButtonClass = "fwdu3dcar-slideshow-play-button"), o.isSkinWhite && (r.playButtonClass += " white"), o.useVectorIcons)) {
            var e = "fwdu3dcar-slideshow-play-button"
            o.isSkinWhite && (e += " white"), r.playButtonDO.setInnerHTML('<span class="fwdu3dcar-icon fwdu3dcar-icon-play-fill"></span>'), (r.playButtonDO.screen.className = e)
          } else {
            ;(r.playButtonNDO = new FWDU3DCarDO("img")), r.playButtonNDO.setScreen(r.playButtonNImg), r.playButtonDO.addChild(r.playButtonNDO), (r.playButtonSDO = new FWDU3DCarDO("img"))
            var t = new Image()
            ;(t.src = r.playButtonSPath),
              r.playButtonSDO.setScreen(t),
              r.playButtonSDO.setWidth(r.playButtonNDO.w),
              r.playButtonSDO.setHeight(r.playButtonNDO.h),
              r.playButtonSDO.setAlpha(0),
              r.playButtonDO.addChild(r.playButtonSDO)
          }
          r.addChild(r.playButtonDO), r.playButtonDO.setWidth(r.btnWidth), r.playButtonDO.setHeight(r.btnHeight)
        }),
        (r.onMouseOver = function () {
          r.isStopped
            ? (r.slp_do.hide2(), o.useVectorIcons ? (r.playButtonDO.screen.className = r.playButtonClass + " selected") : FWDAnimation.to(r.playButtonSDO, 0.8, { alpha: 1, ease: Expo.easeOut }))
            : (r.slp_do.hide2(), FWDAnimation.to(r.slpBk_do, 0.8, { alpha: 0, ease: Expo.easeOut }))
        }),
        (r.onMouseOut = function () {
          r.isStopped
            ? (r.slp_do.hide2(),
              r.pauseButtonDO.setAlpha(0),
              FWDAnimation.to(r.slpBk_do, 0.8, { alpha: 0, ease: Expo.easeOut }),
              o.useVectorIcons ? (r.playButtonDO.screen.className = r.playButtonClass) : FWDAnimation.to(r.playButtonSDO, 0.8, { alpha: 0, ease: Expo.easeOut }))
            : (r.slp_do.show2(), FWDAnimation.to(r.slpBk_do, 0.8, { alpha: 1, ease: Expo.easeOut }))
        }),
        (r.onClick = function () {
          r.isStopped ? (r.slp_do.resetSlideshow(), r.start(), r.pauseButtonDO.setAlpha(1), r.dispatchEvent(t.PLAY_CLICK)) : (r.stop(), r.pauseButtonDO.setAlpha(0), r.dispatchEvent(t.PAUSE_CLICK)),
            r.isMobile || r.onMouseOver()
        }),
        (r.start = function () {
          r.isStopped && ((r.isStopped = !1), r.playButtonDO.setAlpha(0), clearTimeout(r.timeoutId), !e.videoStarted && ((r.timeoutId = setTimeout(r.onTimeHandler, r.delay)), r.startSlideshow()))
        }),
        (r.stop = function () {
          ;(r.isStopped = !0), r.playButtonDO.setAlpha(1), r.stopSlideshow(), r.onMouseOut(), clearTimeout(r.timeoutId)
        }),
        (r.pause = function () {
          r.isStopped || (clearTimeout(r.timeoutId), r.stopSlideshow())
        }),
        (r.resume = function () {
          r.isStopped ||
            (!e.videoStarted &&
              (r.startSlideshow(),
              clearTimeout(r.timeoutId),
              (r.timeoutId = setTimeout(function () {
                r.onTimeHandler()
              }, r.delay))))
        }),
        (r.onTimeHandler = function () {
          clearTimeout(r.timeoutId), r.stopSlideshow(), r.dispatchEvent(t.TIME)
        }),
        (r.hideSlideshow = function () {
          FWDAnimation.killTweensOf(r.playButtonSDO),
            FWDAnimation.to(r.playButtonSDO, 0.8, { alpha: 0, ease: Expo.easeOut }),
            FWDAnimation.killTweensOf(r.slpBk_do),
            FWDAnimation.to(r.slpBk_do, 0.8, { alpha: 0, ease: Expo.easeOut }),
            FWDAnimation.killTweensOf(r.pauseButtonDO),
            FWDAnimation.to(r.pauseButtonDO, 0.8, { alpha: 0, ease: Expo.easeOut }),
            r.slp_do.hide2()
        }),
        (r.startSlideshow = function () {
          r.slp_do.startSlideshow()
        }),
        (r.stopSlideshow = function (e) {
          r.slp_do.stopSlideshow(e)
        }),
        r.init()
    }
    ;(t.setPrototype = function () {
      t.prototype = new FWDU3DCarDO("div")
    }),
      (t.PLAY_CLICK = "onPlayClick"),
      (t.PAUSE_CLICK = "onPauseClick"),
      (t.TIME = "onTime"),
      (t.prototype = null),
      (e.FWDU3DCarSlideshowButton = t)
  })(window),
  (function (e) {
    var t = function (e, o, r) {
      "use strict"
      var s = this,
        n = t.prototype
      ;(s.id = e),
        (s.borderSize = o.thumbBorderSize),
        (s.backgroundColor = o.thumbBackgroundColor),
        (s.borderColor1 = o.thumbBorderColor1),
        (s.borderColor2 = o.thumbBorderColor2),
        (s.thumbWidth = o.thumbWidth),
        (s.thumbHeight = o.thumbHeight),
        (s.thumbScale = 1),
        (s.isMobile = FWDU3DCarUtils.isMobile),
        (s.hasPointerEvent = FWDU3DCarUtils.hasPointerEvent),
        (s.init = function () {
          s.setupScreen()
        }),
        (s.setupScreen = function () {
          ;(s.screen.className = "fwdu3dcar-thumbnail"),
            (s.screen.id = "fwdu3dcar_thumbnail_" + s.id),
            FWDU3DCarUtils.isIOS
              ? ((s.mainDO = new FWDU3DCarDO3D("div", "absolute", "visible")), s.addChild(s.mainDO), s.mainDO.setZ(1))
              : ((s.mainDO = new FWDU3DCarDO("div", "absolute", "visible")), s.addChild(s.mainDO)),
            s.mainDO.setWidth(s.thumbWidth),
            s.mainDO.setHeight(s.thumbHeight),
            s.setWidth(s.thumbWidth),
            s.setHeight(s.thumbHeight),
            o.transparentImages
              ? (s.borderSize = 0)
              : ((s.borderDO = new FWDU3DCarDO("div")),
                (s.borderDO.screen.className = "fwdu3dcar-thumbnail-border"),
                (s.bgDO = new FWDU3DCarDO("div")),
                (s.bgDO.screen.className = "fwdu3dcar-thumbnail-background"),
                s.borderSize && s.mainDO.addChild(s.borderDO),
                s.mainDO.addChild(s.bgDO),
                s.borderDO.setWidth(s.thumbWidth),
                s.borderDO.setHeight(s.thumbHeight),
                s.bgDO.setWidth(s.thumbWidth - 2 * s.borderSize),
                s.bgDO.setHeight(s.thumbHeight - 2 * s.borderSize),
                s.bgDO.setX(s.borderSize),
                s.bgDO.setY(s.borderSize),
                s.borderDO.setCSSGradient(s.borderColor2, s.borderColor1),
                s.borderDO.setBackfaceVisibility(),
                s.bgDO.setBkColor(s.backgroundColor),
                FWDU3DCarUtils.isAndroid && (s.borderDO.setBackfaceVisibility(), s.bgDO.setBackfaceVisibility())),
            (s.imageHolderDO = new FWDU3DCarDO("div")),
            (s.imageHolderDO.hasT3D = !1),
            (s.imageHolderDO.screen.className = "fwdu3dcar-image"),
            s.mainDO.addChild(s.imageHolderDO),
            (s.curDataListAr = r.curDataListAr),
            s.updateButtonMode(),
            FWDU3DCarUtils.isAndroid && (s.setBackfaceVisibility(), s.mainDO.setBackfaceVisibility(), s.imageHolderDO.setBackfaceVisibility()),
            s.mainDO.screen.addEventListener("click", s.onMouseClickHandler)
        }),
        (s.updateButtonMode = function () {
          var e = r.curDataListAr[s.id].thumbVideoSrc,
            t = "none"
          r.curDataListAr[s.id].secondObj && (t = r.curDataListAr[s.id].secondObj.type),
            r._d.useVideo || (e = !1),
            s.id == r.curId
              ? ("none" == s.curDataListAr[s.id].type && "none" == t) || e
                ? (s.mainDO.style().cursor = null)
                : !r.useDrag && s.mainDO.setButtonMode(!0)
              : !r.useDrag && s.mainDO.setButtonMode(!0)
        }),
        (s.addReflection = function () {
          if (s.imageDO) {
            var e = s.thumbWidth - 2 * s.borderSize,
              t = s.thumbHeight - 2 * s.borderSize
            ;(s.reflCanvasDO = new FWDU3DCarDO("canvas")), s.addChild(s.reflCanvasDO), (s.reflCanvasDO.screen.width = r.thumbWidth), (s.reflCanvasDO.screen.height = r.reflHeight)
            var n = s.reflCanvasDO.screen.getContext("2d")
            n.save(),
              n.translate(0, s.thumbHeight),
              n.scale(1, -1),
              o.transparentImages || ((n.fillStyle = s.borderColor2), n.fillRect(0, 0, s.thumbWidth, s.thumbHeight)),
              n.drawImage(s.imageDO.screen, s.borderSize, s.borderSize, e, t),
              n.restore(),
              (n.globalCompositeOperation = "destination-out")
            var i = n.createLinearGradient(0, 0, 0, r.reflHeight)
            i.addColorStop(0, "rgba(255, 255, 255, " + (1 - r.reflAlpha) + ")"),
              i.addColorStop(1, "rgba(255, 255, 255, 1.0)"),
              (n.fillStyle = i),
              n.fillRect(0, 0, s.thumbWidth, r.reflHeight + 2),
              s.setWidth(s.thumbWidth),
              s.reflCanvasDO.setY(s.thumbHeight + r.reflDist)
          }
        }),
        (s.addImage = function (e) {
          ;(s.imageDO = new FWDU3DCarDO("img")),
            s.imageDO.setScreen(e),
            s.imageHolderDO.addChild(s.imageDO),
            (s.imageDO.screen.ontouchstart = null),
            FWDU3DCarUtils.isAndroid && s.imageDO.setBackfaceVisibility(),
            s.imageDO.setWidth(s.thumbWidth - 2 * s.borderSize),
            s.imageDO.setHeight(s.thumbHeight - 2 * s.borderSize),
            s.imageHolderDO.setX(s.borderSize),
            s.imageHolderDO.setY(s.borderSize),
            s.imageHolderDO.setWidth(s.thumbWidth - 2 * s.borderSize),
            s.imageHolderDO.setHeight(s.thumbHeight - 2 * s.borderSize),
            r.showRefl && s.addReflection()
        }),
        (s.updateText = function () {
          s.curDataListAr[s.id].emptyText ||
            ((s.textOffset = s.curDataListAr[s.id].textOffset),
            r.showCaptionUnderThumbnail_bl && s.textGradientDO.setBkColor("transparent"),
            r.textHolderDO.setAlpha(0),
            (s.setTextHeightId = setTimeout(s.setTextHeight, 10)))
        }),
        (s.setTextHeight = function () {
          ;(s.textHeight = s.textDO.getHeight()),
            o.showFullCaption
              ? !r.showCaptionUnderThumbnail_bl &&
                (s.textGradientDO.setY(s.thumbHeight - 2 * s.borderSize - s.textHeight - s.textDescriptionOffsetBottom),
                s.textDO.setY(s.thumbHeight - 2 * s.borderSize - s.textHeight - s.textDescriptionOffsetBottom))
              : !r.showCaptionUnderThumbnail_bl && (s.textGradientDO.setY(s.thumbHeight - 2 * s.borderSize - s.textOffset), s.textDO.setY(s.thumbHeight - 2 * s.borderSize - s.textOffset)),
            FWDAnimation.to(s.textHolderDO, 0.8, { alpha: 1, ease: Expo.easeOut }),
            (s.hasText = !0),
            s.checkThumbOver()
        }),
        (s.removeText = function () {
          s.textHolderDO && FWDAnimation.to(s.textHolderDO, 0.6, { alpha: 0, ease: Expo.easeOut, onComplete: s.removeTextFinish })
        }),
        (s.removeTextFinish = function () {
          FWDAnimation.killTweensOf(s.textHolderDO),
            FWDAnimation.killTweensOf(s.textGradientDO),
            FWDAnimation.killTweensOf(s.textDO),
            r.showCaptionUnderThumbnail_bl ? r.removeChild(s.textHolderDO) : s.mainDO.removeChild(s.textHolderDO),
            (s.textHolderDO = null),
            (s.textGradientDO = null),
            (s.textDO = null),
            (s.isOver = !1),
            (s.hasText = !1)
        }),
        (s.showThumb3D = function () {
          var e = s.thumbWidth - 2 * s.borderSize,
            t = s.thumbHeight - 2 * s.borderSize
          o.transparentImages
            ? (s.imageDO.setAlpha(0), FWDAnimation.to(s.imageDO, 0.8, { alpha: 1, ease: Quart.easeOut }))
            : (s.imageHolderDO.setX(parseInt(s.thumbWidth / 2)),
              s.imageHolderDO.setY(parseInt(s.thumbHeight / 2)),
              s.imageHolderDO.setWidth(0),
              s.imageHolderDO.setHeight(0),
              FWDAnimation.to(s.imageHolderDO, 0.8, { x: s.borderSize, y: s.borderSize, w: e, h: t, ease: Expo.easeInOut }),
              s.imageDO.setWidth(e + 1),
              s.imageDO.setHeight(t + 1),
              s.imageDO.setX(-parseInt(e / 2)),
              s.imageDO.setY(-parseInt(t / 2)),
              FWDAnimation.to(s.imageDO, 0.8, { x: 0, y: 0, ease: Expo.easeInOut })),
            s.reflCanvasDO && (s.reflCanvasDO.setAlpha(0), FWDAnimation.to(s.reflCanvasDO, 0.8, { alpha: 1, ease: Expo.easeInOut }))
        }),
        (s.showThumb2D = function () {
          if (!FWDU3DCarUtils.hasTransform2d) {
            var e = Math.floor(s.thumbWidth * s.thumbScale),
              t = Math.floor(s.thumbHeight * s.thumbScale),
              o = Math.floor(s.borderSize * s.thumbScale)
            0 < s.borderSize && 1 > o && (o = 1)
            var r = e - 2 * o,
              n = t - 2 * o
            s.imageHolderDO.setX(parseInt(e / 2)),
              s.imageHolderDO.setY(parseInt(t / 2)),
              s.imageHolderDO.setWidth(0),
              s.imageHolderDO.setHeight(0),
              FWDAnimation.to(s.imageHolderDO, 0.8, { x: o, y: o, w: r, h: n, ease: Expo.easeInOut }),
              s.imageDO &&
                (s.imageDO.setWidth(r),
                s.imageDO.setHeight(n),
                s.imageDO.setX(-parseInt(r / 2)),
                s.imageDO.setY(-parseInt(n / 2)),
                FWDAnimation.to(s.imageDO, 0.8, { x: 0, y: 0, ease: Expo.easeInOut }),
                s.reflCanvasDO && (s.reflCanvasDO.setAlpha(0), FWDAnimation.to(s.reflCanvasDO, 0.8, { alpha: 1, ease: Expo.easeInOut })))
          } else {
            s.setScale2(s.thumbScale)
            var r = s.thumbWidth - 2 * s.borderSize,
              n = s.thumbHeight - 2 * s.borderSize
            s.imageHolderDO.setX(parseInt(s.thumbWidth / 2)),
              s.imageHolderDO.setY(parseInt(s.thumbHeight / 2)),
              s.imageHolderDO.setWidth(0),
              s.imageHolderDO.setHeight(0),
              FWDAnimation.to(s.imageHolderDO, 0.8, { x: s.borderSize, y: s.borderSize, w: r, h: n, ease: Expo.easeInOut }),
              s.imageDO &&
                (s.imageDO.setWidth(r),
                s.imageDO.setHeight(n),
                s.imageDO.setX(-parseInt(r / 2)),
                s.imageDO.setY(-parseInt(n / 2)),
                FWDAnimation.to(s.imageDO, 0.8, { x: 0, y: 0, ease: Expo.easeInOut }),
                s.reflCanvasDO && (s.reflCanvasDO.setAlpha(0), FWDAnimation.to(s.reflCanvasDO, 0.8, { alpha: 1, ease: Expo.easeInOut })))
          }
        }),
        (s.showThumbIntro2D = function (e, t) {
          if (((s.thumbScale = e), !FWDU3DCarUtils.hasTransform2d)) {
            var o = Math.floor(s.thumbWidth * e),
              r = Math.floor(s.thumbHeight * e),
              n = Math.floor(s.borderSize * e)
            0 < s.borderSize && 1 > n && (n = 1)
            var i = o - 2 * n,
              a = r - 2 * n
            s.setWidth(o),
              s.setHeight(r),
              s.mainDO.setWidth(o),
              s.mainDO.setHeight(r),
              s.borderDO && (s.borderDO.setWidth(o), s.borderDO.setHeight(r)),
              s.bgDO && (s.bgDO.setX(n), s.bgDO.setY(n), s.bgDO.setWidth(i), s.bgDO.setHeight(a)),
              s.setX(-s.thumbWidth / 2),
              s.setY(-s.thumbHeight / 2),
              FWDAnimation.to(s, 0.8, { x: Math.floor(s.newX + (s.thumbWidth - o) / 2), y: Math.floor(s.newY + (s.thumbHeight - r) / 2), alpha: s.newAlpha, delay: t, ease: Expo.easeOut })
          } else
            s.setScale2(s.thumbScale),
              s.setX(-s.thumbWidth / 2),
              s.setY(-s.thumbHeight / 2),
              FWDAnimation.to(s, 0.8, { x: s.newX, y: s.newY, z: s.newZ, scale: s.thumbScale, alpha: s.newAlpha, delay: t, ease: Quart.easeOut })
        }),
        (s.setScale = function (e, t) {
          if (((s.thumbScale = e), s.setVisible(!0), !FWDU3DCarUtils.hasTransform2d)) {
            var o = Math.floor(s.thumbWidth * e),
              r = Math.floor(s.thumbHeight * e),
              n = Math.floor(s.borderSize * e)
            0 < s.borderSize && 1 > n && (n = 1),
              s.borderDO && (s.borderDO.setWidth(o), s.borderDO.setHeight(r)),
              s.bgDO && (s.bgDO.setX(n), s.bgDO.setY(n), s.bgDO.setWidth(o - 2 * n), s.bgDO.setHeight(r - 2 * n)),
              s.mainDO.setWidth(o),
              s.mainDO.setHeight(r),
              s.imageHolderDO.setX(n),
              s.imageHolderDO.setY(n),
              s.imageHolderDO.setWidth(o - 2 * n),
              s.imageHolderDO.setHeight(r - 2 * n),
              s.setX(Math.floor(s.newX + (s.thumbWidth - o) / 2)),
              s.setY(Math.floor(s.newY + (s.thumbHeight - r) / 2)),
              s.setWidth(o),
              s.setHeight(r),
              s.setAlpha(t),
              s.imageDO && (s.imageDO.setWidth(o - 2 * n), s.imageDO.setHeight(r - 2 * n))
          } else s.setX(Math.floor(s.newX)), s.setY(Math.floor(s.newY)), s.setScale2(s.thumbScale), s.setAlpha(t)
        }),
        (s.update = function () {
          r.showRefl ? (s.reflCanvasDO ? (s.reflCanvasDO.setAlpha(1), s.reflCanvasDO.setY(s.thumbHeight + r.reflDist)) : s.addReflection()) : s.reflCanvasDO && s.reflCanvasDO.setAlpha(0)
        }),
        (s.hide = function (e) {
          var t = s.thumbWidth - 2 * s.borderSize,
            o = s.thumbHeight - 2 * s.borderSize
          FWDAnimation.to(s.imageHolderDO, 0.8, { x: parseInt(s.thumbWidth / 2), y: parseInt(s.thumbHeight / 2), w: 0, h: 0, delay: e, ease: Expo.easeInOut }),
            s.imageDO &&
              (FWDAnimation.to(s.imageDO, 0.8, { x: -parseInt(t / 2), y: -parseInt(o / 2), delay: e, ease: Expo.easeInOut }),
              s.reflCanvasDO && FWDAnimation.to(s.reflCanvasDO, 0.8, { alpha: 0, delay: e, ease: Expo.easeInOut }))
        }),
        (s.onMouseClickHandler = function () {
          s.dispatchEvent(t.CLICK, { id: s.id })
        }),
        (s.onMouseTouchHandler = function () {
          s.dispatchEvent(t.CLICK, { id: s.id })
        }),
        (s.destroy = function () {
          FWDAnimation.killTweensOf(s),
            FWDAnimation.killTweensOf(s.mainDO),
            FWDAnimation.killTweensOf(s.imageHolderDO),
            s.isMobile
              ? s.hasPointerEvent
                ? s.mainDO.screen.removeEventListener("MSPointerUp", s.onMouseTouchHandler)
                : s.mainDO.screen.removeEventListener("touchend", s.onMouseTouchHandler)
              : s.mainDO.screen.removeEventListener("click", s.onMouseClickHandler),
            clearTimeout(s.setTextHeightId),
            s.imageDO && (FWDAnimation.killTweensOf(s.imageDO), s.imageDO.disposeImage(), (s.imageDO.screen.onload = null), (s.imageDO.screen.onerror = null), s.imageDO.destroy()),
            s.htmlContentDO && (FWDAnimation.killTweensOf(s.htmlContentDO), s.htmlContentDO.destroy(), (s.htmlContentDO = null)),
            s.bgDO && (FWDAnimation.killTweensOf(s.bgDO), s.bgDO.destroy(), (s.bgDO = null)),
            s.borderDO && (FWDAnimation.killTweensOf(s.borderDO), s.borderDO.destroy(), (s.borderDO = null)),
            s.htmlContentDO && (FWDAnimation.killTweensOf(s.htmlContentDO), s.htmlContentDO.destroy()),
            s.textGradientDO && (FWDAnimation.killTweensOf(s.textGradientDO), (s.textGradientDO = null)),
            s.textDO && (FWDAnimation.killTweensOf(s.textDO), (s.textDO = null)),
            s.textHolderDO && (FWDAnimation.killTweensOf(s.textHolderDO), (s.textHolderDO = null)),
            s.imageHolderDO.destroy(),
            s.mainDO.destroy(),
            (s.imageHolderDO = null),
            (s.imageDO = null),
            (s.htmlContentDO = null),
            (s.mainDO = null),
            (s.borderDO = null),
            (s.bgDO = null),
            (s.imageHolderDO = null),
            (s.imageDO = null),
            (s.htmlContentDO = null),
            (s.textHolderDO = null),
            (s.textGradientDO = null),
            (s.textDO = null),
            (s.id = null),
            (s._d = null),
            (s.prt = null),
            (s.backgroundColor = null),
            (s.borderColor = null),
            (s.screen.innerHTML = ""),
            n.destroy(),
            (n = null),
            (s = null),
            (t.prototype = null)
        }),
        s.init()
    }
    ;(t.setPrototype = function () {
      t.prototype = new FWDU3DCarDO3D("div", "absolute", "visible")
    }),
      (t.CLICK = "click"),
      (t.prototype = null),
      (e.FWDU3DCarThumb = t)
  })(window),
  (function (t) {
    var o = function (e, r) {
      "use strict"
      var s = this,
        n = o.prototype
      ;(s._d = e),
        (s.prt = r),
        (s.stageWidth = r.stageWidth),
        (s.stageHeight = r.stageHeight),
        (s.scale = 1),
        (s.thumbsAr = []),
        (s.defaultC = "default"),
        (s.grabC = "url(" + r._d.grabIconPath_str + "), default"),
        (s.handC = "url(" + r._d.handIconPath_str + "), default"),
        (s.dataListId = r.startAtCategory),
        (s.topologiesAr = ["ring", "normal", "star"]),
        (s.startPos = e.carouselStartPosition),
        (s.thumbWidth = e.thumbWidth),
        (s.thumbHeight = e.thumbHeight),
        (s.borderSize = e.thumbBorderSize),
        (s.perspective = 4 * s.thumbWidth),
        (s.carRadiusX = e.carRadiusX),
        (s.carRadiusY = e.carRadiusY),
        (s.carouselXRot = e.carouselXRotation),
        (s.carYOffset = e.carouselYOffset),
        (s.focalLength = 250),
        (s.thumbMinAlpha = e.thumbMinAlpha),
        (s.controlsHeight = 0),
        e.useVectorIcons || (s.controlsHeight = s._d.trackLeftImg.height),
        (s.controlsOffset = e.controlsOffset),
        (s.showCaption_bl = s._d.showCaption),
        (s.thumbXSpace3D = s._d.thumbXSpace3D),
        (s.thumbXOffset3D = s._d.thumbXOffset3D),
        (s.thumbZSpace3D = s._d.thumbZSpace3D),
        (s.thumbZOffset3D = s._d.thumbZOffset3D),
        (s.thumbYAngle3D = s._d.thumbYAngle3D),
        (s.thumbXSpace2D = s._d.thumbXSpace2D),
        (s.thumbXOffset2D = s._d.thumbXOffset2D),
        (s.useDrag = e.useDragAndSwipe_bl),
        (s.largeNextAndPrevButtonsMaxWidthPos = e.largeNextAndPrevButtonsMaxWidthPos),
        (s.showBulletsNavigation = e.showBulletsNavigation),
        (s.topology = e.carouselTopology),
        (s.showRefl = e.showRefl),
        (s.reflHeight = e.reflHeight),
        (s.reflDist = e.reflDist),
        (s.reflAlpha = e.reflAlpha),
        (s.showCenterImg = e.showCenterImg),
        (s.centerImgPath = e.centerImgPath),
        (s.centerImgYOffset = e.centerImgYOffset),
        (s.grabIconPath_str = e.grabIconPath_str),
        (s.handIconPath_str = e.handIconPath_str),
        (s.showSlideshowButton = e.showSlideshowButton),
        (s.captionPosition = e.captionPosition),
        (s.nextAndPrevButtonsOffsetX = e.nextAndPrevButtonsOffsetX),
        (s.volume = e.volume),
        (s.videoAutoPlay = e.videoAutoPlay),
        (s.nextVideoAutoPlay = e.nextVideoAutoPlay),
        (s.hasPointerEvent = FWDU3DCarUtils.hasPointerEvent),
        (s.isMobile = FWDU3DCarUtils.isMobile),
        (s.showCaptionUnderThumbnail_bl = e.showCaptionUnderThumbnail_bl),
        (s.showLargeNextAndPrevButtons_bl = e.showLargeNextAndPrevButtons),
        (s.areLargeNextAndPrevButtonsShowed = !0),
        (s.init = function () {
          s.setOverflow("visible"),
            (s.hasT3D = !1),
            (s.hasT2D = !1),
            (s.holderDO = new FWDU3DCarDO3D("div", "absolute", "visible")),
            s.addChild(s.holderDO),
            s.holderDO.setWidth(s.stageWidth),
            s.holderDO.setOverflow("visible"),
            (s.thumbsHolderDO = new FWDU3DCarDO3D("div", "absolute", "visible")),
            s.holderDO.addChild(s.thumbsHolderDO),
            FWDU3DCarUtils.isSafari && s.thumbsHolderDO.setZ(1e6),
            FWDU3DCarUtils.isIEAndLessThen10 && (s.carRadiusX /= 1.5),
            s.thumbsHolderDO.setPreserve3D(),
            s.thumbsHolderDO.setAngleX(-s.carouselXRot),
            s.isMobile || t.addEventListener("mousemove", s.onThumbMove),
            s.hasPointerEvent && t.addEventListener("MSPointerMove", s.onThumbMove),
            t.addEventListener("click", s.thumbClickHandler),
            (s.showScrollbar = e.showScrollbar),
            (s.showNextButton = e.showNextButton),
            (s.showNextAndPrevButtons = e.showNextAndPrevButtons),
            s.isMobile && (e.showScrollbarOnMobile && (s.showScrollbar = !1), e.showNextAndPrevButtonsOnMobile && (s.showNextAndPrevButtons = !1)),
            s.showCaption_bl && s.setupCaption(),
            s.setupVideo(),
            s.showCurrentCat(-1),
            s.setupControls(),
            s.hideControls(),
            s.isMobile ||
              (s.addDragScreen(),
              setTimeout(function () {
                s.setupDisableDragScreen()
              }, 50))
        }),
        (s.addDragScreen = function () {
          s.useDrag && ((s.style().cursor = s.handC), (r.mainDO.style().cursor = s.handC))
        }),
        (s.removeDragScreen = function () {
          ;(s.style().cursor = null), (r.mainDO.style().cursor = null)
        }),
        (s.resizeHandler = function (e, t) {
          ;(s.prevStageW != r.stageWidth || s.prevStageH != r.stageHeight || t) &&
            ((s.stageWidth = r.stageWidth),
            (s.stageHeight = r.stageHeight),
            (s.prevStageW = s.stageWidth),
            (s.prevStageH = s.stageHeight),
            s.holderDO.setWidth(s.stageWidth),
            s.holderDO.setHeight(s.stageHeight),
            (s.scale = r.scale),
            s.thumbsHolderDO.setScale3D(s.scale),
            s.thumbsHolderDO.setX(Math.floor(s.stageWidth / 2)),
            s.thumbsHolderDO.setY(Math.floor(s.stageHeight / 2) + s.carYOffset),
            s.isEvpFS && s.thumbsHolderDO.setY(-5e3),
            s.positionControls(),
            s.postionNextAndPrevLargeButtons(),
            !e && (s.positionCaptionHolder(), setTimeout(s.positionCaptionHolder, 50)),
            s.positionVideo())
        }),
        (s.setupDisableDragScreen = function () {
          s.dsb_do ||
            ((s.dsb_do = new FWDU3DCarDO3D("div")),
            s.dsb_do.setZ(100001),
            FWDU3DCarUtils.isIE && (s.dsb_do.setBkColor("#00FF00"), s.dsb_do.setAlpha(1e-7)),
            r.mainDO.addChild(s.dsb_do),
            (s.dsb_do.style().cursor = s.grabC)),
            s.hideDsb()
        }),
        (s.showDsb = function () {
          s.isDsbShowed_bl || !s.dsb_do || (clearTimeout(s.hideDSBId_to), (s.isDsbShowed_bl = !0), s.dsb_do.setVisible(!0), s.dsb_do.setWidth(s.stageWidth), s.dsb_do.setHeight(s.stageHeight))
        }),
        (s.hideDsb = function () {
          s.isDsbShowed_bl && s.dsb_do && (clearTimeout(s.hideDSBId_to), (s.isDsbShowed_bl = !1), s.dsb_do.setVisible(!1), s.dsb_do.setWidth(0), s.dsb_do.setHeight(0))
        }),
        (s.onThumbMove = function (t) {
          if (s.textHolderDO && !s.disableThumbClick && s.hasCaption) {
            var e = FWDU3DCarUtils.getViewportMouseCoordinates(t)
            ;(s.vmcX = e.screenX), (s.vmcY = e.screenY), s.isTextSet && s.checkThumbOver()
          }
        }),
        (s.showCurrentCat = function (t) {
          if (((s.showCaptionFirstTime = !0), (s.hieVideoOnFrstTween = !0), t != s.dataListId && 0 <= t))
            return s.showBulletsNavigation && s.bulletsNavigationDO && s.bulletsNavigationDO.hideBullets(), (s.allowToSwitchCat = !1), s.hideCurrentCat(), void (s.dataListId = t)
          if (((s.thumbsAr = []), (s.curDataListAr = s._d.dataListAr[s.dataListId]), (s.totalThumbs = s.curDataListAr.length), (s.prevCaptionId = -1), 0 == s.totalThumbs)) {
            return void s.dispatchEvent(o.LOAD_ERROR, { text: "This category doesn't contain any thumbnails!" })
          }
          if ("number" == typeof s.startPos)
            (s.startPos = Math.floor(s.startPos) - 1),
              0 > s.startPos ? (s.startPos = Math.floor((s.totalThumbs - 1) / 2)) : s.startPos > s.totalThumbs - 1 && (s.startPos = Math.floor((s.totalThumbs - 1) / 2)),
              (s.curId = s.startPos)
          else
            switch (s.startPos) {
              case "left":
                s.curId = 0
                break
              case "right":
                s.curId = s.totalThumbs - 1
                break
              case "random":
                s.curId = Math.floor(s.totalThumbs * Math.random())
                break
              default:
                s.curId = Math.floor((s.totalThumbs - 1) / 2)
            }
          s.showScrollbar && s.scrollbarDO && ((s.scrollbarDO.totalItems = s.totalThumbs), (s.scrollbarDO.curItemId = s.curId), s.scrollbarDO.gotoItem2()),
            s.showBulletsNavigation &&
              s.bulletsNavigationDO &&
              ((s.bulletsNavigationDO.totalItems = s.totalThumbs),
              (s.bulletsNavigationDO.curItemId = s.curId),
              s.bulletsNavigationDO.createBullets(),
              setTimeout(function () {
                s.positionControls()
              }, 400)),
            e.useVectorIcons &&
              setTimeout(function () {
                s.positionControls()
              }, 400),
            s.showLargeNextAndPrevButtons_bl &&
              setTimeout(function () {
                s.showLargeNextAndPrevButtons(!0)
              }, 1e3),
            s.thumbsHolderDO.setPerspective(s.perspective),
            s.setupThumbs(),
            (s.mainThumbDO = s.thumbsAr[s.curId]),
            (s.prevCurId = s.curId),
            s.startIntro()
        }),
        (s.hideCurrentCat = function () {
          ;(s.isAnim = !0),
            (s.disableThumbClick = !0),
            clearTimeout(s.loadWithDelayIdLeft),
            clearTimeout(s.loadWithDelayIdRight),
            clearTimeout(s.textTimeoutId),
            clearTimeout(s.thumbsTweenDone_to),
            clearInterval(s.zSortingId),
            clearTimeout(s.hideThumbsFinishedId),
            clearTimeout(s.loadImagesId),
            clearTimeout(s.setIntroFinishedId),
            clearTimeout(s.showControlsId),
            r.removeInfoDO(),
            s.stopSlideshow(),
            s.evp && s.evp.stop(),
            s.hidePlayButton(!0),
            s.image && ((s.image.onload = null), (s.image.onerror = null)),
            s.imageLeft && ((s.imageLeft.onload = null), (s.imageLeft.onerror = null)),
            s.imageRight && ((s.imageRight.onload = null), (s.imageRight.onerror = null)),
            s.hideThumbs(),
            s.hideLargeNextAndPrevButtons(),
            s.hideControls(!0)
        }),
        (s.hideThumbs = function () {
          var e = -s.thumbWidth / 2,
            t = Math.max(s.totalThumbs - s.curId, s.curId),
            o,
            r
          r = Math.floor(1e3 / t)
          for (var n = 0, a; n < s.totalThumbs; n++)
            (a = s.thumbsAr[n]),
              n == s.curId
                ? (s.hideThumbsFinishedId = setTimeout(s.hideThumbsFinished, 500))
                : ((o = Math.abs(t - Math.abs(n - s.curId) + 1) * r), FWDAnimation.to(a, 0.8, { x: Math.floor(e), alpha: 0, ease: Expo.easeOut }), a.hide(0))
        }),
        (s.hideThumbsFinished = function () {
          "out" == s.captionPosition ? s.hideCaption(!0) : s.hideCaption(!0, !0)
          for (var e = 0, t; e < s.totalThumbs; e++)
            (t = s.thumbsAr[e]), e == s.curId ? (t.hide(0), FWDAnimation.to(t, 0.6, { alpha: 0, delay: 0.2, onComplete: s.allThumbsAreTweened })) : t.setAlpha(0)
        }),
        (s.allThumbsAreTweened = function () {
          s.destroyCurrentCat(), s.showCurrentCat()
        }),
        (s.destroyCurrentCat = function () {
          for (var e = 0, t; e < s.totalThumbs; e++) (t = s.thumbsAr[e]), FWDAnimation.killTweensOf(t), s.thumbsHolderDO.removeChild(t), t.destroy(), (t = null)
        }),
        (s.startIntro = function () {
          s.disableThumbClick = !0
          var e = s.thumbsAr[s.curId],
            t = -s.thumbWidth / 2,
            o = s.carRadiusY * Math.sin(Math.PI / 2) - s.thumbHeight / 2
          e.setX(Math.floor(t)),
            e.setY(Math.floor(o)),
            e.setAlpha(0),
            FWDAnimation.to(e, 0.8, { alpha: 1 }),
            s.thumbsHolderDO.addChild(e),
            s.loadCenterImage(),
            (s.loadImagesId = setTimeout(s.loadImages, 600)),
            s.showCenterImg && !s.centerImgDO && s.setupCenterImg()
        }),
        (s.setupCenterImg = function () {
          ;(s.centerImage = new Image()), (s.centerImage.onerror = s.onCenterImageLoadErrorHandler), (s.centerImage.onload = s.onCenterImageLoadHandler), (s.centerImage.src = s.centerImgPath)
        }),
        (s.onCenterImageLoadHandler = function () {
          ;(s.centerImgDO = new FWDU3DCarDO3D("div")),
            s.thumbsHolderDO.addChild(s.centerImgDO),
            (s.centerImg = new FWDU3DCarDO("img")),
            s.centerImg.setScreen(s.centerImage),
            s.centerImgDO.addChild(s.centerImg),
            (s.centerImg.screen.ontouchstart = null),
            s.centerImgDO.setWidth(s.centerImg.getWidth()),
            s.centerImgDO.setHeight(s.centerImg.getHeight()),
            s.centerImgDO.setX(-Math.floor(s.centerImgDO.getWidth() / 2)),
            s.centerImgDO.setY(-Math.floor(s.centerImgDO.getHeight() / 2) + s.centerImgYOffset),
            s.centerImgDO.setZ(-s.carRadiusX),
            (FWDU3DCarUtils.isIE || !FWDU3DCarUtils.hasTransform3d || s._d.showDisplay2DAlways) && s.centerImgDO.setZIndex(Math.floor(s.carRadiusX) + 1),
            s.centerImgDO.setScale3D((s.scale * s.centerImgDO.getWidth()) / s.centerImgDO.screen.getBoundingClientRect().width),
            s.showCIWithNoDl || (s.centerImgDO.setAlpha(0), FWDAnimation.to(s.centerImgDO, 0.8, { alpha: 1, delay: 0.8 }))
        }),
        (s.onCenterImageLoadErrorHandler = function () {
          if (s && s._d) {
            var e = "Center image can't be loaded, probably the path is incorrect <font color='#FF0000'>" + s.centerImgPath + "</font>"
            s.dispatchEvent(o.LOAD_ERROR, { text: e })
          }
        }),
        (s.setupThumbs = function () {
          for (var e = 0, t; e < s.totalThumbs; e++) FWDU3DCarThumb.setPrototype(), (t = new FWDU3DCarThumb(e, s._d, s)), s.thumbsAr.push(t), t.addListener(FWDU3DCarThumb.CLICK, s.onThumbClick)
          ;(s.dumyThumbDO = new FWDU3DCarDO3D("div")),
            s.dumyThumbDO.setWidth(s.thumbWidth),
            s.dumyThumbDO.setHeight(s.thumbHeight),
            s.dumyThumbDO.setVisible(!1),
            s.dumyThumbDO.setX(Math.floor(-s.dumyThumbDO.w / 2)),
            s.positionDumyCaption(),
            s.dumyThumbDO.setZ(0),
            s.thumbsHolderDO.addChild(s.dumyThumbDO)
        }),
        (s.positionDumyCaption = function () {
          var e = s.carRadiusY * Math.sin(0 + Math.PI / 2)
          ;(e = Math.floor(e) - Math.floor(s.thumbHeight / 2)), s.dumyThumbDO.setY(e)
        }),
        (s.onThumbClick = function (t) {
          s.disableThumbClick || s.isLoading || ((s.curId = t.id), s.curId != s.prevCurId && s.goToThumb())
        }),
        (s.thumbClickHandler = function (n) {
          var a = FWDU3DCarUtils.getViewportMouseCoordinates(n)
          if (
            ((s.vmcX = a.screenX), (s.vmcY = a.screenY), !FWDU3DCar.rlShowed) &&
            !(s.disableThumbClick || FWDAnimation.isTweening(s.mainThumbDO)) &&
            !(r.menuDO && FWDU3DCarUtils.hitTest(r.menuDO.screen, s.vmcX, s.vmcY)) &&
            s.mainThumbDO &&
            FWDU3DCarUtils.hitTest(s.mainThumbDO.screen, s.vmcX, s.vmcY)
          ) {
            if ("in" == s.captionPosition && s.hasCaption) {
              if (!s.isOver && e.showCaptionOnTap && !e.showFullCaption) return void s.onThumbOverHandler(!0)
              var l = s.textHolderDO.screen.querySelectorAll(".fwdu3dcar-title")[0]
              if (l) {
                l = l.children
                for (var d = 0, u; d < l.length; d++) if (((u = l[d]), "A" == u.tagName && FWDU3DCarUtils.hitTest(u, s.vmcX, s.vmcY))) return
              }
              if (((l = s.textHolderDO.screen.querySelectorAll(".fwdu3dcar-desc")[0]), l)) {
                l = l.children
                for (var d = 0, u; d < l.length; d++) if (((u = l[d]), "A" == u.tagName && FWDU3DCarUtils.hitTest(u, s.vmcX, s.vmcY))) return
              }
            }
            var h = "none"
            s.curDataListAr[s.curId].secondObj && (h = s.curDataListAr[s.curId].secondObj.type)
            var c = s.curId
            if ("none" != h) {
              for (var d = 0, p; d < s.totalThumbs; d++) {
                ;(p = "none"), s.curDataListAr[d].secondObj && (p = s.curDataListAr[d].secondObj.type)
                var m = s.curDataListAr[d].thumbVideoSrc
                d < s.curId && ("link" == p || "none" == p || m) && (c -= 1)
              }
              if ((s.stopSlideshow(), "link" == h)) t.open(s.curDataListAr[s.curId].secondObj.src, s.curDataListAr[s.curId].secondObj.target)
              else {
                if (((m = s.curDataListAr[s.curId].thumbVideoSrc), m))
                  return void s.dispatchEvent(o.LOAD_ERROR, { text: "Please set use video to yes to play video/audio in the carousel thumbnails." })
                if (!e.useLightbox) return void s.dispatchEvent(o.LOAD_ERROR, { text: "Please set use lightbox to yes to use the lightbox." })
                s.dispatchEvent(o.THUMB_CLICK, { playlistId: s.dataListId, thumbId: c })
              }
            }
          }
        }),
        (s.checkThumbOver = function () {
          s.hasCaption &&
            !e.showFullCaption &&
            s.mainThumbDO &&
            (!s.mainThumbDO || s.mainThumbDO.screen) &&
            (FWDU3DCarUtils.hitTest(s.mainThumbDO.screen, s.vmcX, s.vmcY) ? s.onThumbOverHandler(!0) : s.onThumbOutHandler(!0))
        }),
        (s.onThumbOverHandler = function (e) {
          s.isAnim ||
            (!s.isOver &&
              ((s.isOver = !0),
              "in" == s.captionPosition &&
                (FWDAnimation.killTweensOf(s.textDO), e ? FWDAnimation.to(s.textDO, 0.7, { y: s.textHolderDO.h - s.textDO.getHeight(), ease: Expo.easeInOut }) : s.textDO.setY(-s.textDO.getHeight()))))
        }),
        (s.onThumbOutHandler = function (t, o) {
          if (!s.isAnim && (s.isOver || o)) {
            var r
            ;(s.isOver = !1),
              "in" == s.captionPosition &&
                (FWDAnimation.killTweensOf(s.textDO),
                (r = e.showFullCaption ? s.textHolderDO.h - s.textDO.getHeight() : s.textHolderDO.h - s.captionOffset),
                t ? FWDAnimation.to(s.textDO, 0.7, { y: r, ease: Expo.easeInOut }) : s.textDO.setY(r))
          }
        }),
        (s.setupCaption = function () {
          FWDU3DCarUtils.isMAC ? ((s.textHolderDO = new FWDU3DCarDO3D("div")), s.textHolderDO.setZ(100000008)) : (s.textHolderDO = new FWDU3DCarDO("div")),
            s.addChild(s.textHolderDO),
            (s.textDO = new FWDU3DCarDO("div")),
            (s.textDO.style().width = "100%"),
            (s.textDO.screen.className = "fwdu3dcar-caption dark in"),
            e.isSkinWhite && (s.textDO.screen.className = "fwdu3dcar-caption white in"),
            s.textHolderDO.addChild(s.textDO),
            "out" == s.captionPosition &&
              ((s.textDO.screen.className = "fwdu3dcar-caption dark out"),
              e.isSkinWhite && (s.textDO.screen.className = "fwdu3dcar-caption white out"),
              (s.textDO.style().position = "relative"),
              (s.textDO.style().margin = "auto"),
              (s.textHolderDO.style().width = "100%"))
        }),
        (s.setCaption = function () {
          if (s.prevCaptionId != s.curId) {
            s.isTextSet = !0
            var e = s.thumbsAr[s.curId],
              t = s.curDataListAr[s.curId].thumbText
            ;(s.hasCaption = t),
              (s.captionOffset = s.curDataListAr[s.curId].captionOffset),
              s.textDO.setInnerHTML(t),
              r.getCaptionHeight(),
              "in" == s.captionPosition &&
                ("none" == s.curDataListAr[s.curId].type || s.useDrag ? (s.useDrag ? (s.textHolderDO.style().cursor = s.handC) : s.textHolderDO.setButtonMode(!1)) : s.textHolderDO.setButtonMode(!0),
                r.resizeHandler(!0)),
              s.positionCaptionHolder(),
              (e = s.curDataListAr[s.curId]),
              s.showCaptionFirstTime || !s.hadPrevCaption
                ? (s.hideCaption(),
                  setTimeout(function () {
                    s.showCaption(!0, !0)
                  }, 50))
                : s.showCaption(!0),
              s.checkThumbOver(),
              s.hasCaption ? s.textHolderDO.setVisible(!0) : s.textHolderDO.setVisible(!1),
              r.addOffsetTextHeight(!0),
              s.positionControls(!0),
              (s.hadPrevCaption = s.hasCaption),
              (s.prevCaptionId = s.curId)
          }
        }),
        (s.hideCaption = function (o, n) {
          if (s.hasCaption)
            if ((FWDAnimation.killTweensOf(s.textHolderDO), (s.captionShowed = !1), "in" != s.captionPosition))
              FWDAnimation.killTweensOf(s.textDO),
                o
                  ? "motion" == e.captionAnimationType
                    ? FWDAnimation.to(s.textDO, 0.8, { y: -r.captionH - 6, ease: Expo.easeInOut })
                    : FWDAnimation.to(s.textHolderDO, 0.8, { alpha: 0, ease: Quint.easeOut })
                  : "motion" == e.captionAnimationType
                  ? s.textDO.setY(-r.captionH - 6)
                  : s.textHolderDO.setAlpha(0)
            else if (!o) "motion" == e.captionAnimationType ? s.textDO.setY(s.textHolderDO.getHeight() + 1) : s.textHolderDO.setAlpha(0)
            else if ("motion" == e.captionAnimationType) FWDAnimation.to(s.textHolderDO, 0.25, { alpha: 0, ease: Quint.easeOut })
            else {
              var i = 0.25
              n && (i = 0.8), FWDAnimation.to(s.textHolderDO, i, { alpha: 0, ease: Quint.easeOut })
            }
        }),
        (s.showCaption = function (t, o) {
          if (s.hasCaption && !s.captionShowed) {
            var r
            if ((FWDAnimation.killTweensOf(s.textHolderDO), (s.captionShowed = !0), "in" != s.captionPosition))
              FWDAnimation.killTweensOf(s.textDO),
                t
                  ? "motion" == e.captionAnimationType
                    ? FWDAnimation.to(s.textDO, 0.8, { y: 0, ease: Expo.easeInOut })
                    : FWDAnimation.to(s.textHolderDO, 0.8, { alpha: 1, ease: Quint.easeOut })
                  : "motion" == e.captionAnimationType
                  ? s.textDO.setY(0)
                  : s.textHolderDO.setAlpha(1)
            else if (((r = e.showFullCaption ? s.textHolderDO.h - s.textDO.getHeight() : s.textHolderDO.h - s.captionOffset), !t))
              "motion" == e.captionAnimationType ? (s.textDO.setY(r), s.textHolderDO.setAlpha(1)) : s.textHolderDO.setAlpha(1)
            else if ("motion" == e.captionAnimationType) s.textHolderDO.setAlpha(1), s.textDO.setY(s.textHolderDO.h + 1), FWDAnimation.to(s.textDO, 0.8, { y: r, ease: Expo.easeInOut })
            else {
              var n = 0
              o && (n = 0.3), FWDAnimation.to(s.textHolderDO, 0.8, { alpha: 1, delay: n, ease: Quint.easeOut })
            }
            s.showCaptionFirstTime = !1
          }
        }),
        (s.positionCaptionHolder = function () {
          if (s.textHolderDO && s.dumyThumbDO)
            if ("in" == s.captionPosition) {
              var e = parseFloat(s.mainThumbDO.getRect().width).toFixed(3),
                t = parseFloat(s.mainThumbDO.getRect().height).toFixed(3),
                o = (s.mainThumbDO.getRect().x || s.mainThumbDO.getRect().left) - r.mainDO.getGlobalX(),
                n = (s.mainThumbDO.getRect().y || s.mainThumbDO.getRect().top) - r.mainDO.getGlobalY()
              s.textHolderDO.setX(o + s.borderSize * s.scale), s.textHolderDO.setY(Math.round(n + s.borderSize * s.scale) + 1), s.textHolderDO.setWidth(e - 2 * (s.borderSize * s.scale))
              var i = parseFloat(s.textHolderDO.getRect().width).toFixed(3),
                a = parseFloat(e).toFixed(3)
              a < i && (e += 1), s.textHolderDO.setWidth(e - 2 * (s.borderSize * s.scale)), s.textHolderDO.setHeight(t - 2 * (s.borderSize * s.scale))
              var l = parseFloat(s.textHolderDO.getRect().height).toFixed(3),
                d = parseFloat(t).toFixed(3)
              d < l && (t += 1),
                s.textHolderDO.setHeight(t - 2 * (s.borderSize * s.scale)),
                s.onThumbOutHandler(!1, !0),
                200 > s.thumbWidth * r.scale ? s.textHolderDO.setVisible(!1) : s.textHolderDO.setVisible(!0)
            } else {
              var n = Math.round(s.dumyThumbDO.getRect().top - r.mainDO.getGlobalY() + s.dumyThumbDO.getRect().height)
              s.textHolderDO.setY(n), s.textHolderDO.setHeight(300)
            }
        }),
        (s.loadImages = function () {
          FWDU3DCarUtils.hasTransform3d && !s._d.showDisplay2DAlways ? s.setupIntro3D() : s.setupIntro2D(),
            (s.countLoadedThumbsLeft = s.curId - 1),
            (s.loadWithDelayIdLeft = setTimeout(s.loadThumbImageLeft, 100)),
            (s.countLoadedThumbsRight = s.curId + 1),
            (s.loadWithDelayIdRight = setTimeout(s.loadThumbImageRight, 100))
        }),
        (s.loadCenterImage = function () {
          ;(s.imagePath = s.curDataListAr[s.curId].thumbSrc),
            (s.image = new Image()),
            (s.image.onerror = s.onImageLoadErrorHandler),
            (s.image.onload = s.onImageLoadHandlerCenter),
            (s.image.src = s.imagePath)
        }),
        (s.onImageLoadHandlerCenter = function () {
          var e = s.thumbsAr[s.curId]
          e.addImage(s.image),
            FWDU3DCarUtils.hasTransform3d && !s._d.showDisplay2DAlways ? e.showThumb3D() : e.showThumb2D(),
            s.showCaption_bl &&
              ((s.isTextSet = !0),
              clearTimeout(s.textTimeoutId),
              (s.textTimeoutId = setTimeout(function () {
                s.thumbsTweenDone()
              }, 800)),
              s.setCaption())
        }),
        (s.loadThumbImageLeft = function () {
          0 > s.countLoadedThumbsLeft ||
            ((s.imagePath = s.curDataListAr[s.countLoadedThumbsLeft].thumbSrc),
            (s.imageLeft = new Image()),
            (s.imageLeft.onerror = s.onImageLoadErrorHandler),
            (s.imageLeft.onload = s.onImageLoadHandlerLeft),
            (s.imageLeft.src = s.imagePath))
        }),
        (s.onImageLoadHandlerLeft = function () {
          var e = s.thumbsAr[s.countLoadedThumbsLeft]
          e.addImage(s.imageLeft),
            FWDU3DCarUtils.hasTransform3d && !s._d.showDisplay2DAlways ? e.showThumb3D() : e.showThumb2D(),
            s.countLoadedThumbsLeft--,
            (s.loadWithDelayIdLeft = setTimeout(s.loadThumbImageLeft, 200))
        }),
        (s.loadThumbImageRight = function () {
          s.countLoadedThumbsRight > s.totalThumbs - 1 ||
            ((s.imagePath = s.curDataListAr[s.countLoadedThumbsRight].thumbSrc),
            (s.imageRight = new Image()),
            (s.imageRight.onerror = s.onImageLoadErrorHandler),
            (s.imageRight.onload = s.onImageLoadHandlerRight),
            (s.imageRight.src = s.imagePath))
        }),
        (s.onImageLoadHandlerRight = function () {
          var e = s.thumbsAr[s.countLoadedThumbsRight]
          e.addImage(s.imageRight),
            FWDU3DCarUtils.hasTransform3d && !s._d.showDisplay2DAlways ? e.showThumb3D() : e.showThumb2D(),
            s.countLoadedThumbsRight++,
            (s.loadWithDelayIdRight = setTimeout(s.loadThumbImageRight, 200))
        }),
        (s.onImageLoadErrorHandler = function () {
          if (s && s._d) {
            var e = "Thumb can't be loaded, probably the path is incorrect <font color='#FF0000'>" + s.imagePath + "</font>"
            s.dispatchEvent(o.LOAD_ERROR, { text: e })
          }
        }),
        (s.setupIntro3D = function () {
          for (var e = 0, t, o, n, a, l, d, u; e < s.totalThumbs; e++) {
            ;(u = s.thumbsAr[e]),
              (t = -Math.floor(s.thumbWidth / 2)),
              (o = -Math.floor(s.thumbHeight / 2)),
              e != s.curId && (u.setX(Math.floor(t)), u.setY(Math.floor(o))),
              (t = 0),
              (o = 0),
              (n = 0),
              (a = 1),
              (l = 0)
            var h = 0
            if (
              ((h = e < s.curId ? e - s.curId + s.totalThumbs : e - s.curId),
              (u.carAngle = 2 * ((h / s.totalThumbs) * Math.PI)),
              (t = s.carRadiusX * Math.sin(u.carAngle)),
              (o = s.carRadiusY * Math.sin(u.carAngle + Math.PI / 2)),
              (n = s.carRadiusX * Math.cos(u.carAngle) - s.carRadiusX),
              0 == n && (s.mainThumbDO = u),
              (u.screen.style.pointerEvents = FWDU3DCarUtils.isSafari && n < -s.carRadiusX ? "none" : "auto"),
              e != s.curId)
            ) {
              switch (s.topology) {
                case "ring":
                  l = 360 * (h / s.totalThumbs)
                  break
                case "star":
                  l = 360 * (h / s.totalThumbs) + 90
                  break
                default:
                  l = 0
              }
              u.setAlpha(0)
            }
            ;(t -= Math.floor(s.thumbWidth / 2)),
              (o -= Math.floor(s.thumbHeight / 2)),
              (u.newX = t),
              (u.newY = o),
              u.setZ(n),
              (u.newZ = n),
              0 == n && (s.mainThumbDO = u),
              (a = 1 + (1 - s.thumbMinAlpha) * (n / (2 * s.carRadiusX))),
              (d = Math.abs(e - s.curId) * Math.floor(1e3 / (s.totalThumbs / 2))),
              FWDAnimation.to(u, 0.8, { x: t, y: o, z: n, angleY: l, alpha: a, delay: d / 1e3, ease: Quart.easeOut }),
              s.thumbsHolderDO.addChild(u)
          }
          ;(FWDU3DCarUtils.isIE || !FWDU3DCarUtils.hasTransform3d || s._d.showDisplay2DAlways) && s.sortZ(),
            (s.setIntroFinishedId = setTimeout(s.setIntroFinished, d + 800)),
            s.showControls(!0),
            r.menuDO && r.menuDO.showFirstTime()
        }),
        (s.setupIntro2D = function () {
          for (var e = 0, t, o, n, a, l; e < s.totalThumbs; e++) {
            var d = s.thumbsAr[e],
              u = 0
            ;(u = e < s.curId ? e - s.curId + s.totalThumbs : e - s.curId),
              (d.carAngle = 2 * ((u / s.totalThumbs) * Math.PI)),
              (t = s.carRadiusX * Math.sin(d.carAngle)),
              (o = s.carRadiusY * Math.sin(d.carAngle + Math.PI / 2)),
              (n = s.carRadiusX * Math.cos(d.carAngle) - s.carRadiusX),
              0 == n && (s.mainThumbDO = d),
              (t = Math.floor(t) - Math.floor(s.thumbWidth / 2)),
              (o = Math.floor(o) - Math.floor(s.thumbHeight / 2)),
              (a = s.focalLength / (s.focalLength - n)),
              (l = Math.abs(e - s.curId) * Math.floor(1e3 / s.totalThumbs)),
              (d.newX = Math.floor(t)),
              (d.newY = Math.floor(o)),
              (d.newZ = Math.floor(n)),
              (d.newAlpha = 1 + (1 - s.thumbMinAlpha) * (n / (2 * s.carRadiusX))),
              0 != u && (d.showThumbIntro2D(a, l / 1e3), s.thumbsHolderDO.addChild(d))
          }
          s.sortZ(), (s.setIntroFinishedId = setTimeout(s.setIntroFinished, l + 800)), (s.showControlsId = setTimeout(s.showControls, l)), r.menuDO && r.menuDO.showFirstTime()
        }),
        (s.setIntroFinished = function () {
          ;(s.introFinished = !0),
            (s.allowToSwitchCat = !0),
            (s.disableThumbClick = !1),
            s.dispatchEvent(o.THUMBS_INTRO_FINISH),
            s.addNavigation(),
            (FWDU3DCarUtils.isIE || !FWDU3DCarUtils.hasTransform3d || s._d.showDisplay2DAlways) && (s.zSortingId = setInterval(s.sortZ, 16)),
            s._d.slideshowAutoplay && s.slideshowButtonDO && (s.slideshowButtonDO.onClick(), s.slideshowButtonDO.onMouseOut())
        }),
        (s.removeNavigation = function () {
          s.removeMobileDrag()
        }),
        (s.addNavigation = function () {
          s.removeNavigation(), (s.isMobile || s.useDrag) && s.setupMobileDrag()
        }),
        (s.goToThumb = function () {
          s.introFinished &&
            ((s.isAnim = !0),
            r.removeInfoDO(),
            s.hideVideo(),
            s.showScrollbar && !s.scrollbarDO.isPressed && s.scrollbarDO.gotoItem(s.curId, !0),
            s.isPlaying && (s.slideshowButtonDO.stopSlideshow(!0), clearTimeout(s.slideshowTimeoutId), (s.slideshowTimeoutId = setTimeout(s.startTimeAgain, 800))),
            (s.mainThumbDO = s.thumbsAr[s.curId]),
            s.mainThumbDO &&
              s.showCaption_bl &&
              (s.isTextSet
                ? ((s.isTextSet = !1), "in" == s.captionPosition ? (s.hideCaption(!0), clearTimeout(s.textTimeoutId), (s.textTimeoutId = setTimeout(s.setCaption, 850))) : s.setCaption())
                : "in" == s.captionPosition
                ? (clearTimeout(s.textTimeoutId), (s.textTimeoutId = setTimeout(s.setCaption, 850)))
                : s.setCaption()),
            clearTimeout(s.thumbsTweenDone_to),
            (s.thumbsTweenDone_to = setTimeout(s.thumbsTweenDone, 850)),
            (s.prevCurId = s.curId),
            (s.isOver = !1),
            s.reorderCarousel(),
            s.showBulletsNavigation && s.bulletsNavigationDO.updateBullets(s.curId),
            s.dispatchEvent(o.THUMB_CHANGE, { id: s.curId }))
        }),
        (s.normAngle = function (e) {
          for (; 0 > e; ) e += 360
          return e
        }),
        (s.reorderCarousel = function () {
          if (s.thumbsAr[s.curId]) {
            var e = s.normAngle(s.thumbsAr[s.curId].carAngle * (180 / Math.PI)) % 360,
              t
            0 <= e && 180 >= e ? (t = -e) : 180 < e && (t = 360 - e)
            for (var o = 0, r; o < s.totalThumbs; o++) {
              ;(r = s.thumbsAr[o]), s.useDrag || r.updateButtonMode()
              var n = r.carAngle + t * (Math.PI / 180),
                a = 0,
                l = 0,
                d
              if (((l = o < s.curId ? o - s.curId + s.totalThumbs : o - s.curId), o != s.curId))
                switch (s.topology) {
                  case "ring":
                    a = 360 * (l / s.totalThumbs)
                    break
                  case "star":
                    a = 360 * (l / s.totalThumbs) + 90
                    break
                  default:
                    a = 0
                }
              ;(a = Math.round(a) % 360),
                (d = s.normAngle(Math.round(r.getAngleY())) % 360),
                180 < Math.abs(d - a) && (d > a ? (d -= 360) : (a -= 360)),
                r.setAngleY(d),
                FWDAnimation.killTweensOf(r),
                FWDAnimation.to(r, 0.8, { carAngle: n, angleY: a, ease: Quart.easeOut, onUpdate: s.updateCarousel })
            }
          }
        }),
        (s.updateCarousel = function () {
          for (var e = 0, t, o, r, n, a, l; e < s.totalThumbs; e++)
            (l = s.thumbsAr[e]),
              (t = s.carRadiusX * Math.sin(l.carAngle)),
              (o = s.carRadiusY * Math.sin(l.carAngle + Math.PI / 2)),
              (r = s.carRadiusX * Math.cos(l.carAngle) - s.carRadiusX),
              0 == r && (s.mainThumbDO = l),
              (t -= Math.floor(s.thumbWidth / 2)),
              (o -= Math.floor(s.thumbHeight / 2)),
              FWDU3DCarUtils.isIEAndLessThen10 || !FWDU3DCarUtils.hasTransform3d || s._d.showDisplay2DAlways
                ? ((n = s.focalLength / (s.focalLength - r)), (l.newX = t), (l.newY = o), l.setScale(n, 1 + (1 - s.thumbMinAlpha) * (r / (2 * s.carRadiusX))))
                : (l.setX(t),
                  l.setY(o),
                  l.setZ(r),
                  (a = 1 + (1 - s.thumbMinAlpha) * (r / (2 * s.carRadiusX))),
                  l.setAlpha(a),
                  (l.screen.style.pointerEvents = FWDU3DCarUtils.isSafari && r < -s.carRadiusX ? "none" : "auto")),
              (l.newZ = Math.floor(r))
        }),
        (s.sortZ = function () {
          for (var e = 0, t, o; e < s.totalThumbs; e++) (o = s.thumbsAr[e]), (t = Math.floor(o.newZ)), o.setZIndex(t + Math.floor(2 * s.carRadiusX) + 1)
        }),
        (s.thumbsTweenDone = function () {
          var e = s.thumbsAr[s.curId]
          e &&
            (e.setX(Math.round(e.x)),
            e.setY(Math.round(e.y)),
            e.setZ(Math.round(e.z)),
            s.positionDumyCaption(),
            s.hieVideoOnFrstTween && s.hideVideo(),
            s.evp && s.evp.stop(),
            s.positionVideo(),
            (s.isAnim = !1),
            (s.curItemData = s.curDataListAr[s.curId]),
            (s.password = s.curItemData.password),
            (s.subtitleSrc = s.curItemData.subtitleSrc),
            (s.thumbPreviewSrc = s.curItemData.thumbPreviewSrc),
            (s.thumbVastSrc = s.curItemData.thumbVastSrc),
            (s.updateVideoTo = setTimeout(function () {
              s.updateVideo()
            }, 100)))
        }),
        (s.setupVideo = function () {
          function o() {
            ;(s.clicked = !0), t.removeEventListener("touchstart", o), t.removeEventListener("mousedown", o)
          }
          e.useVideo &&
            ((s.vidHld_do = new FWDU3DCarDO3D("div")),
            FWDU3DCarUtils.isMAC ? s.vidHld_do.setZ(100000008) : ((s.vidHld_do.hasT3D = !1), (s.vidHld_do.hasT2D = !1)),
            s.vidHld_do.screen.setAttribute("id", r.instName + "_evp_div"),
            s.vidHld_do.setOverflow("visible"),
            s.vidHld_do.setWidth(s.thumbWidth),
            s.vidHld_do.setHeight(s.thumbHeight),
            s.addChild(s.vidHld_do),
            FWDU3DCarSimpleButton.setPrototype(!0),
            (s.playBtnDO = e.useVectorIcons
              ? new FWDU3DCarSimpleButton(
                  0,
                  0,
                  "<div class='table-fwdevp-button'><span class='table-cell-fwdevp-button fwdu3dcar-icon fwdu3dcar-icon-play'></span></div>",
                  "EVPLargePlayButtonNormalState",
                  "selected"
                )
              : new FWDU3DCarSimpleButton(s._d.largePlayNImg, s._d.largePlaySPath)),
            FWDU3DCarUtils.isMAC && s.playBtnDO.setZ(100000009),
            s.playBtnDO.addListener(FWDEVPSimpleButton.MOUSE_UP, s.playBtnOnClick),
            s.hidePlayButton(!0),
            s.playBtnDO.setX(-5e3),
            s.addChild(s.playBtnDO),
            t.addEventListener("touchstart", o, { passive: !1 }),
            t.addEventListener("mousedown", o))
        }),
        (s.hidePlayButton = function (e) {
          s.playBtnDO && s.playBtnDO.hide(e)
        }),
        (s.playBtnOnClick = function () {
          ;(s.videoStarted = !0), s.positionVideo(), s.evp.largePlayButtonUpHandler()
        }),
        (s.hideVideo = function () {
          r.preloaderDO.hide(), (s.videoStarted = !1), s.curDataListAr[s.curId] && (s.thumbVideoSrc = s.curDataListAr[s.curId].thumbVideoSrc)
          s.curDataListAr[s.curId] &&
            e.useVideo &&
            (clearTimeout(s.updateVideoTo),
            s.hidePassWindow(),
            s.hidePlayButton(!0),
            (s.hieVideoOnFrstTween = !1),
            (s.type = s.curDataListAr[s.curId].type),
            (s.showControllerWhenVideoIsStopped = e.showControllerWhenVideoIsStopped),
            s.evp && ((s.evp.notShowPlayBtnExternal = !0), (s.evp._d.autoPlay_bl = !1), s.evp.pause(), !s.thumbVideoSrc && s.evp.goNormalScreen()),
            s.positionVideo(!0))
        }),
        (s.positionVideo = function (t) {
          function o() {
            var e = parseFloat(s.mainThumbDO.getRect().width).toFixed(3),
              t = parseFloat(s.mainThumbDO.getRect().height).toFixed(3)
            s.vidHld_do.setWidth(e - 2 * (s.borderSize * s.scale) + 1)
            var o = parseFloat(s.vidHld_do.getRect().width).toFixed(3),
              n = parseFloat(e).toFixed(3)
            n < o && (e += 1), s.vidHld_do.setWidth(Math.round(e - 2 * (s.borderSize * s.scale))), s.vidHld_do.setHeight(t - 2 * (s.borderSize * s.scale))
            var i = parseFloat(s.vidHld_do.getRect().height).toFixed(3),
              a = parseFloat(t).toFixed(3)
            a < i && (t += 1),
              (s.centerThumbW = e),
              (s.centerThumbH = t),
              s.vidHld_do.setHeight(Math.round(t - 2 * (s.borderSize * s.scale)) + 1),
              (s.centerThumbX = (s.mainThumbDO.getRect().x || s.mainThumbDO.getRect().left) - r.mainDO.getGlobalX()),
              (s.centerThumbY = (s.mainThumbDO.getRect().y || s.mainThumbDO.getRect().top) - r.mainDO.getGlobalY()),
              s.videoStarted ? (s.vidHld_do.setX(Math.round(s.centerThumbX + s.borderSize * s.scale)), s.vidHld_do.setY(Math.round(s.centerThumbY + s.borderSize * s.scale))) : s.vidHld_do.setX(-5e3),
              s.isEvpFS
                ? (s.playBtnDO.setX(Math.round((r.vwSize.w - s.playBtnDO.w) / 2)), s.playBtnDO.setY(Math.round((r.vwSize.h - s.playBtnDO.w) / 2)))
                : (s.playBtnDO.setX(Math.round(s.centerThumbX + (s.vidHld_do.w - s.playBtnDO.w) / 2)), s.playBtnDO.setY(Math.round(s.centerThumbY + (s.vidHld_do.h - s.playBtnDO.h) / 2)))
          }
          return e.useVideo
            ? !s.thumbVideoSrc || t
              ? (s.playBtnDO.setX(-5e3), void s.vidHld_do.setX(-5e3))
              : void (o(),
                setTimeout(function () {
                  FWDAnimation.isTweening(s.mainThumbDO) || o()
                }, 50),
                setTimeout(function () {
                  FWDAnimation.isTweening(s.mainThumbDO) || o()
                }, 200))
            : void 0
        }),
        (s.updateVideo = function () {
          if (!e.useVideo && s.thumbVideoSrc) return void s.dispatchEvent(o.LOAD_ERROR, { text: "Please set use video to yes to play video/audio in the carousel thumbnails." })
          if (e.useVideo && s.thumbVideoSrc)
            if (!s.evpInst) {
              function o() {
                clearTimeout(d),
                  (s.evp = t[r.instName + "_evp"]),
                  (s.evp.notShowLargePlayButton_bl = !0),
                  s.evp
                    ? (s.evp.addListener(FWDEVPlayer.READY, s.evpReady),
                      s.evp.addListener(FWDEVPlayer.FRAMEWORK_LOAD, s.evpFrLoad),
                      s.evp.addListener(FWDEVPlayer.FRAMEWORK_DONE, s.evpFrDone),
                      s.evp.addListener(FWDEVPlayer.SHOW_PLAY_BUTTON, s.showLargePlayButton),
                      s.evp.addListener(FWDEVPlayer.HIDE_PLAY_BUTTON, s.hideLargePlayButton),
                      s.evp.addListener(FWDEVPlayer.ERROR, s.evpError),
                      s.evp.addListener(FWDEVPlayer.HIDER_SHOW, s.evpShowCursor),
                      s.evp.addListener(FWDEVPlayer.SHOW_CURSOR, s.evpShowCursor),
                      s.evp.addListener(FWDEVPlayer.VOLUME_SET, s.evpVolume),
                      s.evp.addListener(FWDEVPlayer.STOP, s.evpStop),
                      s.evp.addListener(FWDEVPlayer.PAUSE, s.evpPause),
                      s.evp.addListener(FWDEVPlayer.PLAY, s.evpPlay),
                      s.evp.addListener(FWDEVPlayer.PLAY_START, s.evpPlayStart),
                      s.evp.addListener(FWDEVPlayer.PLAY_COMPLETE, s.evpPlayComplete),
                      s.evp.addListener(FWDEVPlayer.UPDATE, s.evpUpdate),
                      s.evp.addListener(FWDEVPlayer.GO_FULLSCREEN, s.evpFS),
                      s.evp.addListener(FWDEVPlayer.GO_NORMALSCREEN, s.evpNS))
                    : (d = clearTimeout(d, 50))
              }
              ;(s.isLoading = !0), (s.evpInst = !0), (FWDEVPUtils.hasTransform3d = FWDU3DCarUtils.hasTransform3d), (FWDEVPUtils.hasTransform2d = FWDU3DCarUtils.hasTransform2d)
              var n = s.password ? "yes" : "no",
                i = e.useVectorIcons ? 8 : 12,
                a = e.useVectorIcons ? 6 : 11,
                l = e.useVectorIcons ? 0 : 0
              new FWDEVPlayer({
                instanceName: r.instName + "_evp",
                parentId: r.instName + "_evp_div",
                fontIcon: "fwdu3dcar-icon",
                mainFolderPath: s._d.mainFolderPath + "rl/content/evp/",
                skinPath: "skin",
                displayType: "afterparent",
                playsinline: "yes",
                fillEntireVideoScreen: e.fillEntireVideoScreen ? "yes" : "no",
                useVectorIcons: e.useVectorIcons ? "yes" : "no",
                privateVideoPassword: s.password,
                preloaderBackgroundColor: r.preloaderBackgroundColor,
                preloaderFillColor: r.preloaderFillColor,
                startAtVideoSource: 0,
                videoSource: [{ source: s.thumbVideoSrc, label: "small version", isPrivate: n }],
                showErrorInfo: "no",
                addKeyboardSupport: e.addKeyboardSupport ? "yes" : "no",
                autoPlay: s.videoAutoPlay ? "yes" : "no",
                autoPlayText: e.videoAutoPlayText,
                volume: s.volume,
                backgroundColor: "#000000",
                showLogo: e.showLogo ? "yes" : "no",
                logoPath: e.logoPath,
                hideLogoWithController: "yes",
                logoPosition: "topRight",
                logoLink: e.logoLink,
                logoMargins: 5,
                pushBtns: l,
                showControllerWhenVideoIsStopped: "no",
                showDefaultControllerForVimeo: e.showDefaultControllerForVimeo ? "yes" : "no",
                showScrubberWhenControllerIsHidden: e.showScrubberWhenControllerIsHidden ? "yes" : "no",
                showVolumeButton: e.showVolumeButton ? "yes" : "no",
                showVolumeScrubber: e.showVolumeButton ? "yes" : "no",
                showTime: e.showTime ? "yes" : "no",
                showRewindButton: e.showRewindButton ? "yes" : "no",
                showShareButton: "no",
                showEmbedButton: "no",
                showQualityButton: e.showQualityButton ? "yes" : "no",
                showChromecastButton: e.showChromecastButton ? "yes" : "no",
                showFullScreenButton: e.showFullScreenButton ? "yes" : "no",
                showMainScrubberToolTipLabel: e.showScrubberToolTipLabel ? "yes" : "no",
                controllerHeight: 42,
                controllerHideDelay: 3,
                startSpaceBetweenButtons: a,
                spaceBetweenButtons: i,
                mainScrubberOffestTop: 13,
                scrubbersOffsetWidth: 3,
                timeOffsetLeftWidth: 3,
                timeOffsetRightWidth: 2,
                volumeScrubberWidth: 70,
                volumeScrubberOffsetRightWidth: 0,
                timeColor: e.timeColor,
                youtubeQualityButtonNormalColor: e.youtubeQualityButtonNormalColor,
                youtubeQualityButtonSelectedColor: e.youtubeQualityButtonSelectedColor,
                scrubbersToolTipLabelBackgroundColor: e.scrubbersToolTipLabelBackgroundColor,
                scrubbersToolTipLabelFontColor: e.scrubbersToolTipLabelFontColor,
                showSubtitleButton: "no",
                startAtSubtitle: 1,
                subtitlesSource: [{ subtitlePath: s.subtitleSrc, subtileLabel: "test" }],
                showPlaybackRateButton: e.showPlaybackRateButton ? "yes" : "no",
                defaultPlaybackRate: "1",
                audioVisualizerLinesColor: e.audioVisualizerLinesColor,
                audioVisualizerCircleColor: e.audioVisualizerCircleColor,
                thumbnailsPreview: "auto",
                thumbnailsPreviewWidth: e.thumbnailsPreviewWidth,
                thumbnailsPreviewBackgroundColor: e.thumbnailsPreviewBackgroundColor,
                thumbnailsPreviewBorderColor: e.thumbnailsPreviewBorderColor,
                thumbnailsPreviewLabelBackgroundColor: e.thumbnailsPreviewLabelBackgroundColor,
                thumbnailsPreviewLabelFontColor: e.thumbnailsPreviewLabelFontColor,
                vastSource: s.thumbVastSrc,
                openNewPageAtTheEndOfTheAds: "no",
                adsButtonsPosition: "right",
                skipToVideoText: e.skipToVideoText,
                skipToVideoButtonText: e.skipToVideoButtonText,
                adsTextNormalColor: "#B9B9B9",
                adsTextSelectedColor: "#FFFFFF",
                adsBorderNormalColor: "#2e2e2e",
                adsBorderSelectedColor: "#FFFFFF",
                contextMenuType: "disabled",
                embedWindowCloseButtonMargins: 15,
                borderColor: "#333333",
                mainLabelsColor: "#FFFFFF",
                secondaryLabelsColor: "#a1a1a1",
                shareAndEmbedTextColor: "#5a5a5a",
                inputBackgroundColor: "#000000",
                inputColor: "#FFFFFF",
              }),
                setTimeout(function () {
                  s.evp._d.thumbnailsPreview = s.thumbPreviewSrc
                }, 200)
              var d
              o()
            } else
              (s.evp.notShowPlayBtnExternal = !1),
                s.evp.controller_do.hide(!1, !0),
                (s.evp._d.showControllerWhenVideoIsStopped_bl = s.showControllerWhenVideoIsStopped),
                (s.evp.controller_do.showControllerWhenVideoIsStopped_bl = s.showControllerWhenVideoIsStopped),
                (s.evp.prevVideoSource_str = ""),
                e.addKeyboardSupport ? s.evp.addKeyboardSupport() : s.evp.removeKeyboardSupport(),
                (s.evp._d.autoPlay_bl = s.videoAutoPlay || s.nextVideoAutoPlay),
                s.clicked && !s.nextVideoAutoPlay && (s.evp._d.autoPlay_bl = !1),
                (s.evp._d.subtitles_ar[0].source = s.subtitleSrc),
                (s.evp._d.thumbnailsPreview = s.thumbPreviewSrc || void 0),
                s.evp.setVolume(s.volume),
                (s.evp._d.privateVideoPassword_str = s.password),
                s.evp.setVideoSource(s.thumbVideoSrc, "", "", "", s.thumbVastSrc, !!s.password),
                s.nextVideoAutoPlay && (s.playAudio(), s.type != FWDU3DCar.AUDIO && (s.slideshowButtonDO.pause(), (s.videoStarted = !0)))
        }),
        (s.evpReady = function () {
          s.isLoading = !1
        }),
        (s.evpFrLoad = function () {
          r.showPreloader(), (s.isLoading = !0)
        }),
        (s.evpFrDone = function () {
          s.isLoading = !1
        }),
        (s.showLargePlayButton = function () {
          r.preloaderDO.hide(), s.videoStarted ? s.playBtnDO.show() : s.playBtnDO.show(0.15)
        }),
        (s.hideLargePlayButton = function () {
          s.hidePlayButton(!0)
        }),
        (s.evpError = function (t) {
          ;(s.isLoading = !1), r.preloaderDO.hide(), s.dispatchEvent(o.LOAD_ERROR, { text: t.error })
        }),
        (s.evpPlayStart = function () {
          s.slideshowButtonDO.pause(), r.preloaderDO.hide(), (s.evp.notShowLargePlayButton_bl = !1), (s.videoStarted = !0), s.positionVideo()
        }),
        (s.playAudio = function () {
          if (s.evp && s.type == FWDU3DCar.AUDIO && s.clicked) {
            if (FWDU3DCarUtils.isIOS && !s.audioPlayed) return
            s.slideshowButtonDO.pause(), s.evp.play(), (s.videoStarted = !0)
          }
        }),
        (s.evpVolume = function (t) {
          s.isAnim ||
            s.evp._d.autoPlay_bl ||
            ((s.volume = t.volume), s.type == FWDU3DCar.YOUTUBE ? (s.youtubePlayed = !0) : s.type == FWDU3DCar.VIDEO ? (s.videoPlayed = !0) : s.type == FWDU3DCar.AUDIO && (s.audioPlayed = !0))
        }),
        (s.evpPlay = function () {
          return s.isAnim
            ? ((s.evp.notShowPlayBtnExternal = !0), void s.evp.pause())
            : void (s.clicked &&
                (FWDU3DCarUtils.isMAC && s.type == FWDU3DCar.VIDEO && !s.videoPlayed
                  ? s.evp.setupAPT()
                  : (!FWDU3DCarUtils.isIOS || ((s.type != FWDU3DCar.VIDEO || s.videoPlayed) && (s.type != FWDU3DCar.VIMEO || s.vimeoPlayed) && (s.type != FWDU3DCar.YOUTUBE || s.youtubePlayed))) &&
                    (!s.isMobile || s.videoPlayed)
                  ? setTimeout(function () {
                      s.evp.setVolume(s.volume, !0)
                    }, 10)
                  : s.evp.setupAPT()),
              !FWDU3DCarUtils.isIOS && ((s.audioPlayed = !0), (s.videoPlayed = !0)))
        }),
        (s.evpPlayComplete = function () {
          if (((s.videoStarted = !1), s.nextVideoAutoPlay || !s.slideshowButtonDO.isStopped)) {
            ;(s.curId += 1), 0 > s.curId ? (s.curId = s.totalThumbs - 1) : s.curId > s.totalThumbs - 1 && (s.curId = 0)
            var e = s.curDataListAr[s.curId].type
            e == FWDU3DCar.VIDEO || e == FWDU3DCar.YOUTUBE || e == FWDU3DCar.VIMEO || e == FWDU3DCar.AUDIO ? s.goToThumb() : !s.slideshowButtonDO.isStopped && s.goToThumb()
          }
        }),
        (s.evpStop = function () {
          ;(s.videoStarted = !1), s.hidePlayButton(), s.positionVideo(), "in" != s.captionPosition || s.isAnim || (s.hideCaption(), s.onThumbOutHandler(!0, !0))
        }),
        (s.evpPause = function () {
          s.evp.showLargePlayButton(0)
        }),
        (s.evpFS = function () {
          ;(s.so = FWDU3DCarUtils.getScrollOffsets()),
            (s.fsX = s.so.x),
            (s.fsY = s.so.y),
            (s.isEvpFS = s.isEvpFSDL = s.isFullScreen = s.evp.isFullScreen_bl),
            s.evp.isPlaying_bl || s.evp.showLargePlayButton(0),
            s.slideshowButtonDO.pause(),
            s.evp.main_do.addChild(s.playBtnDO),
            s.updateEVPCursor(!1),
            s.positionVideo(),
            s.resizeHandler(!1, !0),
            r.dispatchEvent(FWDU3DCar.GO_FULLSCREEN)
        }),
        (s.evpNS = function (t) {
          ;(s.so = FWDU3DCarUtils.getScrollOffsets()),
            (s.isEvpFS = s.evp.isFullScreen_bl),
            t &&
              setTimeout(function () {
                s.isEvpFSDL = s.evp.isFullScreen_bl
              }, 200),
            s.addChild(s.playBtnDO),
            s.updateEVPCursor(),
            s.resizeHandler(!1, !0),
            r.menuDO && r.menuDO.position(),
            FWDU3DCarUtils.isMAC &&
              setTimeout(function () {
                s.resizeHandler(!1, !0), r.menuDO && r.menuDO.position()
              }, 800),
            r.dispatchEvent(FWDU3DCar.GO_NORMALSCREEN)
        }),
        (s.evpShowCursor = function () {
          s.updateEVPCursor()
        }),
        (s.updateEVPCursor = function (e) {
          s.evp &&
            (!s.useDrag || s.isEvpFS || s.evp.isFullScreen_bl
              ? s.evp.dClk_do && (s.evp.dClk_do.style().cursor = s.defaultC)
              : (!e && (e = s.handC), s.evp.dClk_do && (s.evp.dClk_do.style().cursor = e)))
        }),
        (s.hidePassWindow = function () {
          s.evp && s.evp.passWindow_do && s.evp.passWindow_do.hide(!0)
        }),
        (s.evpUpdate = function (t) {
          s.videoStarted && s.slideshowButtonDO.slp_do.drawFill(t.percent)
        }),
        (s.setupControls = function () {
          ;(s.controlsDO = new FWDU3DCarDO3D("div")),
            s.addChild(s.controlsDO),
            s.controlsDO.setZ(2e5),
            (s.controlsWidth = s._d.prevButtonNImg.width),
            s._d.enableMouseWheelScroll && s.addMouseWheelSupport(),
            s._d.addKeyboardSupport && s.addKeyboardSupport(),
            s.setupScrollbar(),
            s.setupPrevButton(),
            s.setupNextButton(),
            s.setupSlideshowButton(),
            s.setupBulletsNavigation(),
            s.setupLargeNextButton(),
            s.setupLargePrevButton(),
            setTimeout(function () {
              ;(s.controlsHeight = s.nextButtonDO.h), s.controlsDO.setHeight(s.controlsHeight), s.resizeHandler()
            }, 10)
        }),
        (s.showControls = function () {
          s.hideControls(), (s.isControlsShowed = !0), FWDAnimation.to(s.controlsDO, 0.8, { alpha: 1, y: s.controlsY, ease: Expo.easeInOut })
        }),
        (s.hideControls = function (e) {
          if (s.controlsDO) {
            s.isControlsShowed = !1
            var t = s.controlsY + s.controlsDO.h
            s.showBulletsNavigation && ((s.controlsDO = s.bulletsNavigationDO), (t = s.controlsY)),
              FWDAnimation.killTweensOf(s.controlsDO),
              e ? FWDAnimation.to(s.controlsDO, 0.8, { alpha: 0, y: t, ease: Expo.easeOut }) : (s.controlsDO.setAlpha(0), s.controlsDO.setY(t))
          }
        }),
        (s.positionControls = function (t) {
          s.controlsWidth = 0
          var o
          s.isControlsShowed && (FWDAnimation.killTweensOf(s.controlsDO), s.controlsDO.setAlpha(1)),
            s.showNextAndPrevButtons ? (s.controlsWidth = s.prevButtonDO.w + s.nextButtonDO.w + 2 * s.nextAndPrevButtonsOffsetX) : s.showSlideshowButton && (s.controlsWidth = s.slideshowButtonDO.w),
            s.showScrollbar
              ? (s.scrollbarDO.resize(s.stageWidth - 2 * s.nextAndPrevButtonsOffsetX, s.controlsWidth),
                s.showScrollbar && s.scrollbarDO.trackWidth
                  ? (s.showNextAndPrevButtons && s.scrollbarDO.setX(s.prevButtonDO.w + s.nextAndPrevButtonsOffsetX), (o = s.scrollbarDO.x + s.scrollbarDO.getWidth() + s.nextAndPrevButtonsOffsetX))
                  : (o = 0))
              : (s.scrollbarDO.setX(-1e3), (o = s.showNextAndPrevButtons ? s.nextButtonDO.w + s.nextAndPrevButtonsOffsetX : 0)),
            s.showNextAndPrevButtons
              ? ((!s.showScrollbar || !s.scrollbarDO.trackWidth) && (s.showSlideshowButton && (s.controlsWidth += s.slideshowButtonDO.w), (o = s.controlsWidth - s.nextButtonDO.w)),
                s.nextButtonDO.setX(o))
              : (s.nextButtonDO.setX(-200), s.prevButtonDO.setX(-200)),
            e.showSlideshowButton
              ? (s.showScrollbar && s.scrollbarDO.trackWidth
                  ? (o -= s.slideshowButtonDO.w + s.nextAndPrevButtonsOffsetX)
                  : (!s.showScrollbar || !s.scrollbarDO.trackWidth) && (o = Math.round((s.controlsWidth - s.slideshowButtonDO.w) / 2)),
                s.slideshowButtonDO.setX(o))
              : s.slideshowButtonDO.setX(-200),
            s.showScrollbar
              ? (s.controlsDO.setX(Math.floor((s.stageWidth - (s.controlsWidth + s.scrollbarDO.getWidth())) / 2)), s.controlsDO.setWidth(s.controlsWidth + s.scrollbarDO.getWidth()))
              : (s.controlsDO.setX(Math.floor((s.stageWidth - s.controlsWidth) / 2)), s.controlsDO.setWidth(s.controlsWidth))
          var n
          s.showBulletsNavigation
            ? (s.bulletsNavigationDO.setX(Math.floor((s.stageWidth - s.bulletsNavigationDO.w) / 2)),
              s.controlsDO.setWidth(s.controlsDO.totalWidth),
              s.controlsDO.setHeight(s.controlsDO.totalHeight),
              (s.controlsDO = s.bulletsNavigationDO),
              (s.controlsHeight = s.bulletsNavigationDO.totalHeight),
              s.controlsDO.setX(Math.floor((s.stageWidth - s.controlsDO.w) / 2)))
            : s.bulletsNavigationDO.setX(-1e4),
            (n = s.stageHeight - s.controlsHeight + s.controlsOffset),
            "out" == s.captionPosition && (n += r.captionH),
            (n -= Math.round((r.carouselOffsetHeight - s.controlsHeight - s.borderSize) / 2)),
            s.isEvpFS && (n = -500),
            (s.controlsY = n),
            FWDAnimation.killTweensOf(s.controlsDO),
            t ? FWDAnimation.to(s.controlsDO, 0.8, { y: s.controlsY, ease: Quint.easeOut }) : s.controlsDO.setY(s.controlsY)
        }),
        (s.setupLargeNextButton = function () {
          FWDU3DCarSimpleButton.setPrototype()
          var t = "fwdu3dcar-button large"
          e.isSkinWhite && (t = "fwdu3dcar-button large white"),
            (s.largeNextButtonDO = e.useVectorIcons
              ? new FWDU3DCarSimpleButton(0, 0, '<span class="fwdu3dcar-icon fwdu3dcar-icon-next"></span>', t, "selected")
              : new FWDU3DCarSimpleButton(s._d.largeNextButton_img, s._d.largeNextButtonSPath_str)),
            (s.largeNextButtonDO.screen.className = "fwdu3dcar-large-next-button"),
            s.largeNextButtonDO.addListener(FWDU3DCarSimpleButton.CLICK, s.nextButtonOnClickHandler),
            s.largeNextButtonDO.setDisabledState(),
            s.largeNextButtonDO.setOverflow("visible"),
            s.largeNextButtonDO.n_do.setAlpha(0),
            s.addChild(s.largeNextButtonDO)
        }),
        (s.setupLargePrevButton = function () {
          FWDU3DCarSimpleButton.setPrototype()
          var t = "fwdu3dcar-button large"
          e.isSkinWhite && (t = "fwdu3dcar-button large white"),
            (s.largePrevButtonDO = e.useVectorIcons
              ? new FWDU3DCarSimpleButton(0, 0, '<span class="fwdu3dcar-icon fwdu3dcar-icon-prev"></span>', t, "selected")
              : new FWDU3DCarSimpleButton(s._d.largePrevButton_img, s._d.largePrevButtonSPath_str)),
            (s.largePrevButtonDO.screen.className = "fwdu3dcar-large-prev-button"),
            s.largePrevButtonDO.addListener(FWDU3DCarSimpleButton.CLICK, s.prevButtonOnClickHandler),
            s.largePrevButtonDO.setDisabledState(),
            s.largePrevButtonDO.setOverflow("visible"),
            s.largePrevButtonDO.n_do.setAlpha(0),
            s.addChild(s.largePrevButtonDO)
        }),
        (s.showLargeNextAndPrevButtons = function () {
          ;(s.areLargeNextAndPrevButtonsShowed = !0),
            s.largePrevButtonDO.n_do.setX(-s.largePrevButtonDO.w),
            s.largeNextButtonDO.n_do.setX(s.largeNextButtonDO.w),
            FWDAnimation.to(s.largePrevButtonDO.n_do, 0.8, { x: 0, alpha: 1, ease: Quint.easeOut }),
            FWDAnimation.to(s.largeNextButtonDO.n_do, 0.8, { x: 0, alpha: 1, ease: Quint.easeOut })
        }),
        (s.hideLargeNextAndPrevButtons = function () {
          s.areLargeNextAndPrevButtonsShowed &&
            ((s.areLargeNextAndPrevButtonsShowed = !1),
            s.largePrevButtonDO.setDisabledState(),
            s.largeNextButtonDO.setDisabledState(),
            FWDAnimation.to(s.largePrevButtonDO.n_do, 0.8, { alpha: 0, x: -s.largePrevButtonDO.w, ease: Quint.easeOut }),
            FWDAnimation.to(s.largeNextButtonDO.n_do, 0.8, { alpha: 0, x: s.largeNextButtonDO.w, ease: Quint.easeOut }))
        }),
        (s.postionNextAndPrevLargeButtons = function () {
          s.showLargeNextAndPrevButtons_bl
            ? ((s.pX = Math.round((s.stageWidth - s.largeNextAndPrevButtonsMaxWidthPos) / 2)),
              (s.nX = Math.round((s.stageWidth + s.largeNextAndPrevButtonsMaxWidthPos) / 2) - s.largeNextButtonDO.w),
              s.stageWidth > s.largeNextAndPrevButtonsMaxWidthPos || !s.largeNextAndPrevButtonsMaxWidthPos
                ? (s.largeNextButtonDO.setVisible(!0), s.largePrevButtonDO.setVisible(!0))
                : (s.largeNextButtonDO.setVisible(!1), s.largePrevButtonDO.setVisible(!1)),
              s.largePrevButtonDO.setX(s.pX),
              s.largeNextButtonDO.setX(s.nX),
              s.largeNextButtonDO.setY(parseInt((s.stageHeight - s.largeNextButtonDO.h) / 2)),
              s.largePrevButtonDO.setY(parseInt((s.stageHeight - s.largePrevButtonDO.h) / 2)))
            : (s.largeNextButtonDO.setVisible(!1), s.largePrevButtonDO.setVisible(!1))
        }),
        (s.setupBulletsNavigation = function () {
          FWDU3DCarBulletsNavigation.setPrototype(),
            (s.bulletsNavigationDO = new FWDU3DCarBulletsNavigation(s._d, s.totalThumbs, s.curId)),
            s.bulletsNavigationDO.addListener(FWDU3DCarBulletsNavigation.BULLET_CLICK, s.bulletNavigationClick),
            s.addChild(s.bulletsNavigationDO)
        }),
        (s.bulletNavigationClick = function (t) {
          s.isLoading || ((s.curId = t.id), s.goToThumb())
        }),
        (s.setupPrevButton = function () {
          FWDU3DCarSimpleButton.setPrototype()
          var t = "fwdu3dcar-button"
          e.isSkinWhite && (t = "fwdu3dcar-button white"),
            (s.prevButtonDO = e.useVectorIcons
              ? new FWDU3DCarSimpleButton(0, 0, '<span class="fwdu3dcar-icon fwdu3dcar-icon-prev"></span>', t, "selected")
              : new FWDU3DCarSimpleButton(s._d.prevButtonNImg, s._d.prevButtonSPath)),
            (s.prevButtonDO.screen.className = "fwdu3dcar-prev-button"),
            s.prevButtonDO.addListener(FWDU3DCarSimpleButton.CLICK, s.prevButtonOnClickHandler),
            s.controlsDO.addChild(s.prevButtonDO)
        }),
        (s.prevButtonOnClickHandler = function () {
          s.isLoading || (0 < s.curId ? s.curId-- : (s.curId = s.totalThumbs - 1), s.goToThumb())
        }),
        (s.setupNextButton = function () {
          FWDU3DCarSimpleButton.setPrototype()
          var t = "fwdu3dcar-button"
          e.isSkinWhite && (t = "fwdu3dcar-button white"),
            (s.nextButtonDO = e.useVectorIcons
              ? new FWDU3DCarSimpleButton(0, 0, '<span class="fwdu3dcar-icon fwdu3dcar-icon-next"></span>', t, "selected")
              : new FWDU3DCarSimpleButton(s._d.nextButtonNImg, s._d.nextButtonSPath)),
            (s.nextButtonDO.screen.className = "fwdu3dcar-next-button"),
            s.nextButtonDO.addListener(FWDU3DCarSimpleButton.CLICK, s.nextButtonOnClickHandler),
            s.controlsDO.addChild(s.nextButtonDO),
            s.nextButtonDO.setX(s.controlsWidth),
            (s.controlsWidth += s.nextButtonDO.getWidth())
        }),
        (s.nextButtonOnClickHandler = function () {
          s.isLoading || (s.curId < s.totalThumbs - 1 ? s.curId++ : (s.curId = 0), s.goToThumb())
        }),
        (s.setupSlideshowButton = function () {
          FWDU3DCarSlideshowButton.setPrototype(),
            (s.slideshowButtonDO = new FWDU3DCarSlideshowButton(s, s._d)),
            (s.prevButtonDO.screen.className = "fwdu3dcar-slideshow-button"),
            s.slideshowButtonDO.addListener(FWDU3DCarSlideshowButton.PLAY_CLICK, s.onSlideshowButtonPlayClickHandler),
            s.slideshowButtonDO.addListener(FWDU3DCarSlideshowButton.PAUSE_CLICK, s.onSlideshowButtonPauseClickHandler),
            s.slideshowButtonDO.addListener(FWDU3DCarSlideshowButton.TIME, s.onSlideshowButtonTime),
            s.controlsDO.addChild(s.slideshowButtonDO),
            s.slideshowButtonDO.setX(s.controlsWidth),
            s.showSlideshowButton || s.slideshowButtonDO.setX(-5e3),
            (s.controlsWidth += s.slideshowButtonDO.getWidth()),
            s.showSlideshowButton || (s.slideshowButtonDO.setVisible(!1), (s.controlsWidth -= s.slideshowButtonDO.getWidth()))
        }),
        (s.onSlideshowButtonPlayClickHandler = function () {
          s.isPlaying = !0
        }),
        (s.onSlideshowButtonPauseClickHandler = function () {
          ;(s.isPlaying = !1), clearTimeout(s.slideshowTimeoutId)
        }),
        (s.startSlideshow = function () {
          s.isPlaying || ((s.isPlaying = !0), s.slideshowButtonDO.start(), s.slideshowButtonDO.onMouseOut())
        }),
        (s.stopSlideshow = function () {
          s.isPlaying && ((s.isPlaying = !1), clearTimeout(s.slideshowTimeoutId), s.slideshowButtonDO.stop(), s.slideshowButtonDO.onMouseOut())
        }),
        (s.onSlideshowButtonTime = function () {
          s.isLoading || (s.curId == s.totalThumbs - 1 ? (s.curId = 0) : s.curId++, s.goToThumb())
        }),
        (s.startTimeAgain = function () {
          s.slideshowButtonDO.resume()
        }),
        (s.setupScrollbar = function () {
          FWDU3DCarScrollbar.setPrototype(),
            (s.scrollbarDO = new FWDU3DCarScrollbar(s._d, s.totalThumbs, s.curId, s)),
            s.scrollbarDO.addListener(FWDU3DCarScrollbar.MOVE, s.onScrollbarMove),
            s.controlsDO.addChild(s.scrollbarDO),
            (s.controlsWidth += s.scrollbarDO.getWidth())
        }),
        (s.onScrollbarMove = function (t) {
          ;(s.curId = t.id), s.goToThumb()
        }),
        (s.addMouseWheelSupport = function () {
          s.prt.mainDO.screen.addEventListener("mousewheel", s.mouseWheelHandler), s.prt.mainDO.screen.addEventListener("DOMMouseScroll", s.mouseWheelHandler)
        }),
        (s.mouseWheelHandler = function (t) {
          if (s.introFinished && s.allowToSwitchCat && !s.isLoading && !(s.showScrollbar && s.scrollbarDO.isPressed)) {
            var e = t.detail || t.wheelDelta
            return (
              t.wheelDelta && (e *= -1),
              0 < e ? (s.curId < s.totalThumbs - 1 ? s.curId++ : (s.curId = 0)) : 0 > e && (0 < s.curId ? s.curId-- : (s.curId = s.totalThumbs - 1)),
              s.goToThumb(),
              !!t.preventDefault && void t.preventDefault()
            )
          }
        }),
        (s.setupMobileDrag = function () {
          1 >= s.totalThumbs ||
            (s.hasPointerEvent
              ? s.prt.mainDO.screen.addEventListener("pointerdown", s.mobileDragStartHandler)
              : s.isMobile
              ? s.prt.mainDO.screen.addEventListener("touchstart", s.mobileDragStartTest)
              : s.prt.mainDO.screen.addEventListener("mousedown", s.mobileDragStartHandler))
        }),
        (s.mobileDragStartTest = function (o) {
          var e = FWDU3DCarUtils.getViewportMouseCoordinates(o)
          ;(s.lastPressedX = e.screenX),
            (s.lastPressedY = e.screenY),
            (s.dragCurId = s.curId),
            s.isMobile && (t.addEventListener("touchmove", s.mobileDragMoveTest, { passive: !1 }), t.addEventListener("touchend", s.mobileDragEndTest))
        }),
        (s.mobileDragMoveTest = function (t) {
          if (1 == t.touches.length) {
            s.disableThumbClick = !0
            var e = FWDU3DCarUtils.getViewportMouseCoordinates(t)
            ;(s.mouseX = e.screenX), (s.mouseY = e.screenY)
            var o = Math.atan2(s.mouseY - s.lastPressedY, s.mouseX - s.lastPressedX),
              r = (180 * Math.abs(o)) / Math.PI
            ;(120 < r || 60 > r) && (t.preventDefault && t.preventDefault(), s.mobileDragStartHandler(t)), s.mobileDragEndTest()
          }
        }),
        (s.mobileDragEndTest = function () {
          ;(s.disableThumbClick = !1), t.removeEventListener("touchmove", s.mobileDragMoveTest), t.removeEventListener("touchend", s.mobileDragEndTest)
        }),
        (s.mobileDragStartHandler = function (o) {
          if (!((r.menuDO && r.menuDO.isShowed_bl) || s.isLoading) && s.introFinished && s.allowToSwitchCat && !s.isLoading) {
            var e = FWDU3DCarUtils.getViewportMouseCoordinates(o)
            ;(s.vmcX = e.screenX),
              (s.vmcY = e.screenY),
              FWDU3DCarUtils.hitTest(s.controlsDO.screen, s.vmcX, s.vmcY) ||
                FWDU3DCarUtils.hitTest(s.bulletsNavigationDO.screen, s.vmcX, s.vmcY) ||
                (s.evp &&
                  s.evp.controller_do &&
                  (FWDU3DCarUtils.hitTest(s.evp.controller_do.mainHolder_do.screen, e.screenX, e.screenY) ||
                    FWDU3DCarUtils.hitTest(s.playBtnDO.screen, e.screenX, e.screenY) ||
                    (s.evp.apt && FWDU3DCarUtils.hitTest(s.evp.apt.screen, e.screenX, e.screenY)))) ||
                s.isEvpFSDL ||
                ((s.mouseX = s.lastPressedX = e.screenX),
                (s.lastDragNumber = 100),
                (s.dragCurId = s.curId),
                s.useDrag && ((s.style().cursor = s.grabC), (r.mainDO.style().cursor = s.grabC), "in" == s.captionPosition && (s.textHolderDO.style().cursor = s.grabC), s.updateEVPCursor(s.grabC)),
                s.hasPointerEvent
                  ? (t.addEventListener("pointerup", s.mobileDragEndHandler), t.addEventListener("pointermove", s.mobileDragMoveHandler))
                  : s.isMobile
                  ? (t.addEventListener("touchend", s.mobileDragEndHandler), t.addEventListener("touchmove", s.mobileDragMoveHandler, { passive: !1 }))
                  : (t.addEventListener("mouseup", s.mobileDragEndHandler), t.addEventListener("mousemove", s.mobileDragMoveHandler)))
          }
        }),
        (s.mobileDragMoveHandler = function (t) {
          t.preventDefault && t.preventDefault()
          var e = FWDU3DCarUtils.getViewportMouseCoordinates(t)
          if ((Math.abs(s.lastPressedX - e.screenX) && ((s.disableThumbClick = !0), s.showDsb()), s.useDrag)) {
            var o = 100
            600 > s.stageWidth && (o = 60), (s.curDragNumber = parseInt((s.mouseX - s.lastPressedX) / o))
            var r = "none"
            0 < s.mouseX - s.lastPressedX ? (r = "plus") : 0 > s.mouseX - s.lastPressedX && (r = "minus"),
              "plus" == r
                ? -1 == s.curId
                  ? (s.curId = s.totalThumbs - 1)
                  : s.lastDragNumber != s.curDragNumber && (--s.curId, (s.lastPressedX = e.screenX))
                : "minus" == r && (s.curId == s.totalThumbs ? (s.curId = 0) : s.lastDragNumber != s.curDragNumber && (s.curId++, (s.lastPressedX = e.screenX))),
              s.updateEVPCursor(s.handC)
          }
          ;(s.mouseX = e.screenX), s.curId != s.prevCurId && s.goToThumb(), (s.lastDragNumber = s.curDragNumber)
        }),
        (s.mobileDragEndHandler = function () {
          s.hideDsb(),
            setTimeout(function () {
              s.disableThumbClick = !1
            }, 50),
            s.useDrag && !s.isMobile && ((s.style().cursor = s.handC), (r.mainDO.style().cursor = s.handC), "in" == s.captionPosition && (s.textHolderDO.style().cursor = s.handC)),
            s.hasPointerEvent
              ? (t.removeEventListener("pointerup", s.mobileDragEndHandler), t.removeEventListener("pointermove", s.mobileDragMoveHandler))
              : s.isMobile
              ? (t.removeEventListener("touchend", s.mobileDragEndHandler), t.removeEventListener("touchmove", s.mobileDragMoveHandler))
              : (t.removeEventListener("mouseup", s.mobileDragEndHandler), t.removeEventListener("mousemove", s.mobileDragMoveHandler))
        }),
        (s.removeMobileDrag = function () {
          s.hasPointerEvent
            ? (s.prt.mainDO.screen.removeEventListener("pointerdown", s.mobileDragStartHandler),
              t.removeEventListener("pointerup", s.mobileDragEndHandler),
              t.removeEventListener("pointermove", s.mobileDragMoveHandler))
            : s.isMobile
            ? t.addEventListener &&
              (s.prt.mainDO.screen.removeEventListener("touchstart", s.mobileDragStartTest),
              t.removeEventListener("touchmove", s.mobileDragMoveTest),
              t.removeEventListener("touchmove", s.mobileDragMoveHandler),
              t.removeEventListener("touchend", s.mobileDragEndTest))
            : (s.prt.mainDO.screen.removeEventListener("mousedown", s.mobileDragStartHandler),
              t.removeEventListener("mouseup", s.mobileDragEndHandler),
              t.removeEventListener("mousemove", s.mobileDragMoveHandler))
        }),
        (s.addKeyboardSupport = function () {
          document.addEventListener("keydown", s.onKeyDownHandler), document.addEventListener("keyup", s.onKeyUpHandler)
        }),
        (s.onKeyDownHandler = function (t) {
          if (
            s.introFinished &&
            s.allowToSwitchCat &&
            !s.isLoading &&
            !FWDU3DCar.rlShowed &&
            !(s.showScrollbar && s.scrollbarDO.isPressed) &&
            !(r.lightboxDO && r.lightboxDO.isShowed_bl) &&
            !((s.evp && s.evp.isPlaying_bl) || s.isEvpFS) &&
            !(0 > r.stageContainer.getBoundingClientRect().top + r.stageHeight)
          )
            if ((document.removeEventListener("keydown", s.onKeyDownHandler), 39 == t.keyCode)) {
              if ((s.curId < s.totalThumbs - 1 ? s.curId++ : (s.curId = 0), s.goToThumb(), t.preventDefault)) t.preventDefault()
              else return !1
            } else if (37 == t.keyCode)
              if ((0 < s.curId ? s.curId-- : (s.curId = s.totalThumbs - 1), s.goToThumb(), t.preventDefault)) t.preventDefault()
              else return !1
        }),
        (s.onKeyUpHandler = function () {
          document.addEventListener("keydown", s.onKeyDownHandler)
        }),
        (s.update = function (t) {
          s.updated = !0
          var e = t.carRadiusX
          FWDU3DCarUtils.isIEAndLessThen10 && (e /= 1.5),
            FWDAnimation.to(s, 0.8, { carRadiusX: e, ease: Quart.easeOut }),
            FWDAnimation.to(s, 0.8, { carRadiusY: t.carRadiusY, ease: Quart.easeOut }),
            (s.carYOffset = t.carYOffset),
            (s.carouselXRot = t.carouselXRot),
            (s.thumbMinAlpha = t.thumbMinAlpha),
            (s.topology = s.topologiesAr[t.carouselTopology]),
            (s.showRefl = t.showRefl),
            (s.reflDist = t.reflDist),
            (s.showCenterImg = t.showCenterImg),
            s.showCenterImg && !s.centerImgDO && s.setupCenterImg(),
            s.centerImgDO && (s.showCenterImg ? s.centerImgDO.setAlpha(1) : s.centerImgDO.setAlpha(0))
          var o = Math.floor(s.stageHeight / 2) + s.carYOffset
          FWDAnimation.to(s.thumbsHolderDO, 0.8, { y: o, angleX: -s.carouselXRot, ease: Quart.easeOut })
          for (var r = 0; r < s.totalThumbs; r++) s.thumbsAr[r].update()
          s.goToThumb()
        }),
        s.init()
    }
    ;(o.setPrototype = function () {
      o.prototype = new FWDU3DCarDO3D("div", "relative", "visible")
    }),
      (o.THUMB_CLICK = "onThumbClick"),
      (o.LOAD_ERROR = "onLoadError"),
      (o.THUMBS_INTRO_FINISH = "onThumbsIntroFinish"),
      (o.THUMB_CHANGE = "onThumbChange"),
      (t.FWDU3DCarThumbsManager = o)
  })(window),
  (function (e) {
    var t = function (e, o) {
      "use strict"
      var r = this,
        s = t.prototype
      r.timeOutId,
        (r.delay = e),
        (r.isStopped_bl = !o),
        (r.stop = function () {
          clearTimeout(r.timeOutId), r.dispatchEvent(t.STOP)
        }),
        (r.start = function () {
          r.isStopped_bl || ((r.timeOutId = setTimeout(r.onTimeHanlder, r.delay)), r.dispatchEvent(t.START))
        }),
        (r.onTimeHanlder = function () {
          r.dispatchEvent(t.TIME)
        })
    }
    ;(t.setProtptype = function () {
      t.prototype = new FWDU3DCarEventDispatcher()
    }),
      (t.START = "start"),
      (t.STOP = "stop"),
      (t.TIME = "time"),
      (t.prototype = null),
      (e.FWDU3DCarTimerManager = t)
  })(window),
  (function (e) {
    function t() {
      for (var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"], t, o; (t = e.shift()); )
        if (
          "undefined" != typeof r.dumy.style[t] &&
          ((r.dumy.style.position = "absolute"),
          (o = r.dumy.getBoundingClientRect().left),
          (r.dumy.style[t] = "translate3d(500px, 0px, 0px)"),
          (o = Math.abs(r.dumy.getBoundingClientRect().left - o)),
          100 < o && 900 > o)
        ) {
          try {
            document.documentElement.removeChild(r.dumy)
          } catch (t) {}
          return !0
        }
      try {
        document.documentElement.removeChild(r.dumy)
      } catch (t) {}
      return !1
    }
    function o() {
      for (var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"], t; (t = e.shift()); ) if ("undefined" != typeof r.dumy.style[t]) return !0
      try {
        document.documentElement.removeChild(r.dumy)
      } catch (t) {}
      return !1
    }
    var r = function () {
      "use strict"
    }
    ;(r.dumy = document.createElement("div")),
      (r.trim = function (e) {
        return e.replace(/\s/gi, "")
      }),
      (r.splitAndTrim = function (e, t) {
        for (var o = e.split(","), s = o.length, n = 0; n < s; n++) t && (o[n] = r.trim(o[n]))
        return o
      }),
      (r.indexOfArray = function (e, t) {
        for (var o = e.length, r = 0; r < o; r++) if (e[r] === t) return r
        return -1
      }),
      (r.randomizeArray = function (e) {
        for (var t = [], o = e.concat(), r = o.length, s = 0, n; s < r; s++) (n = Math.floor(Math.random() * o.length)), t.push(o[n]), o.splice(n, 1)
        return t
      }),
      (r.removeArrayDuplicates = function (e, t) {
        var o = [],
          r = e.length,
          s,
          n,
          i
        for (n = 0; n < r; n++) {
          for (s = void 0, i = 0; i < o.length; i++)
            if (e[n][t] === o[i][t]) {
              s = !0
              break
            }
          s || o.push(e[n])
        }
        return o
      }),
      (r.prt = function (t, o) {
        for (void 0 === o && (o = 1); o-- && t; ) t = t.parentNode
        return t && 1 === t.nodeType ? t : null
      }),
      (r.sibling = function (t, o) {
        for (; t && 0 !== o; )
          if (0 < o) {
            if (t.nextElementSibling) t = t.nextElementSibling
            else for (var t = t.nextSibling; t && 1 !== t.nodeType; t = t.nextSibling);
            o--
          } else {
            if (t.previousElementSibling) t = t.previousElementSibling
            else for (var t = t.previousSibling; t && 1 !== t.nodeType; t = t.previousSibling);
            o++
          }
        return t
      }),
      (r.getChildAt = function (t, e) {
        var o = r.getChildren(t)
        return 0 > e && (e += o.length), 0 > e ? null : o[e]
      }),
      (r.getChildById = function (e) {
        return document.getElementById(e) || void 0
      }),
      (r.getChildren = function (t, e) {
        for (var o = [], r = t.firstChild; null != r; r = r.nextSibling) e ? o.push(r) : 1 === r.nodeType && o.push(r)
        return o
      }),
      (r.getChildrenFromAttribute = function (t, e, o) {
        for (var s = [], n = t.firstChild; null != n; n = n.nextSibling) o && r.hasAttribute(n, e) ? s.push(n) : 1 === n.nodeType && r.hasAttribute(n, e) && s.push(n)
        return 0 == s.length ? void 0 : s
      }),
      (r.getChildFromNodeListFromAttribute = function (t, e, o) {
        for (var s = t.firstChild; null != s; s = s.nextSibling) {
          if (o && r.hasAttribute(s, e)) return s
          if (1 === s.nodeType && r.hasAttribute(s, e)) return s
        }
      }),
      (r.getAttributeValue = function (t, e) {
        return r.hasAttribute(t, e) ? t.getAttribute(e) : void 0
      }),
      (r.hasAttribute = function (t, e) {
        if (t.hasAttribute) return t.hasAttribute(e)
        var o = t.getAttribute(e)
        return !!o
      }),
      (r.insertNodeAt = function (e, t, o) {
        var s = r.children(e)
        if (0 > o || o > s.length) throw new Error("invalid index!")
        else e.insertBefore(t, s[o])
      }),
      (r.hasCanvas = function () {
        return !!document.createElement("canvas")
      }),
      (r.hitTest = function (e, t, o) {
        if (!e) throw Error("Hit test target is null!")
        var r = e.getBoundingClientRect()
        return !!(t >= r.left && t <= r.left + (r.right - r.left) && o >= r.top && o <= r.top + (r.bottom - r.top))
      }),
      (r.getScrollOffsets = function () {
        return null == e.pageXOffset
          ? "CSS1Compat" == document.compatMode
            ? { x: document.documentElement.scrollLeft, y: document.documentElement.scrollTop }
            : void 0
          : { x: e.pageXOffset, y: e.pageYOffset }
      }),
      (r.getViewportSize = function () {
        return r.hasPointerEvent && 1 < navigator.msMaxTouchPoints
          ? { w: document.documentElement.clientWidth || e.innerWidth, h: document.documentElement.clientHeight || e.innerHeight }
          : r.isMobile
          ? { w: e.innerWidth, h: e.innerHeight }
          : { w: document.documentElement.clientWidth || e.innerWidth, h: document.documentElement.clientHeight || e.innerHeight }
      }),
      (r.getViewportMouseCoordinates = function (t) {
        var e = r.getScrollOffsets()
        return t.touches
          ? { screenX: null == t.touches[0] ? t.touches.pageX - e.x : t.touches[0].pageX - e.x, screenY: null == t.touches[0] ? t.touches.pageY - e.y : t.touches[0].pageY - e.y }
          : { screenX: t.clientX == null ? t.pageX - e.x : t.clientX, screenY: t.clientY == null ? t.pageY - e.y : t.clientY }
      }),
      (r.hasPointerEvent = (function () {
        return !!e.navigator.msPointerEnabled || !!e.navigator.pointerEnabled
      })()),
      (r.isMobile = (function () {
        if ((r.hasPointerEvent && 1 < navigator.msMaxTouchPoints) || (r.hasPointerEvent && 1 < navigator.maxTouchPoints)) return !0
        var t = ["android", "webos", "iphone", "ipad", "blackberry", "kfsowi"]
        for (var o in t) if (-1 != (navigator.userAgent + "").toLowerCase().indexOf((t[o] + "").toLowerCase())) return !0
        return !("macintel" !== navigator.platform.toLowerCase() || !(1 < navigator.maxTouchPoints) || e.MSStream)
      })()),
      (r.isAndroid = (function () {
        return -1 != navigator.userAgent.toLowerCase().indexOf("android".toLowerCase())
      })()),
      (r.isChrome = (function () {
        return -1 != navigator.userAgent.toLowerCase().indexOf("chrome")
      })()),
      (r.isSafari = (function () {
        return -1 != navigator.userAgent.toLowerCase().indexOf("safari") && -1 == navigator.userAgent.toLowerCase().indexOf("chrome")
      })()),
      (r.isOpera = (function () {
        return -1 != navigator.userAgent.toLowerCase().indexOf("opera") && -1 == navigator.userAgent.toLowerCase().indexOf("chrome")
      })()),
      (r.isFirefox = (function () {
        return -1 != navigator.userAgent.toLowerCase().indexOf("firefox")
      })()),
      (r.isIE = (function () {
        var e = !(-1 == navigator.userAgent.toLowerCase().indexOf("msie")) || !(-1 == navigator.userAgent.toLowerCase().indexOf("edge"))
        return !!(e || document.documentElement.msRequestFullscreen)
      })()),
      (r.isIE11 = (function () {
        return !(r.isIE || !document.documentElement.msRequestFullscreen)
      })()),
      (r.isIEAndLessThen9 = (function () {
        return -1 != navigator.userAgent.toLowerCase().indexOf("msie 7") || -1 != navigator.userAgent.toLowerCase().indexOf("msie 8")
      })()),
      (r.isIEAndLessThen10 = (function () {
        return -1 != navigator.userAgent.toLowerCase().indexOf("msie 7") || -1 != navigator.userAgent.toLowerCase().indexOf("msie 8") || -1 != navigator.userAgent.toLowerCase().indexOf("msie 9")
      })()),
      (r.isIE7 = (function () {
        return -1 != navigator.userAgent.toLowerCase().indexOf("msie 7")
      })()),
      (r.isIOS = (function () {
        return navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
      })()),
      (r.isIphone = (function () {
        return navigator.userAgent.match(/(iPhone|iPod)/g)
      })()),
      (r.isMAC = (function () {
        return -1 != navigator.appVersion.toLowerCase().indexOf("macintosh")
      })()),
      (r.isLocal = (function () {
        return -1 != location.href.indexOf("file:")
      })()),
      (r.hasFullScreen = (function () {
        return r.dumy.requestFullScreen || r.dumy.mozRequestFullScreen || r.dumy.webkitRequestFullScreen || r.dumy.msieRequestFullScreen
      })()),
      (r.isAndroidAndWebkit = (function () {
        return (r.isOpera || r.isChrome) && r.isAndroid
      })())
    ;(r.onReady = function (e) {
      document.addEventListener
        ? document.addEventListener("DOMContentLoaded", function () {
            e()
          })
        : (document.onreadystatechange = function () {
            "complete" == document.readyState && e()
          })
    }),
      (r.checkIfHasTransofrms = function () {
        r.isReadyMethodCalled_bl || (document.documentElement.appendChild(r.dumy), (r.hasTransform3d = t()), (r.hasTransform2d = o()), (r.isReadyMethodCalled_bl = !0))
      }),
      (r.disableElementSelection = function (t) {
        try {
          t.style.userSelect = "none"
        } catch (t) {}
        try {
          t.style.MozUserSelect = "none"
        } catch (t) {}
        try {
          t.style.webkitUserSelect = "none"
        } catch (t) {}
        try {
          t.style.khtmlUserSelect = "none"
        } catch (t) {}
        try {
          t.style.oUserSelect = "none"
        } catch (t) {}
        try {
          t.style.msUserSelect = "none"
        } catch (t) {}
        try {
          t.msUserSelect = "none"
        } catch (t) {}
        t.onselectstart = function () {
          return !1
        }
      }),
      (r.getSearchArgs = function () {
        for (var e = {}, t = location.href.substr(location.href.indexOf("?") + 1), o = t.split("&"), r = 0; r < o.length; r++) {
          var s = o[r].indexOf("="),
            n = o[r].substring(0, s),
            a = o[r].substring(s + 1)
          ;(a = decodeURIComponent(a)), (e[n] = a)
        }
        return e
      }),
      (r.getHashArgs = function (e) {
        for (var t = {}, o = e.substr(e.indexOf("#") + 1) || location.hash.substring(1), r = o.split("&"), s = 0; s < r.length; s++) {
          var n = r[s].indexOf("="),
            a = r[s].substring(0, n),
            l = r[s].substring(n + 1)
          ;(l = decodeURIComponent(l)), (t[a] = l)
        }
        return t
      }),
      (r.getHashParam = function (e) {
        var t = location.hash.substr(1),
          o = t.indexOf("?")
        if (-1 != o) {
          t = t.substr(o + 1)
          for (var s = t.split("&"), n = s.length, a = [], r; n--; ) (r = s[n].split("=")), r[0] == e && a.push(r[1])
          if (0 != a.length) return 1 == a.length ? a[0] : a
        }
      }),
      (r.isReadyMethodCalled_bl = !1),
      (e.FWDU3DCarUtils = r)
  })(window)
var _fwd_fwdScope
window.FWDAnimation ||
  ((
    (_fwd_fwdScope = "undefined" != typeof fwd_module && fwd_module.exports && "undefined" != typeof fwd_global ? fwd_global : this || window)._fwd_fwdQueue || (_fwd_fwdScope._fwd_fwdQueue = [])
  ).push(function () {
    "use strict"
    function u(o, t, s, n) {
      s === n && (s = n - (n - t) / 1e6), o === t && (t = o + (s - o) / 1e6), (this.a = o), (this.b = t), (this.c = s), (this.d = n), (this.da = n - o), (this.ca = s - o), (this.ba = t - o)
    }
    function D(d, t, e, i) {
      var r = { a: d },
        s = {},
        n = {},
        a = { c: i },
        o = (d + t) / 2,
        l = (t + e) / 2,
        h = (e + i) / 2,
        c = (o + l) / 2,
        u = (l + h) / 2,
        p = (u - c) / 8
      return (r.b = o + (d - o) / 4), (s.b = c + p), (r.c = s.a = (r.b + s.b) / 2), (s.c = n.a = (c + u) / 2), (n.b = u - p), (a.b = h + (i - h) / 4), (n.c = a.a = (n.b + a.b) / 2), [r, s, n, a]
    }
    function d(g, b, O, i, r, y) {
      var v = {},
        c = [],
        d = y || g[0],
        m,
        T,
        x,
        P,
        I,
        H,
        k,
        B
      for (T in ((r =
        "string" == typeof r
          ? "," + r + ","
          : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
      null == b && (b = 1),
      g[0]))
        c.push(T)
      if (1 < g.length) {
        for (B = g[g.length - 1], k = !0, m = c.length; -1 < --m; )
          if (((T = c[m]), 0.05 < Math.abs(d[T] - B[T]))) {
            k = !1
            break
          }
        k && ((g = g.concat()), y && g.unshift(y), g.push(g[1]), (y = g[g.length - 3]))
      }
      for (w.length = C.length = S.length = 0, m = c.length; -1 < --m; )
        (T = c[m]),
          (_[T] = -1 !== r.indexOf("," + T + ",")),
          (v[T] = (function (d, c, e, i) {
            var r = [],
              p,
              m,
              g,
              b,
              _,
              f
            if (i) for (m = (d = [i].concat(d)).length; -1 < --m; ) "string" == typeof (f = d[m][c]) && "=" === f.charAt(1) && (d[m][c] = i[c] + +(f.charAt(0) + f.substr(2)))
            if (0 > (p = d.length - 2)) return (r[0] = new u(d[0][c], 0, 0, d[-1 > p ? 0 : 1][c])), r
            for (m = 0; m < p; m++)
              (g = d[m][c]), (b = d[m + 1][c]), (r[m] = new u(g, 0, 0, b)), e && ((_ = d[m + 2][c]), (w[m] = (w[m] || 0) + (b - g) * (b - g)), (C[m] = (C[m] || 0) + (_ - b) * (_ - b)))
            return (r[m] = new u(d[m][c], 0, 0, d[m + 1][c])), r
          })(g, T, _[T], y))
      for (m = w.length; -1 < --m; ) (w[m] = Math.sqrt(w[m])), (C[m] = Math.sqrt(C[m]))
      if (!i) {
        for (m = c.length; -1 < --m; ) if (_[T]) for (H = (x = v[c[m]]).length - 1, P = 0; P < H; P++) (I = x[P + 1].da / C[P] + x[P].da / w[P] || 0), (S[P] = (S[P] || 0) + I * I)
        for (m = S.length; -1 < --m; ) S[m] = Math.sqrt(S[m])
      }
      for (m = c.length, P = O ? 4 : 1; -1 < --m; )
        (function (b, t, e, i, r) {
          for (var s = b.length - 1, g = 0, O = b[0].a, T = 0, P, I, H, k, B, L, A, M, E, W, R, F; T < s; T++)
            (P = (k = b[g]).a),
              (I = k.d),
              (H = b[g + 1].d),
              (A = r
                ? ((W = w[T]),
                  (F = (0.25 * (((R = C[T]) + W) * t)) / ((!i && S[T]) || 0.5)),
                  I - ((B = I - (I - P) * (i ? 0.5 * t : 0 === W ? 0 : F / W)) + ((((L = I + (H - I) * (i ? 0.5 * t : 0 === R ? 0 : F / R)) - B) * ((3 * W) / (W + R) + 0.5)) / 4 || 0)))
                : I - ((B = I - 0.5 * ((I - P) * t)) + (L = I + 0.5 * ((H - I) * t))) / 2),
              (B += A),
              (L += A),
              (k.c = M = B),
              (k.b = 0 == T ? (O = k.a + 0.6 * (k.c - k.a)) : O),
              (k.da = I - P),
              (k.ca = M - P),
              (k.ba = O - P),
              e ? ((E = D(P, O, M, I)), b.splice(g, 1, E[0], E[1], E[2], E[3]), (g += 4)) : g++,
              (O = L)
          ;((k = b[g]).b = O), (k.c = O + 0.4 * (k.d - O)), (k.da = k.d - k.a), (k.ca = k.c - k.a), (k.ba = O - k.a), e && ((E = D(k.a, O, k.c, k.d)), b.splice(g, 1, E[0], E[1], E[2], E[3]))
        })((x = v[(T = c[m])]), b, O, i, _[T]),
          k && (x.splice(0, P), x.splice(x.length - P, P))
      return v
    }
    var o, w, C, S, _, r, y, e
    _fwd_fwdScope.FWDFWD_fwdDefine(
      "FWDAnimation",
      ["core.FWDAnimation", "core.FWDSimpleTimeline", "FWDTweenLite"],
      function (O, d, D) {
        function g(o) {
          for (var t = [], e = o.length, s = 0; s !== e; t.push(o[s++]));
          return t
        }
        function a(o, t, e) {
          var i = o.cycle,
            n,
            a
          for (n in i) (a = i[n]), (o[n] = "function" == typeof a ? a(e, t[e]) : a[e % a.length])
          delete o.cycle
        }
        function o(u, t, h, p) {
          ;(t = !1 !== t), (h = !1 !== h)
          for (var m = c((p = !1 !== p)), a = t && h && p, o = m.length, g, b; -1 < --o; ) (b = m[o]), (a || b instanceof d || ((g = b.target === b.vars.onComplete) && h) || (t && !g)) && b.paused(u)
        }
        var O = function (o, t, e) {
            D.call(this, o, t, e),
              (this._cycle = 0),
              (this._yoyo = !0 === this.vars.yoyo),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._dirty = !0),
              (this.render = O.prototype.render)
          },
          y = 1e-10,
          l = D._internals,
          v = l.isSelector,
          w = l.isArray,
          e = (O.prototype = D.to({}, 0.1, {})),
          t = []
        ;(O.version = "1.19.0"),
          (e.constructor = O),
          (e.kill()._gc = !1),
          (O.killTweensOf = O.killDelayedCallsTo = D.killTweensOf),
          (O.getTweensOf = D.getTweensOf),
          (O.lagSmoothing = D.lagSmoothing),
          (O.ticker = D.ticker),
          (O.render = D.render),
          (e.invalidate = function () {
            return (this._yoyo = !0 === this.vars.yoyo), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), this._uncache(!0), D.prototype.invalidate.call(this)
          }),
          (e.updateTo = function (o, t) {
            var e = this.ratio,
              r = this.vars.immediateRender || o.immediateRender,
              s
            for (s in (t &&
              this._startTime < this._timeline._time &&
              ((this._startTime = this._timeline._time), this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)),
            o))
              this.vars[s] = o[s]
            if (this._initted || r)
              if (t) (this._initted = !1), r && this.render(0, !0, !0)
              else if ((this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && D._onPluginEvent("_onDisable", this), 0.998 < this._time / this._duration)) {
                var d = this._totalTime
                this.render(0, !0, !1), (this._initted = !1), this.render(d, !0, !1)
              } else if (((this._initted = !1), this._init(), 0 < this._time || r)) for (var n = this._firstPT, u; n; ) (u = n.s + n.c), (n.c *= 1 / (1 - e)), (n.s = u - n.c), (n = n._next)
            return this
          }),
          (e.render = function (b, O, e) {
            this._initted || (0 === this._duration && this.vars.repeat && this.invalidate())
            var v = this._dirty ? this.totalDuration() : this._totalDuration,
              p = this._time,
              _ = this._totalTime,
              c = this._cycle,
              d = this._duration,
              m = this._rawPrevTime,
              g,
              D,
              w,
              T,
              C,
              S,
              x,
              P,
              I
            if (
              (v - 1e-7 <= b
                ? ((this._totalTime = v),
                  (this._cycle = this._repeat),
                  this._yoyo && 0 != (1 & this._cycle)
                    ? ((this._time = 0), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0))
                    : ((this._time = d), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1)),
                  this._reversed || ((g = !0), (D = "onComplete"), (e = e || this._timeline.autoRemoveChildren)),
                  0 === d &&
                    ((!this._initted && this.vars.lazy && !e) ||
                      (this._startTime === this._timeline._duration && (b = 0),
                      (0 > m || (0 >= b && -1e-7 <= b) || (m === y && "isPause" !== this.data)) && m !== b && ((e = !0), y < m && (D = "onReverseComplete")),
                      (this._rawPrevTime = P = !O || b || m === b ? b : y))))
                : 1e-7 > b
                ? ((this._totalTime = this._time = this._cycle = 0),
                  (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                  (0 !== _ || (0 === d && 0 < m)) && ((D = "onReverseComplete"), (g = this._reversed)),
                  0 > b && ((this._active = !1), 0 === d && ((!this._initted && this.vars.lazy && !e) || (0 <= m && (e = !0), (this._rawPrevTime = P = !O || b || m === b ? b : y)))),
                  this._initted || (e = !0))
                : ((this._totalTime = this._time = b),
                  0 !== this._repeat &&
                    ((T = d + this._repeatDelay),
                    (this._cycle = (this._totalTime / T) >> 0),
                    0 !== this._cycle && this._cycle === this._totalTime / T && _ <= b && this._cycle--,
                    (this._time = this._totalTime - this._cycle * T),
                    this._yoyo && 0 != (1 & this._cycle) && (this._time = d - this._time),
                    this._time > d ? (this._time = d) : 0 > this._time && (this._time = 0)),
                  this._easeType
                    ? ((C = this._time / d),
                      (1 === (S = this._easeType) || (3 === S && 0.5 <= C)) && (C = 1 - C),
                      3 === S && (C *= 2),
                      1 === (x = this._easePower) ? (C *= C) : 2 === x ? (C *= C * C) : 3 === x ? (C *= C * C * C) : 4 === x && (C *= C * C * C * C),
                      (this.ratio = 1 === S ? 1 - C : 2 === S ? C : 0.5 > this._time / d ? C / 2 : 1 - C / 2))
                    : (this.ratio = this._ease.getRatio(this._time / d))),
              p !== this._time || e || c !== this._cycle)
            ) {
              if (!this._initted) {
                if ((this._init(), !this._initted || this._gc)) return
                if (!e && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)))
                  return (this._time = p), (this._totalTime = _), (this._rawPrevTime = m), (this._cycle = c), l.lazyTweens.push(this), void (this._lazy = [b, O])
                this._time && !g ? (this.ratio = this._ease.getRatio(this._time / d)) : g && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
              }
              for (
                !1 !== this._lazy && (this._lazy = !1),
                  this._active || (!this._paused && this._time !== p && 0 <= b && (this._active = !0)),
                  0 === _ &&
                    (2 === this._initted && 0 < b && this._init(),
                    this._startAt && (0 <= b ? this._startAt.render(b, O, e) : (D = D || "_dummyGS")),
                    this.vars.onStart && ((0 === this._totalTime && 0 !== d) || O || this._callback("onStart"))),
                  w = this._firstPT;
                w;

              )
                w.f
                  ? w.t[w.p](w.c * this.ratio + w.s)
                  : ((I = w.c * this.ratio + w.s),
                    "x" == w.p
                      ? w.t.setX(I)
                      : "y" == w.p
                      ? w.t.setY(I)
                      : "z" == w.p
                      ? w.t.setZ(I)
                      : "angleX" == w.p
                      ? w.t.setAngleX(I)
                      : "angleY" == w.p
                      ? w.t.setAngleY(I)
                      : "angleZ" == w.p
                      ? w.t.setAngleZ(I)
                      : "w" == w.p
                      ? w.t.setWidth(I)
                      : "h" == w.p
                      ? w.t.setHeight(I)
                      : "alpha" == w.p
                      ? w.t.setAlpha(I)
                      : "scale" == w.p
                      ? w.t.setScale2(I)
                      : (w.t[w.p] = I)),
                  (w = w._next)
              this._onUpdate && (0 > b && this._startAt && this._startTime && this._startAt.render(b, O, e), O || (this._totalTime === _ && !D) || this._callback("onUpdate")),
                this._cycle !== c && (O || this._gc || (this.vars.onRepeat && this._callback("onRepeat"))),
                D &&
                  ((this._gc && !e) ||
                    (0 > b && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(b, O, e),
                    g && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                    !O && this.vars[D] && this._callback(D),
                    0 === d && this._rawPrevTime === y && P !== y && (this._rawPrevTime = 0)))
            } else _ !== this._totalTime && this._onUpdate && (O || this._callback("onUpdate"))
          }),
          (O.to = function (o, t, e) {
            return new O(o, t, e)
          }),
          (O.from = function (o, t, e) {
            return (e.runBackwards = !0), (e.immediateRender = 0 != e.immediateRender), new O(o, t, e)
          }),
          (O.fromTo = function (o, t, e, s) {
            return (s.startAt = e), (s.immediateRender = 0 != s.immediateRender && 0 != e.immediateRender), new O(o, t, s)
          }),
          (O.staggerTo = O.allTo =
            function (m, b, y, i, T, s, n) {
              function C() {
                y.onComplete && y.onComplete.apply(y.onCompleteScope || this, arguments), T.apply(n || y.callbackScope || this, s || t)
              }
              i = i || 0
              var o = 0,
                S = [],
                _ = y.cycle,
                c = y.startAt && y.startAt.cycle,
                x,
                P,
                I,
                H
              for (w(m) || ("string" == typeof m && (m = D.selector(m) || m), v(m) && (m = g(m))), m = m || [], 0 > i && ((m = g(m)).reverse(), (i *= -1)), x = m.length - 1, I = 0; I <= x; I++) {
                for (H in ((P = {}), y)) P[H] = y[H]
                if ((_ && (a(P, m, I), null != P.duration && ((b = P.duration), delete P.duration)), c)) {
                  for (H in ((c = P.startAt = {}), y.startAt)) c[H] = y.startAt[H]
                  a(P.startAt, m, I)
                }
                ;(P.delay = o + (P.delay || 0)), I === x && T && (P.onComplete = C), (S[I] = new O(m[I], b, P)), (o += i)
              }
              return S
            }),
          (O.staggerFrom = O.allFrom =
            function (o, t, e, i, r, s, n) {
              return (e.runBackwards = !0), (e.immediateRender = 0 != e.immediateRender), O.staggerTo(o, t, e, i, r, s, n)
            }),
          (O.staggerFromTo = O.allFromTo =
            function (l, t, e, i, r, s, n, a) {
              return (i.startAt = e), (i.immediateRender = 0 != i.immediateRender && 0 != e.immediateRender), O.staggerTo(l, t, i, r, s, n, a)
            }),
          (O.delayedCall = function (o, t, e, n, r) {
            return new O(t, 0, { delay: o, onComplete: t, onCompleteParams: e, callbackScope: n, onReverseComplete: t, onReverseCompleteParams: e, immediateRender: !1, useFrames: r, overwrite: 0 })
          }),
          (O.set = function (o, t) {
            return new O(o, 0, t)
          }),
          (O.isTweening = function (e) {
            return 0 < D.getTweensOf(e, !0).length
          })
        var h = function (o, t) {
            for (var e = [], n = 0, a = o._first; a; ) a instanceof D ? (e[n++] = a) : (t && (e[n++] = a), (n = (e = e.concat(h(a, t))).length)), (a = a._next)
            return e
          },
          c = (O.getAllTweens = function (e) {
            return h(O._rootTimeline, e).concat(h(O._rootFramesTimeline, e))
          })
        return (
          (O.killAll = function (u, t, p, m) {
            null == t && (t = !0), null == p && (p = !0)
            for (var r = c(0 != m), a = r.length, o = t && p && m, l = 0, g, b; l < a; l++)
              (b = r[l]), (o || b instanceof d || ((g = b.target === b.vars.onComplete) && p) || (t && !g)) && (u ? b.totalTime(b._reversed ? 0 : b.totalDuration()) : b._enabled(!1, !1))
          }),
          (O.killChildTweensOf = function (d, u) {
            if (null != d) {
              var e = l.tweenLookup,
                o,
                h,
                c,
                p,
                m
              if (("string" == typeof d && (d = D.selector(d) || d), v(d) && (d = g(d)), w(d))) for (p = d.length; -1 < --p; ) O.killChildTweensOf(d[p], u)
              else {
                for (c in ((o = []), e)) for (h = e[c].target.parentNode; h; ) h === d && (o = o.concat(e[c].tweens)), (h = h.parentNode)
                for (m = o.length, p = 0; p < m; p++) u && o[p].totalTime(o[p].totalDuration()), o[p]._enabled(!1, !1)
              }
            }
          }),
          ((O.pauseAll = function (r, t, e) {
            o(!0, r, t, e)
          }),
          (O.resumeAll = function (r, t, e) {
            o(!1, r, t, e)
          }),
          (O.globalTimeScale = function (o) {
            var r = O._rootTimeline,
              s = D.ticker.time
            return arguments.length
              ? ((o = o || y),
                (r._startTime = s - ((s - r._startTime) * r._timeScale) / o),
                (r = O._rootFramesTimeline),
                (s = D.ticker.frame),
                (r._startTime = s - ((s - r._startTime) * r._timeScale) / o),
                (r._timeScale = O._rootTimeline._timeScale = o))
              : r._timeScale
          }),
          (e.progress = function (o, t) {
            return arguments.length
              ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - o : o) + this._cycle * (this._duration + this._repeatDelay), t)
              : this._time / this.duration()
          }),
          (e.totalProgress = function (o, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * o, t) : this._totalTime / this.totalDuration()
          }),
          (e.time = function (o, r) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                o > this._duration && (o = this._duration),
                this._yoyo && 0 != (1 & this._cycle)
                  ? (o = this._duration - o + this._cycle * (this._duration + this._repeatDelay))
                  : 0 !== this._repeat && (o += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(o, r))
              : this._time
          }),
          (e.duration = function (e) {
            return arguments.length ? O.prototype.duration.call(this, e) : this._duration
          }),
          (e.totalDuration = function (e) {
            return arguments.length
              ? -1 === this._repeat
                ? this
                : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1))
              : (this._dirty && ((this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), (this._dirty = !1)),
                this._totalDuration)
          }),
          (e.repeat = function (e) {
            return arguments.length ? ((this._repeat = e), this._uncache(!0)) : this._repeat
          }),
          (e.repeatDelay = function (e) {
            return arguments.length ? ((this._repeatDelay = e), this._uncache(!0)) : this._repeatDelay
          }),
          (e.yoyo = function (e) {
            return arguments.length ? ((this._yoyo = e), this) : this._yoyo
          }),
          O)
        )
      },
      !0
    ),
      (o = 180 / Math.PI),
      (w = []),
      (C = []),
      (S = []),
      (_ = {}),
      (r = _fwd_fwdScope.FWDFWD_fwdDefine.globals),
      (y = _fwd_fwdScope.FWDFWD_fwdDefine.plugin({
        propName: "bezier",
        priority: -1,
        version: "1.3.7",
        API: 2,
        fwd_global: !0,
        init: function (c, t, m) {
          ;(this._target = c),
            t instanceof Array && (t = { values: t }),
            (this._func = {}),
            (this._mod = {}),
            (this._props = []),
            (this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10))
          var i = t.values || [],
            h = {},
            g = i[0],
            b = t.autoRotate || m.vars.orientToBezier,
            _,
            f,
            O,
            y,
            v,
            D
          for (_ in ((this._autoRotate = b ? (b instanceof Array ? b : [["x", "y", "rotation", (!0 !== b && +b) || 0]]) : null), g)) this._props.push(_)
          for (O = this._props.length; -1 < --O; )
            (_ = this._props[O]),
              this._overwriteProps.push(_),
              (f = this._func[_] = "function" == typeof c[_]),
              (h[_] = f ? c[_.indexOf("set") || "function" != typeof c["get" + _.substr(3)] ? _ : "get" + _.substr(3)]() : parseFloat(c[_])),
              v || (h[_] !== i[0][_] && (v = h))
          if (
            ((this._beziers =
              "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type
                ? d(i, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, v)
                : (function (b, O, y) {
                    var i = {},
                      c = "cubic" === (O = O || "soft") ? 3 : 2,
                      d = "soft" === O,
                      m = [],
                      g,
                      v,
                      D,
                      w,
                      T,
                      C,
                      S,
                      x,
                      P,
                      I,
                      H
                    if ((d && y && (b = [y].concat(b)), null == b || b.length < 1 + c)) throw "invalid Bezier data"
                    for (P in b[0]) m.push(P)
                    for (C = m.length; -1 < --C; ) {
                      for (i[(P = m[C])] = T = [], I = 0, x = b.length, S = 0; S < x; S++)
                        (g = null == y ? b[S][P] : "string" == typeof (H = b[S][P]) && "=" === H.charAt(1) ? y[P] + +(H.charAt(0) + H.substr(2)) : +H),
                          d && 1 < S && S < x - 1 && (T[I++] = (g + T[I - 2]) / 2),
                          (T[I++] = g)
                      for (x = I - c + 1, S = I = 0; S < x; S += c)
                        (g = T[S]), (v = T[S + 1]), (D = T[S + 2]), (w = 2 == c ? 0 : T[S + 3]), (T[I++] = H = 3 == c ? new u(g, v, D, w) : new u(g, (2 * v + g) / 3, (2 * v + D) / 3, D))
                      T.length = I
                    }
                    return i
                  })(i, t.type, h)),
            (this._segCount = this._beziers[_].length),
            this._timeRes &&
              ((D = (function (d, t) {
                var c = [],
                  a = [],
                  o = 0,
                  m = 0,
                  g = (t = t >> 0 || 6) - 1,
                  b = [],
                  u = [],
                  _,
                  f,
                  O,
                  y
                for (_ in d)
                  !(function (c, t, e) {
                    for (var i = c.length, m, g, b, O, y, v, D, w, T, C, S; -1 < --i; )
                      for (b = (C = c[i]).a, O = C.d - b, y = C.c - b, v = C.b - b, m = g = 0, w = 1; w <= e; w++)
                        (m = g - (g = ((D = (1 / e) * w) * D * O + 3 * (T = 1 - D) * (D * y + T * v)) * D)), (t[(S = i * e + w - 1)] = (t[S] || 0) + m * m)
                  })(d[_], c, t)
                for (O = c.length, f = 0; f < O; f++) (o += Math.sqrt(c[f])), (u[(y = f % t)] = o), y === g && ((m += o), (b[(y = (f / t) >> 0)] = u), (a[y] = m), (o = 0), (u = []))
                return { length: m, lengths: a, segments: b }
              })(this._beziers, this._timeRes)),
              (this._length = D.length),
              (this._lengths = D.lengths),
              (this._segments = D.segments),
              (this._l1 = this._li = this._s1 = this._si = 0),
              (this._l2 = this._lengths[0]),
              (this._curSeg = this._segments[0]),
              (this._s2 = this._curSeg[0]),
              (this._prec = 1 / this._curSeg.length)),
            (b = this._autoRotate))
          )
            for (this._initialRotations = [], b[0] instanceof Array || (this._autoRotate = b = [b]), O = b.length; -1 < --O; ) {
              for (y = 0; 3 > y; y++) (_ = b[O][y]), (this._func[_] = "function" == typeof c[_] && c[_.indexOf("set") || "function" != typeof c["get" + _.substr(3)] ? _ : "get" + _.substr(3)])
              ;(_ = b[O][2]), (this._initialRotations[O] = (this._func[_] ? this._func[_].call(this._target) : this._target[_]) || 0), this._overwriteProps.push(_)
            }
          return (this._startRatio = m.vars.runBackwards ? 1 : 0), !0
        },
        set: function (b) {
          var O = this._segCount,
            f = this._func,
            u = this._target,
            p = b !== this._startRatio,
            _,
            D,
            C,
            S,
            P,
            I,
            H,
            k,
            B
          if (this._timeRes) {
            if (((k = this._lengths), (B = this._curSeg), (b *= this._length), (w = this._li), b > this._l2 && w < O - 1)) {
              for (H = O - 1; w < H && (this._l2 = k[++w]) <= b; );
              ;(this._l1 = k[w - 1]), (this._li = w), (this._curSeg = B = this._segments[w]), (this._s2 = B[(this._s1 = this._si = 0)])
            } else if (b < this._l1 && 0 < w) {
              for (; 0 < w && (this._l1 = k[--w]) >= b; );
              0 === w && b < this._l1 ? (this._l1 = 0) : w++,
                (this._l2 = k[w]),
                (this._li = w),
                (this._curSeg = B = this._segments[w]),
                (this._s1 = B[(this._si = B.length - 1) - 1] || 0),
                (this._s2 = B[this._si])
            }
            if (((_ = w), (b -= this._l1), (w = this._si), b > this._s2 && w < B.length - 1)) {
              for (H = B.length - 1; w < H && (this._s2 = B[++w]) <= b; );
              ;(this._s1 = B[w - 1]), (this._si = w)
            } else if (b < this._s1 && 0 < w) {
              for (; 0 < w && (this._s1 = B[--w]) >= b; );
              0 === w && b < this._s1 ? (this._s1 = 0) : w++, (this._s2 = B[w]), (this._si = w)
            }
            P = (w + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0
          } else P = (b - (_ = 0 > b ? 0 : 1 <= b ? O - 1 : (O * b) >> 0) * (1 / O)) * O
          for (D = 1 - P, w = this._props.length; -1 < --w; )
            (C = this._props[w]),
              (I = (P * P * (S = this._beziers[C][_]).da + 3 * D * (P * S.ca + D * S.ba)) * P + S.a),
              this._mod[C] && (I = this._mod[C](I, u)),
              f[C]
                ? u[C](I)
                : "x" == C
                ? u.setX(I)
                : "y" == C
                ? u.setY(I)
                : "z" == C
                ? u.setZ(I)
                : "angleX" == C
                ? u.setAngleX(I)
                : "angleY" == C
                ? u.setAngleY(I)
                : "angleZ" == C
                ? u.setAngleZ(I)
                : "w" == C
                ? u.setWidth(I)
                : "h" == C
                ? u.setHeight(I)
                : "alpha" == C
                ? u.setAlpha(I)
                : "scale" == C
                ? u.setScale2(I)
                : (u[C] = I)
          if (this._autoRotate)
            for (var L = this._autoRotate, w = L.length, A, M, E, W, R, F, N; -1 < --w; )
              (C = L[w][2]),
                (F = L[w][3] || 0),
                (N = !0 === L[w][4] ? 1 : o),
                (S = this._beziers[L[w][0]]),
                (A = this._beziers[L[w][1]]),
                S &&
                  A &&
                  ((S = S[_]),
                  (A = A[_]),
                  (M = S.a + (S.b - S.a) * P),
                  (M += ((W = S.b + (S.c - S.b) * P) - M) * P),
                  (W += (S.c + (S.d - S.c) * P - W) * P),
                  (E = A.a + (A.b - A.a) * P),
                  (E += ((R = A.b + (A.c - A.b) * P) - E) * P),
                  (R += (A.c + (A.d - A.c) * P - R) * P),
                  (I = p ? Math.atan2(R - E, W - M) * N + F : this._initialRotations[w]),
                  this._mod[C] && (I = this._mod[C](I, u)),
                  f[C] ? u[C](I) : (u[C] = I))
        },
      })),
      (e = y.prototype),
      (y.bezierThrough = d),
      (y.cubicToQuadratic = D),
      (y._autoCSS = !0),
      (y.quadraticToCubic = function (o, t, e) {
        return new u(o, (2 * t + o) / 3, (2 * t + e) / 3, e)
      }),
      (y._cssRegister = function () {
        var o = r.CSSPlugin,
          e,
          i,
          m,
          g
        o &&
          ((e = o._internals),
          (i = e._parseToProxy),
          (m = e._setPluginRatio),
          (g = e.CSSPropTween),
          e._registerComplexSpecialProp("bezier", {
            parser: function (d, t, c, b, r, _) {
              t instanceof Array && (t = { values: t }), (_ = new y())
              var O = t.values,
                h = O.length - 1,
                f = [],
                u = {},
                p,
                v,
                D
              if (0 > h) return r
              for (p = 0; p <= h; p++) (D = i(d, O[p], b, r, _, h !== p)), (f[p] = D.end)
              for (v in t) u[v] = t[v]
              return (
                (u.values = f),
                ((r = new g(d, "bezier", 0, 0, D.pt, 2)).data = D),
                (r.plugin = _),
                (r.setRatio = m),
                0 === u.autoRotate && (u.autoRotate = !0),
                !u.autoRotate ||
                  u.autoRotate instanceof Array ||
                  ((p = !0 === u.autoRotate ? 0 : +u.autoRotate), (u.autoRotate = null == D.end.left ? null != D.end.x && [["x", "y", "rotation", p, !1]] : [["left", "top", "rotation", p, !1]])),
                u.autoRotate &&
                  (b._transform || b._enableTransforms(!1), (D.autoRotate = b._target._fwdTransform), (D.proxy.rotation = D.autoRotate.rotation || 0), b._overwriteProps.push("rotation")),
                _._onInitTween(D.proxy, u, b._tween),
                r
              )
            },
          }))
      }),
      (e._mod = function (o) {
        for (var t = this._overwriteProps, s = t.length, n; -1 < --s; ) (n = o[t[s]]) && "function" == typeof n && (this._mod[t[s]] = n)
      }),
      (e._kill = function (o) {
        var t = this._props,
          s,
          n
        for (s in this._beziers) if (s in o) for (delete this._beziers[s], delete this._func[s], n = t.length; -1 < --n; ) t[n] === s && t.splice(n, 1)
        if ((t = this._autoRotate)) for (n = t.length; -1 < --n; ) o[t[n][2]] && t.splice(n, 1)
        return this._super._kill.call(this, o)
      }),
      _fwd_fwdScope.FWDFWD_fwdDefine(
        "plugins.CSSPlugin",
        ["plugins.TweenPlugin", "FWDTweenLite"],
        function (L, V) {
          function B(o, t) {
            return t.toUpperCase()
          }
          function n(e) {
            return ce.createElementNS ? ce.createElementNS("http://www.w3.org/1999/xhtml", e) : ce.createElement(e)
          }
          function a(e) {
            return I.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
          }
          function E(e) {
            window.console && console.log(e)
          }
          function j(o, n) {
            var a = (n = n || K).style,
              s,
              l
            if (void 0 !== a[o]) return o
            for (o = o.charAt(0).toUpperCase() + o.substr(1), s = ["O", "Moz", "ms", "Ms", "Webkit"], l = 5; -1 < --l && void 0 === a[s[l] + o]; );
            return 0 <= l ? ((ge = "-" + (be = 3 === l ? "ms" : s[l]).toLowerCase() + "-"), be + o) : null
          }
          function g(o, t) {
            var l = {},
              n,
              d,
              h
            if ((t = t || _e(o, null))) {
              if ((n = t.length)) for (; -1 < --n; ) (-1 !== (h = t[n]).indexOf("-transform") && Ue !== h) || (l[h.replace(u, B)] = t.getPropertyValue(h))
              else for (n in t) (-1 !== n.indexOf("Transform") && ze !== n) || (l[n] = t[n])
            } else if ((t = o.currentStyle || o.style)) for (n in t) "string" == typeof n && void 0 === l[n] && (l[n.replace(u, B)] = t[n])
            return (
              me || (l.opacity = a(o)),
              (d = tt(o, t, !1)),
              (l.rotation = d.rotation),
              (l.skewX = d.skewX),
              (l.scaleX = d.scaleX),
              (l.scaleY = d.scaleY),
              (l.x = d.x),
              (l.y = d.y),
              Ge && ((l.z = d.z), (l.rotationX = d.rotationX), (l.rotationY = d.rotationY), (l.scaleZ = d.scaleZ)),
              l.filters && delete l.filters,
              l
            )
          }
          function y(d, t, e, i, r) {
            var s = {},
              l = d.style,
              u,
              h,
              c
            for (h in e)
              "cssText" !== h &&
                "length" !== h &&
                isNaN(h) &&
                (t[h] !== (u = e[h]) || (r && r[h])) &&
                -1 === h.indexOf("Origin") &&
                (("number" != typeof u && "string" != typeof u) ||
                  ((s[h] = "auto" !== u || ("left" !== h && "top" !== h) ? (("" !== u && "auto" !== u && "none" !== u) || "string" != typeof t[h] || "" === t[h].replace(b, "") ? u : 0) : ye(d, h)),
                  void 0 !== l[h] && (c = new We(l, h, l[h], c))))
            if (i) for (h in i) "className" !== h && (s[h] = i[h])
            return { difs: s, firstMPT: c }
          }
          function e(o, r) {
            return (
              "function" == typeof o && (o = o(Ae, Le)), "string" == typeof o && "=" === o.charAt(1) ? parseInt(o.charAt(0) + "1", 10) * parseFloat(o.substr(2)) : parseFloat(o) - parseFloat(r) || 0
            )
          }
          function k(o, r) {
            return (
              "function" == typeof o && (o = o(Ae, Le)),
              null == o ? r : "string" == typeof o && "=" === o.charAt(1) ? parseInt(o.charAt(0) + "1", 10) * parseFloat(o.substr(2)) + r : parseFloat(o) || 0
            )
          }
          function o(d, u, e, i) {
            var r, h, c, p, m
            return (
              "function" == typeof d && (d = d(Ae, Le)),
              1e-6 >
                (p =
                  null == d
                    ? u
                    : "number" == typeof d
                    ? d
                    : ((r = 360),
                      (h = d.split("_")),
                      (c = ((m = "=" === d.charAt(1)) ? parseInt(d.charAt(0) + "1", 10) * parseFloat(h[0].substr(2)) : parseFloat(h[0])) * (-1 === d.indexOf("rad") ? 1 : Q) - (m ? 0 : u)),
                      h.length &&
                        (i && (i[e] = u + c),
                        -1 !== d.indexOf("short") && (c %= r) !== c % 180 && (c = 0 > c ? c + r : c - r),
                        -1 !== d.indexOf("_cw") && 0 > c
                          ? (c = ((c + 3599999999640) % r) - (0 | (c / r)) * r)
                          : -1 !== d.indexOf("ccw") && 0 < c && (c = ((c - 3599999999640) % r) - (0 | (c / r)) * r)),
                      u + c)) &&
                -1e-6 < p &&
                (p = 0),
              p
            )
          }
          function v(o, r, e) {
            return 0 | (255 * (1 > 6 * (o = 0 > o ? o + 1 : 1 < o ? o - 1 : o) ? r + 6 * ((e - r) * o) : 0.5 > o ? e : 2 > 3 * o ? r + 6 * ((e - r) * (2 / 3 - o)) : r) + 0.5)
          }
          function _(l, t) {
            for (var e = l.match(Se) || [], s = 0, d = e.length ? "" : l, u = 0, h, c; u < e.length; u++)
              (h = e[u]),
                (s += (c = l.substr(s, l.indexOf(h, s) - s)).length + h.length),
                3 === (h = Ce(h, t)).length && h.push(1),
                (d += c + (t ? "hsla(" + h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : "rgba(" + h.join(",")) + ")")
            return d + l.substr(s)
          }
          function r(r, t, s, n) {
            if (null == r)
              return function (e) {
                return e
              }
            var a = t ? (r.match(Se) || [""])[0] : "",
              l = r.split(a).join("").match(X) || [],
              d = r.substr(0, r.indexOf(l[0])),
              h = ")" === r.charAt(r.length - 1) ? ")" : "",
              u = -1 === r.indexOf(" ") ? "," : " ",
              p = l.length,
              m = 0 < p ? l[0].replace(ue, "") : "",
              e
            return p
              ? (e = t
                  ? function (o) {
                      var c, g, b, _
                      if ("number" == typeof o) o += m
                      else if (n && Z.test(o)) {
                        for (_ = o.replace(Z, "|").split("|"), b = 0; b < _.length; b++) _[b] = e(_[b])
                        return _.join(",")
                      }
                      if (((c = (o.match(Se) || [a])[0]), (b = (g = o.split(c).join("").match(X) || []).length), p > b--)) for (; ++b < p; ) g[b] = s ? g[0 | ((b - 1) / 2)] : l[b]
                      return d + g.join(u) + u + c + h + (-1 === o.indexOf("inset") ? "" : " inset")
                    }
                  : function (o) {
                      var a, c, g
                      if ("number" == typeof o) o += m
                      else if (n && Z.test(o)) {
                        for (c = o.replace(Z, "|").split("|"), g = 0; g < c.length; g++) c[g] = e(c[g])
                        return c.join(",")
                      }
                      if (((g = (a = o.match(X) || []).length), p > g--)) for (; ++g < p; ) a[g] = s ? a[0 | ((g - 1) / 2)] : l[g]
                      return d + a.join(u) + h
                    })
              : function (e) {
                  return e
                }
          }
          function S(e) {
            return (
              (e = e.split(",")),
              function (d, t, u, i, r, s, n) {
                var h = (t + "").split(" "),
                  l
                for (n = {}, l = 0; 4 > l; l++) n[e[l]] = h[l] = h[l] || h[((l - 1) / 2) >> 0]
                return i.parse(d, n, r, s)
              }
            )
          }
          function A(o, t, e, i, r, s) {
            var n = new Re(o, t, e, i - e, r, -1, s)
            return (n.b = e), (n.e = n.xs0 = i), n
          }
          function R(o, t) {
            ;(t = t || {}),
              (this.p = (t.prefix && j(o)) || o),
              ((ie[o] = ie[this.p] = this).format = t.formatter || r(t.defaultValue, t.color, t.collapsible, t.multi)),
              t.parser && (this.parse = t.parser),
              (this.clrs = t.color),
              (this.multi = t.multi),
              (this.keyword = t.keyword),
              (this.dflt = t.defaultValue),
              (this.pr = t.priority || 0)
          }
          function q(o, t, e) {
            var n = ce.createElementNS("http://www.w3.org/2000/svg", o),
              s
            for (s in e) n.setAttributeNS(null, s.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), e[s])
            return t.appendChild(n), n
          }
          function $(b, t, O, i, r, s) {
            var n = b._fwdTransform,
              D = et(b, !0),
              w,
              T,
              C,
              S,
              P,
              I,
              H,
              k,
              B,
              L,
              A,
              M,
              E,
              W
            n && ((E = n.xOrigin), (W = n.yOrigin)),
              (!i || 2 > (w = i.split(" ")).length) &&
                ((H = b.getBBox()),
                (w = [
                  (-1 === (t = we(t).split(" "))[0].indexOf("%") ? parseFloat(t[0]) : (parseFloat(t[0]) / 100) * H.width) + H.x,
                  (-1 === t[1].indexOf("%") ? parseFloat(t[1]) : (parseFloat(t[1]) / 100) * H.height) + H.y,
                ])),
              (O.xOrigin = S = parseFloat(w[0])),
              (O.yOrigin = P = parseFloat(w[1])),
              i &&
                D !== Je &&
                ((I = D[0]),
                (H = D[1]),
                (k = D[2]),
                (B = D[3]),
                (L = D[4]),
                (T = S * (B / (M = I * B - H * k)) + P * (-k / M) + (k * (A = D[5]) - B * L) / M),
                (C = S * (-H / M) + P * (I / M) - (I * A - H * L) / M),
                (S = O.xOrigin = w[0] = T),
                (P = O.yOrigin = w[1] = C)),
              n &&
                (s && ((O.xOffset = n.xOffset), (O.yOffset = n.yOffset), (n = O)),
                r || (!1 !== r && !1 !== ne.defaultSmoothOrigin)
                  ? ((T = S - E), (C = P - W), (n.xOffset += T * D[0] + C * D[2] - T), (n.yOffset += T * D[1] + C * D[3] - C))
                  : (n.xOffset = n.yOffset = 0)),
              s || b.setAttribute("data-svg-origin", w.join(" "))
          }
          function ee(a) {
            var t = this.data,
              r = -t.rotation * U,
              s = r + t.skewX * U,
              n = (0 | (Math.cos(r) * t.scaleX * 100000)) / 100000,
              o = (0 | (Math.sin(r) * t.scaleX * 100000)) / 100000,
              O = (0 | (Math.sin(s) * -t.scaleY * 100000)) / 100000,
              D = (0 | (Math.cos(s) * t.scaleY * 100000)) / 100000,
              f = this.t.style,
              u = this.t.currentStyle,
              p,
              C
            if (u) {
              ;(C = o), (o = -O), (O = -C), (p = u.filter), (f.filter = "")
              var S = this.t.offsetWidth,
                _ = this.t.offsetHeight,
                c = "absolute" !== u.position,
                d = "progid:DXImageTransform.Microsoft.Matrix(M11=" + n + ", M12=" + o + ", M21=" + O + ", M22=" + D,
                H = t.x + (S * t.xPercent) / 100,
                k = t.y + (_ * t.yPercent) / 100
              if (
                (null != t.ox && ((H += (T = (t.oxp ? 0.01 * (S * t.ox) : t.ox) - S / 2) - (T * n + (L = (t.oyp ? 0.01 * (_ * t.oy) : t.oy) - _ / 2) * o)), (k += L - (T * O + L * D))),
                (d += c ? ", Dx=" + ((T = S / 2) - (T * n + (L = _ / 2) * o) + H) + ", Dy=" + (L - (T * O + L * D) + k) + ")" : ", sizingMethod='auto expand')"),
                (f.filter = -1 === p.indexOf("DXImageTransform.Microsoft.Matrix(") ? d + " " + p : p.replace(N, d)),
                (0 !== a && 1 !== a) ||
                  (1 == n &&
                    0 === o &&
                    0 === O &&
                    1 == D &&
                    ((c && -1 === d.indexOf("Dx=0, Dy=0")) || (I.test(p) && 100 !== parseFloat(RegExp.$1)) || (-1 === p.indexOf(p.indexOf("Alpha")) && f.removeAttribute("filter")))),
                !c)
              ) {
                var B = 8 > Be ? 1 : -1,
                  T = t.ieOffsetX || 0,
                  L = t.ieOffsetY || 0,
                  A,
                  M,
                  E
                for (
                  t.ieOffsetX = Math.round((S - ((0 > n ? -n : n) * S + (0 > o ? -o : o) * _)) / 2 + H), t.ieOffsetY = Math.round((_ - ((0 > D ? -D : D) * _ + (0 > O ? -O : O) * S)) / 2 + k), Ne = 0;
                  4 > Ne;
                  Ne++
                )
                  (E =
                    (C = -1 === (A = u[(M = De[Ne])]).indexOf("px") ? Oe(this.t, M, parseFloat(A), A.replace(he, "")) || 0 : parseFloat(A)) === t[M]
                      ? 2 > Ne
                        ? T - t.ieOffsetX
                        : L - t.ieOffsetY
                      : 2 > Ne
                      ? -t.ieOffsetX
                      : -t.ieOffsetY),
                    (f[M] = (t[M] = Math.round(C - E * (0 === Ne || 2 === Ne ? 1 : B))) + "px")
              }
            }
          }
          function te(o) {
            var t = this.t,
              n = t.filter || fe(this.data, "filter") || "",
              i = 0 | (this.s + this.c * o),
              s
            100 == i &&
              (s =
                -1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(")
                  ? (t.removeAttribute("filter"), !fe(this.data, "filter"))
                  : ((t.filter = n.replace(f, "")), !0)),
              s ||
                (this.xn1 && (t.filter = n = n || "alpha(opacity=" + i + ")"),
                -1 === n.indexOf("pacity") ? (0 == i && this.xn1) || (t.filter = n + " alpha(opacity=" + i + ")") : (t.filter = n.replace(I, "opacity=" + i)))
          }
          function oe(o) {
            if (((this.t._fwdClassPT = this), 1 === o || 0 === o)) {
              this.t.setAttribute("class", 0 === o ? this.b : this.e)
              for (var t = this.data, r = this.t.style; t; ) t.v ? (r[t.p] = t.v) : ht(r, t.p), (t = t._next)
              1 === o && this.t._fwdClassPT === this && (this.t._fwdClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
          }
          function re(l) {
            if ((1 === l || 0 === l) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
              var t = this.t.style,
                a = ie.transform.parse,
                o,
                d,
                u,
                h,
                c
              if ("all" === this.e) h = !(t.cssText = "")
              else for (u = (o = this.e.split(" ").join("").split(",")).length; -1 < --u; ) (d = o[u]), ie[d] && (ie[d].parse === a ? (h = !0) : (d = "transformOrigin" === d ? Ze : ie[d].p)), ht(t, d)
              h && (ht(t, ze), (c = this.t._fwdTransform) && (c.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._fwdTransform))
            }
          }
          function se() {
            ;(this.t[this.p] = this.e), this.data._linkCSSP(this, this._next, null, !0)
          }
          var ne = function () {
              L.call(this, "css"), (this._overwriteProps.length = 0), (this.setRatio = ne.prototype.setRatio)
            },
            W = _fwd_fwdScope.FWDFWD_fwdDefine.globals,
            ie = {},
            h = (ne.prototype = new L("css")),
            m,
            ae,
            le,
            de
          ;((h.constructor = ne).version = "1.19.0"),
            (ne.API = 2),
            (ne.defaultTransformPerspective = 0),
            (ne.defaultSkewType = "compensated"),
            (ne.defaultSmoothOrigin = !0),
            (h = "px"),
            (ne.suffixMap = { top: h, right: h, bottom: h, left: h, width: h, height: h, fontSize: h, padding: h, margin: h, perspective: h, lineHeight: "" })
          var ue = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
            z = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            X = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            he = /(?:\d|\-|\+|=|#|\.)*/g,
            I = /opacity *= *([^)]*)/i,
            f = /alpha\(opacity *=.+?\)/i,
            l = /([A-Z])/g,
            u = /-([a-z])/gi,
            N = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            Z = /,(?=[^\)]*(?:\(|$))/gi,
            U = Math.PI / 180,
            Q = 180 / Math.PI,
            G = {},
            ce = document,
            K = n("div"),
            p = n("img"),
            J = (ne._internals = { _specialProps: ie }),
            pe = navigator.userAgent,
            me =
              ((Me = pe.indexOf("Android")),
              (Ee = n("a")),
              (Ie = -1 !== pe.indexOf("Safari") && -1 === pe.indexOf("Chrome") && (-1 === Me || 3 < +pe.substr(Me + 8, 1))),
              (ke = Ie && 6 > +pe.substr(pe.indexOf("Version/") + 8, 1)),
              (He = -1 !== pe.indexOf("Firefox")),
              (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(pe) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(pe)) && (Be = parseFloat(RegExp.$1)),
              !!Ee && ((Ee.style.cssText = "top:1px;opacity:.55;"), /^0.55/.test(Ee.style.opacity))),
            ge = "",
            be = "",
            _e = ce.defaultView ? ce.defaultView.getComputedStyle : function () {},
            fe = (ne.getStyle = function (o, t, e, d, r) {
              var s
              return me || "opacity" !== t
                ? (!d && o.style[t]
                    ? (s = o.style[t])
                    : (e = e || _e(o))
                    ? (s = e[t] || e.getPropertyValue(t) || e.getPropertyValue(t.replace(l, "-$1").toLowerCase()))
                    : o.currentStyle && (s = o.currentStyle[t]),
                  null == r || (s && "none" !== s && "auto" !== s && "auto auto" !== s) ? s : r)
                : a(o)
            }),
            Oe = (J.convertToPixels = function (d, t, e, c, r) {
              if ("px" === c || !c) return e
              if ("auto" === c || !e) return 0
              var s = /(?:Left|Right|Width)/i.test(t),
                l = d,
                m = K.style,
                g = 0 > e,
                u = 1 === e,
                p,
                b,
                _
              if ((g && (e = -e), u && (e *= 100), "%" === c && -1 !== t.indexOf("border"))) p = (e / 100) * (s ? d.clientWidth : d.clientHeight)
              else {
                if (((m.cssText = "border:0 solid red;position:" + fe(d, "position") + ";line-height:0;"), "%" !== c && l.appendChild && "v" !== c.charAt(0) && "rem" !== c))
                  m[s ? "borderLeftWidth" : "borderTopWidth"] = e + c
                else {
                  if (((b = (l = d.parentNode || ce.body)._fwdCache), (_ = V.ticker.frame), b && s && b.time === _)) return (b.width * e) / 100
                  m[s ? "width" : "height"] = e + c
                }
                l.appendChild(K),
                  (p = parseFloat(K[s ? "offsetWidth" : "offsetHeight"])),
                  l.removeChild(K),
                  s && "%" === c && !1 !== ne.cacheWidths && (((b = l._fwdCache = l._fwdCache || {}).time = _), (b.width = 100 * (p / e))),
                  0 !== p || r || (p = Oe(d, t, e, c, !0))
              }
              return u && (p /= 100), g ? -p : p
            }),
            ye = (J.calculateOffset = function (o, t, e) {
              if ("absolute" !== fe(o, "position", e)) return 0
              var n = "left" === t ? "Left" : "Top",
                r = fe(o, "margin" + n, e)
              return o["offset" + n] - (Oe(o, t, parseFloat(r), r.replace(he, "")) || 0)
            }),
            ve = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
            De = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            we = function (o, a) {
              if ("contain" === o || "auto" === o || "auto auto" === o) return o + " "
              ;(null != o && "" !== o) || (o = "0 0")
              var e = o.split(" "),
                l = -1 === o.indexOf("left") ? (-1 === o.indexOf("right") ? e[0] : "100%") : "0%",
                d = -1 === o.indexOf("top") ? (-1 === o.indexOf("bottom") ? e[1] : "100%") : "0%",
                u
              if (3 < e.length && !a) {
                for (e = o.split(", ").join(",").split(","), o = [], u = 0; u < e.length; u++) o.push(we(e[u]))
                return o.join(",")
              }
              return (
                null == d ? (d = "center" === l ? "50%" : "0") : "center" === d && (d = "50%"),
                ("center" === l || (isNaN(parseFloat(l)) && -1 === (l + "").indexOf("="))) && (l = "50%"),
                (o = l + " " + d + (2 < e.length ? " " + e[2] : "")),
                a &&
                  ((a.oxp = -1 !== l.indexOf("%")),
                  (a.oyp = -1 !== d.indexOf("%")),
                  (a.oxr = "=" === l.charAt(1)),
                  (a.oyr = "=" === d.charAt(1)),
                  (a.ox = parseFloat(l.replace(b, ""))),
                  (a.oy = parseFloat(d.replace(b, ""))),
                  (a.v = o)),
                a || o
              )
            },
            Te = {
              aqua: [0, 255, 255],
              lime: [0, 255, 0],
              silver: [192, 192, 192],
              black: [0, 0, 0],
              maroon: [128, 0, 0],
              teal: [0, 128, 128],
              blue: [0, 0, 255],
              navy: [0, 0, 128],
              white: [255, 255, 255],
              fuchsia: [255, 0, 255],
              olive: [128, 128, 0],
              yellow: [255, 255, 0],
              orange: [255, 165, 0],
              gray: [128, 128, 128],
              purple: [128, 0, 128],
              green: [0, 128, 0],
              red: [255, 0, 0],
              pink: [255, 192, 203],
              cyan: [0, 255, 255],
              transparent: [255, 255, 255, 0],
            },
            Ce = (ne.parseColor = function (d, c) {
              var e, m, g, b, _, O, y, D, w, T, C
              if (!d) e = Te.black
              else if ("number" == typeof d) e = [d >> 16, 255 & (d >> 8), 255 & d]
              else {
                if (("," === d.charAt(d.length - 1) && (d = d.substr(0, d.length - 1)), Te[d])) e = Te[d]
                else if ("#" === d.charAt(0))
                  4 === d.length && (d = "#" + (m = d.charAt(1)) + m + (g = d.charAt(2)) + g + (b = d.charAt(3)) + b), (e = [(d = parseInt(d.substr(1), 16)) >> 16, 255 & (d >> 8), 255 & d])
                else if (!("hsl" === d.substr(0, 3))) e = d.match(ue) || Te.transparent
                else if (!((e = C = d.match(ue)), c))
                  (_ = (+e[0] % 360) / 360),
                    (O = +e[1] / 100),
                    (m = 2 * (y = +e[2] / 100) - (g = 0.5 >= y ? y * (O + 1) : y + O - y * O)),
                    3 < e.length && (e[3] = +d[3]),
                    (e[0] = v(_ + 1 / 3, m, g)),
                    (e[1] = v(_, m, g)),
                    (e[2] = v(_ - 1 / 3, m, g))
                else if (-1 !== d.indexOf("=")) return d.match(z)
                ;(e[0] = +e[0]), (e[1] = +e[1]), (e[2] = +e[2]), 3 < e.length && (e[3] = +e[3])
              }
              return (
                c &&
                  !C &&
                  ((m = e[0] / 255),
                  (g = e[1] / 255),
                  (b = e[2] / 255),
                  (y = ((D = Math.max(m, g, b)) + (w = Math.min(m, g, b))) / 2),
                  D === w
                    ? (_ = O = 0)
                    : ((T = D - w), (O = 0.5 < y ? T / (2 - D - w) : T / (D + w)), (_ = D === m ? (g - b) / T + (g < b ? 6 : 0) : D === g ? (b - m) / T + 2 : (m - g) / T + 4), (_ *= 60)),
                  (e[0] = 0 | (_ + 0.5)),
                  (e[1] = 0 | (100 * O + 0.5)),
                  (e[2] = 0 | (100 * y + 0.5))),
                e
              )
            }),
            Se = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b",
            xe,
            Pe,
            Ie,
            He,
            ke,
            Be,
            Le,
            Ae,
            Me,
            Ee
          for (h in Te) Se += "|" + h + "\\b"
          ;(Se = new RegExp(Se + ")", "gi")),
            (ne.colorStringFilter = function (o) {
              var t = o[0] + o[1],
                r
              Se.test(t) && ((r = -1 !== t.indexOf("hsl(") || -1 !== t.indexOf("hsla(")), (o[0] = _(o[0], r)), (o[1] = _(o[1], r))), (Se.lastIndex = 0)
            }),
            V.defaultStringFilter || (V.defaultStringFilter = ne.colorStringFilter),
            (J._setPluginRatio = function (d) {
              this.plugin.setRatio(d)
              for (var t = this.data, a = t.proxy, o = t.firstMPT, u, h, c, p, m; o; ) (u = a[o.v]), o.r ? (u = Math.round(u)) : 1e-6 > u && -1e-6 < u && (u = 0), (o.t[o.p] = u), (o = o._next)
              if ((t.autoRotate && (t.autoRotate.rotation = t.mod ? t.mod(a.rotation, this.t) : a.rotation), 1 === d || 0 === d))
                for (o = t.firstMPT, m = 1 === d ? "e" : "b"; o; ) {
                  if (!(h = o.t).type) h[m] = h.s + h.xs0
                  else if (1 === h.type) {
                    for (p = h.xs0 + h.s + h.xs1, c = 1; c < h.l; c++) p += h["xn" + c] + h["xs" + (c + 1)]
                    h[m] = p
                  }
                  o = o._next
                }
            })
          var We = function (o, t, e, n, r) {
              ;(this.t = o), (this.p = t), (this.v = e), (this.r = r), n && ((n._prev = this)._next = n)
            },
            Re =
              ((J._parseToProxy = function (m, t, e, i, g, s) {
                var n = i,
                  u = {},
                  p = {},
                  b = e._transform,
                  c = G,
                  d,
                  _,
                  O,
                  y,
                  v
                for (e._transform = null, G = t, i = v = e.parse(m, t, i, g), G = c, s && ((e._transform = b), n && ((n._prev = null), n._prev && (n._prev._next = null))); i && i !== n; ) {
                  if (1 >= i.type && ((p[(_ = i.p)] = i.s + i.c), (u[_] = i.s), s || ((y = new We(i, "s", _, y, i.r)), (i.c = 0)), 1 === i.type))
                    for (d = i.l; 0 < --d; ) (O = "xn" + d), (p[(_ = i.p + "_" + O)] = i.data[O]), (u[_] = i[O]), s || (y = new We(i, O, _, y, i.rxp[O]))
                  i = i._next
                }
                return { proxy: u, end: p, firstMPT: y, pt: v }
              }),
              (J.CSSPropTween = function (d, t, e, i, r, s, n, a, o, l, u) {
                ;(this.t = d),
                  (this.p = t),
                  (this.s = e),
                  (this.c = i),
                  (this.n = n || t),
                  d instanceof Re || de.push(this.n),
                  (this.r = a),
                  (this.type = s || 0),
                  o && ((this.pr = o), (m = !0)),
                  (this.b = void 0 === l ? e : l),
                  (this.e = void 0 === u ? e + i : u),
                  r && ((this._next = r)._prev = this)
              })),
            Fe = (ne.parseComplex = function (D, t, C, S, I, s, n, H, o, l) {
              ;(C = C || s || ""),
                "function" == typeof S && (S = S(Ae, Le)),
                (n = new Re(D, t, 0, 0, n, l ? 2 : 1, null, !1, H, C, S)),
                (S += ""),
                I && Se.test(S + C) && ((S = [C, S]), ne.colorStringFilter(S), (C = S[0]), (S = S[1]))
              var h = C.split(", ").join(",").split(" "),
                B = S.split(", ").join(",").split(" "),
                L = h.length,
                A = !1 !== xe,
                k,
                M,
                E,
                W,
                R,
                F,
                N,
                V,
                X,
                Y,
                U,
                G,
                j
              for (
                (-1 === S.indexOf(",") && -1 === C.indexOf(",")) || ((h = h.join(" ").replace(Z, ", ").split(" ")), (B = B.join(" ").replace(Z, ", ").split(" ")), (L = h.length)),
                  L !== B.length && (L = (h = (s || "").split(" ")).length),
                  n.plugin = o,
                  n.setRatio = l,
                  k = Se.lastIndex = 0;
                k < L;
                k++
              )
                if (((W = h[k]), (R = B[k]), (V = parseFloat(W)) || 0 === V)) n.appendXtra("", V, e(R, V), R.replace(z, ""), A && -1 !== R.indexOf("px"), !0)
                else if (I && Se.test(W))
                  (G = ")" + ((G = R.indexOf(")") + 1) ? R.substr(G) : "")),
                    (j = -1 !== R.indexOf("hsl") && me),
                    (W = Ce(W, j)),
                    (R = Ce(R, j)),
                    (X = 6 < W.length + R.length) && !me && 0 === R[3]
                      ? ((n["xs" + n.l] += n.l ? " transparent" : "transparent"), (n.e = n.e.split(B[k]).join("transparent")))
                      : (me || (X = !1),
                        j
                          ? n
                              .appendXtra(X ? "hsla(" : "hsl(", W[0], e(R[0], W[0]), ",", !1, !0)
                              .appendXtra("", W[1], e(R[1], W[1]), "%,", !1)
                              .appendXtra("", W[2], e(R[2], W[2]), X ? "%," : "%" + G, !1)
                          : n
                              .appendXtra(X ? "rgba(" : "rgb(", W[0], R[0] - W[0], ",", !0, !0)
                              .appendXtra("", W[1], R[1] - W[1], ",", !0)
                              .appendXtra("", W[2], R[2] - W[2], X ? "," : G, !0),
                        X && ((W = 4 > W.length ? 1 : W[3]), n.appendXtra("", W, (4 > R.length ? 1 : R[3]) - W, G, !1))),
                    (Se.lastIndex = 0)
                else if ((F = W.match(ue))) {
                  if (!(N = R.match(z)) || N.length !== F.length) return n
                  for (M = E = 0; M < F.length; M++)
                    (U = F[M]), (Y = W.indexOf(U, E)), n.appendXtra(W.substr(E, Y - E), +U, e(N[M], U), "", A && "px" === W.substr(Y + U.length, 2), 0 === M), (E = Y + U.length)
                  n["xs" + n.l] += W.substr(E)
                } else n["xs" + n.l] += n.l || n["xs" + n.l] ? " " + R : R
              if (-1 !== S.indexOf("=") && n.data) {
                for (G = n.xs0 + n.data.s, k = 1; k < n.l; k++) G += n["xs" + k] + n.data["xn" + k]
                n.e = G + n["xs" + k]
              }
              return n.l || ((n.type = -1), (n.xs0 = n.e)), n.xfirst || n
            }),
            Ne = 9
          for ((h = Re.prototype).l = h.pr = 0; 0 < --Ne; ) (h["xn" + Ne] = 0), (h["xs" + Ne] = "")
          ;(h.xs0 = ""),
            (h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null),
            (h.appendXtra = function (l, t, e, i, r, s) {
              var n = this,
                a = n.l
              return (
                (n["xs" + a] += s && (a || n["xs" + a]) ? " " + l : l || ""),
                e || 0 === a || n.plugin
                  ? (n.l++,
                    (n.type = n.setRatio ? 2 : 1),
                    (n["xs" + n.l] = i || ""),
                    0 < a
                      ? ((n.data["xn" + a] = t + e), (n.rxp["xn" + a] = r), (n["xn" + a] = t), n.plugin || ((n.xfirst = new Re(n, "xn" + a, t, e, n.xfirst || n, 0, n.n, r, n.pr)), (n.xfirst.xs0 = 0)))
                      : ((n.data = { s: t + e }), (n.rxp = {}), (n.s = t), (n.c = e), (n.r = r)),
                    n)
                  : ((n["xs" + a] += t + (i || "")), n)
              )
            })
          var Ve = (J._registerComplexSpecialProp = function (o, t, a) {
              "object" != typeof t && (t = { parser: a })
              var l = o.split(","),
                s = t.defaultValue,
                n
              for (a = a || [s], n = 0; n < l.length; n++) (t.prefix = 0 === n && t.prefix), (t.defaultValue = a[n] || s), new R(l[n], t)
            }),
            Xe = (J._registerPluginProp = function (e) {
              var d
              ie[e] ||
                ((d = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin"),
                Ve(e, {
                  parser: function (l, t, e, i, r, s, n) {
                    var a = W.com.fwd.plugins[d]
                    return a ? (a._cssRegister(), ie[e].parse(l, t, e, i, r, s, n)) : (E("Error: " + d + " js file not loaded."), r)
                  },
                }))
            })
          ;((h = R.prototype).parseComplex = function (d, t, c, m, r, s) {
            var n = this.keyword,
              p,
              g,
              b,
              _,
              O,
              y
            if ((this.multi && (Z.test(c) || Z.test(t) ? ((g = t.replace(Z, "|").split("|")), (b = c.replace(Z, "|").split("|"))) : n && ((g = [t]), (b = [c]))), b)) {
              for (_ = b.length > g.length ? b.length : g.length, p = 0; p < _; p++)
                (t = g[p] = g[p] || this.dflt),
                  (c = b[p] = b[p] || this.dflt),
                  n && (O = t.indexOf(n)) !== (y = c.indexOf(n)) && (-1 === y ? (g[p] = g[p].split(n).join("")) : -1 === O && (g[p] += " " + n))
              ;(t = g.join(", ")), (c = b.join(", "))
            }
            return Fe(d, this.p, t, c, this.clrs, this.dflt, m, this.pr, r, s)
          }),
            (h.parse = function (o, t, e, i, r, s) {
              return this.parseComplex(o.style, this.format(fe(o, this.p, le, !1, this.dflt)), this.format(t), r, s)
            }),
            (ne.registerSpecialProp = function (e, a, l) {
              Ve(e, {
                parser: function (d, t, e, i, r, s) {
                  var n = new Re(d, e, 0, 0, r, 2, e, !1, l)
                  return (n.plugin = s), (n.setRatio = a(d, t, i._tween, e)), n
                },
                priority: l,
              })
            }),
            (ne.useSVGTransformAttr = Ie || He)
          var Ye = ["scaleX", "scaleY", "scaleZ", "x", "y", "z", "skewX", "skewY", "rotation", "rotationX", "rotationY", "perspective", "xPercent", "yPercent"],
            ze = j("transform"),
            Ue = ge + "transform",
            Ze = j("transformOrigin"),
            Ge = null !== j("perspective"),
            je = (J.Transform = function () {
              ;(this.perspective = parseFloat(ne.defaultTransformPerspective) || 0), (this.force3D = !1 !== ne.defaultForce3D && Ge && (ne.defaultForce3D || "auto"))
            }),
            Ke = window.SVGElement,
            qe = ce.documentElement,
            Qe =
              ((ut = Be || (/Android/i.test(pe) && !window.chrome)),
              ce.createElementNS &&
                !ut &&
                ((it = q("svg", qe)),
                (lt = (at = q("rect", it, { width: 100, height: 50, x: 100 })).getBoundingClientRect().width),
                (at.style[Ze] = "50% 50%"),
                (at.style[ze] = "scaleX(0.5)"),
                (ut = lt === at.getBoundingClientRect().width && !(He && Ge)),
                qe.removeChild(it)),
              ut),
            $e = function (e) {
              return !!(
                Ke &&
                e.getBBox &&
                e.getCTM &&
                (function (e) {
                  try {
                    return e.getBBox()
                  } catch (e) {}
                })(e) &&
                (!e.parentNode || (e.parentNode.getBBox && e.parentNode.getCTM))
              )
            },
            Je = [1, 0, 0, 1, 0, 0],
            et = function (d, t) {
              var e = d._fwdTransform || new je(),
                l = d.style,
                u,
                h,
                c,
                p,
                m,
                g
              if (
                (ze
                  ? (h = fe(d, Ue, null, !0))
                  : d.currentStyle &&
                    (h =
                      (h = d.currentStyle.filter.match(/(M11|M12|M21|M22)=[\d\-\.e]+/gi)) && 4 === h.length
                        ? [h[0].substr(4), +h[2].substr(4), +h[1].substr(4), h[3].substr(4), e.x || 0, e.y || 0].join(",")
                        : ""),
                (u = !h || "none" === h || "matrix(1, 0, 0, 1, 0, 0)" === h) &&
                  ze &&
                  ((g = "none" === _e(d).display) || !d.parentNode) &&
                  (g && ((p = l.display), (l.display = "block")),
                  d.parentNode || ((m = 1), qe.appendChild(d)),
                  (u = !(h = fe(d, Ue, null, !0)) || "none" === h || "matrix(1, 0, 0, 1, 0, 0)" === h),
                  p ? (l.display = p) : g && ht(l, "display"),
                  m && qe.removeChild(d)),
                (e.svg || (d.getBBox && $e(d))) &&
                  (u && -1 !== (l[ze] + "").indexOf("matrix") && ((h = l[ze]), (u = 0)),
                  (c = d.getAttribute("transform")),
                  u &&
                    c &&
                    (-1 === c.indexOf("matrix") ? -1 !== c.indexOf("translate") && ((h = "matrix(1,0,0,1," + c.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")"), (u = 0)) : ((h = c), (u = 0)))),
                u)
              )
                return Je
              for (c = (h || "").match(ue) || [], Ne = c.length; -1 < --Ne; ) (p = +c[Ne]), (c[Ne] = (m = p - (p |= 0)) ? (0 | (1e5 * m + (0 > m ? -0.5 : 0.5))) / 1e5 + p : p)
              return t && 6 < c.length ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c
            },
            tt = (J.getTransform = function (H, t, e, i) {
              if (H._fwdTransform && e && !i) return H._fwdTransform
              var r = (e && H._fwdTransform) || new je(),
                I = 0 > r.scaleX,
                B = (Ge && (parseFloat(fe(H, Ze, t, !1, "0 0 0").split(" ")[2]) || r.zOrigin)) || 0,
                L = parseFloat(ne.defaultTransformPerspective) || 0,
                E,
                W,
                N,
                Y,
                U,
                Z,
                G,
                j,
                K,
                q,
                J,
                ee,
                te,
                oe,
                re,
                se,
                ie,
                ae,
                le,
                de,
                ue,
                he,
                ce,
                pe,
                me,
                ge,
                be,
                _e,
                Oe,
                ye,
                ve,
                De
              if (((r.svg = H.getBBox && $e(H)), r.svg && ($(H, fe(H, Ze, t, !1, "50% 50%") + "", r, H.getAttribute("data-svg-origin")), (rt = ne.useSVGTransformAttr || Qe)), (E = et(H)) !== Je))
                for (W in (16 === E.length
                  ? ((G = E[0]),
                    (j = E[1]),
                    (K = E[2]),
                    (q = E[3]),
                    (J = E[4]),
                    (ee = E[5]),
                    (te = E[6]),
                    (oe = E[7]),
                    (re = E[8]),
                    (se = E[9]),
                    (ie = E[10]),
                    (ae = E[12]),
                    (le = E[13]),
                    (de = E[14]),
                    (ue = E[11]),
                    (he = Math.atan2(te, ie)),
                    r.zOrigin && ((ae = re * (de = -r.zOrigin) - E[12]), (le = se * de - E[13]), (de = ie * de + r.zOrigin - E[14])),
                    (r.rotationX = he * Q),
                    he &&
                      ((ce = J * (ge = Math.cos(-he)) + re * (be = Math.sin(-he))),
                      (pe = ee * ge + se * be),
                      (me = te * ge + ie * be),
                      (re = J * -be + re * ge),
                      (se = ee * -be + se * ge),
                      (ie = te * -be + ie * ge),
                      (ue = oe * -be + ue * ge),
                      (J = ce),
                      (ee = pe),
                      (te = me)),
                    (he = Math.atan2(-K, ie)),
                    (r.rotationY = he * Q),
                    he &&
                      ((pe = j * (ge = Math.cos(-he)) - se * (be = Math.sin(-he))),
                      (me = K * ge - ie * be),
                      (se = j * be + se * ge),
                      (ie = K * be + ie * ge),
                      (ue = q * be + ue * ge),
                      (G = ce = G * ge - re * be),
                      (j = pe),
                      (K = me)),
                    (he = Math.atan2(j, G)),
                    (r.rotation = he * Q),
                    he && ((G = G * (ge = Math.cos(-he)) + J * (be = Math.sin(-he))), (pe = j * ge + ee * be), (ee = j * -be + ee * ge), (te = K * -be + te * ge), (j = pe)),
                    r.rotationX && 359.9 < Math.abs(r.rotationX) + Math.abs(r.rotation) && ((r.rotationX = r.rotation = 0), (r.rotationY = 180 - r.rotationY)),
                    (r.scaleX = (0 | (1e5 * Math.sqrt(G * G + j * j) + 0.5)) / 1e5),
                    (r.scaleY = (0 | (1e5 * Math.sqrt(ee * ee + se * se) + 0.5)) / 1e5),
                    (r.scaleZ = (0 | (1e5 * Math.sqrt(te * te + ie * ie) + 0.5)) / 1e5),
                    r.rotationX || r.rotationY
                      ? (r.skewX = 0)
                      : ((r.skewX = J || ee ? Math.atan2(J, ee) * Q + r.rotation : r.skewX || 0),
                        90 < Math.abs(r.skewX) &&
                          270 > Math.abs(r.skewX) &&
                          (I
                            ? ((r.scaleX *= -1), (r.skewX += 0 >= r.rotation ? 180 : -180), (r.rotation += 0 >= r.rotation ? 180 : -180))
                            : ((r.scaleY *= -1), (r.skewX += 0 >= r.skewX ? 180 : -180)))),
                    (r.perspective = ue ? 1 / (0 > ue ? -ue : ue) : 0),
                    (r.x = ae),
                    (r.y = le),
                    (r.z = de),
                    r.svg && ((r.x -= r.xOrigin - (r.xOrigin * G - r.yOrigin * J)), (r.y -= r.yOrigin - (r.yOrigin * j - r.xOrigin * ee))))
                  : (Ge && !i && E.length && r.x === E[4] && r.y === E[5] && (r.rotationX || r.rotationY)) ||
                    ((Oe = (_e = 6 <= E.length) ? E[0] : 1),
                    (ye = E[1] || 0),
                    (ve = E[2] || 0),
                    (De = _e ? E[3] : 1),
                    (r.x = E[4] || 0),
                    (r.y = E[5] || 0),
                    (N = Math.sqrt(Oe * Oe + ye * ye)),
                    (Y = Math.sqrt(De * De + ve * ve)),
                    (U = Oe || ye ? Math.atan2(ye, Oe) * Q : r.rotation || 0),
                    (Z = ve || De ? Math.atan2(ve, De) * Q + U : r.skewX || 0),
                    90 < Math.abs(Z) && 270 > Math.abs(Z) && (I ? ((N *= -1), (Z += 0 >= U ? 180 : -180), (U += 0 >= U ? 180 : -180)) : ((Y *= -1), (Z += 0 >= Z ? 180 : -180))),
                    (r.scaleX = N),
                    (r.scaleY = Y),
                    (r.rotation = U),
                    (r.skewX = Z),
                    Ge && ((r.rotationX = r.rotationY = r.z = 0), (r.perspective = L), (r.scaleZ = 1)),
                    r.svg && ((r.x -= r.xOrigin - (r.xOrigin * Oe + r.yOrigin * ve)), (r.y -= r.yOrigin - (r.xOrigin * ye + r.yOrigin * De)))),
                (r.zOrigin = B),
                r))
                  2e-5 > r[W] && -2e-5 < r[W] && (r[W] = 0)
              return (
                e &&
                  (H._fwdTransform = r).svg &&
                  (rt && H.style[ze]
                    ? V.delayedCall(0.001, function () {
                        ht(H.style, ze)
                      })
                    : !rt &&
                      H.getAttribute("transform") &&
                      V.delayedCall(0.001, function () {
                        H.removeAttribute("transform")
                      })),
                r
              )
            }),
            ot =
              (J.set3DTransformRatio =
              J.setTransformRatio =
                function (H) {
                  var t = this.data,
                    P = this.t.style,
                    O = t.rotation,
                    B = t.rotationX,
                    L = t.rotationY,
                    S = t.scaleX,
                    E = t.scaleY,
                    W = t.scaleZ,
                    R = t.x,
                    V = t.y,
                    Y = t.z,
                    Z = t.svg,
                    X = t.perspective,
                    G = t.force3D,
                    N,
                    j,
                    K,
                    q,
                    Q,
                    $,
                    J,
                    ee,
                    te,
                    oe,
                    re,
                    se,
                    ne,
                    ie,
                    ae,
                    le,
                    de,
                    ue,
                    he,
                    ce,
                    pe,
                    me,
                    ge
                  if (
                    !((((1 !== H && 0 !== H) || "auto" !== G || (this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime)) && G) || Y || X || L || B || 1 !== W) ||
                    (rt && Z) ||
                    !Ge
                  )
                    O || t.skewX || Z
                      ? ((O *= U),
                        (me = t.skewX * U),
                        (ge = 1e5),
                        (N = Math.cos(O) * S),
                        (q = Math.sin(O) * S),
                        (j = Math.sin(O - me) * -E),
                        (Q = Math.cos(O - me) * E),
                        me &&
                          "simple" === t.skewType &&
                          ((de = Math.tan(me - t.skewY * U)), (j *= de = Math.sqrt(1 + de * de)), (Q *= de), t.skewY && ((de = Math.tan(t.skewY * U)), (N *= de = Math.sqrt(1 + de * de)), (q *= de))),
                        Z &&
                          ((R += t.xOrigin - (t.xOrigin * N + t.yOrigin * j) + t.xOffset),
                          (V += t.yOrigin - (t.xOrigin * q + t.yOrigin * Q) + t.yOffset),
                          rt && (t.xPercent || t.yPercent) && ((ie = this.t.getBBox()), (R += 0.01 * t.xPercent * ie.width), (V += 0.01 * t.yPercent * ie.height)),
                          R < (ie = 1e-6) && -ie < R && (R = 0),
                          V < ie && -ie < V && (V = 0)),
                        (he = (0 | (N * ge)) / ge + "," + (0 | (q * ge)) / ge + "," + (0 | (j * ge)) / ge + "," + (0 | (Q * ge)) / ge + "," + R + "," + V + ")"),
                        Z && rt
                          ? this.t.setAttribute("transform", "matrix(" + he)
                          : (P[ze] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + he))
                      : (P[ze] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + S + ",0,0," + E + "," + R + "," + V + ")")
                  else {
                    if ((He && (S < (ie = 1e-4) && -ie < S && (S = W = 2e-5), E < ie && -ie < E && (E = W = 2e-5), !X || t.z || t.rotationX || t.rotationY || (X = 0)), O || t.skewX))
                      (O *= U),
                        (ae = N = Math.cos(O)),
                        (le = q = Math.sin(O)),
                        t.skewX &&
                          ((O -= t.skewX * U),
                          (ae = Math.cos(O)),
                          (le = Math.sin(O)),
                          "simple" === t.skewType &&
                            ((de = Math.tan((t.skewX - t.skewY) * U)),
                            (ae *= de = Math.sqrt(1 + de * de)),
                            (le *= de),
                            t.skewY && ((de = Math.tan(t.skewY * U)), (N *= de = Math.sqrt(1 + de * de)), (q *= de)))),
                        (j = -le),
                        (Q = ae)
                    else {
                      if (!(L || B || 1 !== W || X || Z))
                        return void (P[ze] =
                          (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") +
                          R +
                          "px," +
                          V +
                          "px," +
                          Y +
                          "px)" +
                          (1 !== S || 1 !== E ? " scale(" + S + "," + E + ")" : ""))
                      ;(N = Q = 1), (j = q = 0)
                    }
                    ;(te = 1),
                      (K = $ = J = ee = oe = re = 0),
                      (se = X ? -1 / X : 0),
                      (ne = t.zOrigin),
                      (ie = 1e-6),
                      (ce = ","),
                      (pe = "0"),
                      (O = L * U) && ((ae = Math.cos(O)), (oe = se * (J = -(le = Math.sin(O)))), (K = N * le), ($ = q * le), (se *= te = ae), (N *= ae), (q *= ae)),
                      (O = B * U) &&
                        ((de = j * (ae = Math.cos(O)) + K * (le = Math.sin(O))),
                        (ue = Q * ae + $ * le),
                        (ee = te * le),
                        (re = se * le),
                        (K = j * -le + K * ae),
                        ($ = Q * -le + $ * ae),
                        (te *= ae),
                        (se *= ae),
                        (j = de),
                        (Q = ue)),
                      1 !== W && ((K *= W), ($ *= W), (te *= W), (se *= W)),
                      1 !== E && ((j *= E), (Q *= E), (ee *= E), (re *= E)),
                      1 !== S && ((N *= S), (q *= S), (J *= S), (oe *= S)),
                      (ne || Z) &&
                        (ne && ((R += K * -ne), (V += $ * -ne), (Y += te * -ne + ne)),
                        Z && ((R += t.xOrigin - (t.xOrigin * N + t.yOrigin * j) + t.xOffset), (V += t.yOrigin - (t.xOrigin * q + t.yOrigin * Q) + t.yOffset)),
                        R < ie && -ie < R && (R = pe),
                        V < ie && -ie < V && (V = pe),
                        Y < ie && -ie < Y && (Y = 0)),
                      (he = t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d("),
                      (he += (N < ie && -ie < N ? pe : N) + ce + (q < ie && -ie < q ? pe : q) + ce + (J < ie && -ie < J ? pe : J)),
                      (he += ce + (oe < ie && -ie < oe ? pe : oe) + ce + (j < ie && -ie < j ? pe : j) + ce + (Q < ie && -ie < Q ? pe : Q)),
                      B || L || 1 !== W
                        ? ((he += ce + (ee < ie && -ie < ee ? pe : ee) + ce + (re < ie && -ie < re ? pe : re) + ce + (K < ie && -ie < K ? pe : K)),
                          (he += ce + ($ < ie && -ie < $ ? pe : $) + ce + (te < ie && -ie < te ? pe : te) + ce + (se < ie && -ie < se ? pe : se) + ce))
                        : (he += ",0,0,0,0,1,0,"),
                      (he += R + ce + V + ce + Y + ce + (X ? 1 + -Y / X : 1) + ")"),
                      (P[ze] = he)
                  }
                }),
            rt,
            it,
            at,
            lt,
            ut
          ;((h = je.prototype).x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0),
            (h.scaleX = h.scaleY = h.scaleZ = 1),
            Ve(
              "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
              {
                parser: function (O, t, e, i, r, D, n) {
                  if (i._lastParsedTransform === n) return r
                  var a
                  "function" == typeof (i._lastParsedTransform = n)[e] && ((a = n[e]), (n[e] = t))
                  var T = O._fwdTransform,
                    g = O.style,
                    y = Ye.length,
                    C = n,
                    S = {},
                    w = tt(O, le, !0, C.parseTransform),
                    b = C.transform && ("function" == typeof C.transform ? C.transform(Ae, Le) : C.transform),
                    x,
                    I,
                    H,
                    B,
                    L,
                    M,
                    E,
                    W,
                    R
                  if (((i._transform = w), b && "string" == typeof b && ze))
                    ((I = K.style)[ze] = b),
                      (I.display = "block"),
                      (I.position = "absolute"),
                      ce.body.appendChild(K),
                      (x = tt(K, null, !1)),
                      w.svg &&
                        ((M = w.xOrigin),
                        (E = w.yOrigin),
                        (x.x -= w.xOffset),
                        (x.y -= w.yOffset),
                        (C.transformOrigin || C.svgOrigin) &&
                          ((b = {}), $(O, we(C.transformOrigin), b, C.svgOrigin, C.smoothOrigin, !0), (M = b.xOrigin), (E = b.yOrigin), (x.x -= b.xOffset - w.xOffset), (x.y -= b.yOffset - w.yOffset)),
                        (M || E) && ((W = et(K, !0)), (x.x -= M - (M * W[0] + E * W[2])), (x.y -= E - (M * W[1] + E * W[3])))),
                      ce.body.removeChild(K),
                      x.perspective || (x.perspective = w.perspective),
                      null != C.xPercent && (x.xPercent = k(C.xPercent, w.xPercent)),
                      null != C.yPercent && (x.yPercent = k(C.yPercent, w.yPercent))
                  else if ("object" == typeof C) {
                    if (
                      ((x = {
                        scaleX: k(null == C.scaleX ? C.scale : C.scaleX, w.scaleX),
                        scaleY: k(null == C.scaleY ? C.scale : C.scaleY, w.scaleY),
                        scaleZ: k(C.scaleZ, w.scaleZ),
                        x: k(C.x, w.x),
                        y: k(C.y, w.y),
                        z: k(C.z, w.z),
                        xPercent: k(C.xPercent, w.xPercent),
                        yPercent: k(C.yPercent, w.yPercent),
                        perspective: k(C.transformPerspective, w.perspective),
                      }),
                      null != (L = C.directionalRotation))
                    )
                      if ("object" == typeof L) for (I in L) C[I] = L[I]
                      else C.rotation = L
                    "string" == typeof C.x && -1 !== C.x.indexOf("%") && ((x.x = 0), (x.xPercent = k(C.x, w.xPercent))),
                      "string" == typeof C.y && -1 !== C.y.indexOf("%") && ((x.y = 0), (x.yPercent = k(C.y, w.yPercent))),
                      (x.rotation = o(
                        "rotation" in C ? C.rotation : "shortRotation" in C ? C.shortRotation + "_short" : "rotationZ" in C ? C.rotationZ : w.rotation - w.skewY,
                        w.rotation - w.skewY,
                        "rotation",
                        S
                      )),
                      Ge &&
                        ((x.rotationX = o("rotationX" in C ? C.rotationX : "shortRotationX" in C ? C.shortRotationX + "_short" : w.rotationX || 0, w.rotationX, "rotationX", S)),
                        (x.rotationY = o("rotationY" in C ? C.rotationY : "shortRotationY" in C ? C.shortRotationY + "_short" : w.rotationY || 0, w.rotationY, "rotationY", S))),
                      (x.skewX = o(C.skewX, w.skewX - w.skewY)),
                      (x.skewY = o(C.skewY, w.skewY)) && ((x.skewX += x.skewY), (x.rotation += x.skewY))
                  }
                  for (
                    Ge && null != C.force3D && ((w.force3D = C.force3D), (B = !0)),
                      w.skewType = C.skewType || w.skewType || ne.defaultSkewType,
                      (H = w.force3D || w.z || w.rotationX || w.rotationY || x.z || x.rotationX || x.rotationY || x.perspective) || null == C.scale || (x.scaleZ = 1);
                    -1 < --y;

                  )
                    (1e-6 < (b = x[(R = Ye[y])] - w[R]) || -1e-6 > b || null != C[R] || null != G[R]) &&
                      ((B = !0), (r = new Re(w, R, w[R], b, r)), R in S && (r.e = S[R]), (r.xs0 = 0), (r.plugin = D), i._overwriteProps.push(r.n))
                  return (
                    (b = C.transformOrigin),
                    w.svg &&
                      (b || C.svgOrigin) &&
                      ((M = w.xOffset),
                      (E = w.yOffset),
                      $(O, we(b), x, C.svgOrigin, C.smoothOrigin),
                      (r = A(w, "xOrigin", (T ? w : x).xOrigin, x.xOrigin, r, "transformOrigin")),
                      (r = A(w, "yOrigin", (T ? w : x).yOrigin, x.yOrigin, r, "transformOrigin")),
                      (M === w.xOffset && E === w.yOffset) ||
                        ((r = A(w, "xOffset", T ? M : w.xOffset, w.xOffset, r, "transformOrigin")), (r = A(w, "yOffset", T ? E : w.yOffset, w.yOffset, r, "transformOrigin"))),
                      (b = rt ? null : "0px 0px")),
                    (b || (Ge && H && w.zOrigin)) &&
                      (ze
                        ? ((B = !0),
                          (R = Ze),
                          (b = (b || fe(O, R, le, !1, "50% 50%")) + ""),
                          ((r = new Re(g, R, 0, 0, r, -1, "transformOrigin")).b = g[R]),
                          (r.plugin = D),
                          Ge
                            ? ((I = w.zOrigin),
                              (b = b.split(" ")),
                              (w.zOrigin = (2 < b.length && (0 === I || "0px" !== b[2]) ? parseFloat(b[2]) : I) || 0),
                              (r.xs0 = r.e = b[0] + " " + (b[1] || "50%") + " 0px"),
                              ((r = new Re(w, "zOrigin", 0, 0, r, -1, r.n)).b = I),
                              (r.xs0 = r.e = w.zOrigin))
                            : (r.xs0 = r.e = b))
                        : we(b + "", w)),
                    B && (i._transformType = (w.svg && rt) || (!H && 3 !== this._transformType) ? 2 : 3),
                    a && (n[e] = a),
                    r
                  )
                },
                prefix: !0,
              }
            ),
            Ve("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }),
            Ve("borderRadius", {
              defaultValue: "0px",
              parser: function (n, t, O, i, r) {
                t = this.format(t)
                for (
                  var D = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    y = n.style,
                    v = parseFloat(n.offsetWidth),
                    C = parseFloat(n.offsetHeight),
                    w = t.split(" "),
                    T = 0,
                    S,
                    x,
                    P,
                    I,
                    H,
                    k,
                    B,
                    L,
                    A,
                    M,
                    E,
                    W;
                  T < D.length;
                  T++
                )
                  this.p.indexOf("border") && (D[T] = j(D[T])),
                    -1 !== (P = x = fe(n, D[T], le, !1, "0px")).indexOf(" ") && ((P = (x = P.split(" "))[0]), (x = x[1])),
                    (I = S = w[T]),
                    (H = parseFloat(P)),
                    (L = P.substr((H + "").length)),
                    "" ===
                      (B = (A = "=" === I.charAt(1))
                        ? ((k = parseInt(I.charAt(0) + "1", 10)), (I = I.substr(2)), (k *= parseFloat(I)), I.substr((k + "").length - (0 > k ? 1 : 0)) || "")
                        : ((k = parseFloat(I)), I.substr((k + "").length))) && (B = ae[O] || L),
                    B !== L &&
                      ((M = Oe(n, "borderLeft", H, L)),
                      (E = Oe(n, "borderTop", H, L)),
                      (x =
                        "%" === B ? ((P = 100 * (M / v) + "%"), 100 * (E / C) + "%") : "em" === B ? ((P = M / (W = Oe(n, "borderLeft", 1, "em")) + "em"), E / W + "em") : ((P = M + "px"), E + "px")),
                      A && ((I = parseFloat(P) + k + B), (S = parseFloat(x) + k + B))),
                    (r = Fe(y, D[T], P + " " + x, I + " " + S, !1, "0px", r))
                return r
              },
              prefix: !0,
              formatter: r("0px 0px 0px 0px", !1, !0),
            }),
            Ve("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
              defaultValue: "0px",
              parser: function (o, t, e, n, r) {
                return Fe(o.style, e, this.format(fe(o, e, le, !1, "0px 0px")), this.format(t), !1, "0px", r)
              },
              prefix: !0,
              formatter: r("0px 0px", !1, !0),
            }),
            Ve("backgroundPosition", {
              defaultValue: "0 0",
              parser: function (m, t, e, i, r, s) {
                var n = le || _e(m, null),
                  g = this.format(
                    (n
                      ? Be
                        ? n.getPropertyValue("background-position-x") + " " + n.getPropertyValue("background-position-y")
                        : n.getPropertyValue("background-position")
                      : m.currentStyle.backgroundPositionX + " " + m.currentStyle.backgroundPositionY) || "0 0"
                  ),
                  b = this.format(t),
                  d,
                  _,
                  O,
                  y,
                  v,
                  D
                if (
                  (-1 !== g.indexOf("%")) != (-1 !== b.indexOf("%")) &&
                  2 > b.split(",").length &&
                  (D = fe(m, "backgroundImage").replace(/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, "")) &&
                  "none" !== D
                ) {
                  for (d = g.split(" "), _ = b.split(" "), p.setAttribute("src", D), O = 2; -1 < --O; )
                    (y = -1 !== (g = d[O]).indexOf("%")) != (-1 !== _[O].indexOf("%")) &&
                      ((v = 0 === O ? m.offsetWidth - p.width : m.offsetHeight - p.height), (d[O] = y ? (parseFloat(g) / 100) * v + "px" : 100 * (parseFloat(g) / v) + "%"))
                  g = d.join(" ")
                }
                return this.parseComplex(m.style, g, b, r, s)
              },
              formatter: we,
            }),
            Ve("backgroundSize", {
              defaultValue: "0 0",
              formatter: function (e) {
                return we(-1 === (e += "").indexOf(" ") ? e + " " + e : e)
              },
            }),
            Ve("perspective", { defaultValue: "0px", prefix: !0 }),
            Ve("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
            Ve("transformStyle", { prefix: !0 }),
            Ve("backfaceVisibility", { prefix: !0 }),
            Ve("userSelect", { prefix: !0 }),
            Ve("margin", { parser: S("marginTop,marginRight,marginBottom,marginLeft") }),
            Ve("padding", { parser: S("paddingTop,paddingRight,paddingBottom,paddingLeft") }),
            Ve("clip", {
              defaultValue: "rect(0px,0px,0px,0px)",
              parser: function (d, t, u, i, r, s) {
                var n, h, c
                return (
                  (t =
                    9 > Be
                      ? ((h = d.currentStyle), (c = 8 > Be ? " " : ","), (n = "rect(" + h.clipTop + c + h.clipRight + c + h.clipBottom + c + h.clipLeft + ")"), this.format(t).split(",").join(c))
                      : ((n = this.format(fe(d, this.p, le, !1, this.dflt))), this.format(t))),
                  this.parseComplex(d.style, n, t, r, s)
                )
              },
            }),
            Ve("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }),
            Ve("autoRound,strictUnits", {
              parser: function (o, t, e, n, r) {
                return r
              },
            }),
            Ve("border", {
              defaultValue: "0px solid #000",
              parser: function (d, t, e, i, r, s) {
                var n = fe(d, "borderTopWidth", le, !1, "0px"),
                  u = this.format(t).split(" "),
                  o = u[0].replace(he, "")
                return (
                  "px" !== o && (n = parseFloat(n) / Oe(d, "borderTopWidth", 1, o) + o),
                  this.parseComplex(d.style, this.format(n + " " + fe(d, "borderTopStyle", le, !1, "solid") + " " + fe(d, "borderTopColor", le, !1, "#000")), u.join(" "), r, s)
                )
              },
              color: !0,
              formatter: function (o) {
                var t = o.split(" ")
                return t[0] + " " + (t[1] || "solid") + " " + (o.match(Se) || ["#000"])[0]
              },
            }),
            Ve("borderWidth", { parser: S("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }),
            Ve("float,cssFloat,styleFloat", {
              parser: function (n, t, e, i, r) {
                var s = n.style,
                  a = "cssFloat" in s ? "cssFloat" : "styleFloat"
                return new Re(s, a, 0, 0, r, -1, e, !1, 0, s[a], t)
              },
            }),
            Ve("opacity,alpha,autoAlpha", {
              defaultValue: "1",
              parser: function (d, t, u, i, r, h) {
                var n = parseFloat(fe(d, "opacity", le, !1, "1")),
                  c = d.style,
                  o = "autoAlpha" === u
                return (
                  "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + n),
                  o && 1 === n && "hidden" === fe(d, "visibility", le) && 0 !== t && (n = 0),
                  me
                    ? (r = new Re(c, "opacity", n, t - n, r))
                    : (((r = new Re(c, "opacity", 100 * n, 100 * (t - n), r)).xn1 = o ? 1 : 0),
                      (c.zoom = 1),
                      (r.type = 2),
                      (r.b = "alpha(opacity=" + r.s + ")"),
                      (r.e = "alpha(opacity=" + (r.s + r.c) + ")"),
                      (r.data = d),
                      (r.plugin = h),
                      (r.setRatio = te)),
                  o &&
                    (((r = new Re(c, "visibility", 0, 0, r, -1, null, !1, 0, 0 === n ? "hidden" : "inherit", 0 === t ? "hidden" : "inherit")).xs0 = "inherit"),
                    i._overwriteProps.push(r.n),
                    i._overwriteProps.push(u)),
                  r
                )
              },
            })
          var ht = function (o, t) {
            t && (o.removeProperty ? (("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6)) || (t = "-" + t), o.removeProperty(t.replace(l, "-$1").toLowerCase())) : o.removeAttribute(t))
          }
          for (
            Ve("className", {
              parser: function (d, t, e, i, r, c, n) {
                var a = d.getAttribute("class") || "",
                  p = d.style.cssText,
                  b,
                  _,
                  O,
                  v,
                  D
                if ((((r = i._classNamePT = new Re(d, e, 0, 0, r, 2)).setRatio = oe), (r.pr = -11), (m = !0), (r.b = a), (_ = g(d, le)), (O = d._fwdClassPT))) {
                  for (v = {}, D = O.data; D; ) (v[D.p] = 1), (D = D._next)
                  O.setRatio(1)
                }
                return (
                  ((d._fwdClassPT = r).e = "=" === t.charAt(1) ? a.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : "") : t),
                  d.setAttribute("class", r.e),
                  (b = y(d, _, g(d), n, v)),
                  d.setAttribute("class", a),
                  (r.data = b.firstMPT),
                  (d.style.cssText = p),
                  (r = r.xfirst = i.parse(d, b.difs, r, c))
                )
              },
            }),
              Ve("clearProps", {
                parser: function (o, t, e, n, r) {
                  return ((r = new Re(o, e, 0, 0, r, 2)).setRatio = re), (r.e = t), (r.pr = -10), (r.data = n._tween), (m = !0), r
                },
              }),
              h = ["bezier", "throwProps", "physicsProps", "physics2D"],
              Ne = h.length;
            Ne--;

          )
            Xe(h[Ne])
          ;((h = ne.prototype)._firstPT = h._lastParsedTransform = h._transform = null),
            (h._onInitTween = function (d, t, c, i) {
              if (!d.nodeType) return !1
              ;(this._target = Le = d), (this._tween = c), (this._vars = t), (Ae = i), (xe = t.autoRound), (m = !1), (ae = t.suffixMap || ne.suffixMap), (le = _e(d, "")), (de = this._overwriteProps)
              var r = d.style,
                b,
                _,
                O,
                v,
                D,
                w,
                T,
                C,
                S
              if (
                (Pe && "" === r.zIndex && (("auto" !== (b = fe(d, "zIndex", le)) && "" !== b) || this._addLazySet(r, "zIndex", 0)),
                "string" == typeof t &&
                  ((v = r.cssText),
                  (b = g(d, le)),
                  (r.cssText = v + ";" + t),
                  (b = y(d, b, g(d)).difs),
                  !me && /opacity:([^;]*)/i.test(t) && (b.opacity = parseFloat(RegExp.$1)),
                  (t = b),
                  (r.cssText = v)),
                (this._firstPT = t.className ? (_ = ie.className.parse(d, t.className, "className", this, null, null, t)) : (_ = this.parse(d, t, null))),
                this._transformType)
              ) {
                for (
                  S = 3 === this._transformType,
                    ze
                      ? Ie &&
                        ((Pe = !0),
                        "" === r.zIndex && (("auto" !== (T = fe(d, "zIndex", le)) && "" !== T) || this._addLazySet(r, "zIndex", 0)),
                        ke && this._addLazySet(r, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden")))
                      : (r.zoom = 1),
                    O = _;
                  O && O._next;

                )
                  O = O._next
                ;(C = new Re(d, "transform", 0, 0, null, 2)), this._linkCSSP(C, null, O), (C.setRatio = ze ? ot : ee), (C.data = this._transform || tt(d, le, !0)), (C.tween = c), (C.pr = -1), de.pop()
              }
              if (m) {
                for (; _; ) {
                  for (w = _._next, O = v; O && O.pr > _.pr; ) O = O._next
                  ;(_._prev = O ? O._prev : D) ? (_._prev._next = _) : (v = _), (_._next = O) ? (O._prev = _) : (D = _), (_ = w)
                }
                this._firstPT = v
              }
              return !0
            }),
            (h.parse = function (d, t, e, m) {
              var r = d.style,
                c,
                g,
                b,
                O,
                y,
                v,
                D,
                w,
                T,
                C
              for (c in t)
                "function" == typeof (v = t[c]) && (v = v(Ae, Le)),
                  (g = ie[c])
                    ? (e = g.parse(d, v, c, this, e, m, t))
                    : ((y = fe(d, c, le) + ""),
                      (T = "string" == typeof v),
                      "color" === c || "fill" === c || "stroke" === c || -1 !== c.indexOf("Color") || (T && /^(rgb|hsl)/.test(v))
                        ? (T || (v = (3 < (v = Ce(v)).length ? "rgba(" : "rgb(") + v.join(",") + ")"), (e = Fe(r, c, y, v, !0, "transparent", e, 0, m)))
                        : T && /[\s,\(]/i.test(v)
                        ? (e = Fe(r, c, y, v, !0, null, e, 0, m))
                        : ((D = (b = parseFloat(y)) || 0 === b ? y.substr((b + "").length) : ""),
                          ("" !== y && "auto" !== y) ||
                            (D =
                              "width" === c || "height" === c
                                ? ((b = (function (o, t, e) {
                                    if ("svg" === (o.nodeName + "").toLowerCase()) return (e || _e(o))[t] || 0
                                    if (o.getBBox && $e(o)) return o.getBBox()[t] || 0
                                    var a = parseFloat("width" === t ? o.offsetWidth : o.offsetHeight),
                                      l = ve[t],
                                      s = l.length
                                    for (e = e || _e(o, null); -1 < --s; ) (a -= parseFloat(fe(o, "padding" + l[s], e, !0)) || 0), (a -= parseFloat(fe(o, "border" + l[s] + "Width", e, !0)) || 0)
                                    return a
                                  })(d, c, le)),
                                  "px")
                                : "left" === c || "top" === c
                                ? ((b = ye(d, c, le)), "px")
                                : ((b = "opacity" === c ? 1 : 0), "")),
                          "" ===
                            (w = (C = T && "=" === v.charAt(1))
                              ? ((O = parseInt(v.charAt(0) + "1", 10)), (v = v.substr(2)), (O *= parseFloat(v)), v.replace(he, ""))
                              : ((O = parseFloat(v)), T ? v.replace(he, "") : "")) && (w = c in ae ? ae[c] : D),
                          (v = O || 0 === O ? (C ? O + b : O) + w : t[c]),
                          D !== w &&
                            "" !== w &&
                            (O || 0 === O) &&
                            b &&
                            ((b = Oe(d, c, b, D)),
                            "%" === w
                              ? ((b /= Oe(d, c, 100, "%") / 100), !0 !== t.strictUnits && (y = b + "%"))
                              : "em" === w || "rem" === w || "vw" === w || "vh" === w
                              ? (b /= Oe(d, c, 1, w))
                              : "px" !== w && ((O = Oe(d, c, O, w)), (w = "px")),
                            C && ((!O && 0 !== O) || (v = O + b + w))),
                          C && (O += b),
                          (b || 0 === b) && (O || 0 === O)
                            ? ((e = new Re(r, c, b, O - b, e, 0, c, !1 !== xe && ("px" === w || "zIndex" === c), 0, y, v)).xs0 = w)
                            : void 0 !== r[c] && (v || ("NaN" != v + "" && null != v))
                            ? ((e = new Re(r, c, O || b || 0, 0, e, -1, c, !1, 0, y, v)).xs0 = "none" !== v || ("display" !== c && -1 === c.indexOf("Style")) ? v : y)
                            : E("invalid " + c + " tween value: " + t[c]))),
                  m && e && !e.plugin && (e.plugin = m)
              return e
            }),
            (h.setRatio = function (o) {
              var t = this._firstPT,
                n,
                a,
                l
              if (!(1 !== o || (this._tween._time !== this._tween._duration && 0 !== this._tween._time)))
                for (; t; ) {
                  if (!(2 !== t.type)) t.setRatio(o)
                  else if (!(t.r && -1 !== t.type)) t.t[t.p] = t.e
                  else if (!((n = Math.round(t.s + t.c)), t.type)) t.t[t.p] = n + t.xs0
                  else if (1 === t.type) {
                    for (l = t.l, a = t.xs0 + n + t.xs1, l = 1; l < t.l; l++) a += t["xn" + l] + t["xs" + (l + 1)]
                    t.t[t.p] = a
                  }
                  t = t._next
                }
              else if (o || (this._tween._time !== this._tween._duration && 0 !== this._tween._time) || -1e-6 === this._tween._rawPrevTime)
                for (; t; ) {
                  if (!((n = t.c * o + t.s), t.r ? (n = Math.round(n)) : 1e-6 > n && -1e-6 < n && (n = 0), t.type)) t.t[t.p] = n + t.xs0
                  else if (!(1 === t.type)) -1 === t.type ? (t.t[t.p] = t.xs0) : t.setRatio && t.setRatio(o)
                  else if (2 === (l = t.l)) t.t[t.p] = t.xs0 + n + t.xs1 + t.xn1 + t.xs2
                  else if (3 === l) t.t[t.p] = t.xs0 + n + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3
                  else if (4 === l) t.t[t.p] = t.xs0 + n + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4
                  else if (5 === l) t.t[t.p] = t.xs0 + n + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4 + t.xn4 + t.xs5
                  else {
                    for (a = t.xs0 + n + t.xs1, l = 1; l < t.l; l++) a += t["xn" + l] + t["xs" + (l + 1)]
                    t.t[t.p] = a
                  }
                  t = t._next
                }
              else for (; t; ) 2 === t.type ? t.setRatio(o) : (t.t[t.p] = t.b), (t = t._next)
            }),
            (h._enableTransforms = function (e) {
              ;(this._transform = this._transform || tt(this._target, le, !0)), (this._transformType = (this._transform.svg && rt) || (!e && 3 !== this._transformType) ? 2 : 3)
            }),
            (h._addLazySet = function (o, t, e) {
              var s = (this._firstPT = new Re(o, t, 0, 0, this._firstPT, 2))
              ;(s.e = e), (s.setRatio = se), (s.data = this)
            }),
            (h._linkCSSP = function (o, t, e, s) {
              return (
                o &&
                  (t && (t._prev = o),
                  o._next && (o._next._prev = o._prev),
                  o._prev ? (o._prev._next = o._next) : this._firstPT === o && ((this._firstPT = o._next), (s = !0)),
                  e ? (e._next = o) : s || null !== this._firstPT || (this._firstPT = o),
                  (o._next = t),
                  (o._prev = e)),
                o
              )
            }),
            (h._mod = function (o) {
              for (var t = this._firstPT; t; ) "function" == typeof o[t.p] && o[t.p] === Math.round && (t.r = 1), (t = t._next)
            }),
            (h._kill = function (o) {
              var t = o,
                n,
                a,
                l
              if (o.autoAlpha || o.alpha) {
                for (a in ((t = {}), o)) t[a] = o[a]
                ;(t.opacity = 1), t.autoAlpha && (t.visibility = 1)
              }
              for (
                o.className &&
                  (n = this._classNamePT) &&
                  ((l = n.xfirst) && l._prev ? this._linkCSSP(l._prev, n._next, l._prev._prev) : l === this._firstPT && (this._firstPT = n._next),
                  n._next && this._linkCSSP(n._next, n._next._next, l._prev),
                  (this._classNamePT = null)),
                  n = this._firstPT;
                n;

              )
                n.plugin && n.plugin !== a && n.plugin._kill && (n.plugin._kill(o), (a = n.plugin)), (n = n._next)
              return L.prototype._kill.call(this, t)
            })
          var ct = function (o, t, e) {
            var i, l, d, u
            if (o.slice) for (l = o.length; -1 < --l; ) ct(o[l], t, e)
            else
              for (l = (i = o.childNodes).length; -1 < --l; ) (u = (d = i[l]).type), d.style && (t.push(g(d)), e && e.push(d)), (1 === u || 9 === u || 11 === u) && d.childNodes.length && ct(d, t, e)
          }
          return (
            (ne.cascadeTo = function (d, c, e) {
              var i = V.to(d, c, e),
                o = [i],
                l = [],
                h = [],
                m = [],
                u = V._internals.reservedProps,
                p,
                g,
                b,
                _
              for (d = i._targets || i.target, ct(d, l, m), i.render(c, !0, !0), ct(d, h), i.render(0, !0, !0), i._enabled(!0), p = m.length; -1 < --p; )
                if ((g = y(m[p], l[p], h[p])).firstMPT) {
                  for (b in ((g = g.difs), e)) u[b] && (g[b] = e[b])
                  for (b in ((_ = {}), g)) _[b] = l[p][b]
                  o.push(V.fromTo(m[p], c, _, g))
                }
              return o
            }),
            L.activate([ne]),
            ne
          )
        },
        !0
      ),
      _fwd_fwdScope.FWDFWD_fwdDefine(
        "easing.Back",
        ["easing.Ease"],
        function (b) {
          function d(o, t) {
            var e = h("easing." + o, function () {}, !0),
              s = (e.prototype = new b())
            return (s.constructor = e), (s.getRatio = t), e
          }
          function t(o, t, e, s) {
            var r = h("easing." + o, { easeOut: new t(), easeIn: new e(), easeInOut: new s() }, !0)
            return g(r, o), r
          }
          function m(o, t, e) {
            ;(this.t = o), (this.v = t), e && ((((this.next = e).prev = this).c = e.v - t), (this.gap = e.t - o))
          }
          function e(o, t) {
            var e = h(
                "easing." + o,
                function (e) {
                  ;(this._p1 = e || 0 === e ? e : 1.70158), (this._p2 = 1.525 * this._p1)
                },
                !0
              ),
              s = (e.prototype = new b())
            return (
              (s.constructor = e),
              (s.getRatio = t),
              (s.config = function (o) {
                return new e(o)
              }),
              e
            )
          }
          var i = _fwd_fwdScope.FWDGlobals || _fwd_fwdScope,
            a = i.com.fwd,
            o = 2 * Math.PI,
            l = Math.PI / 2,
            h = a._class,
            g = b.register || function () {},
            u = t(
              "Back",
              e("BackOut", function (e) {
                return --e * e * ((this._p1 + 1) * e + this._p1) + 1
              }),
              e("BackIn", function (e) {
                return e * e * ((this._p1 + 1) * e - this._p1)
              }),
              e("BackInOut", function (e) {
                return 1 > (e *= 2) ? 0.5 * e * e * ((this._p2 + 1) * e - this._p2) : 0.5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
              })
            ),
            p = h(
              "easing.SlowMo",
              function (o, r, s) {
                ;(r = r || 0 === r ? r : 0.7),
                  null == o ? (o = 0.7) : 1 < o && (o = 1),
                  (this._p = 1 === o ? 0 : r),
                  (this._p1 = (1 - o) / 2),
                  (this._p2 = o),
                  (this._p3 = this._p1 + this._p2),
                  (this._calcEnd = !0 === s)
              },
              !0
            ),
            _ = (p.prototype = new b()),
            f,
            O,
            y
          return (
            (_.constructor = p),
            (_.getRatio = function (o) {
              var r = o + (0.5 - o) * this._p
              return o < this._p1
                ? this._calcEnd
                  ? 1 - (o = 1 - o / this._p1) * o
                  : r - (o = 1 - o / this._p1) * o * o * o * r
                : o > this._p3
                ? this._calcEnd
                  ? 1 - (o = (o - this._p3) / this._p1) * o
                  : r + (o - r) * (o = (o - this._p3) / this._p1) * o * o * o
                : this._calcEnd
                ? 1
                : r
            }),
            (p.ease = new p(0.7, 0.7)),
            (_.config = p.config =
              function (o, t, e) {
                return new p(o, t, e)
              }),
            ((_ = (f = h(
              "easing.SteppedEase",
              function (e) {
                ;(e = e || 1), (this._p1 = 1 / e), (this._p2 = e + 1)
              },
              !0
            )).prototype =
              new b()).constructor = f),
            (_.getRatio = function (e) {
              return 0 > e ? (e = 0) : 1 <= e && (e = 0.999999999), ((this._p2 * e) >> 0) * this._p1
            }),
            (_.config = f.config =
              function (e) {
                return new f(e)
              }),
            ((_ = (O = h(
              "easing.RoughEase",
              function (g) {
                for (
                  var O = (g = g || {}).taper || "none",
                    o = [],
                    l = 0,
                    y = 0 | (g.points || 20),
                    f = y,
                    v = !1 !== g.randomize,
                    p = !0 === g.clamp,
                    _ = g.template instanceof b ? g.template : null,
                    c = "number" == typeof g.strength ? 0.4 * g.strength : 0.4,
                    d,
                    D,
                    w,
                    T,
                    C,
                    S;
                  -1 < --f;

                )
                  (d = v ? Math.random() : (1 / y) * f),
                    (D = _ ? _.getRatio(d) : d),
                    (w = "none" === O ? c : "out" === O ? (T = 1 - d) * T * c : "in" === O ? d * d * c : 0.5 > d ? 0.5 * ((T = 2 * d) * T) * c : 0.5 * ((T = 2 * (1 - d)) * T) * c),
                    v ? (D += Math.random() * w - 0.5 * w) : f % 2 ? (D += 0.5 * w) : (D -= 0.5 * w),
                    p && (1 < D ? (D = 1) : 0 > D && (D = 0)),
                    (o[l++] = { x: d, y: D })
                for (
                  o.sort(function (o, t) {
                    return o.x - t.x
                  }),
                    S = new m(1, 1, null),
                    f = y;
                  -1 < --f;

                )
                  (C = o[f]), (S = new m(C.x, C.y, S))
                this._prev = new m(0, 0, 0 === S.t ? S.next : S)
              },
              !0
            )).prototype =
              new b()).constructor = O),
            (_.getRatio = function (o) {
              var t = this._prev
              if (o > t.t) {
                for (; t.next && o >= t.t; ) t = t.next
                t = t.prev
              } else for (; t.prev && o <= t.t; ) t = t.prev
              return (this._prev = t).v + ((o - t.t) / t.gap) * t.c
            }),
            (_.config = function (e) {
              return new O(e)
            }),
            (O.ease = new O()),
            t(
              "Bounce",
              d("BounceOut", function (e) {
                return e < 1 / 2.75
                  ? 7.5625 * e * e
                  : e < 2 / 2.75
                  ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                  : e < 2.5 / 2.75
                  ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                  : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375
              }),
              d("BounceIn", function (e) {
                return (e = 1 - e) < 1 / 2.75
                  ? 1 - 7.5625 * e * e
                  : e < 2 / 2.75
                  ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
                  : e < 2.5 / 2.75
                  ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
                  : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375)
              }),
              d("BounceInOut", function (o) {
                var r = 0.5 > o
                return (
                  (o = r ? 1 - 2 * o : 2 * o - 1) < 1 / 2.75
                    ? (o *= 7.5625 * o)
                    : (o = o < 2 / 2.75 ? 7.5625 * (o -= 1.5 / 2.75) * o + 0.75 : o < 2.5 / 2.75 ? 7.5625 * (o -= 2.25 / 2.75) * o + 0.9375 : 7.5625 * (o -= 2.625 / 2.75) * o + 0.984375),
                  r ? 0.5 * (1 - o) : 0.5 * o + 0.5
                )
              })
            ),
            t(
              "Circ",
              d("CircOut", function (e) {
                return Math.sqrt(1 - --e * e)
              }),
              d("CircIn", function (e) {
                return -(Math.sqrt(1 - e * e) - 1)
              }),
              d("CircInOut", function (e) {
                return 1 > (e *= 2) ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
              })
            ),
            t(
              "Elastic",
              (y = function (n, t, a) {
                var i = h(
                    "easing." + n,
                    function (r, t) {
                      ;(this._p1 = 1 <= r ? r : 1), (this._p2 = (t || a) / (1 > r ? r : 1)), (this._p3 = (this._p2 / o) * (Math.asin(1 / this._p1) || 0)), (this._p2 = o / this._p2)
                    },
                    !0
                  ),
                  e = (i.prototype = new b())
                return (
                  (e.constructor = i),
                  (e.getRatio = t),
                  (e.config = function (o, t) {
                    return new i(o, t)
                  }),
                  i
                )
              })(
                "ElasticOut",
                function (e) {
                  return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
                },
                0.3
              ),
              y(
                "ElasticIn",
                function (e) {
                  return -(this._p1 * Math.pow(2, 10 * --e) * Math.sin((e - this._p3) * this._p2))
                },
                0.3
              ),
              y(
                "ElasticInOut",
                function (e) {
                  return 1 > (e *= 2)
                    ? -0.5 * (this._p1 * Math.pow(2, 10 * --e) * Math.sin((e - this._p3) * this._p2))
                    : 0.5 * (this._p1 * Math.pow(2, -10 * --e) * Math.sin((e - this._p3) * this._p2)) + 1
                },
                0.45
              )
            ),
            t(
              "Expo",
              d("ExpoOut", function (e) {
                return 1 - Math.pow(2, -10 * e)
              }),
              d("ExpoIn", function (e) {
                return Math.pow(2, 10 * (e - 1)) - 0.001
              }),
              d("ExpoInOut", function (e) {
                return 1 > (e *= 2) ? 0.5 * Math.pow(2, 10 * (e - 1)) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))
              })
            ),
            t(
              "Sine",
              d("SineOut", function (e) {
                return Math.sin(e * l)
              }),
              d("SineIn", function (e) {
                return 1 - Math.cos(e * l)
              }),
              d("SineInOut", function (e) {
                return -0.5 * (Math.cos(Math.PI * e) - 1)
              })
            ),
            h(
              "easing.EaseLookup",
              {
                find: function (e) {
                  return b.map[e]
                },
              },
              !0
            ),
            g(i.SlowMo, "SlowMo", "ease,"),
            g(O, "RoughEase", "ease,"),
            g(f, "SteppedEase", "ease,"),
            u
          )
        },
        !0
      )
  }),
  _fwd_fwdScope.FWDFWD_fwdDefine && _fwd_fwdScope._fwd_fwdQueue.pop()(),
  (function (ee, _) {
    "use strict"
    var c = {},
      d = (ee.FWDGlobals = ee.FWDGlobals || ee)
    if (!d.FWDTweenLite) {
      var m = function (o) {
          for (var t = o.split("."), e = d, s = 0; s < t.length; s++) e[t[s]] = e = e[t[s]] || {}
          return e
        },
        y = m("com.fwd"),
        te = 1e-10,
        u = function (o) {
          for (var t = [], e = o.length, s = 0; s !== e; t.push(o[s++]));
          return t
        },
        v = function () {},
        oe =
          ((s = Object.prototype.toString),
          (x = s.call([])),
          function (e) {
            return null != e && (e instanceof Array || ("object" == typeof e && !!e.push && s.call(e) === x))
          }),
        r = {},
        l = function (e, s, h, t) {
          ;(this.sc = r[e] ? r[e].sc : []), ((r[e] = this).gsClass = null), (this.func = h)
          var u = []
          ;(this.check = function (p) {
            for (var g = s.length, b = g, f, O, y, v, D; -1 < --g; ) (f = r[s[g]] || new l(s[g], [])).gsClass ? ((u[g] = f.gsClass), b--) : p && f.sc.push(this)
            if (0 === b && h) {
              if (((y = (O = ("com.fwd." + e).split(".")).pop()), (v = m(O.join("."))[y] = this.gsClass = h.apply(h, u)), t))
                if (((d[y] = c[y] = v), !(D = "undefined" != typeof fwd_module && fwd_module.exports) && "function" == typeof define && define.amd))
                  define((ee.FWDAMDPath ? ee.FWDAMDPath + "/" : "") + e.split(".").pop(), [], function () {
                    return v
                  })
                else if (D)
                  if (e === _) for (g in ((fwd_module.exports = c[_] = v), c)) v[g] = c[g]
                  else c[_] && (c[_][y] = v)
              for (g = 0; g < this.sc.length; g++) this.sc[g].check()
            }
          }),
            this.check(!0)
        },
        w = (ee.FWDFWD_fwdDefine = function (o, t, e, s) {
          return new l(o, t, e, s)
        }),
        T = (y._class = function (o, t, r) {
          return (
            (t = t || function () {}),
            w(
              o,
              [],
              function () {
                return t
              },
              r
            ),
            t
          )
        }),
        p,
        s,
        x
      w.globals = d
      var re = [0, 0, 1, 1],
        se = T(
          "easing.Ease",
          function (o, t, e, s) {
            ;(this._func = o), (this._type = e || 0), (this._power = s || 0), (this._params = t ? re.concat(t) : re)
          },
          !0
        ),
        b = (se.map = {}),
        n = (se.register = function (d, t, e, i) {
          for (var r = t.split(","), l = r.length, u = (e || "easeIn,easeOut,easeInOut").split(","), c, p, m, g; -1 < --l; )
            for (p = r[l], c = i ? T("easing." + p, null, !0) : y.easing[p] || {}, m = u.length; -1 < --m; ) (g = u[m]), (b[p + "." + g] = b[g + p] = c[g] = d.getRatio ? d : d[g] || new d())
        }),
        a
      for (
        (a = se.prototype)._calcEnd = !1,
          a.getRatio = function (o) {
            if (this._func) return (this._params[0] = o), this._func.apply(null, this._params)
            var t = this._type,
              e = this._power,
              s = 1 === t ? 1 - o : 2 === t ? o : 0.5 > o ? 2 * o : 2 * (1 - o)
            return 1 === e ? (s *= s) : 2 === e ? (s *= s * s) : 3 === e ? (s *= s * s * s) : 4 === e && (s *= s * s * s * s), 1 === t ? 1 - s : 2 === t ? s : 0.5 > o ? s / 2 : 1 - s / 2
          },
          ae = (le = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length;
        -1 < --ae;

      )
        (a = le[ae] + ",Power" + ae),
          n(new se(null, null, 1, ae), a, "easeOut", !0),
          n(new se(null, null, 2, ae), a, "easeIn" + (0 === ae ? ",easeNone" : "")),
          n(new se(null, null, 3, ae), a, "easeInOut")
      ;(b.linear = y.easing.Linear.easeIn), (b.swing = y.easing.Quad.easeInOut)
      var P = T("events.EventDispatcher", function (e) {
        ;(this._listeners = {}), (this._eventTarget = e || this)
      })
      ;((a = P.prototype).addEventListener = function (d, t, e, i, r) {
        r = r || 0
        var u = this._listeners[d],
          h = 0,
          c,
          m
        for (this !== f || p || f.wake(), null == u && (this._listeners[d] = u = []), m = u.length; -1 < --m; ) (c = u[m]).c === t && c.s === e ? u.splice(m, 1) : 0 === h && c.pr < r && (h = m + 1)
        u.splice(h, 0, { c: t, s: e, up: i, pr: r })
      }),
        (a.removeEventListener = function (o, t) {
          var e = this._listeners[o],
            r
          if (e) for (r = e.length; -1 < --r; ) if (e[r].c === t) return void e.splice(r, 1)
        }),
        (a.dispatchEvent = function (o) {
          var t = this._listeners[o],
            n,
            a,
            l
          if (t) for (1 < (n = t.length) && (t = t.slice(0)), a = this._eventTarget; -1 < --n; ) (l = t[n]) && (l.up ? l.c.call(l.s || a, { type: o, target: a }) : l.c.call(l.s || a))
        })
      for (
        var O = ee.requestAnimationFrame,
          ne = ee.cancelAnimationFrame,
          ie =
            Date.now ||
            function () {
              return new Date().getTime()
            },
          S = ie(),
          ae = (le = ["ms", "moz", "webkit", "o"]).length,
          le;
        -1 < --ae && !O;

      )
        (O = ee[le[ae] + "RequestAnimationFrame"]), (ne = ee[le[ae] + "CancelAnimationFrame"] || ee[le[ae] + "CancelRequestAnimationFrame"])
      T("Ticker", function (r, t) {
        var d = this,
          h = ie(),
          e = !1 !== t && O && "auto",
          c = 500,
          m = 33,
          g = function (o) {
            var t = ie() - S,
              r,
              s
            c < t && (h += t - m),
              (S += t),
              (d.time = (S - h) / 1e3),
              (r = d.time - w),
              (!b || 0 < r || !0 === o) && (d.frame++, (w += r + (D <= r ? 0.004 : D - r)), (s = !0)),
              !0 !== o && (y = _(g)),
              s && d.dispatchEvent("tick")
          },
          b,
          _,
          y,
          D,
          w
        P.call(d),
          (d.time = d.frame = 0),
          (d.tick = function () {
            g(!0)
          }),
          (d.lagSmoothing = function (o, t) {
            ;(c = o || 1e10), (m = Math.min(t, c, 0))
          }),
          (d.sleep = function () {
            null != y && ((e && ne ? ne : clearTimeout)(y), (_ = v), (y = null), d === f && (p = !1))
          }),
          (d.wake = function (o) {
            null === y ? (o ? (h += -S + (S = ie())) : 10 < d.frame && (S = ie() - c + 5)) : d.sleep(),
              (_ =
                0 === b
                  ? v
                  : e && O
                  ? O
                  : function (e) {
                      return setTimeout(e, 0 | (1e3 * (w - d.time) + 1))
                    }),
              d === f && (p = !0),
              g(2)
          }),
          (d.fps = function (e) {
            return arguments.length ? void ((D = 1 / ((b = e) || 60)), (w = this.time + D), d.wake()) : b
          }),
          (d.useRAF = function (o) {
            return arguments.length ? void (d.sleep(), (e = o), d.fps(b)) : e
          }),
          d.fps(r),
          setTimeout(function () {
            "auto" === e && 5 > d.frame && "hidden" !== document.visibilityState && d.useRAF(!1)
          }, 1500)
      }),
        ((a = y.Ticker.prototype = new y.events.EventDispatcher()).constructor = y.Ticker)
      var de = T("core.FWDAnimation", function (o, t) {
          var r
          ;(this.vars = t = t || {}),
            (this._duration = this._totalDuration = o || 0),
            (this._delay = +t.delay || 0),
            (this._timeScale = 1),
            (this._active = !0 === t.immediateRender),
            (this.data = t.data),
            (this._reversed = !0 === t.reversed),
            U && (p || f.wake(), (r = this.vars.useFrames ? Z : U).add(this, r._time), this.vars.paused && this.paused(!0))
        }),
        f = (de.ticker = new y.Ticker())
      ;((a = de.prototype)._dirty = a._gc = a._initted = a._paused = !1),
        (a._totalTime = a._time = 0),
        (a._rawPrevTime = -1),
        (a._next = a._last = a._onUpdate = a._timeline = a.timeline = null),
        (a._paused = !1)
      var M = function () {
        p && 2e3 < ie() - S && f.wake(), setTimeout(M, 2e3)
      }
      M(),
        (a.play = function (o, t) {
          return null != o && this.seek(o, t), this.reversed(!1).paused(!1)
        }),
        (a.pause = function (o, t) {
          return null != o && this.seek(o, t), this.paused(!0)
        }),
        (a.resume = function (o, t) {
          return null != o && this.seek(o, t), this.paused(!1)
        }),
        (a.seek = function (o, t) {
          return this.totalTime(+o, !1 !== t)
        }),
        (a.restart = function (o, t) {
          return this.reversed(!1)
            .paused(!1)
            .totalTime(o ? -this._delay : 0, !1 !== t, !0)
        }),
        (a.reverse = function (o, t) {
          return null != o && this.seek(o || this.totalDuration(), t), this.reversed(!0).paused(!1)
        }),
        (a.render = function () {}),
        (a.invalidate = function () {
          return (this._time = this._totalTime = 0), (this._initted = this._gc = !1), (this._rawPrevTime = -1), (!this._gc && this.timeline) || this._enabled(!0), this
        }),
        (a.isActive = function () {
          var o = this._timeline,
            e = this._startTime,
            r
          return !o || (!this._gc && !this._paused && o.isActive() && (r = o.rawTime()) >= e && r < e + this.totalDuration() / this._timeScale)
        }),
        (a._enabled = function (o, t) {
          return (
            p || f.wake(),
            (this._gc = !o),
            (this._active = this.isActive()),
            !0 !== t && (o && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !o && this.timeline && this._timeline._remove(this, !0)),
            !1
          )
        }),
        (a._kill = function () {
          return this._enabled(!1, !1)
        }),
        (a.kill = function (o, t) {
          return this._kill(o, t), this
        }),
        (a._uncache = function (o) {
          for (var t = o ? this : this.timeline; t; ) (t._dirty = !0), (t = t.timeline)
          return this
        }),
        (a._swapSelfInParams = function (o) {
          for (var t = o.length, r = o.concat(); -1 < --t; ) "{self}" === o[t] && (r[t] = this)
          return r
        }),
        (a._callback = function (o) {
          var t = this.vars,
            e = t[o],
            n = t[o + "Params"],
            r = t[o + "Scope"] || t.callbackScope || this
          switch (n ? n.length : 0) {
            case 0:
              e.call(r)
              break
            case 1:
              e.call(r, n[0])
              break
            case 2:
              e.call(r, n[0], n[1])
              break
            default:
              e.apply(r, n)
          }
        }),
        (a.eventCallback = function (o, t, e, n) {
          if ("on" === (o || "").substr(0, 2)) {
            var r = this.vars
            if (1 === arguments.length) return r[o]
            null == t ? delete r[o] : ((r[o] = t), (r[o + "Params"] = oe(e) && -1 !== e.join("").indexOf("{self}") ? this._swapSelfInParams(e) : e), (r[o + "Scope"] = n)),
              "onUpdate" === o && (this._onUpdate = t)
          }
          return this
        }),
        (a.delay = function (e) {
          return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), (this._delay = e), this) : this._delay
        }),
        (a.duration = function (e) {
          return arguments.length
            ? ((this._duration = this._totalDuration = e),
              this._uncache(!0),
              this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0),
              this)
            : ((this._dirty = !1), this._duration)
        }),
        (a.totalDuration = function (e) {
          return (this._dirty = !1), arguments.length ? this.duration(e) : this._totalDuration
        }),
        (a.time = function (o, t) {
          return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(o > this._duration ? this._duration : o, t)) : this._time
        }),
        (a.totalTime = function (o, n, e) {
          if ((p || f.wake(), !arguments.length)) return this._totalTime
          if (this._timeline) {
            if ((0 > o && !e && (o += this.totalDuration()), this._timeline.smoothChildTiming)) {
              this._dirty && this.totalDuration()
              var i = this._totalDuration,
                r = this._timeline
              if ((i < o && !e && (o = i), (this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - o : o) / this._timeScale), r._dirty || this._uncache(!1), r._timeline))
                for (; r._timeline; ) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), (r = r._timeline)
            }
            this._gc && this._enabled(!0, !1), (this._totalTime === o && 0 !== this._duration) || (z.length && ce(), this.render(o, n, !1), z.length && ce())
          }
          return this
        }),
        (a.progress = a.totalProgress =
          function (o, t) {
            var e = this.duration()
            return arguments.length ? this.totalTime(e * o, t) : e ? this._time / e : this.ratio
          }),
        (a.startTime = function (e) {
          return arguments.length ? (e !== this._startTime && ((this._startTime = e), this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
        }),
        (a.endTime = function (e) {
          return this._startTime + (0 == e ? this.duration() : this.totalDuration()) / this._timeScale
        }),
        (a.timeScale = function (o) {
          return arguments.length
            ? ((o = o || te),
              this._timeline &&
                this._timeline.smoothChildTiming &&
                ((s = (r = this._pauseTime) || 0 === r ? r : this._timeline.totalTime()), (this._startTime = s - ((s - this._startTime) * this._timeScale) / o)),
              (this._timeScale = o),
              this._uncache(!1))
            : this._timeScale
        }),
        (a.reversed = function (e) {
          return arguments.length
            ? (e != this._reversed && ((this._reversed = e), this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this)
            : this._reversed
        }),
        (a.paused = function (o) {
          if (!arguments.length) return this._paused
          var t = this._timeline,
            r,
            s
          return (
            o != this._paused &&
              t &&
              (p || o || f.wake(),
              (s = (r = t.rawTime()) - this._pauseTime),
              !o && t.smoothChildTiming && ((this._startTime += s), this._uncache(!1)),
              (this._pauseTime = o ? r : null),
              (this._paused = o),
              (this._active = this.isActive()),
              !o && 0 != s && this._initted && this.duration() && ((r = t.smoothChildTiming ? this._totalTime : (r - this._startTime) / this._timeScale), this.render(r, r === this._totalTime, !0))),
            this._gc && !o && this._enabled(!0, !1),
            this
          )
        })
      var C = T("core.FWDSimpleTimeline", function (e) {
        de.call(this, 0, e), (this.autoRemoveChildren = this.smoothChildTiming = !0)
      })
      ;((a = C.prototype = new de()).constructor = C),
        (a.kill()._gc = !1),
        (a._first = a._last = a._recent = null),
        (a._sortChildren = !1),
        (a.add = a.insert =
          function (o, t) {
            var e, r
            if (
              ((o._startTime = +(t || 0) + o._delay),
              o._paused && this !== o._timeline && (o._pauseTime = o._startTime + (this.rawTime() - o._startTime) / o._timeScale),
              o.timeline && o.timeline._remove(o, !0),
              (o.timeline = o._timeline = this),
              o._gc && o._enabled(!0, !0),
              (e = this._last),
              this._sortChildren)
            )
              for (r = o._startTime; e && e._startTime > r; ) e = e._prev
            return (
              e ? ((o._next = e._next), (e._next = o)) : ((o._next = this._first), (this._first = o)),
              o._next ? (o._next._prev = o) : (this._last = o),
              (o._prev = e),
              (this._recent = o),
              this._timeline && this._uncache(!0),
              this
            )
          }),
        (a._remove = function (o, t) {
          return (
            o.timeline === this &&
              (t || o._enabled(!1, !0),
              o._prev ? (o._prev._next = o._next) : this._first === o && (this._first = o._next),
              o._next ? (o._next._prev = o._prev) : this._last === o && (this._last = o._prev),
              (o._next = o._prev = o.timeline = null),
              o === this._recent && (this._recent = this._last),
              this._timeline && this._uncache(!0)),
            this
          )
        }),
        (a.render = function (o, t, e) {
          var n = this._first,
            i
          for (this._totalTime = this._time = this._rawPrevTime = o; n; )
            (i = n._next),
              (n._active || (o >= n._startTime && !n._paused)) &&
                (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (o - n._startTime) * n._timeScale, t, e) : n.render((o - n._startTime) * n._timeScale, t, e)),
              (n = i)
        }),
        (a.rawTime = function () {
          return p || f.wake(), this._totalTime
        })
      var F = T(
          "FWDTweenLite",
          function (l, d, e) {
            if ((de.call(this, d, e), (this.render = F.prototype.render), null == l)) throw "Cannot tween a null target."
            this.target = l = ("string" == typeof l && F.selector(l)) || l
            var i = l.jquery || (l.length && l !== ee && l[0] && (l[0] === ee || (l[0].nodeType && l[0].style && !l.nodeType))),
              a = this.vars.overwrite,
              h,
              c,
              p
            if (((this._overwrite = a = null == a ? q[F.defaultOverwrite] : "number" == typeof a ? a >> 0 : q[a]), (i || l instanceof Array || (l.push && oe(l))) && "number" != typeof l[0]))
              for (this._targets = p = u(l), this._propLookup = [], this._siblings = [], h = 0; h < p.length; h++)
                (c = p[h])
                  ? "string" == typeof c
                    ? "string" == typeof (c = p[h--] = F.selector(c)) && p.splice(h + 1, 1)
                    : c.length && c !== ee && c[0] && (c[0] === ee || (c[0].nodeType && c[0].style && !c.nodeType))
                    ? (p.splice(h--, 1), (this._targets = p = p.concat(u(c))))
                    : ((this._siblings[h] = G(c, this, !1)), 1 === a && 1 < this._siblings[h].length && K(c, this, null, 1, this._siblings[h]))
                  : p.splice(h--, 1)
            else (this._propLookup = {}), (this._siblings = G(l, this, !1)), 1 === a && 1 < this._siblings.length && K(l, this, null, 1, this._siblings)
            ;(this.vars.immediateRender || (0 === d && 0 === this._delay && !1 !== this.vars.immediateRender)) && ((this._time = -te), this.render(Math.min(0, -this._delay)))
          },
          !0
        ),
        D = function (e) {
          return e && e.length && e !== ee && e[0] && (e[0] === ee || (e[0].nodeType && e[0].style && !e.nodeType))
        }
      ;((a = F.prototype = new de()).constructor = F),
        (a.kill()._gc = !1),
        (a.ratio = 0),
        (a._firstPT = a._targets = a._overwrittenProps = a._startAt = null),
        (a._notifyPluginsOfEnabled = a._lazy = !1),
        (F.version = "1.19.0"),
        (F.defaultEase = a._ease = new se(null, null, 1, 1)),
        (F.defaultOverwrite = "auto"),
        (F.ticker = f),
        (F.autoSleep = 120),
        (F.lagSmoothing = function (o, t) {
          f.lagSmoothing(o, t)
        }),
        (F.selector =
          ee.$ ||
          ee.jQuery ||
          function (o) {
            var t = ee.$ || ee.jQuery
            return t
              ? (F.selector = t)(o)
              : "undefined" == typeof document
              ? o
              : document.querySelectorAll
              ? document.querySelectorAll(o)
              : document.getElementById("#" === o.charAt(0) ? o.substr(1) : o)
          })
      var z = [],
        X = {},
        ue = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        N = function (o) {
          for (var t = this._firstPT, r; t; )
            (r = t.blob ? (o ? this.join("") : this.start) : t.c * o + t.s),
              t.m ? (r = t.m(r, this._target || t.t)) : 1e-6 > r && -1e-6 < r && (r = 0),
              t.f ? (t.fp ? t.t[t.p](t.fp, r) : t.t[t.p](r)) : (t.t[t.p] = r),
              (t = t._next)
        },
        Y = function (d, m, g, i) {
          var r = [d, m],
            u = 0,
            b = "",
            O = 0,
            y,
            v,
            D,
            w,
            T,
            C,
            S
          for (
            r.start = d,
              g && (g(r), (d = r[0]), (m = r[1])),
              r.length = 0,
              y = d.match(ue) || [],
              v = m.match(ue) || [],
              i && ((i._next = null), (i.blob = 1), (r._firstPT = r._applyPT = i)),
              T = v.length,
              w = 0;
            w < T;
            w++
          )
            (S = v[w]),
              (b += (C = m.substr(u, m.indexOf(S, u) - u)) || !w ? C : ","),
              (u += C.length),
              O ? (O = (O + 1) % 5) : "rgba(" === C.substr(-5) && (O = 1),
              S === y[w] || y.length <= w
                ? (b += S)
                : (b && (r.push(b), (b = "")),
                  (D = parseFloat(y[w])),
                  r.push(D),
                  (r._firstPT = {
                    _next: r._firstPT,
                    t: r,
                    p: r.length - 1,
                    s: D,
                    c: ("=" === S.charAt(1) ? parseInt(S.charAt(0) + "1", 10) * parseFloat(S.substr(2)) : parseFloat(S) - D) || 0,
                    f: 0,
                    m: O && 4 > O ? Math.round : 0,
                  })),
              (u += S.length)
          return (b += m.substr(u)) && r.push(b), (r.setRatio = N), r
        },
        E = function (d, t, e, i, c, s, n, a, o) {
          "function" == typeof i && (i = i(o || 0, d))
          var l = "get" === e ? d[t] : e,
            m = typeof d[t],
            u = "string" == typeof i && "=" === i.charAt(1),
            p = {
              t: d,
              p: t,
              s: l,
              f: "function" == m,
              pg: 0,
              n: c || t,
              m: s ? ("function" == typeof s ? s : Math.round) : 0,
              pr: 0,
              c: u ? parseInt(i.charAt(0) + "1", 10) * parseFloat(i.substr(2)) : parseFloat(i) - l || 0,
            },
            g
          if (
            ("number" != m &&
              ("function" == m && "get" === e && ((g = t.indexOf("set") || "function" != typeof d["get" + t.substr(3)] ? t : "get" + t.substr(3)), (p.s = l = n ? d[g](n) : d[g]())),
              "string" == typeof l && (n || isNaN(l))
                ? ((p.fp = n), (p = { t: Y(l, i, a || F.defaultStringFilter, p), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: c || t, pr: 0, m: 0 }))
                : u || ((p.s = parseFloat(l)), (p.c = parseFloat(i) - p.s || 0))),
            p.c)
          )
            return (p._next = this._firstPT) && (p._next._prev = p), (this._firstPT = p)
        },
        B = (F._internals = { isArray: oe, isSelector: D, lazyTweens: z, blobDif: Y }),
        W = (F._plugins = {}),
        L = (B.tweenLookup = {}),
        j = 0,
        he = (B.reservedProps = {
          ease: 1,
          delay: 1,
          overwrite: 1,
          onComplete: 1,
          onCompleteParams: 1,
          onCompleteScope: 1,
          useFrames: 1,
          runBackwards: 1,
          startAt: 1,
          onUpdate: 1,
          onUpdateParams: 1,
          onUpdateScope: 1,
          onStart: 1,
          onStartParams: 1,
          onStartScope: 1,
          onReverseComplete: 1,
          onReverseCompleteParams: 1,
          onReverseCompleteScope: 1,
          onRepeat: 1,
          onRepeatParams: 1,
          onRepeatScope: 1,
          easeParams: 1,
          yoyo: 1,
          immediateRender: 1,
          repeat: 1,
          repeatDelay: 1,
          data: 1,
          paused: 1,
          reversed: 1,
          autoCSS: 1,
          lazy: 1,
          onOverwrite: 1,
          callbackScope: 1,
          stringFilter: 1,
          id: 1,
        }),
        q = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
        Z = (de._rootFramesTimeline = new C()),
        U = (de._rootTimeline = new C()),
        $ = 30,
        ce = (B.lazyRender = function () {
          var o = z.length,
            r
          for (X = {}; -1 < --o; ) (r = z[o]) && !1 !== r._lazy && (r.render(r._lazy[0], r._lazy[1], !0), (r._lazy = !1))
          z.length = 0
        })
      ;(U._startTime = f.time),
        (Z._startTime = f.frame),
        (U._active = Z._active = !0),
        setTimeout(ce, 1),
        (de._updateRoot = F.render =
          function () {
            var o, r, s
            if ((z.length && ce(), U.render((f.time - U._startTime) * U._timeScale, !1, !1), Z.render((f.frame - Z._startTime) * Z._timeScale, !1, !1), z.length && ce(), f.frame >= $)) {
              for (s in (($ = f.frame + (parseInt(F.autoSleep, 10) || 120)), L)) {
                for (o = (r = L[s].tweens).length; -1 < --o; ) r[o]._gc && r.splice(o, 1)
                0 === r.length && delete L[s]
              }
              if ((!(s = U._first) || s._paused) && F.autoSleep && !Z._first && 1 === f._listeners.tick.length) {
                for (; s && s._paused; ) s = s._next
                s || f.sleep()
              }
            }
          }),
        f.addEventListener("tick", de._updateRoot)
      var G = function (o, t, e) {
          var i = o._fwdTweenID,
            a,
            l
          if ((L[i || (o._fwdTweenID = i = "t" + j++)] || (L[i] = { target: o, tweens: [] }), t && (((a = L[i].tweens)[(l = a.length)] = t), e))) for (; -1 < --l; ) a[l] === t && a.splice(l, 1)
          return L[i].tweens
        },
        H = function (o, t, e, i) {
          var r = o.vars.onOverwrite,
            l,
            d
          return r && (l = r(o, t, e, i)), (r = F.onOverwrite) && (d = r(o, t, e, i)), !1 !== l && !1 !== d
        },
        K = function (d, t, e, i, r) {
          var s, c, m
          if (1 === i || 4 <= i) {
            for (m = r.length, p = 0; p < m; p++)
              if ((c = r[p]) !== t) c._gc || (c._kill(null, d, t) && (s = !0))
              else if (5 === i) break
            return s
          }
          for (var g = t._startTime + te, h = [], b = 0, f = 0 === t._duration, p = r.length, O; -1 < --p; )
            (c = r[p]) === t ||
              c._gc ||
              c._paused ||
              (c._timeline === t._timeline
                ? c._startTime <= g && c._startTime + c.totalDuration() / c._timeScale > g && (((f || !c._initted) && 2e-10 >= g - c._startTime) || (h[b++] = c))
                : ((O = O || J(t, 0, f)), 0 === J(c, O, f) && (h[b++] = c)))
          for (p = b; -1 < --p; )
            if (((c = h[p]), 2 === i && c._kill(e, d, t) && (s = !0), 2 !== i || (!c._firstPT && c._initted))) {
              if (2 !== i && !H(c, t)) continue
              c._enabled(!1, !1) && (s = !0)
            }
          return s
        },
        J = function (o, t, e) {
          for (var i = o._timeline, a = i._timeScale, l = o._startTime; i._timeline; ) {
            if (((l += i._startTime), (a *= i._timeScale), i._paused)) return -100
            i = i._timeline
          }
          return t < (l /= a) ? l - t : (e && l === t) || (!o._initted && l - t < 2 * te) ? te : (l += o.totalDuration() / o._timeScale / a) > t + te ? 0 : l - t - te
        }
      ;(a._init = function () {
        var d = this.vars,
          a = this._overwrittenProps,
          o = this._duration,
          l = !!d.immediateRender,
          u = d.ease,
          c,
          p,
          m,
          g,
          _,
          O
        if (d.startAt) {
          for (g in (this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), (_ = {}), d.startAt)) _[g] = d.startAt[g]
          if (((_.overwrite = !1), (_.immediateRender = !0), (_.lazy = l && !1 !== d.lazy), (_.startAt = _.delay = null), (this._startAt = F.to(this.target, 0, _)), l))
            if (0 < this._time) this._startAt = null
            else if (0 !== o) return
        } else if (d.runBackwards && 0 !== o)
          if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), (this._startAt = null)
          else {
            for (g in (0 !== this._time && (l = !1), (m = {}), d)) (he[g] && "autoCSS" !== g) || (m[g] = d[g])
            if (!((m.overwrite = 0), (m.data = "isFromStart"), (m.lazy = l && !1 !== d.lazy), (m.immediateRender = l), (this._startAt = F.to(this.target, 0, m)), l))
              this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
            else if (0 === this._time) return
          }
        if (
          ((this._ease = u = u ? (u instanceof se ? u : "function" == typeof u ? new se(u, d.easeParams) : b[u] || F.defaultEase) : F.defaultEase),
          d.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, d.easeParams)),
          (this._easeType = this._ease._type),
          (this._easePower = this._ease._power),
          (this._firstPT = null),
          this._targets)
        )
          for (O = this._targets.length, c = 0; c < O; c++) this._initProps(this._targets[c], (this._propLookup[c] = {}), this._siblings[c], a ? a[c] : null, c) && (p = !0)
        else p = this._initProps(this.target, this._propLookup, this._siblings, a, 0)
        if ((p && F._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || ("function" != typeof this.target && this._enabled(!1, !1))), d.runBackwards))
          for (m = this._firstPT; m; ) (m.s += m.c), (m.c = -m.c), (m = m._next)
        ;(this._onUpdate = d.onUpdate), (this._initted = !0)
      }),
        (a._initProps = function (d, t, e, i, r) {
          var s, u, c, p, m, g
          if (null == d) return !1
          for (s in (X[d._fwdTweenID] && ce(),
          this.vars.css ||
            (d.style &&
              d !== ee &&
              d.nodeType &&
              W.css &&
              !1 !== this.vars.autoCSS &&
              (function (o, t) {
                var e = {},
                  r
                for (r in o)
                  he[r] ||
                    (r in t && "transform" !== r && "x" !== r && "y" !== r && "width" !== r && "height" !== r && "className" !== r && "border" !== r) ||
                    !(!W[r] || (W[r] && W[r]._autoCSS)) ||
                    ((e[r] = o[r]), delete o[r])
                o.css = e
              })(this.vars, d)),
          this.vars))
            if (((g = this.vars[s]), he[s])) g && (g instanceof Array || (g.push && oe(g))) && -1 !== g.join("").indexOf("{self}") && (this.vars[s] = g = this._swapSelfInParams(g, this))
            else if (W[s] && (p = new W[s]())._onInitTween(d, this.vars[s], this, r)) {
              for (this._firstPT = m = { _next: this._firstPT, t: p, p: "setRatio", s: 0, c: 1, f: 1, n: s, pg: 1, pr: p._priority, m: 0 }, u = p._overwriteProps.length; -1 < --u; )
                t[p._overwriteProps[u]] = this._firstPT
              ;(p._priority || p._onInitAllProps) && (c = !0), (p._onDisable || p._onEnable) && (this._notifyPluginsOfEnabled = !0), m._next && (m._next._prev = m)
            } else t[s] = E.call(this, d, s, "get", g, s, 0, null, this.vars.stringFilter, r)
          return i && this._kill(i, d)
            ? this._initProps(d, t, e, i, r)
            : 1 < this._overwrite && this._firstPT && 1 < e.length && K(d, this, t, this._overwrite, e)
            ? (this._kill(t, d), this._initProps(d, t, e, i, r))
            : (this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)) && (X[d._fwdTweenID] = !0), c)
        }),
        (a.render = function (d, c, e) {
          var m = this._time,
            g = this._duration,
            u = this._rawPrevTime,
            p,
            b,
            _,
            f,
            O,
            y,
            v
          if (
            (g - 1e-7 <= d
              ? ((this._totalTime = this._time = g),
                (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                this._reversed || ((p = !0), (b = "onComplete"), (e = e || this._timeline.autoRemoveChildren)),
                0 === g &&
                  ((!this._initted && this.vars.lazy && !e) ||
                    (this._startTime === this._timeline._duration && (d = 0),
                    (0 > u || (0 >= d && -1e-7 <= d) || (u === te && "isPause" !== this.data)) && u !== d && ((e = !0), te < u && (b = "onReverseComplete")),
                    (this._rawPrevTime = f = !c || d || u === d ? d : te))))
              : 1e-7 > d
              ? ((this._totalTime = this._time = 0),
                (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                (0 !== m || (0 === g && 0 < u)) && ((b = "onReverseComplete"), (p = this._reversed)),
                0 > d &&
                  ((this._active = !1),
                  0 === g && ((!this._initted && this.vars.lazy && !e) || (0 <= u && (u !== te || "isPause" !== this.data) && (e = !0), (this._rawPrevTime = f = !c || d || u === d ? d : te)))),
                this._initted || (e = !0))
              : ((this._totalTime = this._time = d),
                this._easeType
                  ? ((O = d / g),
                    (1 === (y = this._easeType) || (3 === y && 0.5 <= O)) && (O = 1 - O),
                    3 === y && (O *= 2),
                    1 === (v = this._easePower) ? (O *= O) : 2 === v ? (O *= O * O) : 3 === v ? (O *= O * O * O) : 4 === v && (O *= O * O * O * O),
                    (this.ratio = 1 === y ? 1 - O : 2 === y ? O : 0.5 > d / g ? O / 2 : 1 - O / 2))
                  : (this.ratio = this._ease.getRatio(d / g))),
            this._time !== m || e)
          ) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return
              if (!e && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)))
                return (this._time = this._totalTime = m), (this._rawPrevTime = u), z.push(this), void (this._lazy = [d, c])
              this._time && !p ? (this.ratio = this._ease.getRatio(this._time / g)) : p && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (
              !1 !== this._lazy && (this._lazy = !1),
                this._active || (!this._paused && this._time !== m && 0 <= d && (this._active = !0)),
                0 === m && (this._startAt && (0 <= d ? this._startAt.render(d, c, e) : (b = b || "_dummyGS")), this.vars.onStart && ((0 === this._time && 0 !== g) || c || this._callback("onStart"))),
                _ = this._firstPT;
              _;

            )
              _.f ? _.t[_.p](_.c * this.ratio + _.s) : (_.t[_.p] = _.c * this.ratio + _.s), (_ = _._next)
            this._onUpdate && (0 > d && this._startAt && -1e-4 !== d && this._startAt.render(d, c, e), c || ((this._time !== m || p || e) && this._callback("onUpdate"))),
              b &&
                ((this._gc && !e) ||
                  (0 > d && this._startAt && !this._onUpdate && -1e-4 !== d && this._startAt.render(d, c, e),
                  p && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                  !c && this.vars[b] && this._callback(b),
                  0 === g && this._rawPrevTime === te && f !== te && (this._rawPrevTime = 0)))
          }
        }),
        (a._kill = function (d, c, m) {
          if (("all" === d && (d = null), null == d && (null == c || c === this.target))) return (this._lazy = !1), this._enabled(!1, !1)
          c = "string" == typeof c ? F.selector(c) || c : c || this._targets || this.target
          var i = m && this._time && m._startTime === this._startTime && this._timeline === m._timeline,
            p,
            g,
            b,
            _,
            O,
            y,
            v,
            w,
            T
          if ((oe(c) || D(c)) && "number" != typeof c[0]) for (p = c.length; -1 < --p; ) this._kill(d, c[p], m) && (y = !0)
          else {
            if (this._targets) {
              for (p = this._targets.length; -1 < --p; )
                if (c === this._targets[p]) {
                  ;(O = this._propLookup[p] || {}), (this._overwrittenProps = this._overwrittenProps || []), (g = this._overwrittenProps[p] = d ? this._overwrittenProps[p] || {} : "all")
                  break
                }
            } else {
              if (c !== this.target) return !1
              ;(O = this._propLookup), (g = this._overwrittenProps = d ? this._overwrittenProps || {} : "all")
            }
            if (O) {
              if (((v = d || O), (w = d !== g && "all" !== g && d !== O && ("object" != typeof d || !d._tempKill)), m && (F.onOverwrite || this.vars.onOverwrite))) {
                for (b in v) O[b] && (T = T || []).push(b)
                if ((T || !d) && !H(this, m, c, T)) return !1
              }
              for (b in v)
                (_ = O[b]) &&
                  (i && (_.f ? _.t[_.p](_.s) : (_.t[_.p] = _.s), (y = !0)),
                  _.pg && _.t._kill(v) && (y = !0),
                  (_.pg && 0 !== _.t._overwriteProps.length) ||
                    (_._prev ? (_._prev._next = _._next) : _ === this._firstPT && (this._firstPT = _._next), _._next && (_._next._prev = _._prev), (_._next = _._prev = null)),
                  delete O[b]),
                  w && (g[b] = 1)
              !this._firstPT && this._initted && this._enabled(!1, !1)
            }
          }
          return y
        }),
        (a.invalidate = function () {
          return (
            this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this),
            (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
            (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
            (this._propLookup = this._targets ? {} : []),
            de.prototype.invalidate.call(this),
            this.vars.immediateRender && ((this._time = -te), this.render(Math.min(0, -this._delay))),
            this
          )
        }),
        (a._enabled = function (o, t) {
          if ((p || f.wake(), o && this._gc)) {
            var e = this._targets,
              r
            if (e) for (r = e.length; -1 < --r; ) this._siblings[r] = G(e[r], this, !0)
            else this._siblings = G(this.target, this, !0)
          }
          return de.prototype._enabled.call(this, o, t), this._notifyPluginsOfEnabled && this._firstPT && F._onPluginEvent(o ? "_onEnable" : "_onDisable", this)
        }),
        (F.to = function (o, t, e) {
          return new F(o, t, e)
        }),
        (F.from = function (o, t, e) {
          return (e.runBackwards = !0), (e.immediateRender = 0 != e.immediateRender), new F(o, t, e)
        }),
        (F.fromTo = function (o, t, e, s) {
          return (s.startAt = e), (s.immediateRender = 0 != s.immediateRender && 0 != e.immediateRender), new F(o, t, s)
        }),
        (F.delayedCall = function (o, t, e, n, r) {
          return new F(t, 0, {
            delay: o,
            onComplete: t,
            onCompleteParams: e,
            callbackScope: n,
            onReverseComplete: t,
            onReverseCompleteParams: e,
            immediateRender: !1,
            lazy: !1,
            useFrames: r,
            overwrite: 0,
          })
        }),
        (F.set = function (o, t) {
          return new F(o, 0, t)
        }),
        (F.getTweensOf = function (o, a) {
          if (null == o) return []
          var e, l, d, u
          if (((o = ("string" == typeof o && F.selector(o)) || o), (oe(o) || D(o)) && "number" != typeof o[0])) {
            for (e = o.length, l = []; -1 < --e; ) l = l.concat(F.getTweensOf(o[e], a))
            for (e = l.length; -1 < --e; ) for (u = l[e], d = e; -1 < --d; ) u === l[d] && l.splice(e, 1)
          } else for (e = (l = G(o).concat()).length; -1 < --e; ) (l[e]._gc || (a && !l[e].isActive())) && l.splice(e, 1)
          return l
        }),
        (F.killTweensOf = F.killDelayedCallsTo =
          function (o, t, n) {
            "object" == typeof t && ((n = t), (t = !1))
            for (var a = F.getTweensOf(o, t), r = a.length; -1 < --r; ) a[r]._kill(n, o)
          })
      var pe = T(
        "plugins.TweenPlugin",
        function (o, t) {
          ;(this._overwriteProps = (o || "").split(",")), (this._propName = this._overwriteProps[0]), (this._priority = t || 0), (this._super = pe.prototype)
        },
        !0
      )
      if (
        ((a = pe.prototype),
        (pe.version = "1.19.0"),
        (pe.API = 2),
        (a._firstPT = null),
        (a._addTween = E),
        (a.setRatio = N),
        (a._kill = function (o) {
          var t = this._overwriteProps,
            s = this._firstPT,
            n
          if (null != o[this._propName]) this._overwriteProps = []
          else for (n = t.length; -1 < --n; ) null != o[t[n]] && t.splice(n, 1)
          for (; s; )
            null != o[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? ((s._prev._next = s._next), (s._prev = null)) : this._firstPT === s && (this._firstPT = s._next)), (s = s._next)
          return !1
        }),
        (a._mod = a._roundProps =
          function (o) {
            for (var t = this._firstPT, r; t; )
              (r = o[this._propName] || (null != t.n && o[t.n.split(this._propName + "_").join("")])) && "function" == typeof r && (2 === t.f ? (t.t._applyPT.m = r) : (t.m = r)), (t = t._next)
          }),
        (F._onPluginEvent = function (l, t) {
          var e = t._firstPT,
            d,
            u,
            h,
            c,
            p
          if ("_onInitAllProps" === l) {
            for (; e; ) {
              for (p = e._next, u = h; u && u.pr > e.pr; ) u = u._next
              ;(e._prev = u ? u._prev : c) ? (e._prev._next = e) : (h = e), (e._next = u) ? (u._prev = e) : (c = e), (e = p)
            }
            e = t._firstPT = h
          }
          for (; e; ) e.pg && "function" == typeof e.t[l] && e.t[l]() && (d = !0), (e = e._next)
          return d
        }),
        (pe.activate = function (o) {
          for (var t = o.length; -1 < --t; ) o[t].API === pe.API && (W[new o[t]()._propName] = o[t])
          return !0
        }),
        (w.plugin = function (l) {
          if (!(l && l.propName && l.init && l.API)) throw "illegal plugin definition."
          var t = l.propName,
            i = l.priority || 0,
            r = l.overwriteProps,
            s = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
            n = T(
              "plugins." + t.charAt(0).toUpperCase() + t.substr(1) + "Plugin",
              function () {
                pe.call(this, t, i), (this._overwriteProps = r || [])
              },
              !0 === l.fwd_global
            ),
            a = (n.prototype = new pe(t)),
            o
          for (o in (((a.constructor = n).API = l.API), s)) "function" == typeof l[o] && (a[s[o]] = l[o])
          return (n.version = l.version), pe.activate([n]), n
        }),
        (le = ee._fwd_fwdQueue))
      ) {
        for (ae = 0; ae < le.length; ae++) le[ae]()
        for (a in r) r[a].func || ee.console.log("FWDAnimation encountered missing dependency: " + a)
      }
      p = !1
    }
  })("undefined" != typeof fwd_module && fwd_module.exports && "undefined" != typeof fwd_global ? fwd_global : this || window, "FWDAnimation"))
