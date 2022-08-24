// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}
// You may write your code here!


/*- [ ] When a color is clicked in the `#palette`, the `#current-color` element should have its background changed to that color. For example, if you click the green circle in the `#palette`, the `#current-color` element's background should change to be green.

- [ ] When you click on a `.cell`, its background should change to match the background of `#current-color`.
*/



const colors = document.querySelectorAll('.color')


const currentColor = document.querySelector('#current-color')
console.log(currentColor)

const cells = document.querySelectorAll('.cell')



colors.forEach((color) => {
  color.addEventListener('click', (event) => {
    currentColor.style.background = event.target.style.background
  })
})

cells.forEach((cell) => {
  cell.addEventListener('click', (event) => {
    event.target.style.background = currentColor.style.background
  })
})




