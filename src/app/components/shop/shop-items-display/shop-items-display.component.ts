class Controller{
  $onInit(){

  }
}

export let ShopItemsDisplay : ng.IComponentOptions = {
  template: require('./shop-items-display.html'),
  bindings: {
    items: "<",
    cart: "=",
  },
  controller: Controller
}