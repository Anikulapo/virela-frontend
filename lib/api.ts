import type {
  AdminStoreSettings,
  Category,
  CheckoutInput,
  CheckoutResult,
  DesignAnswers,
  DropoffPoint,
  Item,
  Order,
  OrderStatus,
  PreviewJob,
  StoreStatus,
  User,
} from "./types"
import {
  categories,
  currentUser,
  dropoffPoints,
  items,
  orders,
  storeStatus,
} from "./mock-data"

const mockLatency = () =>
  new Promise((resolve) => setTimeout(resolve, 300 + Math.random() * 400))

const jobs = new Map<string, PreviewJob>()

export async function getStoreStatus(): Promise<StoreStatus> {
  await mockLatency()
  return {
    open: storeStatus.open,
    message: storeStatus.message || null,
    reopenDate: storeStatus.reopenDate || null,
  }
}

export async function getCategories(): Promise<Category[]> {
  await mockLatency()
  return categories
}

export async function getItemsByCategory(categoryId: string): Promise<Item[]> {
  await mockLatency()
  return items.filter((item) => item.categoryId === categoryId)
}

export async function login(email: string): Promise<User> {
  await mockLatency()
  return { ...currentUser, email }
}

export async function getMe(): Promise<User> {
  await mockLatency()
  return { ...currentUser }
}

export async function submitDesign(answers: DesignAnswers): Promise<PreviewJob> {
  await mockLatency()
  const job: PreviewJob = {
    id: `prev_${Math.random().toString(36).slice(2, 10)}`,
    status: "processing",
    imageUrl: null,
    triesRemaining: 3,
  }
  jobs.set(job.id, job)
  completeAfterDelay(job)
  return { ...job }
}

export async function getPreview(jobId: string): Promise<PreviewJob> {
  await mockLatency()
  const job = jobs.get(jobId)
  if (!job) throw new Error("Preview job not found")
  return { ...job }
}

export async function tryPreviewAgain(jobId: string): Promise<PreviewJob> {
  await mockLatency()
  const job = jobs.get(jobId)
  if (!job) throw new Error("Preview job not found")
  if (job.triesRemaining <= 0) throw new Error("No tries remaining")
  job.status = "processing"
  job.imageUrl = null
  job.triesRemaining -= 1
  completeAfterDelay(job)
  return { ...job }
}

export async function getDropoffPoints(): Promise<DropoffPoint[]> {
  await mockLatency()
  return dropoffPoints
}

export async function getOrder(id: string): Promise<Order> {
  await mockLatency()
  const order = orders.find((o) => o.id === id)
  if (!order) throw new Error("Order not found")
  return order
}

export async function getOrders(): Promise<Order[]> {
  await mockLatency()
  return [...orders]
}

export async function updateMe(patch: Partial<User>): Promise<User> {
  await mockLatency()
  Object.assign(currentUser, patch)
  return { ...currentUser }
}

export async function createCheckout(input: CheckoutInput): Promise<CheckoutResult> {
  await mockLatency()
  return { paymentUrl: "/confirmation" }
}

export async function getAdminOrders(): Promise<Order[]> {
  await mockLatency()
  return [...orders]
}

export async function updateOrderStatus(
  id: string,
  status: OrderStatus,
): Promise<Order> {
  await mockLatency()
  const order = orders.find((o) => o.id === id)
  if (!order) throw new Error("Order not found")
  order.status = status
  return order
}

export async function setStoreStatus(
  settings: AdminStoreSettings,
): Promise<AdminStoreSettings> {
  await mockLatency()
  storeStatus.open = settings.open
  storeStatus.message = settings.message
  storeStatus.reopenDate = settings.reopenDate
  return { ...storeStatus }
}

function completeAfterDelay(job: PreviewJob) {
  setTimeout(() => {
    job.status = "done"
    job.imageUrl = `/placeholders/placeholder-${Math.floor(Math.random() * 12) + 1}.svg`
  }, 2500)
}
