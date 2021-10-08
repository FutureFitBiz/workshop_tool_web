<template>
<div id="app" class="h-100">
  <!-- <div :class="[$store.state.alert.bsclass]" v-show="Object.keys($store.state.alert).length" class="ffalert alert " role="alert">
    {{$store.state.alert.message}}
  </div> -->

  <router-view />
</div>
</template>

<style>
@font-face {
  font-family: 'Calibri';
  src: url('~@/assets/fonts/Jaldi-Bold.otf');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Calibri';
  src: url('~@/assets/fonts/Jaldi-Regular.otf');
  font-weight: normal;
  font-style: normal;
}




:root {
  --ff-blue-b2: #e1eff4;
  --ff-blue-b3: #c3dfe9;
  --ff-blue-b4: #a6d0de;
  --ff-blue-b5: #4BA4C0;
  /* --ff-blue-b5: #4d8ca4; */
  --ff-blue-b6: #2f5261;

  --ff-orange-1: #fff6e6;
  --ff-orange-2: #FF9E00;

  --text-color--light: #73849a;
  --nav-link-text: #3880ff;
  --nav-active-bg: #f3f9fe;


  --color-pink: #f9b4ab;
  --colour-beige: #fdebd3;
  /* --colour-dark-blue: #264e70;
  --colour-dark-green: #679186;
  --colour-light-green: #d0e2dd; */
  /* --colour-sidebar-bg: #f8f9fa; */
  --colour-sidebar-bg: #f9f9f9;
  --colour-sidebar-border: #eee;
  --colour-be-gradient-1: #c1dfc4;
  --colour-be-gradient-2: #bbd4ce;
  --colour-be-text: #264e70;
  --colour-setup-gradient-1: #a1c4fd;
  --colour-setup-gradient-2: #c2e9fb;
  --colour-setup-text: #143160;
  --colour-pp-gradient-1: #ffecd2;
  --colour-pp-gradient-2: #fcb69f;
  --colour-pp-text: #585874;
  --colour-welcome-gradient-1: #7DE2FC;
  --colour-welcome-gradient-2: #B9B6E5;

  --colour-radio: #000000a1;
  --colour-radio-border: #bbbbbb;
  --colour-chart-table-divider: #ccc;
  --colour-ffb2: #4BA4C0;
  --colour-ffb3: #99d4e1;
  --colour-ffb4: #66bed1;
  --colour-ffb5: #33a9c2;
  --colour-ffb6: #0093b3;

  /*  */
  --colour-ffb7: #66bdd1;
  --colour-ffb8: #66bed1;
  --colour-ffb9: #66bcd1;
  --colour-ffb10: #4BA4C0;
  --colour-ffb11: #0092b3;
  --colour-ffb12: #dff1f5;
  --colour-ffb13: #347b93;
  --colour-ffb14: #2c809a;
}

html {
  height: 100%;
  color: #333;
}

.bd-callout-warning {
  border-left-color: #f0ad4e !important;
}

.bd-callout-info {
  border-left-color: #0d6efd !important;
}

/* .bd-callout {
  padding: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  border: 1px solid #e9ecef;
  border-left-color: rgb(233, 236, 239);
  border-left-width: 1px;
  border-left-width: .25rem;
  border-radius: .25rem;
} */

/* bs */
.form-check-input:checked[type="checkbox"] {
  background-color: var(--ff-blue-b5);
  border-color: var(--ff-blue-b5);
}

.accordion-button:not(.collapsed) {
  color: var(--ff-blue-b6);
  background-color: var(--ff-blue-b2);
}

.worshop-sidebar-title {
  color: rgba(0, 0, 0, 0.31) !important;
  border-bottom: 5px solid #8080801f;
}


.trigger:hover+.hb {
  display: inline;
}

.active-blob {
  position: fixed;
  left: 0;
  width: 7px;
  /* height: 100%; */
  height: 25px;
  background: var(--colour-ffb4);
  margin-top: -22px;
}

.btn-light.active {
  color: #fff;
  background-color: #4ba4c0;
  border-color: #f9fafb;
}


