<template>
  <div id="app">
    <p>Fruits</p>
    <custom-checkbox-container
      :items="fruitsList"
      @updateItems="updateFruitsList"
    />
    <p>Animals</p>
    <custom-checkbox-container
      :items="animalsList"
      @updateItems="updateAnimalsList"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CustomCheckboxContainer from './components/CustomCheckboxContainer.vue'

export default {
  components: {
    CustomCheckboxContainer
  },
  computed: {
    ...mapState([
      'fruitsList',
      'animalsList'
    ])
  },
  methods: {
    ...mapActions([
      'updateFruitsList',
      'updateAnimalsList'
    ])
  }
}
</script>
