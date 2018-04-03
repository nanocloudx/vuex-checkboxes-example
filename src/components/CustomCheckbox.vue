<template>
  <li>
    <label>
      {{ label }}
      <input
        type="checkbox"
        :checked="checked"
        @change="onChange"
      />
    </label>
  </li>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
    label: String
  },
  methods: {
    onChange(event) {
      this.$emit('change', event.target.checked)
    }
  }
}
</script>
