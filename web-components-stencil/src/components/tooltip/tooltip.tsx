import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'uc-tooltip',
  styleUrl: 'tooltip.css',
  shadow: true
  // scoped: true
})
export class Tooltip {
  @State() tooltipShown = false;

  @Prop({ reflect: true }) title: string;


  showToolTip() {
    this.tooltipShown = !this.tooltipShown;
  }

  render() {
    return (
      <div>
        <slot></slot>  <button onClick={this.showToolTip.bind(this)}> (?)</button>
        <div class={`tooltip ${this.tooltipShown ? "show-tooltip" : "hide-tooltip"}`}>{this.title} </div>
      </div>
    );
  }
}
