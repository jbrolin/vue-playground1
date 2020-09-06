Vue.component("todo-item", {
  props: ["todo"],
  template:
    "<li>{{ todo.text }} <button v-on:click='removeItem(todo.id)'>Remove item</button></li>",
  methods: {
    removeItem: function(id) {
      for (var i = 0; i < app.groceryList.length; i++) {
        var itm = app.groceryList[i];
        if (itm.id == id) {
          app.groceryList.splice(i, 1);
          break;
        }
      }
    }
  }
});

var app = new Vue({
  el: "#app",
  data: {
    groceryList: [
      { id: 10, text: "Tomatoes", itemshow: true },
      { id: 11, text: "Milk", itemshow: true },
      { id: 12, text: "Soap", itemshow: true },
      { id: 13, text: "Sill", itemshow: true }
    ],
    message: "Hello world",
    freezeMsg: "Inget kallt här",
    rawHtml: "<b>bold text</b>",
    redtext: "color-red",
    btnIsDisabled: false,
    urlLink: "https://www.svt.se",
    newItem: "",
    filterText: ""
  },
  methods: {
    reverseMe: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    },
    freezeIt: function() {
      this.freezeMsg = "Nu är det kallt!!";
    },
    disableBtn: function(msg) {
      this.btnIsDisabled = true;
    },
    addNew: function() {
      console.log(this.newItem);
      let nextItemNr =
        Number(this.groceryList[this.groceryList.length - 1].id) + 1;
      this.groceryList.push({
        id: nextItemNr,
        text: this.newItem,
        itemshow: true
      });
      this.newItem = "";
    },
    filterList: function() {
      const filterT = this.filterText.toLowerCase();
      this.groceryList.map(item => {
        const targetText = item.text.toLowerCase();
        if (targetText.includes(filterT)) {
          item.itemshow = true;
        } else {
          item.itemshow = false;
        }
      });
    },
    clearFilterList: function() {
      console.log("A")
      this.filterText="";
      this.filterList();
    }
  },
  created: function() {
    //console.log("created:" + this.groceryList[0].text);
  }
});
app.$watch("freezeMsg", function(newVal, oldVal) {
  alert("froozen changed from " + oldVal + " to " + newVal);
  Object.freeze(this);
});
