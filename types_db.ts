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
      movies: {
        Row: {
          created_at: string
          description: string | null
          duration: string | null
          genre: string | null
          id: number
          thumbnail_url: string | null
          title: string | null
          video_url: string | null
          year: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          duration?: string | null
          genre?: string | null
          id?: number
          thumbnail_url?: string | null
          title?: string | null
          video_url?: string | null
          year?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          duration?: string | null
          genre?: string | null
          id?: number
          thumbnail_url?: string | null
          title?: string | null
          video_url?: string | null
          year?: string | null
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
