<template>
  <div id="app">
    <Grid :style="{height: '240px'}"
          :data-items="getData"
          :columns="columns"
          :edit-field="'inEdit'"
          @rowclick="rowClick"
          @itemchange="itemChange">
    </Grid>
  </div>
</template>


<script>
import Vue from 'vue';
var people = [
  {
    "personId": 0,
    "name": "Ruxanda",
    "surname": "Corbea",
    "gender": "female",
    "region": "Romania"
  },
  {
    "personId": 1,
    "name": "Paula",
    "surname": "Acevedo",
    "gender": "female",
    "region": "Mexico"
  },
  {
    "personId": 2,
    "name": "David",
    "surname": "Dediu",
    "gender": "male",
    "region": "Romania"
  },
  {
    "personId": 3,
    "name": "Urmila",
    "surname": "Belbase",
    "gender": "female",
    "region": "Nepal"
  }
];

export default {
  name: 'app',
  data () {
    return {
      gridData: people,
      editID: null,
      columns: [
        { field: 'personId', title: 'ID'},
        { field: 'name'},
        { field: 'surname'},
        { field: 'gender'},
        { field: 'region' }
      ],
    };
  },
  computed: {
    getData () { 
      return this.gridData.map((item) => Object.assign({inEdit: item.personId === this.editID}, item))
    }
  },
  methods: {
    rowClick (e) {
      this.editID = e.dataItem.personId;
    },
    itemChange (e) {
      const data = this.gridData.slice();
      const index = data.findIndex(d => d.personId === e.dataItem.personId);
      data[index] = { ...data[index], [e.field]: e.value };
      this.gridData = data;
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 60px;
}
</style>



