import type {
  AdminStoreSettings,
  Category,
  DropoffPoint,
  Item,
  Order,
  OrderStatus,
  User,
} from "./types"

export const orderStatusLabels: Record<OrderStatus, string> = {
  paid: "Paid",
  in_production: "Being made",
  ready: "Ready for pickup",
}

export const storeStatus: AdminStoreSettings = {
  open: true,
  message: "",
  reopenDate: "",
}

export const categories: Category[] = [
  { id: "cat-scrunchies", name: "Scrunchies", slug: "scrunchies", thumbnailUrl: "/placeholders/placeholder-1.svg" },
  { id: "cat-jewelry", name: "Jewelry", slug: "jewelry", thumbnailUrl: "/placeholders/placeholder-2.svg" },
  { id: "cat-hair-accessories", name: "Hair accessories", slug: "hair-accessories", thumbnailUrl: "/placeholders/placeholder-3.svg" },
  { id: "cat-bags", name: "Bags & pouches", slug: "bags", thumbnailUrl: "/placeholders/placeholder-4.svg" },
  { id: "cat-keychains", name: "Keychains", slug: "keychains", thumbnailUrl: "/placeholders/placeholder-5.svg" },
  { id: "cat-home", name: "Home decor", slug: "home", thumbnailUrl: "/placeholders/placeholder-6.svg" },
]

export const items: Item[] = [
  { id: "item-1", categoryId: "cat-scrunchies", name: "Silk scrunchie set", imageUrl: "/placeholders/placeholder-7.svg", price: 4500 },
  { id: "item-2", categoryId: "cat-scrunchies", name: "Velvet scrunchies", imageUrl: "/placeholders/placeholder-8.svg", price: 3800 },
  { id: "item-3", categoryId: "cat-jewelry", name: "Pearl earrings", imageUrl: "/placeholders/placeholder-9.svg", price: 6500 },
  { id: "item-4", categoryId: "cat-jewelry", name: "Rose gold chain", imageUrl: "/placeholders/placeholder-10.svg", price: 8500 },
  { id: "item-5", categoryId: "cat-hair-accessories", name: "Claw clips", imageUrl: "/placeholders/placeholder-11.svg", price: 3200 },
  { id: "item-6", categoryId: "cat-bags", name: "Beaded pouch", imageUrl: "/placeholders/placeholder-12.svg", price: 12000 },
]

export const dropoffPoints: DropoffPoint[] = [
  { id: "dp-1", name: "Lekki phase 1", address: "Adebayo Doherty Rd, Lekki" },
  { id: "dp-2", name: "Ikeja City Mall", address: "Obafemi Awolowo Way, Ikeja" },
  { id: "dp-3", name: "Yaba tech hub", address: "Herbert Macaulay Way, Yaba" },
  { id: "dp-4", name: "Festac town", address: "2nd Avenue, Festac" },
]

export const currentUser: User = {
  name: "Amina Bello",
  email: "amina@example.com",
  phone: "08012345678",
  whatsappOptIn: false,
}

export const orders: Order[] = [
  {
    id: "ord-1042",
    previewImageUrl: "/placeholders/placeholder-1.svg",
    summary: "Scrunchies · pearl & rose gold",
    price: 4500,
    status: "in_production",
    categoryName: "Scrunchies",
    dropoffPointId: "dp-1",
    whatsappOptIn: true,
    createdAt: "2026-08-10T09:24:00Z",
  },
  {
    id: "ord-1019",
    previewImageUrl: "/placeholders/placeholder-2.svg",
    summary: "Jewelry · rose gold chain",
    price: 8500,
    status: "ready",
    categoryName: "Jewelry",
    dropoffPointId: "dp-2",
    whatsappOptIn: false,
    createdAt: "2026-07-28T15:02:00Z",
  },
]
