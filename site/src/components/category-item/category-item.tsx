import { Component, Prop, h } from '@stencil/core';

export interface ITodoItem {
  name: string
  status: string
}

export interface IItem {
  name: string
  status: string
}


@Component({
  tag: 'category-item',
  styleUrl: 'category-item.css',
  shadow: true
})
export class CategoryItem {
  @Prop() name: string
  @Prop() status: string

  render() {
    return (
		<article class="category-item">
			<h2>{this.name}</h2>
			<p>{this.status}</p>
		</article>
    )
  }
}