.question-number {
  background: var(--ff-blue-b2);
  width: 50px;
  border-radius: 20px;
  /* color: white; */
  color: var(--ff-blue-b6);
  font-weight: bold;
  text-align: center;
  height: 24px;
  margin-right: 6px;
  font-size: 16px;
  line-height: 25px;
}

.nav-icon-group {
  padding: 8px;
  background: white;
  border-radius: 30px;
  color: #4ea5c1;
}

.rotate-slowly {
  animation: rotation 2s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}

.grad-top {
  background-image: linear-gradient(var(--ff-blue-b3), var(--ff-blue-b2));
}

.icon-group-sidebar {
  display: none;
}

.question-container {
  border-left: 4px solid #e1eff4;
  padding-left: 10px;
}

.blue-box {
  background-image: linear-gradient(to right, var(--ff-blue-b2), white);
  width: 400px;
  /* height: 200px; */
  border-radius: 30px;
}

.white-box {
  /* background-image: linear-gradient(to right, var(--ff-blue-b2), white); */
  /* width: 400px; */
  /* height: 200px; */
  background: white;
  border-radius: 30px;
}


/* .active {
  background: var(--colour-ffb6) !important;
} */

.hb {
  display: none;
  position: fixed;
  left: 0;
  width: 7px;
  /* height: 100%; */
  height: 25px;
  background: var(--colour-ffb3);
  margin-top: -22px;
}



body {
  /* height: 100%; */
  /* display: flex; */
  /* position: relative; */
}

h1,
h2,
h3,
h4,
h5 {
  font-family: 'Calibri';
  font-weight: bold;
  display: inline-block;
}

.risk-underline {
  /* font-size: 70px; */
  font-size: 70vw;
  border-bottom: 20px solid var(--ff-blue-b2);
  line-height: 33px;
}

.title-underline {
  font-size: 70px;
  border-bottom: 20px solid var(--ff-blue-b2);
  line-height: 49px;
}

.title-underline-pp {
  font-size: 70px;
  border-bottom: 20px solid var(--ff-orange-1);
  line-height: 49px;
}


.ff-font {
  font-family: 'Calibri';
}

/* overrides */
.bg-warning {
  background-color: #f9d858 !important;
}

.bg-danger {
  background-color: #ff9f9a !important
}

.bg-success {
  background-color: #77d78d !important;
}

.btn-outline-success {
  /* background-color: #77d78d !important; */
  /* color: #77d78d !important; */
  /* border-color: #77d78d !important; */
}

.btn-outline-success:hover {
  /* background-color: #77d78d !important; */
  /* color: #77d78d !important; */
  /* border-color: #77d78d !important; */
}

/*  */

.gradient-button {
  /* margin: 10px; */
  /* font-family: "Arial Black", Gadget, sans-serif; */
  /* font-size: 20px; */
  /* font-family: 'Calibri'; */
  padding: 7px;
  text-align: center;
  /* font-weight: bold; */
  /* text-transform: uppercase; */
  transition: 0.5s;
  background-size: 200% auto;
  color: #FFF;
  box-shadow: 0 0 20px #eee;
  border-radius: 4px;
  /* width: 200px; */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  cursor: pointer;
  display: inline-block;
  /* border-radius: 25px; */
}

.gradient-button-outline-success {
  /* margin: 10px; */
  /* font-family: "Arial Black", Gadget, sans-serif; */
  /* font-size: 20px; */
  /* font-family: 'Calibri'; */
  padding: 7px;
  text-align: center;
  border: 1px solid transparent;
  /* font-weight: bold; */
  /* text-transform: uppercase; */
  transition: 0.5s;
  /* background-size: 200% auto; */
  color: #FFF;
  box-shadow: 0 0 20px #eee;
  border-radius: 4px;
  /* width: 200px; */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  cursor: pointer;
  display: inline-block;
  /* border-radius: 25px; */
}

.gradient-button:hover {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: 0px 1px 0px;
}

.gradient-button-outline-success:hover {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: 0px 1px 0px;
}

