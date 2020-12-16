<template>
  <div class="begin__3d1P0">
    <div>
      <p v-for="(p, index) in item.ps" :key="index">{{ p }}</p>
    </div>
    <div class="video__3mb7h">
      <div class="video__bVhmv">
        <div
          class="videoThumbnail__17_-H shadow__1pyg5"
          style="position: relative;"
        >
          <div>
            <img
              src="/9c8565c04a73f9e050377455d5c3f2ca.png"
              srcset="
                /9c8565c04a73f9e050377455d5c3f2ca.png 1x,
                /9c8565c04a73f9e050377455d5c3f2ca.png 2x
              "
              style="width: 100%;"
            />
          </div>
          <div style="position: absolute; inset: 0px; z-index: 1;">
            <div>
              <video
                playsinline="playsinline"
                class="vjs-tech"
                fill="true"
                poster="/9c8565c04a73f9e050377455d5c3f2ca.png"
                id="vjs_video_1143_html5_api"
                tabindex="-1"
                src="https://oss-main.dextarobotics.com/videos/experience/1-factory.mp4"
              >
                <source
                  src="https://oss-main.dextarobotics.com/videos/experience/1-factory.mp4"
                  type="video/mp4"
                />
              </video>
              <div
                class="vjs-poster"
                tabindex="-1"
                aria-disabled="false"
                style='background-image: url("/9c8565c04a73f9e050377455d5c3f2ca.png");'
              ></div>
              <div
                class="vjs-text-track-display"
                aria-live="off"
                aria-atomic="true"
              >
                <div
                  style="position: absolute; inset: 0px; margin: 1.5%;"
                ></div>
              </div>
              <div class="vjs-loading-spinner" dir="ltr">
                <span class="vjs-control-text">Video Player is loading.</span>
              </div>
              <button
                class="vjs-big-play-button"
                type="button"
                title="Play Video"
                aria-disabled="false"
              >
                <span aria-hidden="true" class="vjs-icon-placeholder"></span
                ><span class="vjs-control-text" aria-live="polite"
                  >Play Video</span
                >
              </button>
              <div class="vjs-control-bar" dir="ltr">
                <button
                  class="vjs-play-control vjs-control vjs-button"
                  type="button"
                  title="Play"
                  aria-disabled="false"
                >
                  <span aria-hidden="true" class="vjs-icon-placeholder"></span
                  ><span class="vjs-control-text" aria-live="polite">Play</span>
                </button>
                <div
                  class="vjs-volume-panel vjs-control vjs-volume-panel-horizontal"
                >
                  <button
                    class="vjs-mute-control vjs-control vjs-button vjs-vol-3"
                    type="button"
                    title="Mute"
                    aria-disabled="false"
                  >
                    <span aria-hidden="true" class="vjs-icon-placeholder"></span
                    ><span class="vjs-control-text" aria-live="polite"
                      >Mute</span
                    >
                  </button>
                  <div
                    class="vjs-volume-control vjs-control vjs-volume-horizontal"
                  >
                    <div
                      tabindex="0"
                      class="vjs-volume-bar vjs-slider-bar vjs-slider vjs-slider-horizontal"
                      role="slider"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="Volume Level"
                      aria-live="polite"
                      aria-valuetext="100%"
                    >
                      <div class="vjs-volume-level">
                        <span class="vjs-control-text"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vjs-current-time vjs-time-control vjs-control">
                  <span class="vjs-control-text" role="presentation"
                    >Current Time&nbsp;</span
                  ><span
                    class="vjs-current-time-display"
                    aria-live="off"
                    role="presentation"
                    >0:00</span
                  >
                </div>
                <div
                  class="vjs-time-control vjs-time-divider"
                  aria-hidden="true"
                >
                  <div><span>/</span></div>
                </div>
                <div class="vjs-duration vjs-time-control vjs-control">
                  <span class="vjs-control-text" role="presentation"
                    >Duration&nbsp;</span
                  ><span
                    class="vjs-duration-display"
                    aria-live="off"
                    role="presentation"
                    >1:10</span
                  >
                </div>
                <div class="vjs-progress-control vjs-control">
                  <div
                    tabindex="0"
                    class="vjs-progress-holder vjs-slider vjs-slider-horizontal"
                    role="slider"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label="Progress Bar"
                  >
                    <div class="vjs-load-progress" style="width: 1.43115%;">
                      <span class="vjs-control-text"
                        ><span>Loaded</span>:
                        <span class="vjs-control-text-loaded-percentage"
                          >1.43%</span
                        ></span
                      >
                      <div style="left: 0%; width: 100%;"></div>
                    </div>
                    <div class="vjs-mouse-display">
                      <div class="vjs-time-tooltip" aria-hidden="true"></div>
                    </div>
                    <div
                      class="vjs-play-progress vjs-slider-bar"
                      aria-hidden="true"
                    >
                      <div class="vjs-time-tooltip" aria-hidden="true"></div>
                    </div>
                  </div>
                </div>
                <div class="vjs-live-control vjs-control vjs-hidden">
                  <div class="vjs-live-display" aria-live="off">
                    <span class="vjs-control-text">Stream Type&nbsp;</span>LIVE
                  </div>
                </div>
                <button
                  class="vjs-seek-to-live-control vjs-control vjs-at-live-edge"
                  type="button"
                  title="Seek to live, currently playing live"
                  aria-disabled="true"
                >
                  <span aria-hidden="true" class="vjs-icon-placeholder"></span
                  ><span class="vjs-control-text" aria-live="polite"
                    >Seek to live, currently playing live</span
                  ><span class="vjs-seek-to-live-text" aria-hidden="true"
                    >LIVE</span
                  >
                </button>
                <div class="vjs-remaining-time vjs-time-control vjs-control">
                  <span class="vjs-control-text" role="presentation"
                    >Remaining Time&nbsp;</span
                  ><span aria-hidden="true">-</span
                  ><span
                    class="vjs-remaining-time-display"
                    aria-live="off"
                    role="presentation"
                    >1:10</span
                  >
                </div>
                <div class="vjs-custom-control-spacer vjs-spacer ">
                  &nbsp;
                </div>
                <div
                  class="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"
                >
                  <button
                    class="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-button"
                    type="button"
                    aria-disabled="false"
                    title="Playback Rate"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span aria-hidden="true" class="vjs-icon-placeholder"></span
                    ><span class="vjs-control-text" aria-live="polite"
                      >Playback Rate</span
                    >
                  </button>
                  <div class="vjs-menu">
                    <ul class="vjs-menu-content" role="menu"></ul>
                  </div>
                  <div class="vjs-playback-rate-value">1x</div>
                </div>
                <div
                  class="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"
                >
                  <button
                    class="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-button"
                    type="button"
                    aria-disabled="false"
                    title="Chapters"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span aria-hidden="true" class="vjs-icon-placeholder"></span
                    ><span class="vjs-control-text" aria-live="polite"
                      >Chapters</span
                    >
                  </button>
                  <div class="vjs-menu">
                    <ul class="vjs-menu-content" role="menu">
                      <li class="vjs-menu-title" tabindex="-1">
                        Chapters
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"
                >
                  <button
                    class="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-button"
                    type="button"
                    aria-disabled="false"
                    title="Descriptions"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span aria-hidden="true" class="vjs-icon-placeholder"></span
                    ><span class="vjs-control-text" aria-live="polite"
                      >Descriptions</span
                    >
                  </button>
                  <div class="vjs-menu">
                    <ul class="vjs-menu-content" role="menu">
                      <li
                        class="vjs-menu-item vjs-selected"
                        tabindex="-1"
                        role="menuitemradio"
                        aria-disabled="false"
                        aria-checked="true"
                      >
                        <span class="vjs-menu-item-text">descriptions off</span
                        ><span class="vjs-control-text" aria-live="polite"
                          >, selected</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"
                >
                  <button
                    class="vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-button"
                    type="button"
                    aria-disabled="false"
                    title="Captions"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span aria-hidden="true" class="vjs-icon-placeholder"></span
                    ><span class="vjs-control-text" aria-live="polite"
                      >Captions</span
                    >
                  </button>
                  <div class="vjs-menu">
                    <ul class="vjs-menu-content" role="menu">
                      <li
                        class="vjs-menu-item vjs-texttrack-settings"
                        tabindex="-1"
                        role="menuitem"
                        aria-disabled="false"
                      >
                        <span class="vjs-menu-item-text">captions settings</span
                        ><span class="vjs-control-text" aria-live="polite"
                          >, opens captions settings dialog</span
                        >
                      </li>
                      <li
                        class="vjs-menu-item vjs-selected"
                        tabindex="-1"
                        role="menuitemradio"
                        aria-disabled="false"
                        aria-checked="true"
                      >
                        <span class="vjs-menu-item-text">captions off</span
                        ><span class="vjs-control-text" aria-live="polite"
                          >, selected</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"
                >
                  <button
                    class="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-button"
                    type="button"
                    aria-disabled="false"
                    title="Audio Track"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span aria-hidden="true" class="vjs-icon-placeholder"></span
                    ><span class="vjs-control-text" aria-live="polite"
                      >Audio Track</span
                    >
                  </button>
                  <div class="vjs-menu">
                    <ul class="vjs-menu-content" role="menu"></ul>
                  </div>
                </div>
                <button
                  class="vjs-fullscreen-control vjs-control vjs-button"
                  type="button"
                  title="Fullscreen"
                  aria-disabled="false"
                >
                  <span aria-hidden="true" class="vjs-icon-placeholder"></span
                  ><span class="vjs-control-text" aria-live="polite"
                    >Fullscreen</span
                  >
                </button>
              </div>
              <div
                class="vjs-error-display vjs-modal-dialog vjs-hidden "
                tabindex="-1"
                aria-describedby="vjs_video_1143_component_1462_description"
                aria-hidden="true"
                aria-label="Modal Window"
                role="dialog"
              >
                <p
                  class="vjs-modal-dialog-description vjs-control-text"
                  id="vjs_video_1143_component_1462_description"
                >
                  This is a modal window.
                </p>
                <div class="vjs-modal-dialog-content" role="document"></div>
              </div>
              <div
                class="vjs-modal-dialog vjs-hidden  vjs-text-track-settings"
                tabindex="-1"
                aria-describedby="vjs_video_1143_component_1467_description"
                aria-hidden="true"
                aria-label="Caption Settings Dialog"
                role="dialog"
              >
                <p
                  class="vjs-modal-dialog-description vjs-control-text"
                  id="vjs_video_1143_component_1467_description"
                >
                  Beginning of dialog window. Escape will cancel and close the
                  window.
                </p>
                <div class="vjs-modal-dialog-content" role="document">
                  <div class="vjs-track-settings-colors">
                    <fieldset class="vjs-fg-color vjs-track-setting">
                      <legend
                        id="captions-text-legend-vjs_video_1143_component_1467"
                      >
                        Text
                      </legend>
                      <label
                        id="captions-foreground-color-vjs_video_1143_component_1467"
                        class="vjs-label"
                        >Color</label
                      ><select
                        aria-labelledby="captions-text-legend-vjs_video_1143_component_1467 captions-foreground-color-vjs_video_1143_component_1467"
                        ><option
                          id="captions-foreground-color-vjs_video_1143_component_1467-White"
                          value="#FFF"
                          aria-labelledby="captions-text-legend-vjs_video_1143_component_1467 captions-foreground-color-vjs_video_1143_component_1467 captions-foreground-color-vjs_video_1143_component_1467-White"
                          >White</option
                        ><option
                          id="captions-foreground-color-vjs_video_1143_component_1467-Black"
                          value="#000"
                          aria-labelledby="captions-text-legend-vjs_video_1143_component_1467 captions-foreground-color-vjs_video_1143_component_1467 captions-foreground-color-vjs_video_1143_component_1467-Black"
                          >Black</option
                        ><option
                          id="captions-foreground-color-vjs_video_1143_component_1467-Red"
                          value="#F00"
                          aria-labelledby="captions-text-legend-vjs_video_1143_component_1467 captions-foreground-color-vjs_video_1143_component_1467 captions-foreground-color-vjs_video_1143_component_1467-Red"
                          >Red</option
                        ><option
                          id="captions-foreground-color-vjs_video_1143_component_1467-Green"
                          value="#0F0"
                          aria-labelledby="captions-text-legend-vjs_video_1143_component_1467 captions-foreground-color-vjs_video_1143_component_1467 captions-foreground-color-vjs_video_1143_component_1467-Green"
                          >Green</option
                        ><option
                          id="captions-foreground-color-vjs_video_1143_component_1467-Blue"
                          value="#00F"
                          aria-labelledby="captions-text-legend-vjs_video_1143_component_1467 captions-foreground-color-vjs_video_1143_component_1467 captions-foreground-color-vjs_video_1143_component_1467-Blue"
                          >Blue</option
                        ><option
                          id="captions-foreground-color-vjs_video_1143_component_1467-Yellow"
                          value="#FF0"
                          aria-labelledby="captions-text-legend-vjs_video_1143_component_1467 captions-foreground-color-vjs_video_1143_component_1467 captions-foreground-color-vjs_video_1143_component_1467-Yellow"
                          >Yellow</option
                        ><option
                          id="captions-foreground-color-vjs_video_1143_component_1467-Magenta"
                          value="#F0F"
                          aria-labelledby="captions-text-legend-vjs_video_1143_component_1467 captions-foreground-color-vjs_video_1143_component_1467 captions-foreground-color-vjs_video_1143_component_1467-Magenta"
                          >Magenta</option
                        ><option
                          id="captions-foreground-color-vjs_video_1143_component_1467-Cyan"
                          value="#0FF"
                          aria-labelledby="captions-text-legend-vjs_video_1143_component_1467 captions-foreground-color-vjs_video_1143_component_1467 captions-foreground-color-vjs_video_1143_component_1467-Cyan"
                          >Cyan</option
                        ></select
                      ><span class="vjs-text-opacity vjs-opacity"
                        ><label
                          id="captions-foreground-opacity-vjs_video_1143_component_1467"
                          class="vjs-label"
                          >Transparency</label
                        ><select
                          aria-labelledby="captions-text-legend-vjs_video_1143_component_1467 captions-foreground-opacity-vjs_video_1143_component_1467"
                          ><option
                            id="captions-foreground-opacity-vjs_video_1143_component_1467-Opaque"
                            value="1"
                            aria-labelledby="captions-text-legend-vjs_video_1143_component_1467 captions-foreground-opacity-vjs_video_1143_component_1467 captions-foreground-opacity-vjs_video_1143_component_1467-Opaque"
                            >Opaque</option
                          ><option
                            id="captions-foreground-opacity-vjs_video_1143_component_1467-SemiTransparent"
                            value="0.5"
                            aria-labelledby="captions-text-legend-vjs_video_1143_component_1467 captions-foreground-opacity-vjs_video_1143_component_1467 captions-foreground-opacity-vjs_video_1143_component_1467-SemiTransparent"
                            >Semi-Transparent</option
                          ></select
                        ></span
                      >
                    </fieldset>
                    <fieldset class="vjs-bg-color vjs-track-setting">
                      <legend
                        id="captions-background-vjs_video_1143_component_1467"
                      >
                        Background
                      </legend>
                      <label
                        id="captions-background-color-vjs_video_1143_component_1467"
                        class="vjs-label"
                        >Color</label
                      ><select
                        aria-labelledby="captions-background-vjs_video_1143_component_1467 captions-background-color-vjs_video_1143_component_1467"
                        ><option
                          id="captions-background-color-vjs_video_1143_component_1467-Black"
                          value="#000"
                          aria-labelledby="captions-background-vjs_video_1143_component_1467 captions-background-color-vjs_video_1143_component_1467 captions-background-color-vjs_video_1143_component_1467-Black"
                          >Black</option
                        ><option
                          id="captions-background-color-vjs_video_1143_component_1467-White"
                          value="#FFF"
                          aria-labelledby="captions-background-vjs_video_1143_component_1467 captions-background-color-vjs_video_1143_component_1467 captions-background-color-vjs_video_1143_component_1467-White"
                          >White</option
                        ><option
                          id="captions-background-color-vjs_video_1143_component_1467-Red"
                          value="#F00"
                          aria-labelledby="captions-background-vjs_video_1143_component_1467 captions-background-color-vjs_video_1143_component_1467 captions-background-color-vjs_video_1143_component_1467-Red"
                          >Red</option
                        ><option
                          id="captions-background-color-vjs_video_1143_component_1467-Green"
                          value="#0F0"
                          aria-labelledby="captions-background-vjs_video_1143_component_1467 captions-background-color-vjs_video_1143_component_1467 captions-background-color-vjs_video_1143_component_1467-Green"
                          >Green</option
                        ><option
                          id="captions-background-color-vjs_video_1143_component_1467-Blue"
                          value="#00F"
                          aria-labelledby="captions-background-vjs_video_1143_component_1467 captions-background-color-vjs_video_1143_component_1467 captions-background-color-vjs_video_1143_component_1467-Blue"
                          >Blue</option
                        ><option
                          id="captions-background-color-vjs_video_1143_component_1467-Yellow"
                          value="#FF0"
                          aria-labelledby="captions-background-vjs_video_1143_component_1467 captions-background-color-vjs_video_1143_component_1467 captions-background-color-vjs_video_1143_component_1467-Yellow"
                          >Yellow</option
                        ><option
                          id="captions-background-color-vjs_video_1143_component_1467-Magenta"
                          value="#F0F"
                          aria-labelledby="captions-background-vjs_video_1143_component_1467 captions-background-color-vjs_video_1143_component_1467 captions-background-color-vjs_video_1143_component_1467-Magenta"
                          >Magenta</option
                        ><option
                          id="captions-background-color-vjs_video_1143_component_1467-Cyan"
                          value="#0FF"
                          aria-labelledby="captions-background-vjs_video_1143_component_1467 captions-background-color-vjs_video_1143_component_1467 captions-background-color-vjs_video_1143_component_1467-Cyan"
                          >Cyan</option
                        ></select
                      ><span class="vjs-bg-opacity vjs-opacity"
                        ><label
                          id="captions-background-opacity-vjs_video_1143_component_1467"
                          class="vjs-label"
                          >Transparency</label
                        ><select
                          aria-labelledby="captions-background-vjs_video_1143_component_1467 captions-background-opacity-vjs_video_1143_component_1467"
                          ><option
                            id="captions-background-opacity-vjs_video_1143_component_1467-Opaque"
                            value="1"
                            aria-labelledby="captions-background-vjs_video_1143_component_1467 captions-background-opacity-vjs_video_1143_component_1467 captions-background-opacity-vjs_video_1143_component_1467-Opaque"
                            >Opaque</option
                          ><option
                            id="captions-background-opacity-vjs_video_1143_component_1467-SemiTransparent"
                            value="0.5"
                            aria-labelledby="captions-background-vjs_video_1143_component_1467 captions-background-opacity-vjs_video_1143_component_1467 captions-background-opacity-vjs_video_1143_component_1467-SemiTransparent"
                            >Semi-Transparent</option
                          ><option
                            id="captions-background-opacity-vjs_video_1143_component_1467-Transparent"
                            value="0"
                            aria-labelledby="captions-background-vjs_video_1143_component_1467 captions-background-opacity-vjs_video_1143_component_1467 captions-background-opacity-vjs_video_1143_component_1467-Transparent"
                            >Transparent</option
                          ></select
                        ></span
                      >
                    </fieldset>
                    <fieldset class="vjs-window-color vjs-track-setting">
                      <legend
                        id="captions-window-vjs_video_1143_component_1467"
                      >
                        Window
                      </legend>
                      <label
                        id="captions-window-color-vjs_video_1143_component_1467"
                        class="vjs-label"
                        >Color</label
                      ><select
                        aria-labelledby="captions-window-vjs_video_1143_component_1467 captions-window-color-vjs_video_1143_component_1467"
                        ><option
                          id="captions-window-color-vjs_video_1143_component_1467-Black"
                          value="#000"
                          aria-labelledby="captions-window-vjs_video_1143_component_1467 captions-window-color-vjs_video_1143_component_1467 captions-window-color-vjs_video_1143_component_1467-Black"
                          >Black</option
                        ><option
                          id="captions-window-color-vjs_video_1143_component_1467-White"
                          value="#FFF"
                          aria-labelledby="captions-window-vjs_video_1143_component_1467 captions-window-color-vjs_video_1143_component_1467 captions-window-color-vjs_video_1143_component_1467-White"
                          >White</option
                        ><option
                          id="captions-window-color-vjs_video_1143_component_1467-Red"
                          value="#F00"
                          aria-labelledby="captions-window-vjs_video_1143_component_1467 captions-window-color-vjs_video_1143_component_1467 captions-window-color-vjs_video_1143_component_1467-Red"
                          >Red</option
                        ><option
                          id="captions-window-color-vjs_video_1143_component_1467-Green"
                          value="#0F0"
                          aria-labelledby="captions-window-vjs_video_1143_component_1467 captions-window-color-vjs_video_1143_component_1467 captions-window-color-vjs_video_1143_component_1467-Green"
                          >Green</option
                        ><option
                          id="captions-window-color-vjs_video_1143_component_1467-Blue"
                          value="#00F"
                          aria-labelledby="captions-window-vjs_video_1143_component_1467 captions-window-color-vjs_video_1143_component_1467 captions-window-color-vjs_video_1143_component_1467-Blue"
                          >Blue</option
                        ><option
                          id="captions-window-color-vjs_video_1143_component_1467-Yellow"
                          value="#FF0"
                          aria-labelledby="captions-window-vjs_video_1143_component_1467 captions-window-color-vjs_video_1143_component_1467 captions-window-color-vjs_video_1143_component_1467-Yellow"
                          >Yellow</option
                        ><option
                          id="captions-window-color-vjs_video_1143_component_1467-Magenta"
                          value="#F0F"
                          aria-labelledby="captions-window-vjs_video_1143_component_1467 captions-window-color-vjs_video_1143_component_1467 captions-window-color-vjs_video_1143_component_1467-Magenta"
                          >Magenta</option
                        ><option
                          id="captions-window-color-vjs_video_1143_component_1467-Cyan"
                          value="#0FF"
                          aria-labelledby="captions-window-vjs_video_1143_component_1467 captions-window-color-vjs_video_1143_component_1467 captions-window-color-vjs_video_1143_component_1467-Cyan"
                          >Cyan</option
                        ></select
                      ><span class="vjs-window-opacity vjs-opacity"
                        ><label
                          id="captions-window-opacity-vjs_video_1143_component_1467"
                          class="vjs-label"
                          >Transparency</label
                        ><select
                          aria-labelledby="captions-window-vjs_video_1143_component_1467 captions-window-opacity-vjs_video_1143_component_1467"
                          ><option
                            id="captions-window-opacity-vjs_video_1143_component_1467-Transparent"
                            value="0"
                            aria-labelledby="captions-window-vjs_video_1143_component_1467 captions-window-opacity-vjs_video_1143_component_1467 captions-window-opacity-vjs_video_1143_component_1467-Transparent"
                            >Transparent</option
                          ><option
                            id="captions-window-opacity-vjs_video_1143_component_1467-SemiTransparent"
                            value="0.5"
                            aria-labelledby="captions-window-vjs_video_1143_component_1467 captions-window-opacity-vjs_video_1143_component_1467 captions-window-opacity-vjs_video_1143_component_1467-SemiTransparent"
                            >Semi-Transparent</option
                          ><option
                            id="captions-window-opacity-vjs_video_1143_component_1467-Opaque"
                            value="1"
                            aria-labelledby="captions-window-vjs_video_1143_component_1467 captions-window-opacity-vjs_video_1143_component_1467 captions-window-opacity-vjs_video_1143_component_1467-Opaque"
                            >Opaque</option
                          ></select
                        ></span
                      >
                    </fieldset>
                  </div>
                  <div class="vjs-track-settings-font">
                    <fieldset class="vjs-font-percent vjs-track-setting">
                      <legend
                        id="captions-font-size-vjs_video_1143_component_1467"
                        class=""
                      >
                        Font Size
                      </legend>
                      <select
                        aria-labelledby="captions-font-size-vjs_video_1143_component_1467"
                        ><option
                          id="captions-font-size-vjs_video_1143_component_1467-50"
                          value="0.50"
                          aria-labelledby="captions-font-size-vjs_video_1143_component_1467 captions-font-size-vjs_video_1143_component_1467-50"
                          >50%</option
                        ><option
                          id="captions-font-size-vjs_video_1143_component_1467-75"
                          value="0.75"
                          aria-labelledby="captions-font-size-vjs_video_1143_component_1467 captions-font-size-vjs_video_1143_component_1467-75"
                          >75%</option
                        ><option
                          id="captions-font-size-vjs_video_1143_component_1467-100"
                          value="1.00"
                          aria-labelledby="captions-font-size-vjs_video_1143_component_1467 captions-font-size-vjs_video_1143_component_1467-100"
                          >100%</option
                        ><option
                          id="captions-font-size-vjs_video_1143_component_1467-125"
                          value="1.25"
                          aria-labelledby="captions-font-size-vjs_video_1143_component_1467 captions-font-size-vjs_video_1143_component_1467-125"
                          >125%</option
                        ><option
                          id="captions-font-size-vjs_video_1143_component_1467-150"
                          value="1.50"
                          aria-labelledby="captions-font-size-vjs_video_1143_component_1467 captions-font-size-vjs_video_1143_component_1467-150"
                          >150%</option
                        ><option
                          id="captions-font-size-vjs_video_1143_component_1467-175"
                          value="1.75"
                          aria-labelledby="captions-font-size-vjs_video_1143_component_1467 captions-font-size-vjs_video_1143_component_1467-175"
                          >175%</option
                        ><option
                          id="captions-font-size-vjs_video_1143_component_1467-200"
                          value="2.00"
                          aria-labelledby="captions-font-size-vjs_video_1143_component_1467 captions-font-size-vjs_video_1143_component_1467-200"
                          >200%</option
                        ><option
                          id="captions-font-size-vjs_video_1143_component_1467-300"
                          value="3.00"
                          aria-labelledby="captions-font-size-vjs_video_1143_component_1467 captions-font-size-vjs_video_1143_component_1467-300"
                          >300%</option
                        ><option
                          id="captions-font-size-vjs_video_1143_component_1467-400"
                          value="4.00"
                          aria-labelledby="captions-font-size-vjs_video_1143_component_1467 captions-font-size-vjs_video_1143_component_1467-400"
                          >400%</option
                        ></select
                      >
                    </fieldset>
                    <fieldset class="vjs-edge-style vjs-track-setting">
                      <legend id="vjs_video_1143_component_1467" class="">
                        Text Edge Style
                      </legend>
                      <select aria-labelledby="vjs_video_1143_component_1467"
                        ><option
                          id="vjs_video_1143_component_1467-None"
                          value="none"
                          aria-labelledby="vjs_video_1143_component_1467 vjs_video_1143_component_1467-None"
                          >None</option
                        ><option
                          id="vjs_video_1143_component_1467-Raised"
                          value="raised"
                          aria-labelledby="vjs_video_1143_component_1467 vjs_video_1143_component_1467-Raised"
                          >Raised</option
                        ><option
                          id="vjs_video_1143_component_1467-Depressed"
                          value="depressed"
                          aria-labelledby="vjs_video_1143_component_1467 vjs_video_1143_component_1467-Depressed"
                          >Depressed</option
                        ><option
                          id="vjs_video_1143_component_1467-Uniform"
                          value="uniform"
                          aria-labelledby="vjs_video_1143_component_1467 vjs_video_1143_component_1467-Uniform"
                          >Uniform</option
                        ><option
                          id="vjs_video_1143_component_1467-Dropshadow"
                          value="dropshadow"
                          aria-labelledby="vjs_video_1143_component_1467 vjs_video_1143_component_1467-Dropshadow"
                          >Dropshadow</option
                        ></select
                      >
                    </fieldset>
                    <fieldset class="vjs-font-family vjs-track-setting">
                      <legend
                        id="captions-font-family-vjs_video_1143_component_1467"
                        class=""
                      >
                        Font Family
                      </legend>
                      <select
                        aria-labelledby="captions-font-family-vjs_video_1143_component_1467"
                        ><option
                          id="captions-font-family-vjs_video_1143_component_1467-ProportionalSansSerif"
                          value="proportionalSansSerif"
                          aria-labelledby="captions-font-family-vjs_video_1143_component_1467 captions-font-family-vjs_video_1143_component_1467-ProportionalSansSerif"
                          >Proportional Sans-Serif</option
                        ><option
                          id="captions-font-family-vjs_video_1143_component_1467-MonospaceSansSerif"
                          value="monospaceSansSerif"
                          aria-labelledby="captions-font-family-vjs_video_1143_component_1467 captions-font-family-vjs_video_1143_component_1467-MonospaceSansSerif"
                          >Monospace Sans-Serif</option
                        ><option
                          id="captions-font-family-vjs_video_1143_component_1467-ProportionalSerif"
                          value="proportionalSerif"
                          aria-labelledby="captions-font-family-vjs_video_1143_component_1467 captions-font-family-vjs_video_1143_component_1467-ProportionalSerif"
                          >Proportional Serif</option
                        ><option
                          id="captions-font-family-vjs_video_1143_component_1467-MonospaceSerif"
                          value="monospaceSerif"
                          aria-labelledby="captions-font-family-vjs_video_1143_component_1467 captions-font-family-vjs_video_1143_component_1467-MonospaceSerif"
                          >Monospace Serif</option
                        ><option
                          id="captions-font-family-vjs_video_1143_component_1467-Casual"
                          value="casual"
                          aria-labelledby="captions-font-family-vjs_video_1143_component_1467 captions-font-family-vjs_video_1143_component_1467-Casual"
                          >Casual</option
                        ><option
                          id="captions-font-family-vjs_video_1143_component_1467-Script"
                          value="script"
                          aria-labelledby="captions-font-family-vjs_video_1143_component_1467 captions-font-family-vjs_video_1143_component_1467-Script"
                          >Script</option
                        ><option
                          id="captions-font-family-vjs_video_1143_component_1467-SmallCaps"
                          value="small-caps"
                          aria-labelledby="captions-font-family-vjs_video_1143_component_1467 captions-font-family-vjs_video_1143_component_1467-SmallCaps"
                          >Small Caps</option
                        ></select
                      >
                    </fieldset>
                  </div>
                  <div class="vjs-track-settings-controls">
                    <button
                      type="button"
                      class="vjs-default-button"
                      title="restore all settings to the default values"
                    >
                      Reset<span class="vjs-control-text">
                        restore all settings to the default values</span
                      ></button
                    ><button type="button" class="vjs-done-button">
                      Done
                    </button>
                  </div>
                </div>
                <button
                  class="vjs-close-button vjs-control vjs-button"
                  type="button"
                  aria-disabled="false"
                  title="Close Modal Dialog"
                >
                  <span aria-hidden="true" class="vjs-icon-placeholder"></span
                  ><span class="vjs-control-text" aria-live="polite"
                    >Close Modal Dialog</span
                  >
                </button>
                <p class="vjs-control-text">End of dialog window.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
}
</script>

<style></style>
