export class Cart<T> {
  private items: T[] = [];
  addItem(item: T): void {
    this.items.push(item);
  }
  removeItem(index: number): T | null {
    if (index >= 0 && index < this.items.length) {
      let removed = this.items.splice(index, 1)[0];
      console.log(`${JSON.stringify(removed)} is removed from the items`);
      return removed;
    }
    console.log("Noting is removed");
    return null;
  }
  getItems(): T[] {
    return this.items;
  }
  getCount(): number {
    return this.items.length;
  }
}
