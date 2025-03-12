import type {
  Product,
  InsertProduct,
  Contact,
  InsertContact,
} from "@shared/schema";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private contacts: Map<number, Contact>;
  private productId: number;
  private contactId: number;

  constructor() {
    this.products = new Map();
    this.contacts = new Map();
    this.productId = 1;
    this.contactId = 1;
    this.initializeProducts();
  }

  private initializeProducts() {
    const defaultProducts: InsertProduct[] = [
      {
        name: "Ключевая игрушка Зайчик",
        description: "Маленький гипсовый друг для вашего интерьера. Легкий и очаровательный",
        price: "599",
        category: "Игрушки",
        imageUrl: "https://placehold.co/400x400",
      },
      {
        name: "Подсвечник Луна",
        description: "Добавьте магии вечерам с мягким светом этого подсвечника",
        price: "799",
        category: "Подсвечники",
        imageUrl: "https://placehold.co/400x400",
      },
      // Add more default products as needed
    ];

    defaultProducts.forEach((product) => {
      this.createProduct(product);
    });
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const id = this.productId++;
    const newProduct = { ...product, id };
    this.products.set(id, newProduct);
    return newProduct;
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    const newContact = { ...contact, id };
    this.contacts.set(id, newContact);
    return newContact;
  }
}

export const storage = new MemStorage();
