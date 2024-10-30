import { JsonFileStore } from "../utils/json-file-store";
import { Pet } from "./pet-type";

function getNextId<T extends { id: number }>(items: T[]) {
  if (items.length === 0) {
    return 1;
  }
  const ids = items.map(item => item.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
}


export class PetService {
  private readonly store;


  constructor(store: JsonFileStore<Pet>) {
    this.store = store
  }

  async born(name: string) {
    const pets = await this.store.read();
    const nextId = getNextId(pets);
    const newPet: Pet = {
      id: nextId,
      name,
      food: 1,
      weight: 1,
      age: 1
    }
    pets.push(newPet);
    await this.store.write(pets);
    return newPet;

  }
}