export type StoreStatus = {
  open: boolean
  message: string | null
  reopenDate: string | null
}

export type Category = {
  id: string
  name: string
  slug: string
  thumbnailUrl: string
}

export type Item = {
  id: string
  categoryId: string
  name: string
  imageUrl: string
  price: number
}

export type DesignAnswers = {
  categoryId: string
  colors: string[]
  styles: string[]
  occasion: string
  notes: string
}

export type PreviewStatus = "queued" | "processing" | "done" | "failed"

export type PreviewJob = {
  id: string
  status: PreviewStatus
  imageUrl: string | null
  triesRemaining: number
}

export type DropoffPoint = {
  id: string
  name: string
  address: string
}

export type OrderStatus = "paid" | "in_production" | "ready"

export type Order = {
  id: string
  previewImageUrl: string
  summary: string
  price: number
  status: OrderStatus
  categoryName: string
  dropoffPointId: string
  whatsappOptIn: boolean
  createdAt: string
}

export type User = {
  name: string
  email: string
  phone: string
  whatsappOptIn: boolean
}

export type CheckoutInput = {
  orderId: string
  dropoffPointId: string
  whatsappOptIn: boolean
  whatsappPhone: string
  paymentMethod: "card" | "transfer"
}

export type CheckoutResult = {
  paymentUrl: string
}

export type AdminStoreSettings = {
  open: boolean
  message: string
  reopenDate: string
}
