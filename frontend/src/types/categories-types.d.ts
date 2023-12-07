export interface Categories {
  id: number
  attributes: PurpleAttributes
}

export interface PurpleAttributes {
  name: string
  apps: Apps
}

export interface Apps {
  data: AppsDatum[]
}

export interface AppsDatum {
  id: number
  attributes: FluffyAttributes
}

export interface FluffyAttributes {
  name: string
}