class CandyGrid extends HTMLElement {
  connectedCallback () {
    this.classList.add('loading')
    CandyStore.load().then((data) => {
      this.classList.remove('loading')
      // Draw grid of candies
    })
  }
}
customElements.define('candy-grid', CandyGrid)