/* .gradient-button-1 {
  background-image: linear-gradient(to right, #DD5E89 0%, #F7BB97 51%, #DD5E89 100%)
}

.gradient-button-1:hover {
  background-position: right center;
}

.gradient-button-2 {
  background-image: linear-gradient(to right, #2BC0E4 0%, #EAECC6 51%, #2BC0E4 100%)
}

.gradient-button-2:hover {
  background-position: right center;
}

.gradient-button-3 {
  background-image: linear-gradient(to right, #7474BF 0%, #348AC7 51%, #7474BF 100%)
}

.gradient-button-3:hover {
  background-position: right center;
} */

.gradient-button-4 {
  background-image: linear-gradient(to right, #00d2ff 0%, #3a7bd5 51%, #00d2ff 100%);
  background-image: linear-gradient(to right, #4BA4C0 0%, #a6d0de 51%, #4BA4C0 100%);
  /* background-image: linear-gradient(to right, #4BA4C0 0%, #3a7bd5 31%, #e1eff4 100%) */
  background-image: linear-gradient(to right, #4BA4C0 0%, #60B1C9 51%, #4BA4C0 100%);
}

.gradient-button-4:hover {
  background-position: right center;
}



#app {
  /* font-family: 'Calibri', Arial, sans-serif; */
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 300;
}

.ffalert {
  position: fixed;
  right: 0px;
  max-width: 400px;
  margin: 20px;
  z-index: 999;
}

.fadeout {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 2s, opacity 2s linear;
}


/* .active-tab {
  font-weight: bolder;
  color: black;
  border: 1px solid grey;
} */

.btn-success {
  background: #00AE4C !important;
  border-color: #00AE4C !important;
}

.bd-callout-success {
  border-left-color: #00AE4C !important;
}

.bd-callout-info {
  border-left-color: #5bc0de !important;
}

.bd-callout-secondary {
  border-left-color: #5bc0de;
}

.bd-callout {
  padding: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  border: 1px solid #eee;
  border-left-color: rgb(238, 238, 238);
  border-left-width: 1px;
  border-left-width: .25rem;
  border-radius: .25rem;
}

.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.noselect:hover {
  text-decoration: none !important;
  cursor: default !important;
}

.ff-blue {
  color: #0092b3 !important;
}

.link-hover {}

.link-hover:hover {
  text-decoration: underline;
}

.be-hover:hover {
  cursor: pointer;
  /* text-decoration: underline; */
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.2);
}

.be-hover-home:hover {
  cursor: pointer;
  /* font-weight: bold; */
  color: black;
  background: #eaeaea;
  /* opacity: 0.6; */
  /* font-size: 0.9em; */
  /* text-decoration: underline; */
  /* box-shadow: 0 5px 12px rgba(0, 0, 0, 0.2); */
}

.pointer {
  cursor: pointer;
}

.cursor-hover:hover {
  cursor: pointer;
  /* font-weight: normal; */
  /* color: grey; */
  opacity: 0.7;
}

.nav-small {
  font-size: 16px;
}

.nav-help-padding {
  padding: 0 0.25rem 0 0.25rem !important
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.checkbox-indent {
  margin-left: 30px;
}

.checkbox-indent2 {
  margin-left: 60px;
}

.checkbox-indent3 {
  margin-left: 90px;
}

.checkbox-indent4 {
  margin-left: 120px;
}

input[type="radio"] {
  transform: scale(1.5);
  /* remove standard background appearance */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* create custom radiobutton appearance */
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 3px;
  /* background-color only for content */
  background-clip: content-box;
  border: 1px solid var(--colour-radio-border);
  border-radius: 50%;
  cursor: pointer;
}

/* appearance for checked radiobutton */
input[type="radio"]:checked {
  background-color: var(--colour-radio);
  padding: 3px;
}

.custom-checkbox .custom-control-label::before {
  transform: scale(1.1);
}

.custom-control-input:checked~.custom-control-label::before {
  transform: scale(1.1);
  border-color: grey !important;
  background: grey !important;
}

.custom-checkbox .custom-control-input:checked~.custom-control-label::after {
  transform: scale(1.3);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e") !important;

}

.custom-control-label {
  cursor: pointer !important;
}

.help-container {
  display: inline-flex;
}

.indent {
  padding-left: 20px;
}

.indent2 {
  padding-left: 40px;
}

.active-nav {
  background: #e5eaf0 !important;
  color: #2f4b8a;
  text-decoration: underline !important;
  text-decoration-color: currentcolor;
  text-decoration-color: currentcolor;
  -webkit-text-decoration-color: var(--colour-light-green) !important;
  text-decoration-color: var(--colour-light-green) !important;
  font-weight: 600;
  /* padding-left: 2px; */
  padding-left: 2px;
}

.nav-hover {
  border-radius: 10px 0px 0px 10px;
  padding: 2px;
  padding-left: 10px;
}

.nav-hover:hover {
  background: #e8edf4;
  cursor: pointer;
}


.link {
  color: #2c3e50;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

.greybar {
  border-left: 5px solid grey;
}

.profile-block {
  height: 50px;
}

.weight-100 {
  font-weight: 100;
}

.question-ok-title {
  text-decoration: underline;
  text-decoration-color: var(--colour-light-green);
  color: var(--colour-dark-green) !important;
}

.question-ok-description {
  color: var(--colour-dark-green) !important;
}

.question-unfinished {
  position: absolute;
  left: -10px;
}

.sidebar-status {
  width: 5px;
  height: 14px;
  left: -11px;
  position: absolute;
  border-radius: 10px;
  top: 3px;
}

/* .sidebar-unfinished {
  background: #ffc336;
  background: #ffc107;
} */

/* .sidebar-finished {
  background: #ffc336;
  background: #ffc107;
} */

.crumb {
  color: var(--ff-blue-b5);
  /* color: var(--colour-dark-green); */
  cursor: pointer;
}

.crumb:hover {
  text-decoration: underline;
}

.sdg-colour-box {
  font-size: 13px;
  color: white;
  height: 20px;
  width: 20px;
  font-weight: 100;
}

.divider {
  margin-bottom: 5px;
  height: 1px;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
}

.divider-lg {
  border-bottom: 4px solid var(--colour-chart-table-divider);
}

.divider-sm {
  border-bottom: 2px solid var(--colour-chart-table-divider);
}

.divider-stakeholder {
  position: relative;
  width: 83.3%;
  left: 16.7%;
  border-bottom: 2px solid var(--colour-chart-table-divider);
}

.divider-stakeholder-dash {
  position: relative;
  width: 83.3%;
  left: 16.7%;
  border-bottom: 2px dashed #f7f7f7;
}

.be-top {
  background: var(--colour-be-gradient-2);
  background-image: linear-gradient(170deg, var(--colour-be-gradient-1) 0%, var(--colour-be-gradient-2));
}

.be-top-description {
  color: var(--colour-be-text);
}

.setup-top {
  background-image: linear-gradient(350deg, var(--colour-setup-gradient-1) 0%, var(--colour-setup-gradient-2));
}

.welcome-top {
  background-image: linear-gradient(-225deg, var(--colour-welcome-gradient-1) 0%, var(--colour-welcome-gradient-2));
  border-radius: 3px 3px 0 0;
}

.setup-top-description {
  color: var(--colour-setup-text);
}

.pp-top {
  background: var(--colour-pp-gradient-1);
  background-image: linear-gradient(to right, var(--colour-pp-gradient-1) 0%, var(--colour-pp-gradient-2));
}

.pp-top-title {
  color: var(--colour-dark-blue);
}

.pp-top-description {
  color: var(--colour-pp-text);
}

.slider {
  -webkit-appearance: none;
  height: 7px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #FFF;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #FFF;
  cursor: pointer;
}

.highlight {
  padding: 1.5rem;
  border-radius: .5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: #f8f9fa;
}

.category-title {
  color: #264e70;
}

/* .navtop {
  border-bottom: 1px solid lightgrey;
  z-index: 999;
  position: fixed;
  width: 100%;
} */

.sidebar {
  /* z-index: 1999; */
  text-align: left;
  top: 0;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  background: white;
  /* position: fixed; */
  /* padding-right: 18px; */
  /* box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1); */
}


.sidebar-width {
  width: 100%;
  max-width: 280px;
}


.sidebar-close-area {
  display: none;
}

.sidebar-logo {
  display: block;
}

.sidebar {
  text-align: center !important;
}

.main-view {
  /* padding-top: 0px; */
  padding-left: 330px;
  z-index: 333;
}

.mobile {
  display: none;
}

.desktop {
  display: inline;
}


@media screen and (max-width: 900px) {
  .sidebar-close-area {
    display: block;
    z-index: 77;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.2;
  }

  .main-view {
    /* padding-top: 50px; */
    padding-left: 0px;
  }

  .icon-group-navbar {
    display: none;
  }

  .mobile {
    display: inline;
  }

  .desktop {
    display: none;
  }

  .sidebar.open {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  .sidebar {
    z-index: 888;
    position: fixed;
    /* background-color: #f9f9f9; */
    height: 100%;
    top: 0 !important;
    left: 0;

    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */
    transition: all 0.2s cubic-bezier(0.4, 0, 0, 1);
    -webkit-transform: translate(-330px, 0);
    transform: translate(-330px, 0);
  }

  .sidebar-logo {
    display: none;
  }

  .sidebar .sidebar-inner {
    padding: 60px 10px 30px 20px;
    box-sizing: border-box;
  }

  .sidebar .sidebar-inner-index {
    padding: 10px 10px 10px 20px;
  }

  .sidebar .search-query {
    width: 200px;
    margin-bottom: 10px;
  }

  .sidebar .main-menu {
    display: block;
  }

  .sidebar.open {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}

.main-menu {
  position: fixed;
  overflow: auto;
  top: 0;
  background: var(--colour-sidebar-bg);
  /* background: #f9f9f9; */
  border-right: 1px solid #e1e1e1;

}

.bottom-menu-border {
  border-top: 1px solid #d3d3d369;
}

.bottom-menu {
  position: fixed;
  bottom: 0;
  background: var(--colour-sidebar-bg);
  border-right: 1px solid var(--colour-sidebar-border);
}

#benchmark1 {
  font-size: 16px;
  font-weight: 800;
  line-height: 0px;
  color: #606060;
  /* border-bottom: 5px solid var(--colour-ffb3); */
}

#benchmark {
  font-weight: lighter;
  font-size: 26px;
  line-height: 1.5;
  color: #606060;
  /* border-bottom: 5px solid var(--colour-ffb3); */
}

.nav-text {
  font-size: .9rem;
}

.arrow {
  font-size: 1.6em;
  line-height: 0px;
}



.fflogo-sm {
  height: 22px;
  vertical-align: text-top;
}

.ff-link-hover:hover {
  text-decoration: underline;
}

.arrow-inactive {
  color: rgba(0, 0, 0, 0.27) !important;
}


.nav-icon {
  color: grey;
}

.nav-icon:hover {
  cursor: pointer;
  color: black;
}

.nav-bottom {
  position: fixed;
  bottom: 0;
  left: 5%;
  overflow-x: hidden;
  overflow-y: auto;
}


/* @media (max-width: 969px) {
  .sidebar-collapse {
    display: none;
  }
} */

.sidebar-item {
  padding-top: 4px;
  font-size: 100% !important;
}

.sidebar-item span:hover {
  /* text-decoration: underline; */
  cursor: pointer;
}

.alert-not-applicable {
  color: #79858f;
  background-color: #f0f1f2;
  border-color: #d6d8db;
}

dd {
  margin-bottom: .5rem;
  margin-left: 0;
}

.bg-blue {
  background: rgba(54, 162, 235, 0.2) !important;
}

.text-blue {
  color: rgba(22, 102, 155, 0.88) !important;
}

.nav_progress_bar {
  display: flex
}

.nav_progress_bar .progress {
  margin-left: 5px;
  margin-top: 3px;
}
</style>
