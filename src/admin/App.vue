<template>
<div id="app">
  <transition name="fade">
    <div v-if="$store.state.message" class="alert m-3 alert-fixed" v-bind:class="{ 'alert-success': $store.state.status == 'success', 'alert-danger': $store.state.status =='error' }" role="alert">
      {{$store.state.message}}
    </div>
  </transition>
  <router-view />
</div>
</template>

<style>
:root {
  --colour-beige: #f7c39c;
  --colour-blue: #546d81;
  --colour-light-blue: #9cb2c3;
  --colour-dark-blue: #334f69;

  /* --colour-dark-green: #679186;
  --colour-light-green: #d0e2dd; */
}

/* .noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
} */

/* .noselect:hover { */
/* text-decoration: underline !important; */
/* } */


.weight-100 {
  font-weight: 100;
}

.sidebar {
  text-align: left;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  color: var(--colour-beige);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
  background-color: var(--colour-blue);
}


.admin-bg-dark-blue {
  background-color: var(--colour-dark-blue);
}

.admin-text-beige {
  color: var(--colour-beige) !important;
}

.admin-text-light-blue {
  color: var(--colour-light-blue) !important;
}


.sidebar-sticky {
  position: relative;
  top: 0;
  /* height == sidebar minus profile div? */
  height: calc(100vh);
  /* height: calc(100vh -48px); */
  /* padding-top: .5rem; */
  overflow-x: hidden;
  overflow-y: auto;
  /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  /* color: #333; */
  color: var(--colour-beige);
  /* color: #333; */

}


.active {
  text-decoration: underline !important;
  font-weight: bold;
}

.sidebar-item {
  font-weight: 400;
  font-size: 17px;
}

.sidebar-item span:hover {
  text-decoration: underline;
  cursor: pointer;
}

.indent {
  padding-left: 20px;
}

.indent2 {
  padding-left: 40px;
}

.link {
  color: #2c3e50;
}

.active-item {
  background: #ecececb8 !important;
}

.user:hover {
  cursor: pointer;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; */
  color: #2c3e50;
}

.home-top {
  background: var(--colour-beige);
}

.home-text {
  color: var(--colour-blue);
}


#nav {
  /* padding: 30px; */
}

#nav a {
  font-weight: bold;
  /* color: #2c3e50; */
}

/* .nav-item {} */

#nav a.router-link-exact-active {
  color: #42b983;
}

.alert-fixed {
  position: fixed !important;
  width: 50%;
  right: 0;
  z-index: 999;
  top: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
