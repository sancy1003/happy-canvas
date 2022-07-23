export class Items {
  constructor(roulette) {
    this.roulette = roulette;
    this.colorList = [
      "#F69C96",
      "#9EC0E4",
      "#F6D14B",
      "#AED267",
      "#F5B259",
      "#C3A1DC",
      "#F2F2F2",
      "#B2DEE5",
    ];
    this.list = [];

    this.createList();
    this.createAddItems();
  }

  add() {
    const input = document.getElementById("item-input");
    if (input.value.length === 0) {
      return alert("내용을 입력해주세요.");
    }

    if (this.list.length < 8) {
      this.list.push(input.value);
      input.value = "";
      this.createList();
      this.roulette.draw(this.list, this.colorList);
    }
  }

  delete(index) {
    this.list.splice(index, 1);
    this.createList();
    this.roulette.draw(this.list, this.colorList);
  }

  createList() {
    const itemListContainer = document.querySelector(".item-list-container");
    itemListContainer.innerHTML = "";

    for (let i = 0; i < this.list.length; i++) {
      const li = document.createElement("li");
      const span = document.createElement("span");
      const div = document.createElement("div");
      const button = document.createElement("button");

      span.style.backgroundColor = this.colorList[i];
      div.innerText = this.list[i];

      button.innerText = "삭제";
      button.addEventListener("click", () => this.delete(i));

      li.appendChild(span);
      li.appendChild(div);
      li.appendChild(button);
      itemListContainer.appendChild(li);
    }
  }

  createAddItems() {
    const itemAddContainer = document.querySelector(".item-add-container");
    itemAddContainer.innerHTML = "";

    const input = document.createElement("input");
    const button = document.createElement("button");

    input.id = "item-input";
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        if (this.list.length === 8) alert("최대 8개 까지만 추가 가능해요.");
        else this.add();
      }
    });

    button.innerText = "추가";
    button.addEventListener("click", () => {
      if (this.list.length === 8) alert("최대 8개 까지만 추가 가능해요.");
      else this.add();
    });

    itemAddContainer.appendChild(input);
    itemAddContainer.appendChild(button);
  }
}
