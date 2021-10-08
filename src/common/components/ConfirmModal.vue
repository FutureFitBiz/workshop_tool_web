

<template>
<transition>
  <div class="modal-mask">
    <div class="modal-container card">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{title}}</h5>
      </div>
      <div class="modal-body">
        <p v-for="line in text" class="mt-3">
          {{line}}
        </p>

      </div>
      <div class="modal-footer">
        <button @click="$emit('close')" type="button" class="float-left btn btn-outline-secondary">Close</button>
        <button @click="$emit('confirm')" type="button" class="float-right btn btn-warning">{{buttonText ? buttonText : 'Ok'}}</button>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'ConfirmModal',
  props: ['text', 'title', 'buttonText'],
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.18);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  margin-top: 4em;
  /* padding: 20px 30px; */
  /* background-color: #fff; */
  /* border-radius: 2px; */
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33); */
  transition: all 0.3s ease;
  /* font-family: Helvetica, Arial, sans-serif; */
}
</style>
