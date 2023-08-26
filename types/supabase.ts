export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      clicks: {
        Row: {
          city: string | null
          country: string | null
          created_at: string
          id: number
          ip: string | null
          link_id: number
          user_agent: string | null
        }
        Insert: {
          city?: string | null
          country?: string | null
          created_at?: string
          id?: number
          ip?: string | null
          link_id: number
          user_agent?: string | null
        }
        Update: {
          city?: string | null
          country?: string | null
          created_at?: string
          id?: number
          ip?: string | null
          link_id?: number
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clicks_link_id_fkey"
            columns: ["link_id"]
            referencedRelation: "links"
            referencedColumns: ["id"]
          }
        ]
      }
      links: {
        Row: {
          created_at: string
          id: number
          key: string
          long_url: string | null
          total_clicks: number | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          key: string
          long_url?: string | null
          total_clicks?: number | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          key?: string
          long_url?: string | null
          total_clicks?: number | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
