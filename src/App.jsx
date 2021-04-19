import React from "react";
import { useRef, useLayoutEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

//Pages.
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GoldenSum from "./pages/portfolio-pieces/GoldenSum";
import Circles from "./pages/portfolio-pieces/Circles";
import CigQuit from "./pages/portfolio-pieces/CigQuit";
import CompSciCalc from "./pages/portfolio-pieces/CompSciCalc";

const App = () => {
  const cursorDot = useRef();
  const cursorDotOutline = useRef();

  useLayoutEffect(() => {
    var cursor = {
      delay: 8,
      _x: 0,
      _y: 0,
      endX: window.innerWidth / 2,
      endY: window.innerHeight / 2,
      cursorVisible: true,
      cursorEnlarged: false,
      $dot: cursorDot,
      $outline: cursorDotOutline,

      init: function () {
        // Set up element sizes
        this.dotSize = this.$dot.current.style.offsetWidth;
        this.outlineSize = this.$outline.current.style.offsetWidth;

        this.setupEventListeners();
        this.animateDotOutline();
      },

      //     updateCursor: function(e) {
      //         var self = this;

      //         console.log(e)

      //         // Show the cursor
      //         self.cursorVisible = true;
      //         self.toggleCursorVisibility();

      //         // Position the dot
      //         self.endX = e.pageX;
      //         self.endY = e.pageY;
      //         self.$dot.style.top = self.endY + 'px';
      //         self.$dot.style.left = self.endX + 'px';
      //     },

      setupEventListeners: function () {
        var self = this;

        // Anchor hovering
        document.querySelectorAll("a").forEach(function (el) {
          el.addEventListener("mouseover", function () {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
          el.addEventListener("mouseout", function () {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });
        });

        // Click events
        document.addEventListener("mousedown", function () {
          self.cursorEnlarged = true;
          self.toggleCursorSize();
        });
        document.addEventListener("mouseup", function () {
          self.cursorEnlarged = false;
          self.toggleCursorSize();
        });

        document.addEventListener("mousemove", function (e) {
          // Show the cursor
          self.cursorVisible = true;
          self.toggleCursorVisibility();

          // Position the dot
          self.endX = e.pageX;
          self.endY = e.pageY;
          self.$dot.current.style.top = self.endY + "px";
          self.$dot.current.style.left = self.endX + "px";
        });

        // Hide/show cursor
        document.addEventListener("mouseenter", function (e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.current.style.opacity = 1;
          self.$outline.current.style.opacity = 1;
        });

        document.addEventListener("mouseleave", function (e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.current.style.opacity = 0;
          self.$outline.current.style.opacity = 0;
        });
      },

      animateDotOutline: function () {
        var self = this;

        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.current.style.top = self._y + "px";
        self.$outline.current.style.left = self._x + "px";

        requestAnimationFrame(this.animateDotOutline.bind(self));
      },

      toggleCursorSize: function () {
        var self = this;

        if (self.cursorEnlarged) {
          self.$dot.current.style.transform =
            "translate(-50%, -50%) scale(0.75)";
          self.$outline.current.style.transform =
            "translate(-50%, -50%) scale(1.5)";
        } else {
          self.$dot.current.style.transform = "translate(-50%, -50%) scale(1)";
          self.$outline.current.style.transform =
            "translate(-50%, -50%) scale(1)";
        }
      },

      toggleCursorVisibility: function () {
        var self = this;

        if (self.cursorVisible) {
          self.$dot.current.style.opacity = 1;
          self.$outline.current.style.opacity = 1;
        } else {
          self.$dot.current.style.opacity = 0;
          self.$outline.current.style.opacity = 0;
        }
      },
    };

    cursor.init();
  });

  return (
    <div>
      <div className="cursor-dot-outline" ref={cursorDotOutline}></div>
      <div className="cursor-dot" ref={cursorDot}></div>
      <HashRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/golden_sum" component={GoldenSum} />
          <Route path="/circles" component={Circles} />
          <Route path="/cig_quit" component={CigQuit} />
          <Route path="/comp_sci_calc" component={CompSciCalc} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
