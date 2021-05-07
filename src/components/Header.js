import { BaseComponent } from "../core/BaseComponent";

export class Header extends BaseComponent {

  constructor($root){
    super($root)
  }

  toHTML() {
    return `
      <div>
        <h3>Header</h3>
        <input type="text"  name="test">
      </div>
    `;
  }
}
