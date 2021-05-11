import { unvailableItemTag, availableItemTag } from './domElements'
import { availableItems, findItemToAdd } from './search'

export function renderAvailableItems (searchText = null) {
  this.dropdownItems.innerHTML = null
  const items = availableItems(this.items, searchText)

  if (items.length === 0) {
    this.dropdownItems.append(unvailableItemTag(searchText))
  } else {
    items.forEach(item => {
      this.dropdownItems.append(availableItemTag(item))
    })
  }

  const rect = this.inputContainer.getBoundingClientRect()
  const top = rect.top + 50
  const left = rect.left
  const width = rect.width

  this.dropdownContainer.setAttribute(
    'style',
    `top:${top}px; left:${left}px; width:${width}px;`
  )

  this.inputContainer.classList.add('is-focused')
  this.dropdownContainer.classList.remove('is-hidden')
}

export function hideResults () {
  this.highlightedItem = null
  if (!this.dropdownItems.innerHTML) return

  this.dropdownContainer.classList.add('is-hidden')
  this.dropdownItems.innerHTML = null
  this.inputContainer.classList.remove('is-focused')
}

export function addNewItem (itemName = null) {
  const item = findItemToAdd(
    itemName,
    this.highlightedItem,
    this.searchInput,
    this.items
  )

  if (item) {
    this.addSelectedItem(item[1])
    this.renderAvailableItems()
  }

  this.hideResults()
}

export function addSelectedItem (value) {
  if (!value || value.length === 0) return

  this.selectedValue = value
  this.searchInput.value = ''
  this.renderSelectedItem()
  this.commit()
}

export function renderSelectedItem () {
  this.customSelect.innerText = this.itemsByValue[this.selectedValue]
}
