<template>
  <div><form-create /></div>

</template>

<script>
import formCreate from '@form-create/element-ui'
export default {
  name: 'Home',
  components: {
    formCreate: formCreate.$form()
  },
  data() {
    return {

    }
  }
}
</script>
